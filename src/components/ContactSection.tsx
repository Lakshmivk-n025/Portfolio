import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenSnapshot: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, onOpenSnapshot }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Full-Time Role',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            Let's Build Something That Grows.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Looking for a Digital Marketing professional who combines creativity, technical understanding, and analytical thinking? I'd love to connect and discuss how my skills can contribute to your team.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Resume Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-[#101828] border-b border-slate-100 pb-3">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-[#101828] hover:text-[#2563EB] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Primary academic & professional inbox</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Telephone / WhatsApp
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-semibold text-[#101828] hover:text-[#2563EB] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Available for recruiter calls</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                  title="Copy telephone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3 pt-2">
                <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    LinkedIn Profile
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#2563EB] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>linkedin.com/in/lakshminerkar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">Verified profile & professional network</span>
                </div>
              </div>

              {/* Location & Time */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </div>

            {/* Resume & Recruiter Quick Actions Card */}
            <div className="bg-[#101828] text-white rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Recruiter Expedited Actions</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Comprehensive Resume & Qualifications
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Inspect a complete, ATS-structured curriculum vitae formatted with verified coursework, agency responsibilities, tools, and contact points.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#101828] bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>View / Print Resume</span>
                </button>

                <button
                  onClick={onOpenSnapshot}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>30s Snapshot</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-[#101828] mb-2">
              Send a Direct Hiring or Project Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Have an open digital marketing role, SEO audit requirement, or agency opportunity? Send a message directly and I will reply within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-blue-50/70 border border-blue-200 rounded-xl text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#101828]">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-[#101828]">{formData.inquiryType}</strong> has been prepared. You can also reach me directly at <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#2563EB] underline font-medium">{PERSONAL_INFO.email}</a>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        inquiryType: 'Full-Time Role',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Organization / Agency Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Media or Self"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                    >
                      <option value="Full-Time Role">Full-Time Marketing Role</option>
                      <option value="Agency Position">Digital Marketing Agency Position</option>
                      <option value="SEO Audit / Project">SEO & Website Project</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Message / Position Details <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">Click a preset to prefill:</span>
                  </div>

                  {/* Creative Quick Presets */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          inquiryType: 'Full-Time Role',
                          message:
                            "Hi Lakshmi, we came across your portfolio and are impressed by your blend of Computer Science and Digital Marketing. We'd love to invite you for an interview regarding a Digital Marketing Executive position.",
                        })
                      }
                      className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-2.5 py-1 rounded-md transition-colors"
                    >
                      + Schedule Interview
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          inquiryType: 'Agency Position',
                          message:
                            "Hello Lakshmi, we have an open marketing agency role managing client SEO and paid performance campaigns. We'd like to discuss your experience with WordPress and GA4.",
                        })
                      }
                      className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
                    >
                      + Agency Role
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          inquiryType: 'SEO Audit / Project',
                          message:
                            "Hi Lakshmi, we're looking for an SEO and WordPress specialist to audit our site's crawlability, headings, and keyword strategy.",
                        })
                      }
                      className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
                    >
                      + SEO Audit Project
                    </button>
                  </div>

                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, project, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Lakshmi</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
