import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Share2, 
  BarChart3, 
  Layout, 
  CheckCircle2, 
  SlidersHorizontal,
  ChevronRight,
  Briefcase,
  Sparkles,
  Building2,
  HeartPulse,
  Rocket
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const ExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('seo');
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    seo: <Search className="w-5 h-5" />,
    performance: <TrendingUp className="w-5 h-5" />,
    social: <Share2 className="w-5 h-5" />,
    analytics: <BarChart3 className="w-5 h-5" />,
    development: <Layout className="w-5 h-5" />,
  };

  const sectorPresets = [
    {
      id: 'agency',
      title: 'Digital Marketing Agency',
      icon: <Rocket className="w-4 h-4 text-[#2563EB]" />,
      summary: 'High-velocity multi-client management, SEO audits, cross-platform ads, and client reporting.',
      activeCategory: 'seo',
      coreDeployments: ['Keyword Clustering', 'Google Search Console', 'Meta Ads Manager', 'GA4 Attribution'],
    },
    {
      id: 'corporate',
      title: 'B2B & Legal Advisory',
      icon: <Building2 className="w-4 h-4 text-indigo-600" />,
      summary: 'Dignified corporate presence, LinkedIn B2B targeting, thought leadership, and clean inquiry paths.',
      activeCategory: 'development',
      coreDeployments: ['WordPress Architecture', 'Elementor Templates', 'Practice Area SEO', 'LinkedIn Ads'],
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      icon: <HeartPulse className="w-4 h-4 text-emerald-600" />,
      summary: 'High-trust product catalogs, local emergency search intent, Google Business Profile, and accessible UX.',
      activeCategory: 'social',
      coreDeployments: ['Local SEO', 'Google Maps Optimization', 'Mobile Tap Targets', 'Product Specs Hierarchy'],
    },
  ];

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab) || SKILL_CATEGORIES[0];

  const handleSelectSector = (sector: typeof sectorPresets[0]) => {
    setSelectedSector(sector.id);
    setActiveTab(sector.activeCategory);
  };

  return (
    <section id="expertise" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                Core Capabilities
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                5 Interactive Disciplines
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight">
              My Expertise & Specializations
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Concrete digital marketing proficiencies applied in live multi-client environments. Grounded in actual execution and measurable deliverables, free from fabricated vanity metrics.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl self-start md:self-auto shrink-0 flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Interactive Skill Directory</span>
          </div>
        </div>

        {/* Recruiter Industry Stack Matcher Ribbon */}
        <div className="mb-10 p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200/90">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Recruiter Fast-Track: Select Your Industry Sector</span>
            </span>
            <span className="text-[11px] text-slate-400">Click to filter stack</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sectorPresets.map((sector) => {
              const isSelected = selectedSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSelectSector(sector)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#2563EB] shadow-sm ring-2 ring-blue-100'
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {sector.icon}
                    <span className="text-xs font-bold text-[#101828]">{sector.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                    {sector.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sector.coreDeployments.slice(0, 3).map((dep, dIdx) => (
                      <span key={dIdx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                        {dep}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSelectedSector(null);
                }}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#101828] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className={isActive ? 'text-[#2563EB]' : 'text-slate-500'}>
                  {categoryIcons[cat.id]}
                </span>
                <span className="truncate">{cat.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Overview Banner */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-xs">
                {categoryIcons[currentCategory.id]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#101828]">
                  {currentCategory.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {currentCategory.description}
                </p>
              </div>
            </div>
            <div className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto shrink-0">
              {currentCategory.skills.length} Competencies Catalogued
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-[#101828] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>{skill.name}</span>
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Tags rendered as clean unboxed typographic labels */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-400 uppercase text-[10px] tracking-wide">Key Tools:</span>
                  <div className="flex flex-wrap items-center gap-x-2">
                    {skill.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        {tIdx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                        <span className="text-slate-700 font-medium">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Discipline Jump Bar */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Looking for a specific capability?</span>
            <span>Switch tabs above to view all 5 core specializations.</span>
          </div>
          <a
            href="#projects"
            className="text-[#2563EB] hover:text-blue-700 font-semibold flex items-center gap-1 group"
          >
            <span>See how these skills are deployed in featured projects</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
