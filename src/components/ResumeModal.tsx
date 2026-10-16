import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, EDUCATION_ITEMS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location} | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

PROFESSIONAL EXPERIENCE

1. ${EXPERIENCE_ITEMS[0].role} — ${EXPERIENCE_ITEMS[0].company}
${EXPERIENCE_ITEMS[0].period} | ${EXPERIENCE_ITEMS[0].location}
${EXPERIENCE_ITEMS[0].responsibilities.map((r) => `• ${r}`).join('\n')}
Tools: ${EXPERIENCE_ITEMS[0].keyTools.join(', ')}

2. ${EXPERIENCE_ITEMS[1].role} — ${EXPERIENCE_ITEMS[1].company}
${EXPERIENCE_ITEMS[1].period} | ${EXPERIENCE_ITEMS[1].location}
${EXPERIENCE_ITEMS[1].responsibilities.map((r) => `• ${r}`).join('\n')}
Tools: ${EXPERIENCE_ITEMS[1].keyTools.join(', ')}

COMPLETED CLIENT PROJECTS
• KRS Associates (https://krsassociates.in/): Professional Services Website. Full responsive WordPress development with Elementor, on-page SEO, and consultation lead forms. [Completed]
• Sagi Multimedia (https://sagimultimedia.com/): Digital Marketing & Agency Operations. WordPress development, SEO audit & sitemaps, social media campaigns, and Google/Meta ad campaigns. [Completed]
• OxyPro Labs (https://oxyprolabs.com/): Food Testing & FSSAI Regulatory Compliance Website. WordPress testing catalog, on-page SEO, and B2B sample inquiry workflows. [Completed]

EDUCATION & CERTIFICATION
• ${EDUCATION_ITEMS[0].degree} — ${EDUCATION_ITEMS[0].institution} (${EDUCATION_ITEMS[0].period}) [${EDUCATION_ITEMS[0].grade}]
• ${EDUCATION_ITEMS[1].degree} — ${EDUCATION_ITEMS[1].institution} (${EDUCATION_ITEMS[1].period})
• ${EDUCATION_ITEMS[2].degree} — ${EDUCATION_ITEMS[2].institution} (${EDUCATION_ITEMS[2].period})

KEY SKILLS
• SEO & Organic Growth: Keyword Research, On-Page SEO, Technical SEO Basics, WordPress SEO, Sitemap Submission, GSC.
• Performance Marketing: Google Ads (Search, Display, YouTube), Meta Ads, LinkedIn Ads, Audience Targeting, Budget Pacing.
• Analytics & CMS: Google Analytics 4, Google Search Console, WordPress, Elementor.
• Tools: GA4, GSC, Google Ads, Keyword Planner, Meta Business Suite, Canva, Ubersuggest, ChatGPT, Gemini, Claude.
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in"
    >
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-4 no-print shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Recruiter Resume Viewer
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              · Formatted for ATS & Recruiter Inspection
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              title="Copy formatted plain text resume"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#101828] hover:bg-[#2563EB] rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 font-sans space-y-8 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#2563EB] mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#101828]">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-[#101828]">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline font-medium"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-[#101828]">{item.role}</span>
                      <span className="text-xs font-semibold text-[#2563EB]"> — {item.company}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.period} | {item.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1 leading-relaxed">
                    {item.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-500 pt-1">
                    <strong className="text-slate-700">Applied Tools:</strong> {item.keyTools.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Client Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Completed Client Projects & Deliverables
            </h2>

            <div className="space-y-3">
              <div className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-[#101828]">
                    KRS Associates — Professional Services Website
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded">
                    Completed
                  </span>
                </div>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Engineered responsive WordPress website with Elementor, conducted legal practice keyword mapping, structured SEO internal linking silos, and set up client inquiry forms. (<a href="https://krsassociates.in/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">krsassociates.in</a>)
                </p>
              </div>

              <div className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-[#101828]">
                    Sagi Multimedia — Digital Marketing & Agency Operations
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded">
                    Completed
                  </span>
                </div>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Delivered responsive agency WordPress site, executed technical crawl optimization & XML sitemaps, planned multi-channel social media campaigns, and managed Google & Meta paid ad campaigns. (<a href="https://sagimultimedia.com/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">sagimultimedia.com</a>)
                </p>
              </div>

              <div className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-[#101828]">
                    OxyPro Labs — Food Testing, Laboratory Analysis & FSSAI Compliance
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded">
                    Completed
                  </span>
                </div>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Completed WordPress food testing service catalog (microbiological, chemical, shelf-life analysis), on-page SEO for FSSAI compliance queries, Google Business Profile local search optimization, and B2B sample inquiry workflows. (<a href="https://oxyprolabs.com/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">oxyprolabs.com</a>)
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Education & Professional Certifications
            </h2>

            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-[#101828]">{edu.degree}</span>
                    <span className="text-slate-600"> — {edu.institution}</span>
                    {edu.grade && <span className="text-[#2563EB] font-bold ml-1.5">({edu.grade})</span>}
                  </div>
                  <span className="text-slate-500 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tools */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
              Skills, Tools & Technologies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-900 block mb-0.5">SEO & Organic Growth:</strong>
                <p className="text-slate-600 leading-relaxed">
                  Keyword Research, Search Intent Analysis, On-Page SEO, Heading Hierarchies, XML Sitemaps, Robots.txt, Technical SEO Basics, Image Optimization, Google Search Console.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Performance Marketing:</strong>
                <p className="text-slate-600 leading-relaxed">
                  Google Ads (Search, Display, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, Audience Segmentation, Budget Allocation.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Web Development & CMS:</strong>
                <p className="text-slate-600 leading-relaxed">
                  WordPress CMS, Elementor Page Builder, Responsive Layouts, Landing Pages, HTML/CSS Basics.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Analytics & Tools:</strong>
                <p className="text-slate-600 leading-relaxed">
                  Google Analytics 4 (GA4), Google Search Console, Google Keyword Planner, Meta Business Suite, Canva, Ubersuggest, AI Tools (ChatGPT, Gemini, Claude).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls (Hidden during print) */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between no-print shrink-0">
          <span className="text-xs text-slate-500">
            Contact: {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
