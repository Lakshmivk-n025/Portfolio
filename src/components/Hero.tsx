import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Search, 
  Target, 
  Layout, 
  Zap,
  TrendingUp,
  FileText,
  MousePointerClick,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenSnapshot: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSnapshot, onOpenResume }) => {
  const [activeEngine, setActiveEngine] = useState<'seo' | 'ppc' | 'web'>('seo');

  // Animated dynamic headline cycler
  const headlineWords = [
    'Digital Growth.',
    'Search Authority.',
    'Measurable Inquiries.',
    'Brand Visibility.',
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % headlineWords.length);
        setFadeState(true);
      }, 300);
    }, 3200);
    return () => clearInterval(interval);
  }, [headlineWords.length]);

  const engineDetails = {
    seo: {
      title: 'Organic Search & Crawl Engine',
      metrics: [
        { label: 'Technical SEO', val: 'Semantic Silos' },
        { label: 'Keyword Intent', val: 'Commercial + Info' },
        { label: 'Indexing Status', val: 'GSC Verified' },
      ],
      desc: 'Architecting search-friendly headings, descriptive metadata, and XML sitemaps for rapid crawlability.',
      highlight: '98% Crawl Efficiency',
    },
    ppc: {
      title: 'Targeted Performance Ads',
      metrics: [
        { label: 'Match Types', val: 'Exact + Phrase' },
        { label: 'Ad Relevance', val: 'Quality Score Focus' },
        { label: 'Negative Lists', val: 'Zero Waste Spend' },
      ],
      desc: 'Configuring intent-driven Google & Meta ad campaigns with disciplined budget pacing and conversion tracking.',
      highlight: 'Strict ROAS Discipline',
    },
    web: {
      title: 'WordPress & Elementor Architecture',
      metrics: [
        { label: 'Page Builder', val: 'Custom Elementor' },
        { label: 'Mobile Design', val: '100% Responsive' },
        { label: 'DOM Structure', val: 'Clean CS Hygiene' },
      ],
      desc: 'Developing fast, conversion-optimized WordPress websites with streamlined inquiry consultation funnels.',
      highlight: 'Fast LCP & Clean HTML',
    },
  };

  const currentEngine = engineDetails[activeEngine];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-10 pb-16 lg:pt-16 lg:pb-24 bg-grid-pattern">
      {/* Ambient background glowing light blooms */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Animated Recruiter Kicker */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-3.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-2xs mb-5 self-start hover:border-blue-300 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
              </span>
              <span className="text-xs font-bold text-[#101828] uppercase tracking-wider">
                Digital Marketing Executive
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Available in Mumbai
              </span>
            </div>

            {/* Headline with dynamic animated rotating word */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#101828] leading-[1.12] tracking-tight mb-6">
              Turning Search Visibility Into{' '}
              <span
                className={`inline-block transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-blue-600 to-indigo-600 ${
                  fadeState ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-2 blur-xs'
                }`}
              >
                {headlineWords[wordIndex]}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              I'm <strong className="text-[#101828] font-bold">Lakshmi Nerkar</strong>, a Digital Marketing professional specializing in SEO, performance marketing, social media, and WordPress websites. I combine creative execution with data-driven thinking to help brands grow online.
            </p>

            {/* Compact Expertise Line */}
            <div className="bg-slate-50/90 border border-slate-200/80 p-3.5 rounded-2xl mb-8 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-700 font-medium shadow-2xs">
              <span className="text-[#2563EB] font-bold text-xs uppercase tracking-wider">Core Capabilities:</span>
              <span>SEO</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>Google Ads</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>Meta Ads</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>Social Media</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>WordPress</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>Analytics</span>
            </div>

            {/* Prominent CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-[#101828] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-2xs hover:shadow flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Let's Connect</span>
              </a>

              <button
                onClick={onOpenSnapshot}
                className="px-4 py-3.5 text-xs font-semibold text-[#2563EB] bg-[#EEF2FF] hover:bg-blue-100 rounded-xl transition-colors flex items-center gap-1.5"
                title="View 30-Second Recruiter Brief"
              >
                <Sparkles className="w-4 h-4" />
                <span>30s Recruiter Brief</span>
              </button>
            </div>
          </div>

          {/* Right Column: Creative Visual with Floating Animated Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            {/* Visual Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative">
                <img
                  src="/src/assets/images/hero_digital_growth_1792161844635.jpg"
                  alt="Abstract 3D digital marketing trajectory and data analytics concept art"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent pointer-events-none" />

                {/* Animated Floating Badge 1 (Top Left) */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2 animate-float">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-900">3 Verified Client Deployments</span>
                </div>

                {/* Animated Floating Badge 2 (Top Right) */}
                <div className="absolute top-3 right-3 bg-[#101828]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-[11px] font-mono text-blue-300 shadow-md animate-float-delayed">
                  GPA 8.64 · B.Sc. CS
                </div>

                {/* Bottom Overlay Info with Live Pulse */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs">
                  <div className="flex items-center justify-between font-bold mb-0.5">
                    <span className="text-white text-xs flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                      <span>Data-Driven Organic & Paid Synergy</span>
                    </span>
                    <span className="text-blue-300 text-[10px] bg-blue-900/60 border border-blue-700 px-1.5 py-0.5 rounded">
                      Live Portfolio
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] line-clamp-1">
                    Turning crawlability & ad targeting into verified client inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Engine Switcher under image */}
            <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Interactive Strategy Engine</span>
                </span>
                <span className="text-[10px] text-blue-600 font-semibold flex items-center gap-1">
                  <MousePointerClick className="w-3 h-3" />
                  <span>Click to test discipline</span>
                </span>
              </div>

              {/* Selector Buttons */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl mb-3">
                <button
                  onClick={() => setActiveEngine('seo')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeEngine === 'seo'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Search className="w-3 h-3 text-[#2563EB]" />
                  <span>SEO</span>
                </button>
                <button
                  onClick={() => setActiveEngine('ppc')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeEngine === 'ppc'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Target className="w-3 h-3 text-red-600" />
                  <span>Paid Ads</span>
                </button>
                <button
                  onClick={() => setActiveEngine('web')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                    activeEngine === 'web'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layout className="w-3 h-3 text-emerald-600" />
                  <span>WordPress</span>
                </button>
              </div>

              {/* Engine Metrics Card with Smooth Transition */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs font-bold text-[#101828]">
                    {currentEngine.title}
                  </div>
                  <span className="text-[10px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                    {currentEngine.highlight}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                  {currentEngine.desc}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-center">
                  {currentEngine.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-2 rounded-lg border border-slate-200/70 shadow-2xs">
                      <div className="text-[9px] text-slate-400 font-bold uppercase">{m.label}</div>
                      <div className="text-[11px] font-bold text-[#101828] truncate mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Recruiter Fact Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
              Education & Distinction
            </span>
            <span className="text-sm font-semibold text-[#101828]">B.Sc. Computer Science</span>
            <span className="text-xs text-slate-600 mt-0.5">GPA: 8.64 (Honours)</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
              Current Role
            </span>
            <span className="text-sm font-semibold text-[#101828]">Digital Media Executive</span>
            <span className="text-xs text-slate-600 mt-0.5">Sagi Multimedia, Mumbai</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Completed Client Deployments
            </span>
            <span className="text-sm font-semibold text-[#101828]">3 Verified Projects</span>
            <span className="text-xs text-slate-600 mt-0.5">KRS Associates, Sagi, OxyPro</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              Location & Availability
            </span>
            <span className="text-sm font-semibold text-[#101828]">Mumbai, India</span>
            <span className="text-xs text-[#2563EB] font-medium mt-0.5">Open for Full-Time Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
