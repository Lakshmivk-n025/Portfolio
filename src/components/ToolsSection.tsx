import React, { useState } from 'react';
import { 
  BarChart, 
  Search, 
  Target, 
  Key, 
  Layers, 
  Briefcase, 
  Video, 
  Globe, 
  Layout, 
  Palette, 
  Compass, 
  Cpu, 
  Sparkles, 
  FileText,
  Wrench,
  Filter
} from 'lucide-react';
import { TOOLS_LIST, ToolItem } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    'All',
    'Analytics & Search',
    'Paid Advertising',
    'Web & CMS',
    'AI & Productivity',
    'Design & Creative',
  ];

  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesCategory = selectedFilter === 'All' || tool.category === selectedFilter;
    const matchesQuery = !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const getToolIcon = (iconType: string) => {
    switch (iconType) {
      case 'BarChart': return <BarChart className="w-5 h-5 text-amber-600" />;
      case 'Search': return <Search className="w-5 h-5 text-blue-600" />;
      case 'Target': return <Target className="w-5 h-5 text-red-600" />;
      case 'Key': return <Key className="w-5 h-5 text-emerald-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-sky-700" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-pink-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-teal-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-orange-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-500" />;
      case 'FileText': return <FileText className="w-5 h-5 text-amber-700" />;
      default: return <Wrench className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="tools" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                Technology Stack
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                14 Tools Catalogued
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight">
              Tools & Platforms I Work With
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A curated suite of industry-standard tools actively utilized for search engine optimization, paid ad campaigns, web design, analytics attribution, and modern workflow productivity.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter tools (e.g. GA4, Ads, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-[#F8FAFC]"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-100">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#101828] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getToolIcon(tool.iconType)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200/90 px-2 py-0.5 rounded-md">
                    {tool.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#101828] mb-1 group-hover:text-[#2563EB] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400">
                {tool.category}
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-500 font-medium">No tools matched "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              className="mt-2 text-xs font-semibold text-[#2563EB] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
