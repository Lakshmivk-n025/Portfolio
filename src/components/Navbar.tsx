import React, { useState } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenSnapshot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenSnapshot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Strategy Lab', href: '#strategy-lab' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#101828] hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>Lakshmi Nerkar</span>
          <span className="hidden sm:inline-block text-xs font-medium text-slate-500 font-normal">
            · Digital Marketing Executive
          </span>
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#2563EB]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button + Recruiter Quick Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSnapshot}
            className="px-3 py-1.5 text-xs font-semibold text-[#2563EB] bg-[#EEF2FF] hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            title="View 30-Second Recruiter Summary"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Quick View</span>
          </button>
          <button
            onClick={onOpenResume}
            className="px-4 py-2 text-xs font-medium text-white bg-[#101828] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSnapshot}
            className="p-2 text-xs font-medium text-[#2563EB] bg-[#EEF2FF] rounded-lg"
            aria-label="Recruiter Summary"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#2563EB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSnapshot();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#2563EB] bg-[#EEF2FF] rounded-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>30-Second Recruiter Snapshot</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#101828] rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
