import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StrategyLabSection } from './components/StrategyLabSection';
import { ProcessSection } from './components/ProcessSection';
import { ToolsSection } from './components/ToolsSection';
import { EducationSection } from './components/EducationSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterSnapshotModal } from './components/RecruiterSnapshotModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSnapshotOpen, setIsSnapshotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-[#2563EB] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSnapshot={() => setIsSnapshotOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSnapshot={() => setIsSnapshotOpen(true)}
        />

        {/* Animated Marquee Ticker */}
        <MarqueeTicker />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: My Expertise */}
        <ExpertiseSection />

        {/* Section 4: Professional Experience */}
        <ExperienceSection />

        {/* Section 5: Featured Projects */}
        <ProjectsSection />

        {/* Interactive Strategic Simulation Sandbox */}
        <StrategyLabSection />

        {/* Section 6: Process */}
        <ProcessSection />

        {/* Section 7: Tools I Work With */}
        <ToolsSection />

        {/* Section 8: Education & Certification */}
        <EducationSection />

        {/* Section 9: Why Work With Me */}
        <WhyWorkWithMeSection />

        {/* Section 10: Contact & Hiring CTA */}
        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSnapshot={() => setIsSnapshotOpen(true)}
        />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <RecruiterSnapshotModal
        isOpen={isSnapshotOpen}
        onClose={() => setIsSnapshotOpen(false)}
        onOpenResume={() => {
          setIsSnapshotOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}
