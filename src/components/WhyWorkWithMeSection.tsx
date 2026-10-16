import React from 'react';
import { 
  Code, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WHY_WORK_WITH_ME, WhyWorkWithMeItem } from '../data/portfolioData';

export const WhyWorkWithMeSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-[#2563EB]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-sky-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
            Value Proposition for Employers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            Why Work With Me?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A combination of analytical engineering discipline, multi-channel marketing capabilities, and practical agency execution that delivers clear, accountable value from day one.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-6 sm:p-7 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 group-hover:border-blue-200 transition-all">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-base font-bold text-[#101828] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Callout Banner */}
        <div className="bg-[#101828] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Ready for Impact
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Prepared to contribute to your digital team or agency client accounts.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Based in Mumbai with full flexibility for on-site, hybrid, or remote digital marketing executive roles.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-3 text-xs font-semibold text-[#101828] bg-white hover:bg-blue-50 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-[#2563EB]" />
          </a>
        </div>
      </div>
    </section>
  );
};
