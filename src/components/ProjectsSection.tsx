import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Globe, 
  FileText,
  Sliders,
  Sparkles,
  Plus,
  Check,
  Lock,
  Monitor,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(FEATURED_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'wordpress' | 'seo'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Active view tab per project card (cardId -> 'preview' | 'deliverables')
  const [activeCardTab, setActiveCardTab] = useState<Record<string, 'preview' | 'deliverables'>>({});

  // New project form state
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    category: 'Website Development & SEO',
    client: '',
    liveUrl: '',
    overview: '',
    role: 'Digital Marketing Executive',
    deliverables: '',
    skills: 'WordPress, SEO, Google Analytics',
    toolsUsed: 'WordPress, Elementor, Google Search Console',
  });

  const filteredProjects = projectsList.filter((proj) => {
    if (filter === 'wordpress') return proj.skills.some((s) => s.toLowerCase().includes('wordpress'));
    if (filter === 'seo') return proj.skills.some((s) => s.toLowerCase().includes('seo'));
    return true;
  });

  const toggleCardTab = (id: string, tab: 'preview' | 'deliverables') => {
    setActiveCardTab((prev) => ({ ...prev, [id]: tab }));
  };

  const handleAddProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.client || !newProject.overview) return;

    const delivArray = newProject.deliverables
      ? newProject.deliverables.split('\n').filter((d) => d.trim().length > 0)
      : ['Custom digital marketing and web deliverables completed.'];

    const skillsArray = newProject.skills.split(',').map((s) => s.trim());
    const toolsArray = newProject.toolsUsed.split(',').map((t) => t.trim());

    const createdProject: ProjectItem = {
      id: `custom-${Date.now()}`,
      title: newProject.title,
      subtitle: newProject.subtitle || 'Verified Digital Marketing Deliverable',
      category: newProject.category,
      client: newProject.client,
      status: 'Completed',
      image: '/src/assets/images/project_sagi_multimedia_1792161846485.jpg',
      liveUrl: newProject.liveUrl || undefined,
      overview: newProject.overview,
      role: newProject.role,
      deliverables: delivArray,
      skills: skillsArray,
      toolsUsed: toolsArray,
      caseStudyDetails: {
        challenge: 'Deliver clear digital visibility, modern layout, and measurable marketing presence.',
        strategy: 'Applied structured SEO keyword research, responsive design, and analytics tracking.',
        execution: delivArray,
        technicalEdge: 'Rooted in Computer Science web standards and data-driven event attribution.',
      },
    };

    setProjectsList([...projectsList, createdProject]);
    setIsAddModalOpen(false);
    setNewProject({
      title: '',
      subtitle: '',
      category: 'Website Development & SEO',
      client: '',
      liveUrl: '',
      overview: '',
      role: 'Digital Marketing Executive',
      deliverables: '',
      skills: 'WordPress, SEO, Google Analytics',
      toolsUsed: 'WordPress, Elementor, Google Search Console',
    });
  };

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                Featured Portfolio
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>All {projectsList.length} Client Deployments Completed</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight">
              Featured Client Projects & Web Deliverables
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Interactive showcase of responsive websites designed, developed, and optimized with Elementor and technical SEO during my agency tenure.
            </p>
          </div>

          {/* Interactive Controls & Add Project */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Completed ({projectsList.length})
              </button>
              <button
                onClick={() => setFilter('wordpress')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  filter === 'wordpress'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                WordPress & CMS
              </button>
              <button
                onClick={() => setFilter('seo')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  filter === 'seo'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SEO & Growth
              </button>
            </div>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3.5 py-2 text-xs font-bold text-[#2563EB] bg-[#EEF2FF] hover:bg-blue-100 rounded-xl transition-colors flex items-center gap-1.5 border border-blue-200/50"
              title="Add another completed project to the showcase"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* Project Cards with Modern Browser Frames */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const cardTab = activeCardTab[project.id] || 'preview';
            return (
              <div
                key={project.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300/80 transition-all duration-300"
              >
                {/* Modern Browser Chrome Header */}
                <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-xs text-slate-400 font-medium ml-2 hidden sm:inline">
                      {project.title} — Verified Showcase
                    </span>
                  </div>

                  {/* Browser URL Bar */}
                  <div className="bg-slate-800/90 text-slate-300 text-[11px] font-mono px-3 py-1 rounded-md flex items-center gap-1.5 max-w-xs sm:max-w-md truncate border border-slate-700/60">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">
                      {project.liveUrl || `https://${project.client.toLowerCase().replace(/\s+/g, '')}.agency`}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Project Layout Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-8">
                  {/* Left: Device / Visual Showcase */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 aspect-[16/10] group">
                      <img
                        src={project.image}
                        alt={`${project.title} website UI preview`}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                      {/* Image Overlay Footer */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <div>
                          <div className="font-bold text-white text-sm">{project.client}</div>
                          <div className="text-[11px] text-slate-300">{project.category}</div>
                        </div>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-slate-100 text-[#101828] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all hover:scale-105"
                          >
                            <span>Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Quick Stats / Highlights Strip */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">CMS Framework</span>
                        <span className="text-xs font-bold text-[#101828]">WordPress & Elementor</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">SEO Architecture</span>
                        <span className="text-xs font-bold text-[#101828]">On-Page + XML Sitemap</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Milestone</span>
                        <span className="text-xs font-bold text-emerald-600">Successfully Launched</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Project Details & Deliverables */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Quiet Category Metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span className="font-bold text-[#2563EB]">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Client: {project.client}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                        {project.overview}
                      </p>

                      {/* Role & Key Deliverables Box */}
                      <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs mb-5">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          My Execution Role:
                        </div>
                        <div className="text-xs font-bold text-[#101828] mb-3">
                          {project.role}
                        </div>

                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Verified Deliverables:
                        </div>
                        <ul className="space-y-1.5">
                          {project.deliverables.slice(0, 4).map((d, dIdx) => (
                            <li key={dIdx} className="text-xs text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tool Tags */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-6">
                        <span className="font-bold text-slate-700 text-xs">Stack & Tools:</span>
                        {project.toolsUsed.map((tool, tIdx) => (
                          <React.Fragment key={tIdx}>
                            {tIdx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                            <span className="text-slate-800 font-medium">{tool}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 text-xs font-bold text-white bg-[#101828] hover:bg-[#2563EB] rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Deep Case Study Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
                        >
                          <Globe className="w-3.5 h-3.5 text-slate-500" />
                          <span>Open Live URL</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scalable Future Case Study Structure Callout */}
        <div className="mt-14 bg-gradient-to-r from-blue-50/80 to-indigo-50/60 border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#101828]">
                All 3 Core Projects Delivered & Verified
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                KRS Associates, Sagi Multimedia, and OxyPro projects have all completed design, development, SEO indexation, and operational launch milestones.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 self-end sm:self-auto flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add another completed project</span>
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
        >
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/70">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                    Completed Case Study
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded">
                    Delivered
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101828]">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedProject.category} · Client: {selectedProject.client}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Preview image */}
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[16/9] max-h-64 w-full bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  The Objective & Challenge
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedProject.caseStudyDetails.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Strategic Approach
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.caseStudyDetails.strategy}
                </p>
              </div>

              {/* Execution Steps */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Completed Execution Steps
                </h4>
                <div className="space-y-2">
                  {selectedProject.caseStudyDetails.execution.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Edge */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1">
                  Technical Foundation Advantage
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {selectedProject.caseStudyDetails.technicalEdge}
                </p>
              </div>

              {/* Complete Deliverables List */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Verified Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit {selectedProject.title} Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  Internal agency and client management account.
                </span>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Project Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
        >
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-base font-bold text-[#101828]">
                  Add Completed Project
                </h3>
                <p className="text-xs text-slate-500">
                  Add another project or client website to your portfolio showcase
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProjectSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Health Portal"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Inc"
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. WordPress & SEO"
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Live Website URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={newProject.liveUrl}
                  onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Project Overview & Results *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the website, your work, and the outcome..."
                  value={newProject.overview}
                  onChange={(e) => setNewProject({ ...newProject, overview: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Deliverables (One per line)
                </label>
                <textarea
                  rows={3}
                  placeholder="• Responsive WordPress design&#10;• Keyword research & SEO sitemap&#10;• Meta tags and analytics tracking"
                  value={newProject.deliverables}
                  onChange={(e) => setNewProject({ ...newProject, deliverables: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg shadow-2xs"
                >
                  Add to Completed Projects
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
