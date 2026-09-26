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
  inDevelopment: {
    badge: string;
    title: string;
    titleOops: string;
    titleInDev: string;
    titleSupport: string;
    desc: string;
    supportBtn: string;
    supportDevPlatform: string;
    backHomeBtn: string;
    openWebAppBtn: string;
    chosenStoreGoogle: string;
    chosenStoreApple: string;
    chosenStoreGeneric: string;
    whySupportTitle: string;
    whySupportDesc: string;
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
      webApp: 'Web App',
      downloadApp: 'Завантажити',
      onlineBadge: 'Онлайн поруч з тобою',
    },
    hero: {
      headlinePart1: 'Знайди компанію на вечір',
      headlineHighlight: 'за 2 хвилини',
      headlinePart2: 'у своєму районі',
      subtitle: 'Від ароматної кави до крафтового пива. Реальні люди поруч, спільні смаки та щирі тости наживо без нескінченних переписок.',
      tryWebBtn: 'Встановити',
      downloadBtn: 'Завантажити додаток',
      radarTitle: 'Радар поруч',
      filterAll: 'Всі',
      filterBeer: 'Крафт',
      filterCoffee: 'Кава',
      filterWine: 'Вино',
      toastDefaultStatus: 'людей поруч готові випити',
      toastCountSuffix: 'тостів',
      toastBtnDefault: 'Чокнемось «Дзинь!» з обраним 🍻',
      toastBtnPrompt: 'Натисни «Дзинь!» для тесту',
      toastBtnSuccess: 'Дзинь! +1 тост поруч',
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
      step2Desc: 'Побачив когось поруч? Надішли швидкий тост-запрошення в один дотик.',
      step3Title: 'Зустрічайтесь у перевіреному закладі',
      step3Desc: 'Безпечні зустрічі виключно у публічних закладах.',
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
      feature1Desc: 'Жодних незручних «привіт, як справи?». Надішли віртуальний звук цокання келихів й почни спілкування.',
      feature2Title: 'Генератор тостів та тем для розмови',
      feature2Desc: 'Забув, з чого почати? Вбудований AI згенерує влучний український тост або цікаву тему для обговорення.',
      feature3Title: 'Режим «Тут і зараз»',
      feature3Desc: 'Увімкни статус на 2 години, коли сидиш за столиком сам і відкритий до нових знайомств поруч.',
      feature4Title: 'Партнерські заклади та бонуси',
      feature4Desc: 'Понад 120 перевірених пабів і кавʼярень дарують частування першим спільним гостям.',
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
      subtitle: '«Будьмо!» побудовано за найвищими стандартами приватності.\nЖодних домашніх адрес чи підозрілих локацій.',
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
      pillar3Desc: 'Ніхто і ніколи не бачить номер твоєї квартири чи точний підʼїзд. Радар показує лише приблизний радіус (наприклад: «Поруч, ~50м»).',
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
      q2: 'Ніякої тривоги — тільки розумна обачність.',
      a2: 'Перша зустріч має приносити задоволення, а не змушувати хвилюватися. Щоб ви почувалися в абсолютній безпеці, ми обираємо людні та затишні заклади, приховуємо точні геодані та цілодобово стежимо за порядком. Прості правила безпеки працюють на тлі, доки ви просто насолоджуєтеся спілкуванням.',
      q3: 'Чи додаток безкоштовний?',
      a3: 'Додаток є безкоштовним. Ви можете підтримати розробника за своїм бажанням.',
      q4: 'Як підключити свій заклад або кавʼярню?',
      a4: 'Всі заклади додаються через Google Maps.',
      q5: 'Чи працює сервіс без встановлення додатку?',
      a5: 'Так, у нас є повнофункціональна веб-версія (PWA), яка відкривається прямо у браузері телефону або компʼютера без завантаження з маркету.',
    },
    cta: {
      badge: 'Почни вечір яскраво',
      title: 'Готовий до нових знайомств уже сьогодні?',
      subtitle: 'Відкрий додаток, обери напій і знаходь однодумців за лічені хвилини.',
      webAppBtn: 'Встановити',
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
      subtitle: 'Завантажуйте виключно через офіційні магазини додатків\nApple App Store та Google Play.',
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
    inDevelopment: {
      badge: 'Скоро у маркетах',
      title: 'Oooops, поки що в розробці але ви можете підтримати розробника',
      titleOops: 'Oooops',
      titleInDev: 'поки що в розробці',
      titleSupport: 'ви можете підтримати розробника',
      desc: 'Мобільні додатки для Google Play та Apple App Store перебувають на етапі активної розробки та підготовки до релізу. А поки що ви можете користуватися нашою повноцінною Web-версією без встановлення!',
      supportBtn: 'Підтримати розробника',
      supportDevPlatform: 'через Donatello',
      backHomeBtn: 'Повернутися на головну',
      openWebAppBtn: 'Відкрити Web App',
      chosenStoreGoogle: 'Google Play Store (Android)',
      chosenStoreApple: 'Apple App Store (iOS)',
      chosenStoreGeneric: 'Офіційні маркети додатків',
      whySupportTitle: 'На що йде підтримка?',
      whySupportDesc: 'Оплата акаунтів розробника Apple Developer & Google Play Console, хмарна база даних та кава для автора проєкту.',
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
      webApp: 'Web App',
      downloadApp: 'Download',
      onlineBadge: 'Live near you',
    },
    hero: {
      headlinePart1: 'Find companions for tonight',
      headlineHighlight: 'in 2 minutes',
      headlinePart2: 'in your neighborhood',
      subtitle: 'From specialty coffee to craft beer around the corner. Real people nearby, shared vibes, and genuine live cheers without endless texting.',
      tryWebBtn: 'Install',
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
      step2Desc: 'Spotted someone nearby? Send an instant invitation with a single tap.',
      step3Title: 'Meet up at a verified public venue',
      step3Desc: 'Safe meetups exclusively in public venues.',
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
      feature1Desc: 'Skip awkward "Hey, what\'s up?" starters. Send a cheerful glass clink sound and start chatting.',
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
      subtitle: 'Budmo is engineered under strict privacy standards.\nZero private home addresses or isolated locations.',
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
      pillar3Desc: 'No one ever sees your exact building or apartment number. The radar only displays an approximate neighborhood zone (e.g. "~50m away").',
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
      q2: 'No anxiety — just sensible precautions.',
      a2: 'A first meetup should bring joy, not stress. To keep you completely safe, we prioritize lively and cozy public venues, conceal exact location coordinates, and monitor safety round the clock. Seamless safety rules work in the background while you enjoy great conversation.',
      q3: 'Is the app free to use?',
      a3: 'The app is completely free. You can support the developer voluntarily if you wish.',
      q4: 'How can a venue or coffee shop partner with Budmo?',
      a4: 'All venues are added directly via Google Maps.',
      q5: 'Can I use it without installing an app?',
      a5: 'Yes, we provide a full Progressive Web App (PWA) that runs seamlessly in any mobile or desktop browser without requiring an app store download.',
    },
    cta: {
      badge: 'Kick Off Your Evening',
      title: 'Ready for Great Company Tonight?',
      subtitle: 'Open the app, pick your favorite drink, and find friendly people nearby in minutes.',
      webAppBtn: 'Install',
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
      subtitle: 'Download exclusively via official app stores\nApple App Store & Google Play.',
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
    inDevelopment: {
      badge: 'Coming Soon to App Stores',
      title: 'Oooops, still in development but you can support the developer',
      titleOops: 'Oooops',
      titleInDev: 'still in development',
      titleSupport: 'you can support the developer',
      desc: 'Mobile apps for Google Play and Apple App Store are actively in development. In the meantime, you can enjoy our full-featured Web App directly in your browser!',
      supportBtn: 'Підтримати розробника',
      supportDevPlatform: 'via Donatello',
      backHomeBtn: 'Back to Home',
      openWebAppBtn: 'Open Web App',
      chosenStoreGoogle: 'Google Play Store (Android)',
      chosenStoreApple: 'Apple App Store (iOS)',
      chosenStoreGeneric: 'Official App Stores',
      whySupportTitle: 'How your support helps?',
      whySupportDesc: 'Covers Apple Developer & Google Play Console licenses, cloud hosting, and coffee for the builder.',
    },
  },
};
