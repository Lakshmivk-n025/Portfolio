import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
            Work History & Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A chronological timeline of hands-on agency work and rigorous digital marketing internships in Mumbai, managing client websites, technical SEO, and paid multi-channel campaigns.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const isCurrent = item.status === 'Current';
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Node with Animated Pulse */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 transition-all duration-300 group-hover:scale-125 ${
                    isCurrent
                      ? 'border-[#2563EB] bg-white ring-4 ring-blue-100'
                      : 'border-slate-300 bg-white group-hover:border-[#2563EB]'
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                          {item.role}
                        </h3>
                        {isCurrent && (
                          <span className="text-[11px] font-semibold text-[#2563EB] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#2563EB] mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 font-medium space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools & Focus footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-500 flex-wrap">
                      <span className="font-semibold text-slate-600">Applied Toolset:</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.keyTools.map((tool, tIdx) => (
                          <React.Fragment key={tIdx}>
                            {tIdx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                            <span className="text-slate-700 font-medium">{tool}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="text-slate-500 italic text-[11px]">
                      Focus: {item.impactFocus}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
