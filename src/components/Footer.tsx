import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101828] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Title */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-500">
              Mumbai, India · B.Sc. Computer Science Graduate (GPA 8.64)
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Expertise & Disciplines
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Client Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Marketing Methodology
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Tool Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#2563EB]" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  linkedin.com/in/lakshminerkar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with modern web standards and verified portfolio credentials.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded hover:bg-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
