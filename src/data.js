/* ─── All portfolio data ─────────────────────────────────────────── */

export const ROLES = [
  'Full-Stack Engineer',
  'Fintech Builder',
  'ERPNext Consultant',
  'React Developer',
  'API Architect',
];

export const STATS = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Products Shipped', value: '10+' },
  { label: 'Frameworks Mastered', value: '6+' },
  { label: 'Currently', value: 'Available' },
];

export const PROJECTS = [
  {
    id: 'paystar',
    title: 'PayStar',
    subtitle: 'VTU Fintech PWA',
    description:
      'Built Nigeria\'s full-stack VTU fintech platform from the ground up — solo. Handles airtime, data, cable TV, electricity, exam pins, wallet top-ups, referral engine, push notifications, and admin analytics.',
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'PWA'],
    category: ['fintech', 'fullstack'],
    live: 'https://paystar.com.ng',
    github: 'https://github.com/sulaimonazeez',
    featured: true,
    gradient: 'from-orange-500/20 to-amber-600/10',
    accent: '#f97316',
    icon: '💳',
  },
  {
    id: 'paystar-blog',
    title: 'PayStar Blog',
    subtitle: 'Next.js 15 + MongoDB',
    description:
      'Full content platform for PayStar with TipTap rich editor, JWT auth, admin dashboard, dynamic sitemap, and a 20-post SEO content library targeting Nigerian VTU resellers.',
    tags: ['Next.js 15', 'MongoDB', 'TipTap', 'JWT', 'SEO'],
    category: ['frontend', 'fullstack'],
    live: 'https://blog.paystar.com.ng',
    github: 'https://github.com/sulaimonazeez',
    featured: false,
    gradient: 'from-blue-500/20 to-indigo-600/10',
    accent: '#6366f1',
    icon: '📝',
  },
  {
    id: 'vitalvida',
    title: 'VitalVida ERP',
    subtitle: 'Enterprise Frappe Platform',
    description:
      'Custom Frappe/ERPNext enterprise platform for a Nigerian cash-on-delivery e-commerce business. Built telesales, finance, delivery, logistics, inventory, and media buyer portals across 15+ custom modules.',
    tags: ['Python', 'Frappe', 'ERPNext', 'MariaDB', 'Linux'],
    category: ['backend', 'fullstack'],
    live: 'https://vitalvida.systemforce.ng',
    github: 'https://github.com/sulaimonazeez',
    featured: true,
    gradient: 'from-emerald-500/20 to-teal-600/10',
    accent: '#10b981',
    icon: '⚙️',
  },
  {
    id: 'xentrovest',
    title: 'Xentrovest',
    subtitle: 'Crypto Investment Platform',
    description:
      'Premium crypto investment platform with sleek Framer Motion animations, secure JWT auth, deposit/withdrawal flows, and real-time portfolio tracking.',
    tags: ['React 19', 'Node.js', 'JWT', 'Framer Motion', 'Tailwind'],
    category: ['frontend', 'fintech', 'fullstack'],
    live: 'https://xentrovest.vercel.app',
    github: 'https://github.com/sulaimonazeez/xentrovest',
    featured: false,
    gradient: 'from-purple-500/20 to-violet-600/10',
    accent: '#8b5cf6',
    icon: '₿',
  },
  {
    id: 'investng',
    title: 'InvestNG',
    subtitle: 'ROI Investment Platform',
    description:
      'Nigerian ROI investment platform — full frontend and backend. Handles investment plans, ROI calculations, withdrawals, and user dashboards with real-time balance updates.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    category: ['frontend', 'fintech', 'fullstack'],
    live: 'https://invest-ng.vercel.app',
    github: 'https://github.com/sulaimonazeez',
    featured: false,
    gradient: 'from-cyan-500/20 to-sky-600/10',
    accent: '#06b6d4',
    icon: '📈',
  },
  {
    id: 'chat-app',
    title: 'RealChat',
    subtitle: 'Real-Time Chat App',
    description:
      'Full-stack real-time chat application with WebSockets, room-based messaging, user presence indicators, and a clean React frontend backed by Django Channels.',
    tags: ['React', 'Django', 'WebSockets', 'MySQL', 'Python'],
    category: ['backend', 'fullstack'],
    live: 'https://chatfronted.vercel.app',
    github: 'https://github.com/sulaimonazeez/chatfronted',
    featured: false,
    gradient: 'from-pink-500/20 to-rose-600/10',
    accent: '#ec4899',
    icon: '💬',
  },
];

