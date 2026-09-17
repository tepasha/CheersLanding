import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { SafetySection } from './components/SafetySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { WebAppModal } from './components/WebAppModal';
import { DownloadModal } from './components/DownloadModal';
import { LegalModal } from './components/LegalModal';
import { TestLinkModal } from './components/TestLinkModal';

export default function App() {
  const [webAppModalOpen, setWebAppModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [testLinkModalOpen, setTestLinkModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState<string | undefined>();
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  const handleOpenDownload = (platform?: string) => {
    setDownloadPlatform(platform);
    setDownloadModalOpen(true);
  };

  const handleOpenPrivacy = () => {
    setLegalModalState({ isOpen: true, type: 'privacy' });
  };

  const handleOpenTerms = () => {
    setLegalModalState({ isOpen: true, type: 'terms' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenWebApp={() => setWebAppModalOpen(true)}
        onOpenDownload={() => handleOpenDownload()}
        onOpenTestLink={() => setTestLinkModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section with Interactive Geo-Radar Phone Mockup */}
        <Hero
          onOpenWebApp={() => setWebAppModalOpen(true)}
          onOpenDownload={handleOpenDownload}
          onOpenTestLink={() => setTestLinkModalOpen(true)}
        />

        {/* 3. How It Works (3 Steps with Radius Slider & Drink Vibe Sandbox) */}
        <HowItWorks />

        {/* 4. Interactive Feature Showcase («Дзинь!», Toast Generator, «Тут і зараз») */}
        <FeaturesShowcase />

        {/* 5. Safety & Trust (Verification, Public Venues, Fuzzy Location, Moderation) */}
        <SafetySection />

        {/* 6. Real User Stories & Testimonials */}
        <ReviewsSection />

        {/* 7. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 8. Conversion Booster Call-to-Action Banner */}
        <CtaBanner
          onOpenWebApp={() => setWebAppModalOpen(true)}
          onOpenDownload={handleOpenDownload}
        />
      </main>

      {/* 9. Footer */}
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
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />

      <TestLinkModal
        isOpen={testLinkModalOpen}
        onClose={() => setTestLinkModalOpen(false)}
      />

    </div>
  );
}
