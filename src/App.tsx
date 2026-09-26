import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { SafetySection } from './components/SafetySection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { WebAppModal } from './components/WebAppModal';
import { DownloadModal } from './components/DownloadModal';
import { LegalModal } from './components/LegalModal';
import { InDevelopmentPage } from './components/InDevelopmentPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'in-development'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#in-development' || hash === '#under-development') {
        return 'in-development';
      }
    }
    return 'home';
  });

  const [selectedStore, setSelectedStore] = useState<'google' | 'apple' | null>(null);
  const [webAppModalOpen, setWebAppModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState<string | undefined>();
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#in-development' || hash === '#under-development') {
        setCurrentPage('in-development');
      } else if (!hash || hash === '#' || hash.startsWith('#how-it-works') || hash.startsWith('#features') || hash.startsWith('#safety') || hash.startsWith('#faq')) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenDownload = (platform?: string) => {
    setDownloadPlatform(platform);
    setDownloadModalOpen(true);
  };

  const handleSelectStore = (store: 'google' | 'apple') => {
    setSelectedStore(store);
    setDownloadModalOpen(false);
    setCurrentPage('in-development');
    window.location.hash = '#in-development';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    if (window.location.hash === '#in-development' || window.location.hash === '#under-development') {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrivacy = () => {
    setLegalModalState({ isOpen: true, type: 'privacy' });
  };

  const handleOpenTerms = () => {
    setLegalModalState({ isOpen: true, type: 'terms' });
  };

  if (currentPage === 'in-development') {
    return (
      <>
        <InDevelopmentPage
          selectedStore={selectedStore}
          onBackHome={handleBackHome}
          onOpenWebApp={() => setWebAppModalOpen(true)}
        />

        {/* Web App Modal */}
        <WebAppModal
          isOpen={webAppModalOpen}
          onClose={() => setWebAppModalOpen(false)}
          onOpenDownload={() => {
            setWebAppModalOpen(false);
            handleOpenDownload();
          }}
        />

        {/* Legal Modal */}
        <LegalModal
          isOpen={legalModalState.isOpen}
          type={legalModalState.type}
          onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenWebApp={() => setWebAppModalOpen(true)}
        onOpenDownload={() => handleOpenDownload()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section with Interactive Geo-Radar Phone Mockup */}
        <Hero
          onOpenWebApp={() => setWebAppModalOpen(true)}
          onOpenDownload={handleOpenDownload}
        />

        {/* 3. How It Works (3 Steps with Radius Slider & Drink Vibe Sandbox) */}
        <HowItWorks />

        {/* 4. Interactive Feature Showcase («Дзинь!», Toast Generator, «Тут і зараз») */}
        <FeaturesShowcase />

        {/* 5. Safety & Trust (Verification, Public Venues, Fuzzy Location, Moderation) */}
        <SafetySection />

        {/* 6. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 8. Conversion Booster Call-to-Action Banner */}
        <CtaBanner
          onOpenWebApp={() => setWebAppModalOpen(true)}
          onOpenDownload={handleOpenDownload}
        />
      </main>

      {/* Support & Developer Section (Above Footer) */}
      <SupportSection />

      {/* Footer */}
      <Footer
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
        onOpenWebApp={() => setWebAppModalOpen(true)}
      />

      {/* Interactive Modals */}
      <WebAppModal
        isOpen={webAppModalOpen}
        onClose={() => setWebAppModalOpen(false)}
        onOpenDownload={() => handleOpenDownload()}
      />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        defaultPlatform={downloadPlatform}
        onSelectStore={handleSelectStore}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
}