export const EXPERIENCE = [
  {
    id: 'paystar',
    role: 'Founder & Lead Engineer',
    company: 'PayStar',
    period: '2023 — Present',
    type: 'Founder',
    description:
      'Built Nigeria\'s VTU fintech PWA entirely solo from concept to production. Handles airtime, data, electricity, cable TV, exam pins, wallet, referrals, push notifications, and admin analytics. Serving real Nigerian users daily.',
    achievements: [
      'Architected the entire full-stack from scratch — React 19 frontend, Node.js/Express API, MongoDB',
      'Integrated multiple Nigerian payment providers (Paystack, Payvessel) with reconciliation logic',
      'Built progressive web app with offline support, push notifications, and installable UX',
      'Implemented rolling-window fraud detection and device fingerprinting security system',
    ],
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'PWA', 'Paystack'],
    link: 'https://paystar.com.ng',
    side: 'right',
  },
  {
    id: 'vitalvida',
    role: 'Technical Consultant',
    company: 'VitalVida',
    period: '2023 — Present',
    type: 'Contract',
    description:
      'Sole technical contractor for a fast-growing Nigerian COD e-commerce business. Built and maintained a complete custom Frappe/ERPNext enterprise platform covering every business function.',
    achievements: [
      'Delivered 15+ custom DocType modules: telesales, finance, delivery, media buyer portals',
      'Built three-tier payment reconciliation engine with FOR UPDATE locks preventing data races',
      'Set up full Linux/Nginx/Supervisor production stack on Contabo VPS with automated backups',
      'Implemented DA governance system: consignment tracking, strike engine, achievement rewards',
    ],
    tech: ['Python', 'Frappe', 'ERPNext', 'MariaDB', 'Nginx', 'Linux'],
    link: 'https://vitalvida.systemforce.ng',
    side: 'left',
  },
  {
    id: 'xentrovest',
    role: 'Full-Stack Developer',
    company: 'Xentrovest',
    period: '2024',
    type: 'Freelance',
    description:
      'Designed and built a premium crypto investment platform with sophisticated animations, secure authentication flows, and complete investment lifecycle management.',
    achievements: [
      'Built polished Framer Motion animation system with page transitions and micro-interactions',
      'Implemented JWT authentication with refresh token rotation and device sessions',
      'Built admin analytics dashboard with real-time user portfolio data',
    ],
    tech: ['React 19', 'Node.js', 'JWT', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://xentrovest.vercel.app',
    side: 'right',
  },
  {
    id: 'investng',
    role: 'Full-Stack Developer',
    company: 'InvestNG',
    period: '2024',
    type: 'Freelance',
    description:
      'Developed a complete Nigerian ROI investment platform — responsive React frontend and robust Express/MongoDB backend with real-time balance and investment tracking.',
    achievements: [
      'Built full investment lifecycle: deposit → plan selection → ROI accrual → withdrawal',
      'Designed mobile-first UI that converts visitors to registered investors',
      'Integrated Paystack for seamless deposit and withdrawal processing',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
    link: 'https://invest-ng.vercel.app',
    side: 'left',
  },
  {
    id: 'freelance',
    role: 'Senior Full-Stack Developer',
    company: 'Independent / Systemforce',
    period: '2018 — 2023',
    type: 'Freelance',
    description:
      'Delivered 20+ client projects across Nigeria and globally — e-commerce stores, dashboards, Django backends, real-time apps, and SaaS products. Built reputation for reliable production delivery.',
    achievements: [
      'Delivered Django + React projects for clients across fintech, e-commerce, and education sectors',
      'Built real-time chat application with Django Channels and WebSocket support',
      'Created automated PDF resume generation system serving 500+ users',
      'Maintained 100% client delivery rate across 5 years of freelancing',
    ],
    tech: ['Django', 'React', 'Python', 'MySQL', 'PostgreSQL', 'Bootstrap'],
    link: null,
    side: 'right',
  },
];

export const SKILLS = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  Frontend: ['React 19', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Bootstrap', 'React Query'],
  Backend: ['Node.js', 'Express.js', 'Django', 'Frappe/ERPNext', 'REST APIs', 'WebSockets', 'JWT Auth'],
  Database: ['MongoDB', 'MySQL', 'MariaDB', 'SQLite', 'Redis', 'Mongoose'],
  DevOps: ['Vercel', 'DigitalOcean', 'Nginx', 'Linux', 'Git', 'Docker', 'Supervisor'],
  Fintech: ['Paystack', 'Payvessel', 'VTU Integration', 'Payment Reconciliation', 'Webhooks'],
};

export const SERVICES = [
  {
    icon: '🏗️',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications — from pixel-perfect React frontends to battle-tested Node.js/Django backends. Production-ready, scalable, and maintainable.',
    color: '#f97316',
  },
  {
    icon: '⚙️',
    title: 'ERPNext Consulting',
    description:
      'Custom Frappe/ERPNext modules, DocTypes, and workflows tailored to your Nigerian business. Setup, migration, and ongoing technical support.',
    color: '#10b981',
  },
  {
    icon: '💳',
    title: 'Fintech Systems',
    description:
      'VTU platforms, payment gateways, wallet systems, and reconciliation engines built for the Nigerian market. Paystack, Payvessel, and custom provider integrations.',
    color: '#6366f1',
  },
  {
    icon: '🔌',
    title: 'API Development',
    description:
      'RESTful APIs and webhook systems that are secure, documented, and ready for scale. Authentication, rate limiting, and thorough error handling built in.',
    color: '#06b6d4',
  },
  {
    icon: '🔍',
    title: 'Technical Audits',
    description:
      'Deep codebase reviews identifying security vulnerabilities, performance bottlenecks, and architectural debt — with an actionable remediation plan.',
    color: '#ec4899',
  },
  {
    icon: '🚀',
    title: 'DevOps & Deployment',
    description:
      'Server setup, CI/CD, Nginx configuration, SSL, and production hardening on DigitalOcean, Contabo, or Vercel. Your app running reliably at scale.',
    color: '#f59e0b',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Olumide A.',
    role: 'CEO, VitalVida',
    avatar: 'OA',
    color: '#10b981',
    text: 'Azeez delivered a complete enterprise ERP from scratch for our COD business. 15+ custom modules, solid architecture, and he\'s still our go-to technical resource. Exceptional reliability.',
  },
  {
    id: 2,
    name: 'Freelance Client',
    role: 'E-commerce Business Owner',
    avatar: 'FC',
    color: '#6366f1',
    text: 'He rebuilt our entire backend in two weeks, fixed critical bugs we\'d been fighting for months, and documented everything clearly. Exactly what a senior engineer should look like.',
  },
  {
    id: 3,
    name: 'Investment Platform Client',
    role: 'Founder, InvestNG',
    avatar: 'IP',
    color: '#06b6d4',
    text: 'Clean code, great communication, and he actually thinks about your business goals — not just the technical requirements. Delivered on time and within budget.',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/sulaimonazeez',
  linkedin: 'https://linkedin.com/in/sulaimon-olaniyi-73226223a',
  email: 'mailto:olaniyisulaimon221@gmail.com',
};

export const CONTACT_INFO = {
  email: 'olaniyisulaimon221@gmail.com',
  phone: '+2348080891605',
  location: 'Lagos, Nigeria 🇳🇬',
  availability: 'Open to Freelance, Contract & Consulting',
};

// EmailJS config — get these from https://dashboard.emailjs.com
// Service: Email Services tab. Template: Email Templates tab. Public key: Account tab.
export const EMAILJS_CONFIG = {
  serviceId: 'service_dptx723',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: '_wH9jj3tUOzyVLfu8',
};
