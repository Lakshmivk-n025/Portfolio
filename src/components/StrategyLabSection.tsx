import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Target, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  clientExample: string;
  category: string;
  seedKeywords: string[];
  intentType: 'Commercial / Advisory' | 'Transactional / Healthcare' | 'B2B Creative Services';
  seoBlueprint: {
    pageTitle: string;
    metaDescription: string;
    h1: string;
    h2Silos: string[];
    schemaType: string;
  };
  adConcept: {
    platform: 'Google Ads' | 'Meta Ads';
    headline: string;
    description: string;
    sitelinks: string[];
  };
  ga4Event: {
    eventName: string;
    trigger: string;
    parameters: string[];
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'legal',
    name: 'Corporate & Legal Advisory',
    clientExample: 'KRS Associates',
    category: 'Professional Services',
    seedKeywords: ['corporate legal advisory mumbai', 'commercial dispute lawyers', 'business contract consultancy'],
    intentType: 'Commercial / Advisory',
    seoBlueprint: {
      pageTitle: 'Corporate Legal Advisory & Commercial Dispute Services | KRS Associates',
      metaDescription: 'Trusted legal advisory for corporate compliance, commercial dispute resolution, and contract drafting in Mumbai. Schedule a consultation today.',
      h1: 'Strategic Legal Counsel for Growing Enterprises',
      h2Silos: ['Corporate Governance & Regulatory Compliance', 'Commercial Arbitration & Litigation', 'Intellectual Property & Contracts'],
      schemaType: 'LegalService / Organization',
    },
    adConcept: {
      platform: 'Google Ads',
      headline: 'Corporate Legal Advisory Mumbai | Expert Counsel & Contracts',
      description: 'Strategic legal counsel for businesses, dispute resolution & governance. Speak directly with experienced legal advisors.',
      sitelinks: ['Practice Areas', 'Our Advisory Team', 'Schedule Consultation', 'Client Case Studies'],
    },
    ga4Event: {
      eventName: 'generate_lead',
      trigger: 'On successful consultation form submission',
      parameters: ['practice_area', 'inquiry_urgency', 'traffic_source_medium'],
    },
  },
  {
    id: 'foodlab',
    name: 'Food Testing & FSSAI Compliance',
    clientExample: 'OxyPro Labs',
    category: 'Food Safety & Lab Testing',
    seedKeywords: ['food testing laboratory mumbai', 'fssai compliance testing navi mumbai', 'microbiological food testing lab'],
    intentType: 'Transactional / Healthcare',
    seoBlueprint: {
      pageTitle: 'Certified Food Testing Laboratory & FSSAI Compliance | OxyPro Labs',
      metaDescription: 'Accredited food testing laboratory in Navi Mumbai & Mumbai offering microbiological, chemical, nutritional facts, and shelf-life testing. Get your testing quote today.',
      h1: 'Accredited Food Testing & Quality Compliance Laboratory',
      h2Silos: ['Microbiological & Chemical Food Testing', 'Nutritional Facts & Shelf-Life Analysis', 'FSSAI Regulatory Compliance & Audits'],
      schemaType: 'MedicalBusiness / Laboratory',
    },
    adConcept: {
      platform: 'Google Ads',
      headline: 'Certified Food Testing Lab Mumbai | FSSAI Compliance & Audits',
      description: 'Accredited food safety & nutritional testing for food manufacturers, cloud kitchens & brands. Rapid lab reports with FSSAI compliance.',
      sitelinks: ['Microbiology Testing', 'Nutritional Facts Testing', 'Shelf Life Studies', 'Request Sample Quote'],
    },
    ga4Event: {
      eventName: 'sample_testing_quote',
      trigger: 'Click on Request Testing Quote or WhatsApp sample submission',
      parameters: ['test_category', 'industry_type', 'sample_turnaround_urgency'],
    },
  },
  {
    id: 'agency',
    name: 'Digital Agency & Growth',
    clientExample: 'Sagi Multimedia',
    category: 'Agency Operations',
    seedKeywords: ['digital marketing agency mumbai', 'performance marketing agency', 'seo and web development agency'],
    intentType: 'B2B Creative Services',
    seoBlueprint: {
      pageTitle: 'Performance Marketing & SEO Agency | Sagi Multimedia Mumbai',
      metaDescription: 'Data-driven SEO, Google Ads, and custom WordPress website development helping businesses scale their online visibility and client inquiries.',
      h1: 'Driving Measurable Business Growth Through Strategic Marketing',
      h2Silos: ['Technical & On-Page SEO Architecture', 'High-Converting Performance Campaigns', 'Custom WordPress & Elementor Solutions'],
      schemaType: 'ProfessionalService',
    },
    adConcept: {
      platform: 'Meta Ads',
      headline: 'Turn Search Visibility Into Qualified Business Inquiries',
      description: 'Is your website ranking for high-intent queries? Discover our integrated SEO and paid performance marketing approach.',
      sitelinks: ['View Client Portfolios', 'Free SEO Audit Checklist', 'Agency Capabilities'],
    },
    ga4Event: {
      eventName: 'portfolio_view_contact',
      trigger: 'Scrolling 75% on portfolio page + clicking Get in Touch',
      parameters: ['case_study_id', 'service_interest', 'session_time_seconds'],
    },
  },
];

