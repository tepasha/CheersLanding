import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationSchema, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  detectedLocation: string | null;
  isDetecting: boolean;
  isManuallySelected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Ukraine approximate geographical bounding box
const isInsideUkraine = (lat: number, lon: number): boolean => {
  return lat >= 44.0 && lat <= 52.6 && lon >= 22.0 && lon <= 40.5;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default strictly to 'en' unless Ukrainian location is determined or user saved 'uk'
  const [language, setLanguageState] = useState<Language>('en');
  const [detectedLocation, setDetectedLocation] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState<boolean>(true);
  const [isManuallySelected, setIsManuallySelected] = useState<boolean>(false);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsManuallySelected(true);
    try {
      localStorage.setItem('budmo_lang', lang);
    } catch {
      // ignore storage error in restricted iframes
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    // 1. Check if user already manually selected language
    let savedLang: string | null = null;
    try {
      savedLang = localStorage.getItem('budmo_lang');
    } catch {
      savedLang = null;
    }

    if (savedLang === 'uk' || savedLang === 'en') {
      setLanguageState(savedLang as Language);
      setIsManuallySelected(true);
      setIsDetecting(false);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLang;
      }
      return;
    }

    // 2. Otherwise default to 'en' and attempt geolocation detection
    setLanguageState('en');
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
    }

    let isSubscribed = true;

    const detectLocation = async () => {
      let resolvedCountry: string | null = null;
      let isUkraine = false;

      // Method A: Check device coordinates via HTML5 Geolocation API
      if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
        try {
          const coords = await new Promise<GeolocationCoordinates | null>((resolve) => {
            const timer = setTimeout(() => resolve(null), 2500);
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                clearTimeout(timer);
                resolve(pos.coords);
              },
              () => {
                clearTimeout(timer);
                resolve(null);
              },
              { timeout: 2500, maximumAge: 60000 }
            );
          });

          if (coords && isSubscribed) {
            if (isInsideUkraine(coords.latitude, coords.longitude)) {
              isUkraine = true;
              resolvedCountry = 'UA';
            }
          }
        } catch {
          // Geolocation not available or denied
        }
      }

      // Method B: If GPS didn't pinpoint Ukraine, check fast IP-based geolocation
      if (!isUkraine && isSubscribed) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);
          const res = await fetch('https://ipapi.co/json/', {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            if (data && data.country_code) {
              resolvedCountry = data.country_code;
              if (data.country_code === 'UA' || data.country_name === 'Ukraine') {
                isUkraine = true;
              }
            }
          }
        } catch {
          // Network or timeout
        }
      }

      // Method C: Timezone heuristic if still unknown
      if (!resolvedCountry && isSubscribed) {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (['Europe/Kyiv', 'Europe/Kiev', 'Europe/Uzhgorod', 'Europe/Zaporozhye'].includes(tz)) {
            resolvedCountry = 'UA';
            isUkraine = true;
          }
        } catch {
          // Ignore
        }
      }

      if (!isSubscribed) return;

      if (isUkraine) {
        setLanguageState('uk');
        setDetectedLocation('UA (Ukraine)');
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'uk';
        }
      } else {
        // Geolocation is absent, denied, or outside Ukraine -> strictly English
        setLanguageState('en');
        setDetectedLocation(resolvedCountry ? `${resolvedCountry} (Global)` : 'Unknown (Default: EN)');
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'en';
        }
      }

      setIsDetecting(false);
    };

    detectLocation();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    detectedLocation,
    isDetecting,
    isManuallySelected,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
