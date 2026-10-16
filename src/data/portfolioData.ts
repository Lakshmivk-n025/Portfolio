export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  summary: string;
  gpa: string;
  degree: string;
  college: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    description: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  summary: string;
  responsibilities: string[];
  keyTools: string[];
  impactFocus: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  status: 'Completed' | 'Ongoing Client Management';
  image: string;
  liveUrl?: string;
  overview: string;
  role: string;
  deliverables: string[];
  skills: string[];
  toolsUsed: string[];
  caseStudyDetails: {
    challenge: string;
    strategy: string;
    execution: string[];
    technicalEdge: string;
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  tools: string[];
  description: string;
}

export interface ToolItem {
  name: string;
  category: 'Analytics & Search' | 'Paid Advertising' | 'Web & CMS' | 'Design & Creative' | 'AI & Productivity';
  description: string;
  iconType: string;
  tag: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface WhyWorkWithMeItem {
  title: string;
  description: string;
  subtext: string;
  iconName: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Lakshmi V K Prakash Nerkar',
  title: 'Digital Marketing Executive | SEO Specialist | Performance Marketing Professional',
  tagline: 'Turning Search Visibility Into Digital Growth.',
  location: 'Mumbai, India',
  email: 'lakshmivknerkar996@gmail.com',
  phone: '+91 9819579444',
  linkedin: 'https://linkedin.com/in/lakshminerkar',
  summary:
    'Motivated Digital Marketing professional and Computer Science graduate with a GPA of 8.64, experienced in SEO, paid advertising, content marketing, social media management, WordPress website development, and marketing analytics. Combining technical understanding with creative thinking to improve online visibility, audience engagement, website performance, and lead generation.',
  gpa: '8.64 / 10.0',
  degree: 'Bachelor of Science, Computer Science (Honours)',
  college: 'S.K. Somaiya, Mumbai',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'seo',
    name: 'SEO & Organic Growth',
    iconName: 'Search',
    description: 'Data-driven on-page, technical, and architectural SEO strategies that systematically capture intent and build organic search presence.',
    skills: [
      { name: 'Keyword Research', description: 'Intent-driven seed research, semantic clustering, search volume estimation, and competitor gap discovery.', tags: ['Google Keyword Planner', 'Ubersuggest'] },
      { name: 'Search Intent Analysis', description: 'Aligning commercial, transactional, and informational user intent with high-converting site structure.', tags: ['SERP Analysis', 'Content Strategy'] },
      { name: 'On-Page SEO', description: 'Strategic heading architectures (H1-H4), meta tags, content density, and semantic keyword integration.', tags: ['Meta Titles', 'Heading Tags'] },
      { name: 'Technical SEO Basics', description: 'Core Web Vitals hygiene, crawl depth management, robots.txt directives, and canonical tag implementation.', tags: ['Crawlability', 'Indexation'] },
      { name: 'WordPress SEO', description: 'Search optimization configured seamlessly across WordPress themes, plugins, and custom templates.', tags: ['Elementor', 'RankMath / Yoast'] },
      { name: 'Meta Tags & Heading Optimization', description: 'Click-through-rate focused titles, compelling meta descriptions, and structured content hierarchy.', tags: ['CTR Optimization'] },
      { name: 'Internal Linking Architecture', description: 'Logical silo structures, contextually relevant anchor texts, and PageRank distribution.', tags: ['Site Silos', 'Navigation'] },
      { name: 'XML Sitemap Submission', description: 'Clean hierarchical sitemap generation, priority tagging, and automated Search Console indexing.', tags: ['Google Search Console'] },
      { name: 'Image Optimization', description: 'Alt-tag descriptive semantics, next-gen WebP formats, lossless compression, and lazy-loading.', tags: ['Page Speed', 'Core Web Vitals'] },
      { name: 'Google Search Console Monitoring', description: 'Tracking indexing status, query impressions, average position, and coverage error resolution.', tags: ['GSC', 'Performance'] },
    ],
  },
  {
    id: 'performance',
    name: 'Performance Marketing',
    iconName: 'TrendingUp',
    description: 'Targeted multi-platform ad campaign setup, audience segmentation, budget allocation, and continuous creative testing.',
    skills: [
      { name: 'Google Ads', description: 'Campaign architecture, keyword match types (exact, phrase, broad), ad extensions, and negative keyword lists.', tags: ['Google Ads', 'PPC'] },
      { name: 'Search & Display Advertising', description: 'High-intent search campaigns coupled with contextual display banners across the Google Display Network.', tags: ['GDN', 'Responsive Ads'] },
      { name: 'YouTube Ads', description: 'Video action and discovery ad targeting focused on product consideration and brand recall.', tags: ['YouTube Studio', 'Video Ads'] },
      { name: 'Meta Ads', description: 'Facebook and Instagram campaign management, carousel ads, lead forms, and custom pixel tracking.', tags: ['Meta Ads Manager'] },
      { name: 'LinkedIn Ads', description: 'Professional B2B sponsored content, lead gen forms, and job-title/industry audience targeting.', tags: ['Campaign Manager'] },
      { name: 'Audience Targeting', description: 'Demographic, geographic, interest-based, and custom intent audience creation.', tags: ['Lookalike', 'Custom Audiences'] },
      { name: 'Budget Planning', description: 'Daily ad spend pacing, bidding strategy selection (CPC, Max Conversions), and efficiency tracking.', tags: ['ROAS Focus', 'Budget Pacing'] },
    ],
  },
  {
    id: 'social',
    name: 'Social Media Marketing',
    iconName: 'Share2',
    description: 'Structured content calendars, community management, and multi-channel brand presence across leading social platforms.',
    skills: [
      { name: 'Instagram & Facebook Management', description: 'Feed aesthetics, carousel storytelling, informative Reels, and audience engagement tracking.', tags: ['Meta Suite', 'Canva'] },
      { name: 'LinkedIn Company Pages', description: 'Thought leadership, business updates, professional services positioning, and employer branding.', tags: ['B2B Marketing'] },
      { name: 'X (Twitter) & Industry Feeds', description: 'Timely updates, brand conversations, trend monitoring, and active customer touchpoints.', tags: ['Community'] },
      { name: 'WhatsApp Business Marketing', description: 'Direct customer communication workflows, automated welcome greetings, and quick catalog inquiry.', tags: ['Direct Response'] },
      { name: 'Google Business Profile Optimization', description: 'Local SEO presence, review engagement, opening hours, business categories, and local post updates.', tags: ['Local SEO', 'Google Maps'] },
      { name: 'Content Planning & Publishing', description: 'Monthly editorial calendars, graphic asset coordination, copy drafting, and consistent post scheduling.', tags: ['Calendar', 'Content Ops'] },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    iconName: 'BarChart3',
    description: 'Quantitative tracking of traffic trends, user navigation behavior, and conversion attribution to guide marketing decisions.',
    skills: [
      { name: 'Google Analytics 4 (GA4)', description: 'Event-based data model tracking, custom events, user session acquisition, and engagement time analysis.', tags: ['GA4', 'Event Tracking'] },
      { name: 'Google Search Console (GSC)', description: 'Organic search query impressions, CTR, average rankings, page indexing reports, and crawl diagnostics.', tags: ['Organic Search'] },
      { name: 'Website Traffic Analysis', description: 'Source/medium segmentation, channel attribution, bounce rate patterns, and new vs. returning visitors.', tags: ['Traffic Channels'] },
      { name: 'User Behaviour Monitoring', description: 'Scroll depth, button click events, conversion funnel progression, and bounce diagnostics.', tags: ['UX Insight'] },
      { name: 'Campaign Performance Tracking', description: 'Multi-channel attribution reporting, tracking CTR, CPC, CPM, and lead qualification indicators.', tags: ['Ad Performance'] },
    ],
  },
  {
    id: 'development',
    name: 'Website Development',
    iconName: 'Layout',
    description: 'Building and customizing responsive, SEO-ready WordPress websites with clean semantic HTML, fast loading speeds, and intuitive UX.',
    skills: [
      { name: 'WordPress CMS', description: 'Core WordPress management, theme customization, plugin stack curation, and security/caching setup.', tags: ['WordPress'] },
      { name: 'Elementor Page Builder', description: 'Custom responsive page layouts, global design system tokens, header/footer templates, and dynamic widgets.', tags: ['Elementor Pro'] },
      { name: 'Responsive Website Design', description: 'Cross-device fluid grids tailored for mobile, tablet, laptop, and ultra-wide screens.', tags: ['Mobile-First', 'CSS'] },
      { name: 'Website Content Optimization', description: 'Clear value proposition copy, benefit-driven headlines, and structured FAQ sections.', tags: ['Content UX'] },
      { name: 'Landing Page Development', description: 'Conversion-focused landing page architecture with friction-free lead capture forms and sticky CTAs.', tags: ['Lead Generation'] },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'sagi-multimedia',
    role: 'Social & Digital Media Executive',
    company: 'Sagi Multimedia',
    location: 'Mumbai, India',
    period: 'March 2026 – Present',
    status: 'Current',
    summary:
      'Leading digital marketing initiatives across diverse client portfolios including KRS Associates, Sagi Multimedia, and OxyPro. Managing end-to-end WordPress web properties, executing on-page/technical SEO, overseeing social media channels, and launching paid ad campaigns.',
    responsibilities: [
      'Manage end-to-end digital marketing activities for multiple client websites, ensuring continuous brand visibility and search presence.',
      'Design, develop, and maintain responsive WordPress websites using Elementor, crafting tailored landing pages and structured service sections.',
      'Execute technical and on-page SEO strategies including thorough keyword research, heading hierarchies, meta tag refinement, internal linking silos, and image compression.',
      'Audit search performance using Google Search Console, inspecting URL indexing, resolving crawl issues, and submitting updated XML sitemaps.',
      'Plan and execute monthly social media content calendars across Instagram, Facebook, and LinkedIn to build audience community.',
      'Create and optimize targeted Google Ads and Meta Ads campaigns, refining ad copy, keywords, and audience segments to drive inquiries.',
    ],
    keyTools: ['WordPress', 'Elementor', 'Google Search Console', 'Google Analytics 4', 'Google Ads', 'Meta Business Suite', 'Canva'],
    impactFocus: 'Client site stability, organic search visibility, and multi-channel campaign coordination.',
  },
  {
    id: 'dmla',
    role: 'Content Writer & Digital Marketing Intern',
    company: 'Digital Marketing Learners Academy (DMLA)',
    location: 'Mumbai, India',
    period: 'January 2026 – March 2026',
    status: 'Completed',
    summary:
      'Gained intensive practical experience producing SEO-focused content, conducting keyword research, supporting multi-format ad campaigns, and analyzing website traffic performance using industry-standard tools.',
    responsibilities: [
      'Authored in-depth, SEO-optimized blog articles and informative landing page copy designed to capture target search intent.',
      'Conducted keyword research and competitor keyword mapping using Google Keyword Planner and Ubersuggest.',
      'Applied on-page SEO fundamentals: descriptive meta titles, compelling meta descriptions, H1-H3 hierarchy, image alt attributes, and contextual internal links.',
      'Assisted senior marketers in configuring Google Search, Display, YouTube, and Meta Ads campaigns, learning audience segmentation and bidding mechanisms.',
      'Monitored website traffic trends and visitor engagement metrics utilizing Google Analytics 4 and Google Search Console.',
    ],
    keyTools: ['Google Keyword Planner', 'Ubersuggest', 'Google Analytics 4', 'Google Search Console', 'Google Ads', 'Canva'],
    impactFocus: 'SEO copywriting, keyword intent alignment, and foundational campaign analytics.',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'krs-associates',
    title: 'KRS Associates',
    subtitle: 'Professional Services & Legal Advisory Website',
    category: 'Professional Services Website',
    client: 'KRS Associates',
    status: 'Completed',
    image: '/src/assets/images/project_krs_associates_1792161845839.jpg',
    liveUrl: 'https://krsassociates.in/',
    overview:
      'Complete website design, development, and search optimization for KRS Associates, a premier legal and professional advisory practice. The project focused on establishing corporate credibility, clear service categorization, and intuitive client consultation booking.',
    role: 'Website Designer, WordPress Developer & SEO Specialist (via Sagi Multimedia)',
    deliverables: [
      'Full responsive WordPress website architecture built with Elementor.',
      'Structured legal practice area service pages with clear hierarchy and consultation CTAs.',
      'Comprehensive on-page SEO implementation: keyword-aligned headings, meta tags, and schema readiness.',
      'Optimized performance: compressed assets, clean typography, fast mobile rendering.',
      'Connected lead capture forms with email notifications for client inquiries.',
    ],
    skills: ['WordPress Development', 'Elementor Pro', 'On-Page SEO', 'UX & Information Architecture', 'Responsive Design'],
    toolsUsed: ['WordPress', 'Elementor', 'Google Search Console', 'Yoast SEO', 'Canva', 'HTML/CSS'],
    caseStudyDetails: {
      challenge:
        'KRS Associates required a dignified, modern online presence that clearly communicates complex advisory capabilities while offering prospective clients a frictionless consultation pathway.',
      strategy:
        'Adopted a clean navy-blue corporate palette with generous whitespace. Structured service offerings into distinct practice domains, ensuring each practice area has dedicated search-friendly headings and clear value propositions.',
      execution: [
        'Designed custom Elementor layout templates for practice areas, about pages, and contact hubs.',
        'Conducted keyword mapping for legal advisory queries in the target geography.',
        'Structured internal linking between related practice areas and legal insights.',
        'Submitted and verified XML sitemaps through Google Search Console for indexation.',
      ],
      technicalEdge:
        'Leveraged Computer Science foundation to audit DOM structure, eliminate redundant plugin CSS bloat, and ensure mobile viewport responsiveness across all device breakpoints.',
    },
  },
  {
    id: 'sagi-multimedia',
    title: 'Sagi Multimedia',
    subtitle: 'Agency Web Presence & Integrated Marketing Operations',
    category: 'Digital Marketing & Agency Operations',
    client: 'Sagi Multimedia',
    status: 'Completed',
    image: '/src/assets/images/project_sagi_multimedia_1792161846485.jpg',
    liveUrl: 'https://sagimultimedia.com/',
    overview:
      'Completed digital marketing operations, website development, and brand communication infrastructure for Sagi Multimedia. Encompassed search engine optimization, content strategy, social media campaigns, and complete digital asset stabilization.',
    role: 'Social & Digital Media Executive',
    deliverables: [
      'Engineered and launched responsive WordPress website architecture with Elementor templates.',
      'Completed full technical and on-page SEO audit: crawl hygiene, sitemap indexing, and meta tag optimization.',
      'Planned and executed multi-channel social media content campaigns across LinkedIn, Instagram, and Facebook.',
      'Configured and launched targeted Google Ads and Meta Ads campaigns with optimized audience parameters.',
      'Implemented consolidated performance tracking and reporting dashboards through GA4 and Search Console.',
    ],
    skills: ['SEO Management', 'Content Planning', 'Paid Ad Optimization', 'Social Media Marketing', 'GA4 Analytics'],
    toolsUsed: ['WordPress', 'Google Analytics 4', 'Google Search Console', 'Google Ads', 'Meta Business Suite', 'Canva'],
    caseStudyDetails: {
      challenge:
        'Establishing unified agency digital branding, robust search engine indexation, and repeatable multi-channel campaign processes for lead inquiries.',
      strategy:
        'Executed a structured digital marketing rollout: full website revamp with Elementor, verified Search Console setup, disciplined SEO silos, and targeted ad campaigns.',
      execution: [
        'Designed custom responsive WordPress layouts with fast loading speeds and clear service callouts.',
        'Configured Google Search Console verification, submitted XML sitemaps, and resolved crawl alerts.',
        'Created high-engagement social media campaigns and conversion-focused ad sets.',
      ],
      technicalEdge:
        'Implemented rigorous analytics event tracking and disciplined UTM parameter structures for accurate multi-channel traffic attribution.',
    },
  },
  {
    id: 'oxypro',
    title: 'OxyPro Labs',
    subtitle: 'Food Testing, Laboratory Analysis & FSSAI Compliance Website',
    category: 'Food Testing & Laboratory Website',
    client: 'OXYPRO Labs',
    status: 'Completed',
    image: '/src/assets/images/project_oxypro_food_lab_1792167340365.jpg',
    liveUrl: 'https://oxyprolabs.com/',
    overview:
      'Completed digital marketing, website development, and SEO optimization for OXYPRO Labs, a certified food testing, training, and FSSAI regulatory compliance laboratory based in Navi Mumbai. Delivered structured testing service catalogs (microbiological, chemical, nutritional testing, shelf-life analysis), local SEO, and B2B sample inquiry workflows for food manufacturers and restaurants.',
    role: 'Digital Marketing Executive (Client Account Management)',
    deliverables: [
      'Engineered responsive WordPress website architecture showcasing specialized food testing services.',
      'Structured on-page SEO targeting high-intent food testing, FSSAI compliance, and laboratory analysis queries.',
      'Optimized Google Business Profile and local search visibility across Mumbai and Navi Mumbai food clusters.',
      'Configured friction-free sample testing inquiry forms and FSSAI audit consultation lead funnels.',
      'Audited mobile page speed, image optimization, and Core Web Vitals compliance.',
    ],
    skills: ['Food Testing SEO', 'FSSAI Regulatory Keywords', 'WordPress Development', 'Local SEO', 'Trust-Oriented UX'],
    toolsUsed: ['WordPress', 'Google Business Profile', 'Google Search Console', 'Canva', 'Elementor', 'GA4'],
    caseStudyDetails: {
      challenge:
        'Food testing and laboratory websites demand high regulatory trust, scientific precision, and clear pathways for food manufacturers, cloud kitchens, and restaurants to request sample testing quotes and audits.',
      strategy:
        'Structured clear testing domains (Microbiological, Chemical, Nutritional Facts, Shelf-Life Analysis, FSSAI Compliance) with dedicated search-optimized headings, local SEO signals, and friction-free inquiry forms.',
      execution: [
        'Built clean, responsive Elementor page templates highlighting laboratory capabilities and certifications.',
        'Conducted keyword research for regional food safety and FSSAI testing queries.',
        'Integrated WhatsApp and sample submission inquiry CTAs with event tracking.',
      ],
      technicalEdge:
        'Implemented structured data schema for laboratory services, clean DOM hierarchy, and mobile-first tap targets for instant sample testing inquiries.',
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Research',
    shortDescription: 'Understand audience, competitors, keywords, and search intent.',
    description:
      'Deep research forms the bedrock of every successful campaign. I analyze audience demographics, study competitor positioning, uncover high-intent keyword clusters, and map informational versus commercial search intent.',
    deliverables: ['Competitor SERP audit', 'Keyword opportunity matrix', 'Search intent classification', 'Audience persona outlines'],
    tools: ['Google Keyword Planner', 'Ubersuggest', 'Google Search', 'Google Search Console'],
  },
  {
    step: '02',
    title: 'Strategize',
    shortDescription: 'Identify opportunities and plan SEO, advertising, and content activities.',
    description:
      'Translate research insights into an actionable roadmap. Define site architecture, heading structures, ad campaign budgets, target match types, and social content themes with realistic timelines.',
    deliverables: ['Content & editorial calendar', 'SEO site silo plan', 'PPC campaign structure & budget pacing', 'KPI definition'],
    tools: ['Google Sheets', 'Notion', 'Google Ads Plan', 'Meta Ads Manager'],
  },
  {
    step: '03',
    title: 'Create',
    shortDescription: 'Develop optimized website content, landing pages, and social media creatives.',
    description:
      'Execute high-converting assets with meticulous attention to detail: build responsive Elementor templates, author SEO-optimized headings and body prose, craft ad copy variations, and design social creatives.',
    deliverables: ['Responsive Elementor landing pages', 'SEO-rich blog & service copy', 'High-CTR ad headlines & descriptions', 'Social visual creatives'],
    tools: ['WordPress', 'Elementor', 'Canva', 'HTML/CSS', 'ChatGPT / Gemini'],
  },
  {
    step: '04',
    title: 'Launch',
    shortDescription: 'Implement campaigns and publish content across relevant channels.',
    description:
      'Roll out the plan systematically: publish and index new site pages via Google Search Console, launch ad campaigns with strict budget caps, verify tracking pixels, and schedule social media broadcasts.',
    deliverables: ['Live indexed web pages', 'Active Google & Meta ad campaigns', 'Scheduled social posts', 'Verified conversion tracking'],
    tools: ['Google Search Console', 'Google Ads', 'Meta Business Suite', 'WhatsApp Business'],
  },
  {
    step: '05',
    title: 'Analyze & Improve',
    shortDescription: 'Monitor performance and identify opportunities for optimization.',
    description:
      'Marketing is never one-and-done. Continuously monitor Google Analytics 4 sessions, Search Console query impressions, and ad CPC/CTR to eliminate negative keywords, refine copy, and improve conversion flow.',
    deliverables: ['Weekly & monthly performance reports', 'Negative keyword updates', 'On-page title/meta CTR experiments', 'Conversion rate recommendations'],
    tools: ['Google Analytics 4', 'Google Search Console', 'Google Ads Reports', 'Meta Insights'],
  },
];

export const TOOLS_LIST: ToolItem[] = [
  { name: 'Google Analytics 4', category: 'Analytics & Search', description: 'Event tracking, traffic acquisition channels, user session analysis, and conversion funnels.', iconType: 'BarChart', tag: 'Analytics' },
  { name: 'Google Search Console', category: 'Analytics & Search', description: 'Search query performance, organic CTR, indexation status, sitemap submission, and coverage error fixes.', iconType: 'Search', tag: 'SEO' },
  { name: 'Google Ads', category: 'Paid Advertising', description: 'Search, Display, and Video campaigns with precise keyword match types, negative lists, and bid strategies.', iconType: 'Target', tag: 'PPC' },
  { name: 'Google Keyword Planner', category: 'Analytics & Search', description: 'Historical search volumes, competition levels, CPC estimates, and keyword expansion.', iconType: 'Key', tag: 'Research' },
  { name: 'Meta Business Suite', category: 'Paid Advertising', description: 'Facebook and Instagram ad campaigns, custom audience targeting, carousel formats, and post scheduling.', iconType: 'Layers', tag: 'Paid Social' },
  { name: 'LinkedIn Campaign Manager', category: 'Paid Advertising', description: 'B2B targeted sponsored content, lead gen forms, and professional demographic targeting.', iconType: 'Briefcase', tag: 'B2B Ads' },
  { name: 'YouTube Studio', category: 'Analytics & Search', description: 'Video upload metadata optimization, thumbnail testing, tags, and audience retention metrics.', iconType: 'Video', tag: 'Video SEO' },
  { name: 'WordPress', category: 'Web & CMS', description: 'Content management, permalinks, theme configuration, site health, and plugin ecosystem administration.', iconType: 'Globe', tag: 'CMS' },
  { name: 'Elementor', category: 'Web & CMS', description: 'Drag-and-drop responsive page building, global typography/color styles, and dynamic landing pages.', iconType: 'Layout', tag: 'Page Builder' },
  { name: 'Canva', category: 'Design & Creative', description: 'Social media visual design, banner layouts, promotional posters, and branding collateral.', iconType: 'Palette', tag: 'Graphics' },
  { name: 'Ubersuggest', category: 'Analytics & Search', description: 'Domain traffic estimation, top pages audit, backlink overview, and content idea generation.', iconType: 'Compass', tag: 'SEO Audit' },
  { name: 'ChatGPT', category: 'AI & Productivity', description: 'Content ideation, copy drafting assistance, keyword grouping, and outline structuring.', iconType: 'Cpu', tag: 'AI Assist' },
  { name: 'Gemini', category: 'AI & Productivity', description: 'Market research synthesis, ad variation testing, and strategic content drafting.', iconType: 'Sparkles', tag: 'AI Assist' },
  { name: 'Claude', category: 'AI & Productivity', description: 'Long-form editorial review, tone-of-voice alignment, and comprehensive documentation.', iconType: 'FileText', tag: 'AI Assist' },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'S.K. Somaiya, India',
    degree: 'Bachelor of Science, Computer Science (Honours)',
    period: 'September 2021 – March 2024',
    grade: 'GPA: 8.64 / 10.0',
    highlights: [
      'Graduated with distinction (8.64 GPA) with deep technical training in computer systems, algorithms, web technologies, and database architecture.',
      'Gained solid foundational skills in HTML, CSS, JavaScript, and web mechanics that directly fuel advanced technical SEO and website performance optimization.',
      'Developed rigorous quantitative and data analytical methods now applied to marketing analytics, user funnels, and campaign measurement.',
    ],
  },
  {
    institution: 'SIES College of Arts, Science and Commerce, India',
    degree: 'Bachelor of Science',
    period: 'August 2017 – May 2019',
    highlights: [
      'Comprehensive scientific education emphasizing analytical logic, empirical observation, problem-solving, and structured methodologies.',
    ],
  },
  {
    institution: 'Professional Certification',
    degree: 'Advanced Digital Marketing Diploma',
    period: 'Completed Professional Credential',
    highlights: [
      'Specialized curriculum covering Search Engine Optimization (SEO), Google Search & Display Ads, Meta Advertising, Social Media Management, WordPress Web Development, and Google Analytics.',
      'Hands-on practical projects building client websites, conducting live keyword research, and formulating campaign strategies.',
    ],
  },
];

export const WHY_WORK_WITH_ME: WhyWorkWithMeItem[] = [
  {
    title: 'Computer Science Foundation',
    description: 'B.Sc. CS graduate with an 8.64 GPA. Understands the underlying code, crawlability, DOM structure, and Core Web Vitals behind search engine algorithms.',
    subtext: 'Translates technical jargon into real search advantages.',
    iconName: 'Code',
  },
  {
    title: 'Full-Spectrum Marketing Mindset',
    description: 'Bridges organic SEO, paid Google/Meta advertising, engaging social media, and WordPress development so every marketing channel supports the other.',
    subtext: 'No siloed execution; unified growth strategy.',
    iconName: 'Layers',
  },
  {
    title: 'Hands-On Multi-Client Experience',
    description: 'Active practical experience managing real client web properties (KRS Associates, Sagi Multimedia, OxyPro) from site development to search maintenance.',
    subtext: 'Tested in real commercial environments.',
    iconName: 'Briefcase',
  },
  {
    title: 'Data-Driven & Analytical',
    description: 'Rejects guesswork. Utilizes Google Analytics 4, Search Console, and campaign metrics to substantiate every optimization decision.',
    subtext: 'Evidence-based marketing, measurable outcomes.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Creative Problem Solving',
    description: 'Pairs clean design aesthetics (Elementor, Canva) with clear, compelling copywriting that speaks to user pain points and search intent.',
    subtext: 'Content that captures both human interest and search crawlers.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Business & Recruiter Alignment',
    description: 'Focuses on user journey, inquiry generation, and practical business goals rather than inflated vanity metrics.',
    subtext: 'Reliable, collaborative team player ready to contribute immediately.',
    iconName: 'CheckCircle2',
  },
];