export const StrategyLabSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('legal');
  const [activeTab, setActiveTab] = useState<'seo' | 'ads' | 'analytics'>('seo');

  const current = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  return (
    <section id="strategy-lab" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                Interactive Strategic Simulation
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] font-semibold text-[#2563EB] bg-[#EEF2FF] px-2 py-0.5 rounded flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Strategy Sandbox</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
              The Digital Marketing Strategy Lab
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select a real-world client scenario below to inspect how I architect search intent, construct on-page SEO blueprints, structure paid campaigns, and configure GA4 event tracking.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-200/90 px-3.5 py-2 rounded-lg self-start md:self-auto shrink-0">
            Interactive demonstration of tactical execution
          </div>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {SCENARIOS.map((sc) => {
            const isSelected = sc.id === selectedId;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedId(sc.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#101828] text-white border-[#101828] shadow-md ring-2 ring-blue-500/20'
                    : 'bg-[#F8FAFC] text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-blue-400' : 'text-slate-500'}`}>
                    {sc.category}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${isSelected ? 'bg-slate-800 text-slate-300' : 'bg-white border border-slate-200 text-slate-600'}`}>
                    Case: {sc.clientExample}
                  </span>
                </div>
                <div className="text-sm font-bold truncate">{sc.name}</div>
                <div className={`text-xs mt-1 truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  Intent: {sc.intentType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Blueprint Sandbox Display */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
          {/* Top Bar with Blueprint Switcher */}
          <div className="bg-white px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Simulated Architecture:
              </span>
              <span className="text-sm font-bold text-[#101828]">
                {current.name} ({current.clientExample})
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'seo'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Search className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>SEO Blueprint</span>
              </button>
              <button
                onClick={() => setActiveTab('ads')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'ads'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-red-600" />
                <span>PPC Ad Copy</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'analytics'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                <span>GA4 Attribution</span>
              </button>
            </div>
          </div>

          {/* Tab 1: SEO Blueprint */}
          {activeTab === 'seo' && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Seed Keywords */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  1. High-Intent Target Keywords
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.seedKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs flex items-center gap-1.5"
                    >
                      <Search className="w-3 h-3 text-[#2563EB]" />
                      <span>"{kw}"</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* SERP Preview Card */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  2. Google SERP Snippet Preview
                </span>
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs max-w-2xl font-sans">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                    <span className="text-emerald-700 font-medium">https://{current.clientExample.toLowerCase().replace(/\s+/g, '')}.com</span>
                    <span>› service-advisory</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-blue-700 hover:underline cursor-pointer mb-1 leading-snug">
                    {current.seoBlueprint.pageTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {current.seoBlueprint.metaDescription}
                  </p>
                </div>
              </div>

              {/* Heading Silos & Schema */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    On-Page Heading Architecture
                  </span>
                  <div className="text-xs text-slate-600 space-y-1.5">
                    <div className="font-semibold text-slate-900 bg-slate-50 p-1.5 rounded border border-slate-100">
                      &lt;h1&gt; {current.seoBlueprint.h1}
                    </div>
                    {current.seoBlueprint.h2Silos.map((h2, idx) => (
                      <div key={idx} className="pl-3 text-slate-600 flex items-center gap-1.5">
                        <span className="text-[#2563EB] font-bold text-[10px]">H2:</span>
                        <span>{h2}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Technical Schema & Metadata
                    </span>
                    <div className="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1">
                      <div>@context: "https://schema.org"</div>
                      <div>@type: "{current.seoBlueprint.schemaType}"</div>
                      <div>canonical: verified self-referential</div>
                      <div>robots: "index, follow, max-snippet:-1"</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold pt-2">
                    ✓ Clean DOM with fast loading Core Web Vitals
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: PPC Ad Copy */}
          {activeTab === 'ads' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Sponsored Search Ad Mockup ({current.adConcept.platform})
                </span>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs max-w-2xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-900 bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">
                      Sponsored
                    </span>
                    <span className="text-xs text-slate-500">https://www.{current.clientExample.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                  <h4 className="text-base font-bold text-blue-700 hover:underline cursor-pointer mb-1.5">
                    {current.adConcept.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {current.adConcept.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    {current.adConcept.sitelinks.map((link, lIdx) => (
                      <div key={lIdx} className="text-xs font-medium text-blue-700 hover:underline cursor-pointer flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                        <span>{link}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-[#101828] block mb-1">
                  Targeting & Bidding Principles:
                </span>
                <p>• Keyword Match Types: Strict Exact and Phrase matches to eliminate irrelevant impressions.</p>
                <p>• Negative Keyword List: Aggressive negative keywords filtering out "free", "jobs", "templates".</p>
                <p>• Geographic Geofencing: Focused strictly on high-density commercial clusters in Mumbai & Maharashtra.</p>
              </div>
            </div>
          )}

          {/* Tab 3: GA4 Attribution */}
          {activeTab === 'analytics' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Google Analytics 4 Custom Event Architecture
                </span>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs max-w-2xl">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-xs font-mono font-bold text-[#101828]">
                        event: "{current.ga4Event.eventName}"
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Marked as Conversion
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">
                    <strong className="text-slate-800">Trigger Condition:</strong> {current.ga4Event.trigger}
                  </p>

                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Associated Custom Event Parameters:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {current.ga4Event.parameters.map((param, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-[#101828] block mb-1">
                  Why Computer Science Logic Matters in Marketing Analytics:
                </span>
                <p className="leading-relaxed">
                  Instead of tracking page views alone, event-driven tracking accurately isolates intent (form completions, phone calls, document views) so every rupee spent on ads or hours on SEO is tied to accountable results.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
