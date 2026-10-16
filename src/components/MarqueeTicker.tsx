import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp, Globe, Search, Layers } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { label: 'Technical & On-Page SEO', icon: Search },
    { label: 'KRS Associates (Live Deployment)', icon: Globe },
    { label: 'Google Search Console Diagnostics', icon: TrendingUp },
    { label: 'Sagi Multimedia (Live Deployment)', icon: Globe },
    { label: 'Responsive WordPress & Elementor', icon: Layers },
    { label: 'OxyPro Labs (Live Deployment)', icon: Globe },
    { label: 'Google Ads & Meta Performance', icon: Sparkles },
    { label: 'GA4 Event Attribution & Reporting', icon: CheckCircle2 },
    { label: 'Computer Science Background (GPA 8.64)', icon: Sparkles },
    { label: 'Intent-Driven Keyword Silos', icon: Search },
  ];

  return (
    <div className="w-full bg-[#101828] text-white py-3.5 border-y border-slate-800 overflow-hidden relative select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#101828] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#101828] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 text-xs font-semibold tracking-wide">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors shrink-0"
            >
              <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{item.label}</span>
              <span aria-hidden="true" className="text-slate-700 ml-4">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
