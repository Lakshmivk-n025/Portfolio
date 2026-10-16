import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  BarChart3, 
  Globe, 
  Target, 
  Share2, 
  CheckCircle, 
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'marketing'>('all');

  const csTransfers = [
    {
      csConcept: 'DOM & Tree Architecture',
      marketingPower: 'Semantic Headings (H1-H4) & Clean Crawlability',
      detail: 'Search bots crawl hierarchical trees. Writing clean, unbloated HTML ensures instant understanding of page topics.',
    },
    {
      csConcept: 'Rendering & Network Budgets',
      marketingPower: 'Core Web Vitals & Fast Mobile LCP',
      detail: 'Compressing WebP assets and eliminating redundant CSS/JS scripts directly elevates organic rank and user dwell time.',
    },
    {
      csConcept: 'Algorithms & Information Retrieval',
      marketingPower: 'Search Intent & Semantic Keyword Clustering',
      detail: 'Mapping query embeddings to high-converting commercial landing pages instead of superficial keyword stuffing.',
    },
    {
      csConcept: 'Data Normalization & Event Logic',
      marketingPower: 'Google Analytics 4 Multi-Channel Attribution',
      detail: 'Setting custom event parameters and clean UTM naming conventions to track exact conversion touchpoints.',
    },
  ];

  const pillars = [
    {
      icon: Globe,
      title: 'Multi-Client Website Management',
      text: 'Practical day-to-day experience maintaining and designing live corporate websites like KRS Associates and OxyPro, ensuring uptime, consistent branding, and smooth user journeys.',
    },
    {
      icon: Search,
      title: 'SEO & Intent Keyword Research',
      text: 'Structuring content to match exact commercial and informational search queries, optimizing headings, meta tags, and internal link silos to drive steady organic visibility.',
    },
    {
      icon: Target,
      title: 'Paid Advertising & Audience Targeting',
      text: 'Creating targeted campaigns on Google Search, Display, YouTube, and Meta, focusing on intent-driven keywords, relevant ad copy, and disciplined budget allocation.',
    },
    {
      icon: Share2,
      title: 'Social Media Planning & Execution',
      text: 'Managing content calendars across LinkedIn, Instagram, and Facebook to foster authentic community engagement and support brand credibility.',
    },
    {
      icon: Layers,
      title: 'WordPress & Elementor Development',
      text: 'Designing and customizing fast, responsive WordPress layouts with clean HTML/CSS hierarchies, mobile-first responsive breakpoints, and intuitive contact forms.',
    },
    {
      icon: BarChart3,
      title: 'Analytics via GA4 & Search Console',
      text: 'Tracking real search impressions, click-through rates, user navigation behavior, and conversion funnels to make evidence-based optimization adjustments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight">
            The Strategy Behind the Creativity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I am a motivated Digital Marketing professional and Computer Science graduate (GPA 8.64) who combines technical rigor with marketing creativity. Where typical marketers treat websites as black boxes, my technical training enables me to audit site structures, optimize search crawlability, and interpret data with analytical precision.
          </p>
        </div>

        {/* 2-Column Split: Deep Narrative & Technical Advantage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Narrative Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold text-[#101828]">
                Bridging Technical Logic with Audience Engagement
              </h3>
              <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EEF2FF] px-2.5 py-1 rounded">
                B.Sc. CS Honours · 8.64
              </span>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                My journey began with a Bachelor of Science (Honours) in Computer Science from S.K. Somaiya, graduating with an 8.64 GPA. This background instilled a deep appreciation for algorithmic principles, web architecture, and structured problem-solving.
              </p>
              <p>
                As I expanded into digital marketing through specialized training and real-world agency execution at Sagi Multimedia, this technical foundation became a significant competitive asset. Instead of guessing why a page fails to rank or convert, I analyze the entire chain:
              </p>
            </div>

            {/* Micro-Features */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#101828] block">Semantic HTML & Hierarchy</span>
                  <span className="text-xs text-slate-500">Correct heading structures (H1-H4) that crawlers can digest.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#101828] block">DOM & Core Web Vitals</span>
                  <span className="text-xs text-slate-500">Optimizing images and reducing script bloat for faster load times.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#101828] block">Search Console Diagnostics</span>
                  <span className="text-xs text-slate-500">Resolving 404s, canonical issues, and coverage errors systematically.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#101828] block">Quantitative Event Analytics</span>
                  <span className="text-xs text-slate-500">Event-driven tracking in GA4 rather than relying on surface metrics.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The CS Advantage Matrix */}
          <div className="lg:col-span-5 bg-[#101828] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  The CS Edge in Digital Growth
                </span>
              </div>
              <span className="text-[11px] text-blue-400 font-mono">Algorithm Fluency</span>
            </div>

            <div className="space-y-4">
              {csTransfers.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                  <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    {item.csConcept}
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{item.marketingPower}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Mumbai, India</span>
              <a href="#contact" className="text-blue-400 hover:text-white transition-colors flex items-center gap-1 font-semibold">
                Hire Lakshmi →
              </a>
            </div>
          </div>
        </div>

        {/* 6 Core Competency Pillars Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#101828]">
              Core Competencies in Practice
            </h3>
            <span className="text-xs text-slate-500">6 Verified Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] text-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#101828] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
