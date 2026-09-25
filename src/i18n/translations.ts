export type Language = 'uk' | 'en';

export interface TranslationSchema {
  nav: {
    brandTitle: string;
    brandSubtitle: string;
    howItWorks: string;
    features: string;
    safety: string;
    toasts: string;
    faq: string;
    testLink: string;
    webApp: string;
    downloadApp: string;
    onlineBadge: string;
  };
  hero: {
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subtitle: string;
    tryWebBtn: string;
    downloadBtn: string;
    radarTitle: string;
    filterAll: string;
    filterBeer: string;
    filterCoffee: string;
    filterWine: string;
    toastDefaultStatus: string;
    toastCountSuffix: string;
    toastBtnDefault: string;
    toastBtnPrompt: string;
    toastBtnSuccess: string;
    toastHelper: string;
    people: {
      orestStatus: string;
      orestQuote: string;
      olenaStatus: string;
      olenaQuote: string;
      solomiaStatus: string;
      solomiaQuote: string;
      dmytroStatus: string;
      dmytroQuote: string;
    };
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    radiusTitle: string;
    radiusLabel: string;
    radiusPeopleNearby: string;
    drinkVibeTitle: string;
    drinkTypes: {
      beer: string;
      coffee: string;
      wine: string;
      tea: string;
    };
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    toastGenCategoryBeer: string;
    toastGenCategoryWine: string;
    toastGenCategoryCoffee: string;
    toastGenCategoryFun: string;
    toastGenButton: string;
    toastGenCopied: string;
  };
  safety: {
    badge: string;
    title: string;
    subtitle: string;
    pillar1Tag: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar1Point1: string;
    pillar1Point2: string;
    pillar2Tag: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar2Point1: string;
    pillar2Point2: string;
    pillar3Tag: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar3Note: string;
    pillar4Tag: string;
    pillar4Title: string;
    pillar4Desc: string;
    pillar4Point1: string;
    pillar4Point2: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    webAppBtn: string;
    downloadBtn: string;
    guarantee: string;
  };
  footer: {
    tagline: string;
    desc: string;
    navigationHeader: string;
    safetyHeader: string;
    privacy: string;
    terms: string;
    manifesto: string;
    quickLaunchHeader: string;
    pwaBtn: string;
    backToTop: string;
    copyright: string;
    allRightsReserved: string;
    madeIn: string;
    techSupport: string;
    techSupportDesc: string;
    supportDev: string;
    supportDevSubtitle: string;
  };
  downloadModal: {
    title: string;
    subtitle: string;
    quickAccessBadge: string;
    scanQrTitle: string;
    scanQrDesc: string;
    officialStoreBadge: string;
    appleTitle: string;
    googleTitle: string;
    downloadAction: string;
    securityNote: string;
  };
  webAppModal: {
    title: string;
    subtitle: string;
    liveBadge: string;
    welcomeMsg: string;
    activeNearYou: string;
    startExploring: string;
    closeBtn: string;
    orDownload: string;
    openInNewTab: string;
  };
  testLinkModal: {
    title: string;
    subtitle: string;
    directUrlLabel: string;
    copyBtn: string;
    copiedBtn: string;
    openBtn: string;
    scanQrLabel: string;
    scanQrDesc: string;
    deviceOptimized: string;
  };
  legalModal: {
    privacyTitle: string;
    termsTitle: string;
    closeBtn: string;
    lastUpdated: string;
  };
  geoBadge: {
    uaDetected: string;
    defaultEnDetected: string;
    switchLangTooltip: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  uk: {
    nav: {
      brandTitle: 'Будьмо!',
      brandSubtitle: 'Компанія поруч',
      howItWorks: 'Як це працює',
      features: 'Фічі',
      safety: 'Безпека',
      toasts: 'Тости',
      faq: 'FAQ',
      testLink: 'Тестове посилання',
      webApp: 'Web App',
      downloadApp: 'Завантажити',
      onlineBadge: 'Онлайн у твоєму місті',
    },
    hero: {
      headlinePart1: 'Знайди компанію на вечір',
      headlineHighlight: 'за 2 хвилини',
      headlinePart2: 'у своєму районі',
      subtitle: 'Від ароматної кави на Подолі до крафтового пива біля дому. Реальні люди поруч, спільні смаки та щирі тости наживо без нескінченних переписок.',
      tryWebBtn: 'Спробувати Web-версію',
      downloadBtn: 'Завантажити додаток',
      radarTitle: 'Радар Подолу',
      filterAll: 'Всі',
      filterBeer: 'Крафт',
      filterCoffee: 'Кава',
      filterWine: 'Вино',
      toastDefaultStatus: 'людей поруч готові випити',
      toastCountSuffix: 'тостів',
      toastBtnDefault: 'Чокнемось «Дзинь!» з обраним 🍻',
      toastBtnPrompt: 'Натисни «Дзинь!» для тесту',
      toastBtnSuccess: 'Дзинь! +1 тост на Подолі',
      toastHelper: 'Клікни на піни на карті або кнопку тосту для звуку та ефекту',
      people: {
        orestStatus: 'Орест • Крафтова IPA (300 м)',
        orestQuote: '«Шукаю компанію на IPA у Varvar»',
        olenaStatus: 'Олена • Спешелті кава (150 м)',
        olenaQuote: '«Пʼю спешелті лате, сумую»',
        solomiaStatus: 'Соломія • Келих вина (220 м)',
        solomiaQuote: '«Келих вина на терасі»',
        dmytroStatus: 'Дмитро • Коктейлі (380 м)',
        dmytroQuote: '«Затишний бар, хто поруч?»',
      },
    },
    howItWorks: {
      badge: 'Просто як «Раз, Два, Три»',
      title: 'Як працює «Будьмо!»',
      subtitle: 'Жодних днів очікувань чи незручних знайомств. Лише реальні плани тут і зараз.',
      step1Title: 'Увімкни радар і обери настрій',
      step1Desc: 'Вкажи бажаний радіус (від 300м до 3км) і що саме плануєш: келих темного елю, фільтр-каву чи спокійну розмову.',
      step2Title: 'Натисни «Дзинь!» тим, хто поруч',
      step2Desc: 'Побачив когось у улюбленій кавʼярні чи барі на сусідній вулиці? Надішли швидкий тост-запрошення в один дотик.',
      step3Title: 'Зустрічайтесь у перевіреному закладі',
      step3Desc: 'Безпечні зустрічі виключно у публічних закладах міста. Покажи екран бармену та отримай бонус за знайомство!',
      radiusTitle: 'Налаштуй радіус пошуку:',
      radiusLabel: 'Радіус:',
      radiusPeopleNearby: 'людей готові зустрітися',
      drinkVibeTitle: 'Обери настрій та напій:',
      drinkTypes: {
        beer: 'Крафтове пиво',
        coffee: 'Спешелті кава',
        wine: 'Келих вина',
        tea: 'Чай та розмови',
      },
    },
    features: {
      badge: 'Унікальні фічі',
      title: 'Створено для живого спілкування',
      subtitle: 'Ми замінили нескінченний свайпінг на атмосферу справжнього бару та затишної кавʼярні.',
      feature1Title: '«Дзинь!» замість нудного чату',
      feature1Desc: 'Жодних незручних «привіт, як справи?». Надішли віртуальний звук цокання келихів: якщо вам по дорозі — заклад запропонує спільний столик.',
      feature2Title: 'Генератор тостів та тем для розмови',
      feature2Desc: 'Забув, з чого почати? Вбудований AI згенерує влучний український тост або цікаву тему для обговорення.',
      feature3Title: 'Режим «Тут і зараз»',
      feature3Desc: 'Увімкни статус на 2 години, коли сидиш за столиком сам і відкритий до нових знайомств поруч.',
      feature4Title: 'Партнерські заклади та бонуси',
      feature4Desc: 'Понад 120 перевірених пабів і кавʼярень Києва та Львова дарують частування першим спільним гостям.',
      toastGenCategoryBeer: '🍺 До пива',
      toastGenCategoryWine: '🍷 До вина',
      toastGenCategoryCoffee: '☕ До кави',
      toastGenCategoryFun: '🎉 Веселі',
      toastGenButton: 'Згенерувати інший тост',
      toastGenCopied: 'Скопійовано!',
    },
    safety: {
      badge: 'Безпека понад усе',
      title: 'Твій комфорт і спокій захищені на 100%',
      subtitle: '«Будьмо!» побудовано за найвищими стандартами приватності. Жодних домашніх адрес чи підозрілих локацій.',
      pillar1Tag: 'Дія / Google / Telegram',
      pillar1Title: 'Багаторівнева верифікація акаунтів',
      pillar1Desc: 'Ми відсікаємо анонімних ботів і шахраїв ще на етапі реєстрації. Можливість підтвердити особу через безпечний шеринг або перевірений Google-профіль.',
      pillar1Point1: 'Відсутність фейкових акаунтів та порожніх профілів',
      pillar1Point2: 'Бейдж «Верифіковано» біля фото кожного реального учасника',
      pillar2Tag: '100% публічність',
      pillar2Title: 'Зустрічі тільки в публічних закладах',
      pillar2Desc: 'Правило системи «Будьмо!»: додаток пропонує зустрічатися виключно у партнерських пабах, кавʼярнях чи ресторанах, де завжди є персонал і світло.',
      pillar2Point1: 'Ніяких приватних квартир чи безлюдних парків',
      pillar2Point2: 'Співробітники закладів знають програму «Будьмо!» та готові допомогти',
      pillar3Tag: 'Fuzzy Geo Guard',
      pillar3Title: 'Абсолютна приватність геопозиції',
      pillar3Desc: 'Ніхто і ніколи не бачить номер твоєї квартири чи точний підʼїзд. Радар показує лише приблизний радіус (наприклад: «Поділ, ~400м»).',
      pillar3Note: 'Твоя точна точка GPS обробляється зашифровано на пристрої та не передається третім особам.',
      pillar4Tag: '1-Click Block & SOS',
      pillar4Title: 'Рейтинг ввічливості та миттєва модерація',
      pillar4Desc: 'Якщо співрозмовник поводиться неадекватно або порушує особисті кордони — один клік миттєво блокує контакт та сповіщає модератора.',
      pillar4Point1: 'Миттєве блокування небажаних користувачів назавжди',
      pillar4Point2: 'Рейтинг довіри та відгуки тільки від реальних співрозмовників',
    },
    faq: {
      badge: 'Відповіді на запитання',
      title: 'Часті запитання (FAQ)',
      subtitle: 'Все, що потрібно знати перед тим, як зробити свій перший «Дзинь!»',
      q1: 'Чи це додаток для побачень (Dating)?',
      a1: '«Будьмо!» — це насамперед сервіс для знаходження компанії за інтересами та настроєм (випити кави, продегустувати крафт, обговорити роботу або зіграти в настілки). Без незручного романтичного тиску.',
      q2: 'Чи безпечно зустрічатися з незнайомцями?',
      a2: 'Так. Усі зустрічі призначаються виключно в публічних закладах (партнерських пабах, кавʼярнях, ресторанах). Ми застосовуємо багаторівневу верифікацію та розмиття точної геолокації.',
      q3: 'Чи додаток безкоштовний?',
      a3: 'Базовий функціонал (радар, надсилання «Дзинь!», пошук компанії поруч) є повністю безкоштовним для користувачів.',
      q4: 'Як підключити свій заклад або кавʼярню?',
      a4: 'Заклади можуть стати офіційними точками зустрічей «Будьмо!», залучаючи лояльних гостей у години низького завантаження. Напишіть нам через сторінку партнерів.',
      q5: 'Чи працює сервіс без встановлення додатку?',
      a5: 'Так, у нас є повнофункціональна веб-версія (PWA), яка відкривається прямо у браузері телефону або компʼютера без завантаження з маркету.',
    },
    cta: {
      badge: 'Почни вечір яскраво',
      title: 'Готовий до нових знайомств уже сьогодні?',
      subtitle: 'Відкрий додаток, обери напій і знаходь однодумців за лічені хвилини.',
      webAppBtn: 'Відкрити Web-версію',
      downloadBtn: 'Завантажити додаток',
      guarantee: '100% безкоштовно • Без спаму • Тільки реальні люди поруч',
    },
    footer: {
      tagline: 'Компанія поруч',
      desc: 'Український сервіс швидкого та безпечного пошуку компанії на вечір біля дому, у крафтових пабах та затишних кавʼярнях за улюбленими напоями та інтересами.',
      navigationHeader: 'Навігація',
      safetyHeader: 'Безпека та правила',
      privacy: 'Політика конфіденційності (Privacy)',
      terms: 'Умови використання (Terms)',
      manifesto: 'Маніфест ввічливих зустрічей',
      quickLaunchHeader: 'Швидкий запуск',
      pwaBtn: 'Web-версія PWA',
      backToTop: 'Нагору',
      copyright: '«Будьмо!» (Budmo App)',
      allRightsReserved: 'Всі права захищено.',
      madeIn: 'Зроблено з душею в Україні',
      techSupport: 'Тех підтримка',
      techSupportDesc: 'Зворотний звʼязок та допомога',
      supportDev: 'Підтримати розробника',
      supportDevSubtitle: 'Добровільний донат автору проекту',
    },
    downloadModal: {
      title: 'Завантажити «Будьмо!»',
      subtitle: 'Завантажуйте виключно через офіційні магазини додатків Apple App Store та Google Play.',
      quickAccessBadge: 'Швидкий перехід',
      scanQrTitle: 'Наведи камеру смартфона',
      scanQrDesc: 'Відкриває офіційну сторінку завантаження у відповідному магазині вашого смартфона.',
      officialStoreBadge: 'Офіційний магазин',
      appleTitle: 'Apple App Store (iOS)',
      googleTitle: 'Google Play Store (Android)',
      downloadAction: 'Завантажити',
      securityNote: 'Перевірено системами безпеки Apple App Store та Google Play Protect',
    },
    webAppModal: {
      title: 'Web-версія «Будьмо!»',
      subtitle: 'Миттєвий запуск без завантаження прямо у твоєму браузері.',
      liveBadge: 'Демо-режим активний',
      welcomeMsg: 'Привіт! Радар локацій активовано. Досліджуй заклади та зустрічай однодумців.',
      activeNearYou: 'Активних людей навколо',
      startExploring: 'Почати спілкування',
      closeBtn: 'Закрити',
      orDownload: 'Або завантажте рідний додаток для вашого смартфона',
      openInNewTab: 'Відкрити на весь екран',
    },
    testLinkModal: {
      title: 'Тестове посилання',
      subtitle: 'Використовуй це пряме посилання для тестування веб-версії додатку на будь-якому смартфоні чи планшеті.',
      directUrlLabel: 'Пряма адреса додатку:',
      copyBtn: 'Копіювати лінк',
      copiedBtn: 'Скопійовано ✓',
      openBtn: 'Відкрити в новій вкладці',
      scanQrLabel: 'Відскануй QR-код телефоном',
      scanQrDesc: 'Відкрий камеру iPhone чи Android для миттєвого переходу.',
      deviceOptimized: 'Оптимізовано для Safari iOS, Google Chrome та Android WebView',
    },
    legalModal: {
      privacyTitle: 'Політика конфіденційності',
      termsTitle: 'Умови надання послуг',
      closeBtn: 'Зрозуміло',
      lastUpdated: 'Останнє оновлення: 2026 рік',
    },
    geoBadge: {
      uaDetected: 'Визначено локацію: Україна 🇺🇦 (UA)',
      defaultEnDetected: 'Location outside UA or unknown — English (EN) default',
      switchLangTooltip: 'Змінити мову / Switch language',
    },
  },

  en: {
    nav: {
      brandTitle: 'Budmo!',
      brandSubtitle: 'Friends Nearby',
      howItWorks: 'How It Works',
      features: 'Features',
      safety: 'Safety',
      toasts: 'Toasts',
      faq: 'FAQ',
      testLink: 'Test Link',
      webApp: 'Web App',
      downloadApp: 'Download',
      onlineBadge: 'Online in your city',
    },
    hero: {
      headlinePart1: 'Find companions for tonight',
      headlineHighlight: 'in 2 minutes',
      headlinePart2: 'in your neighborhood',
      subtitle: 'From specialty coffee to craft beer around the corner. Real people nearby, shared vibes, and genuine live cheers without endless texting.',
      tryWebBtn: 'Launch Web Version',
      downloadBtn: 'Download App',
      radarTitle: 'Live Radar',
      filterAll: 'All',
      filterBeer: 'Craft',
      filterCoffee: 'Coffee',
      filterWine: 'Wine',
      toastDefaultStatus: 'people nearby ready to hang out',
      toastCountSuffix: 'cheers',
      toastBtnDefault: 'Toast "Cheers!" with selected 🍻',
      toastBtnPrompt: 'Tap "Cheers!" to test',
      toastBtnSuccess: 'Clink! +1 toast registered',
      toastHelper: 'Click map pins or the cheers button for sound and confetti',
      people: {
        orestStatus: 'Orest • Craft IPA (300 m)',
        orestQuote: '«Looking for an IPA companion at Varvar»',
        olenaStatus: 'Olena • Specialty Coffee (150 m)',
        olenaQuote: '«Drinking specialty latte, wishing for company»',
        solomiaStatus: 'Solomia • Glass of Wine (220 m)',
        solomiaQuote: '«Glass of wine on the terrace»',
        dmytroStatus: 'Dmytro • Cocktails (380 m)',
        dmytroQuote: '«Cozy cocktail bar, who is around?»',
      },
    },
    howItWorks: {
      badge: 'As simple as 1, 2, 3',
      title: 'How Budmo Works',
      subtitle: 'No waiting days or awkward dates. Just spontaneous, delightful plans right here, right now.',
      step1Title: 'Turn on radar & pick your vibe',
      step1Desc: 'Set your preferred radius (300m to 3km) and choose what you want: craft ale, filter coffee, or a cozy evening chat.',
      step2Title: 'Send a "Clink!" to people nearby',
      step2Desc: 'Spotted someone at a favorite café or bar down the street? Send an instant invitation with a single tap.',
      step3Title: 'Meet up at a verified public venue',
      step3Desc: 'Meet safely in partner coffee shops and bars. Show your app screen to the staff and get a welcome treat!',
      radiusTitle: 'Adjust your search radius:',
      radiusLabel: 'Radius:',
      radiusPeopleNearby: 'people ready to meet',
      drinkVibeTitle: 'Pick your mood & drink:',
      drinkTypes: {
        beer: 'Craft Beer',
        coffee: 'Specialty Coffee',
        wine: 'Glass of Wine',
        tea: 'Tea & Cozy Talk',
      },
    },
    features: {
      badge: 'Unique Features',
      title: 'Crafted for Real Human Connection',
      subtitle: 'We replaced endless mindless swiping with the authentic warmth of neighborhood bars and cozy coffee shops.',
      feature1Title: '"Clink!" Instead of Boring Chat',
      feature1Desc: 'Skip awkward "Hey, what\'s up?" starters. Send a cheerful glass clink sound: if both are interested, the venue offers a table.',
      feature2Title: 'AI Toast & Icebreaker Generator',
      feature2Desc: 'Not sure how to break the ice? The built-in generator crafts witty toasts and engaging topics to spark the conversation.',
      feature3Title: '"Here & Now" Mode',
      feature3Desc: 'Turn on the 2-hour status when you\'re sitting at a venue and open to welcoming company nearby.',
      feature4Title: 'Partner Venues & Perks',
      feature4Desc: 'Over 120 verified bars, taprooms, and cafés offer welcome perks and specials to people meeting up through Budmo.',
      toastGenCategoryBeer: '🍺 For Beer',
      toastGenCategoryWine: '🍷 For Wine',
      toastGenCategoryCoffee: '☕ For Coffee',
      toastGenCategoryFun: '🎉 Fun & Lively',
      toastGenButton: 'Generate Another Toast',
      toastGenCopied: 'Copied!',
    },
    safety: {
      badge: 'Safety First',
      title: 'Your Comfort & Peace of Mind 100% Protected',
      subtitle: 'Budmo is engineered under strict privacy standards. Zero private home addresses or isolated locations.',
      pillar1Tag: 'Verified Profiles',
      pillar1Title: 'Multi-Level Identity Verification',
      pillar1Desc: 'We filter out bots and fraudulent accounts during sign-up. Verified badges guarantee you are connecting with real individuals.',
      pillar1Point1: 'Zero fake profiles or bot accounts',
      pillar1Point2: '"Verified" badge next to each real member\'s photo',
      pillar2Tag: '100% Public Venues',
      pillar2Title: 'Meetups Exclusively in Public Places',
      pillar2Desc: 'Our core principle: Budmo recommends meeting exclusively in verified partner bars, cafes, and restaurants with staff and light.',
      pillar2Point1: 'No private apartments or secluded areas',
      pillar2Point2: 'Venue personnel know the Budmo community and are ready to assist',
      pillar3Tag: 'Fuzzy Geo Guard',
      pillar3Title: 'Strict Location Privacy',
      pillar3Desc: 'No one ever sees your exact building or apartment number. The radar only displays an approximate neighborhood zone (e.g. "~400m away").',
      pillar3Note: 'Your precise GPS coordinate is encrypted on your device and never exposed to other users or third parties.',
      pillar4Tag: '1-Click Block & SOS',
      pillar4Title: 'Courtesy Rating & Instant Moderation',
      pillar4Desc: 'If someone acts inappropriately or crosses boundaries, a single tap instantly blocks the contact and alerts our moderation team.',
      pillar4Point1: 'Instant, permanent blocking of unwanted users',
      pillar4Point2: 'Trust ratings and feedback derived solely from real encounters',
    },
    faq: {
      badge: 'Got Questions?',
      title: 'Frequently Asked Questions (FAQ)',
      subtitle: 'Everything you need to know before making your very first "Cheers!"',
      q1: 'Is this a dating app?',
      a1: 'Budmo is primarily a social discovery app to find friendly company based on shared drinks, hobbies, and neighborhood vibes (coffee, craft beer, board games, work chats) without dating pressure.',
      q2: 'Is it safe to meet strangers?',
      a2: 'Yes. All meetups take place strictly in verified public venues (partner pubs, cafés, restaurants). We enforce multi-level verification and approximate location obfuscation.',
      q3: 'Is the app free to use?',
      a3: 'Core features—including the live radar, sending "Clink!" toasts, and finding companions nearby—are 100% free for users.',
      q4: 'How can a venue or coffee shop partner with Budmo?',
      a4: 'Venues can become official Budmo meeting hubs, attracting loyal customers especially during off-peak hours. Reach out to our team to join.',
      q5: 'Can I use it without installing an app?',
      a5: 'Yes, we provide a full Progressive Web App (PWA) that runs seamlessly in any mobile or desktop browser without requiring an app store download.',
    },
    cta: {
      badge: 'Kick Off Your Evening',
      title: 'Ready for Great Company Tonight?',
      subtitle: 'Open the app, pick your favorite drink, and find friendly people nearby in minutes.',
      webAppBtn: 'Open Web App',
      downloadBtn: 'Download the App',
      guarantee: '100% Free • No Spam • Real Verified People Nearby',
    },
    footer: {
      tagline: 'Friends Nearby',
      desc: 'Social app for quick and secure discovery of friendly company in craft pubs and neighborhood coffee spots over great drinks and shared interests.',
      navigationHeader: 'Navigation',
      safetyHeader: 'Safety & Policies',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      manifesto: 'Courtesy & Respect Manifesto',
      quickLaunchHeader: 'Quick Launch',
      pwaBtn: 'Web PWA Version',
      backToTop: 'Back to Top',
      copyright: 'Budmo App',
      allRightsReserved: 'All rights reserved.',
      madeIn: 'Made with passion in Ukraine',
      techSupport: 'Tech support',
      techSupportDesc: 'Help & feedback',
      supportDev: 'Support the developer',
      supportDevSubtitle: 'Voluntary contribution to author',
    },
    downloadModal: {
      title: 'Download Budmo!',
      subtitle: 'Download exclusively via official app stores: Apple App Store & Google Play.',
      quickAccessBadge: 'Quick Access',
      scanQrTitle: 'Point your phone camera',
      scanQrDesc: 'Opens the official store page directly on your smartphone.',
      officialStoreBadge: 'Official Store',
      appleTitle: 'Apple App Store (iOS)',
      googleTitle: 'Google Play Store (Android)',
      downloadAction: 'Download',
      securityNote: 'Protected and verified by Apple App Store and Google Play Protect',
    },
    webAppModal: {
      title: 'Budmo! Web Version',
      subtitle: 'Instant launch right in your browser with zero installation.',
      liveBadge: 'Demo Mode Active',
      welcomeMsg: 'Hello! Live radar is active. Explore venues and discover friendly company nearby.',
      activeNearYou: 'Active people nearby',
      startExploring: 'Start Connecting',
      closeBtn: 'Close',
      orDownload: 'Or download the native mobile app for your smartphone',
      openInNewTab: 'Open Fullscreen',
    },
    testLinkModal: {
      title: 'Test Link',
      subtitle: 'Use this direct URL to test the web application on any smartphone or tablet.',
      directUrlLabel: 'Direct Application URL:',
      copyBtn: 'Copy Link',
      copiedBtn: 'Copied ✓',
      openBtn: 'Open in New Tab',
      scanQrLabel: 'Scan QR Code with Phone',
      scanQrDesc: 'Open your iPhone or Android camera to launch instantly.',
      deviceOptimized: 'Optimized for Safari iOS, Google Chrome, and Android WebView',
    },
    legalModal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
      closeBtn: 'Understood',
      lastUpdated: 'Last Updated: 2026',
    },
    geoBadge: {
      uaDetected: 'Location detected: Ukraine 🇺🇦 (UA)',
      defaultEnDetected: 'Location outside UA or unknown — English (EN) default',
      switchLangTooltip: 'Switch language / Змінити мову',
    },
  },
};
