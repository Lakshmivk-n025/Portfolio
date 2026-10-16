import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
            Academic Background & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            Education & Professional Certification
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A solid scientific and computer science foundation providing deep analytical instincts, data handling literacy, and web programming awareness to digital marketing.
          </p>
        </div>

        {/* Education & Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item, idx) => {
            const isCS = item.degree.includes('Computer Science');
            const isCert = item.institution.includes('Certification');

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-shadow ${
                  isCS
                    ? 'border-blue-200 ring-2 ring-blue-50/80 hover:shadow-md'
                    : 'border-slate-200/90 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isCS
                          ? 'bg-[#EEF2FF] text-[#2563EB]'
                          : isCert
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isCert ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <GraduationCap className="w-6 h-6" />
                      )}
                    </div>

                    {item.grade && (
                      <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EEF2FF] px-2.5 py-1 rounded-md">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#101828] mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[#2563EB] mb-2">
                    {item.institution}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {isCS && (
                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-[#2563EB] font-medium flex items-center gap-1">
                    <span>★ Direct technical transfer to Technical SEO & Analytics</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
