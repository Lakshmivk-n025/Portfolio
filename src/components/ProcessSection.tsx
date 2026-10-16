import React, { useState } from 'react';
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Rocket, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepIcons = [
    <Search className="w-5 h-5" />,
    <Lightbulb className="w-5 h-5" />,
    <Palette className="w-5 h-5" />,
    <Rocket className="w-5 h-5" />,
    <LineChart className="w-5 h-5" />,
  ];

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            From Insight to Execution
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A structured, repeatable 5-step framework combining analytical investigation with rapid creative execution. Every phase connects search intent with business outcomes.
          </p>
        </div>

        {/* Desktop Horizontal Process Ribbon */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#2563EB] shadow-lg ring-2 ring-blue-100 -translate-y-1'
                    : 'bg-white/80 border-slate-200/90 hover:border-blue-300 hover:bg-white hover:-translate-y-0.5'
                }`}
              >
                {/* Step Index Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <div className={isActive ? 'text-[#2563EB]' : 'text-slate-400'}>
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#101828] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {step.shortDescription}
                </p>

                {isActive && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-[#2563EB] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Vertical Process Selector */}
        <div className="lg:hidden space-y-3 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-white border-[#2563EB] shadow-xs ring-1 ring-blue-200'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#101828]">{step.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{step.shortDescription}</p>
                  </div>
                </div>
                <div className={isActive ? 'text-[#2563EB]' : 'text-slate-400'}>
                  {stepIcons[idx]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Breakdown Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider mb-1">
                Phase {activeStep.step} Deep-Dive
              </div>
              <h3 className="text-2xl font-bold text-[#101828]">
                {activeStep.step}. {activeStep.title} Strategy
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg disabled:opacity-40 hover:bg-slate-200 transition-colors"
              >
                ← Previous
              </button>
              <button
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-3 py-1.5 text-xs font-medium text-white bg-[#101828] rounded-lg disabled:opacity-40 hover:bg-[#2563EB] transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Methodology & Purpose
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Applied Tools in this Phase:
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {activeStep.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <h4 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Phase Deliverables</span>
              </h4>
              <ul className="space-y-3">
                {activeStep.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
