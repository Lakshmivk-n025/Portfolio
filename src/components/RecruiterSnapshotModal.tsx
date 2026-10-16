import React from 'react';
import { X, Sparkles, MapPin, GraduationCap, CheckCircle2, Briefcase, Mail, Phone, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, FEATURED_PROJECTS } from '../data/portfolioData';

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterSnapshotModal: React.FC<RecruiterSnapshotModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in"
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#101828] text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30-Second Recruiter Brief</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Digital Marketing Executive · SEO Specialist · Performance Marketing Professional
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Education</span>
              <span className="text-xs font-bold text-[#101828] block mt-0.5">B.Sc. CS</span>
              <span className="text-[11px] text-[#2563EB] font-semibold">GPA 8.64</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Experience</span>
              <span className="text-xs font-bold text-[#101828] block mt-0.5">Sagi Multimedia</span>
              <span className="text-[11px] text-slate-500">Mar 2026 – Present</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Location</span>
              <span className="text-xs font-bold text-[#101828] block mt-0.5">Mumbai, India</span>
              <span className="text-[11px] text-emerald-600 font-semibold">Ready to Hire</span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Core Stack</span>
              <span className="text-xs font-bold text-[#101828] block mt-0.5">SEO & Ads</span>
              <span className="text-[11px] text-slate-500">WordPress + GA4</span>
            </div>
          </div>

          {/* Key Value Proposition */}
          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl">
            <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1">
              Why Lakshmi Stands Out
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Combines Computer Science logic (crawling, Core Web Vitals, semantic DOM, structured data) with active multi-client agency marketing experience. Able to develop responsive WordPress sites, execute technical SEO, and launch paid ad campaigns with data-driven attribution.
            </p>
          </div>

          {/* Featured Live Deliverables */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Completed Client Work ({FEATURED_PROJECTS.length})
              </h4>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                All 3 Completed
              </span>
            </div>
            <div className="space-y-2">
              {FEATURED_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-bold text-[#101828]">{proj.title}</span>
                    <span className="text-slate-500 ml-1.5 hidden sm:inline">({proj.category})</span>
                    <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{proj.overview}</p>
                  </div>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] font-semibold text-[#2563EB] bg-blue-50 hover:bg-blue-100 rounded-md shrink-0 flex items-center gap-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direct Contact Actions */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 min-w-[140px] py-2.5 px-3 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Lakshmi</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex-1 min-w-[140px] py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-[#101828] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Call (+91 9819579444)</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex-1 min-w-[140px] py-2.5 px-3 bg-[#101828] hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Open Full Resume</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium"
          >
            Close Quick Brief
          </button>
        </div>
      </div>
    </div>
  );
};
