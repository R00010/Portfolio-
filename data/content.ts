export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  slug: string;
  link: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type ExpertiseItem = {
  title: string;
  level: number;
  blurb: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Impact', href: '#impact' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export const services: ServiceItem[] = [
  {
    title: 'Admin-Controlled Web Platforms',
    icon: 'ShieldCheck',
    description:
      'I architect full-stack ecosystems where every operational workflow can be managed through robust role-aware dashboards and intelligent access policies.',
    bullets: [
      'Multi-role admin panel architecture and route security strategy',
      'Granular module-level permission and visibility control',
      'Operational dashboards with productivity and usage insights',
      'Secure data boundaries between teams, departments, and farm/site units'
    ]
  },
  {
    title: 'Automation-Driven Process Systems',
    icon: 'Bot',
    description:
      'From booking pipelines to stock notifications, I design process automation that removes repetitive work and keeps organizations responsive in real time.',
    bullets: [
      'Automated event triggers for inventory and booking states',
      'Rule-based notifications for low stock, overdue actions, and escalations',
      'Business workflow handoff logic between users and administrators',
      'Structured process logs for quality auditing and operational visibility'
    ]
  },
  {
    title: 'Scalable Service Infrastructure',
    icon: 'Network',
    description:
      'I build maintainable service architecture for platforms expected to grow with higher user load, broader feature scope, and multi-site deployments.',
    bullets: [
      'Modular backend services with scalable data modeling',
      'Environment-ready cloud deployment and release setup',
      'Frontend architecture optimized for maintainability and expansion',
      'Structured API layer designed for growth and integration readiness'
    ]
  },
  {
    title: 'Design-Driven Product Interfaces',
    icon: 'Palette',
    description:
      'With a graphic design background, I combine visual polish with practical UX systems to create interfaces that are both premium and intuitive.',
    bullets: [
      'Dark premium visual systems with coherent spacing and typography',
      'Action-oriented dashboard components for high-clarity workflows',
      'Reusable visual tokens and section-level design consistency',
      'Interaction patterns that guide users across complex operations'
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Abdul Rehman Pharmacy Management System',
    slug: 'pharmacy-management',
    link: 'https://abdulpharma.vercel.app',
    summary: 'Cloud-based pharmacy operations platform with role-aware modules.',
    description:
      'A cloud-powered pharmacy platform designed to streamline inventory, sales, and reporting for multi-user teams. The architecture supports administrators, staff users, and operational monitoring through centralized control panels.',
    features: [
      'Secure authentication pipeline with protected route architecture',
      'Role-based access management across admin and operational users',
      'Inventory tracking workflows with medicine-wise stock visibility',
      'Sales lifecycle management with structured billing flows',
      'Interactive analytics dashboard for quick business insight',
      'Report generation pipelines for transaction and stock analysis'
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Cloud Deployment'],
    metrics: [
      { label: 'Core Modules', value: '12+' },
      { label: 'Inventory Visibility', value: 'Live' },
      { label: 'Role Layers', value: '3' }
    ]
  },
  {
    title: 'MGM Farm Stock Management System',
    slug: 'farm-stock-management',
    link: 'https://mgmmed.vercel.app',
    summary: 'Farm inventory and dispensing management for multi-farm operations.',
    description:
      'An operations-focused farm inventory platform developed for stock management, dispensing controls, and batch-level monitoring. It supports multi-farm administration with dashboards built for clarity and daily execution speed.',
    features: [
      'Farm-wise stock tracking across distributed inventory points',
      'Dispensing workflow controls with action history mapping',
      'Batch monitoring to reduce operational errors and expiry risk',
      'Automated alert signals for low stock and key thresholds',
      'Role-based administrative controls for controlled operations',
      'Operational dashboards for performance and stock intelligence'
    ],
    stack: ['Next.js', 'React', 'Node Services', 'Tailwind CSS', 'Cloud Hosting'],
    metrics: [
      { label: 'Managed Farms', value: 'Multi' },
      { label: 'Critical Alerts', value: 'Automated' },
      { label: 'Stock Accuracy', value: 'Optimized' }
    ]
  },
  {
    title: 'Fahadi HVAC Service Booking Platform',
    slug: 'hvac-booking',
    link: 'https://fahadi.vercel.app',
    summary: 'End-to-end service booking system with workflow-focused admin dashboard.',
    description:
      'A full-stack booking platform for HVAC services that combines customer-facing appointment workflows with admin-level operational control. It establishes a structured service pipeline from booking intake to tracking and fulfillment.',
    features: [
      'Customer booking flow with structured service request capture',
      'Admin-controlled booking lifecycle and assignment management',
      'User dashboard for transparent request status updates',
      'Operational activity tracking and workflow state control',
      'Scalable architecture for service expansion and region growth',
      'Data-driven management view for booking and team performance'
    ],
    stack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Booking Stages', value: '5+' },
      { label: 'Admin Visibility', value: 'Complete' },
      { label: 'Workflow Style', value: 'Structured' }
    ]
  }
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: 'System Architecture',
    level: 92,
    blurb:
      'Designing maintainable full-stack architecture with clear domain boundaries and extensible module planning.'
  },
  {
    title: 'Admin Controlled Systems',
    level: 96,
    blurb:
      'Building high-control interfaces where permissions, workflows, and reporting are deeply integrated into operations.'
  },
  {
    title: 'Cloud Deployment',
    level: 90,
    blurb:
      'Deploying production systems with stable hosting pipelines, uptime awareness, and scalable deployment patterns.'
  },
  {
    title: 'Automation',
    level: 94,
    blurb:
      'Crafting automation-first process flows that minimize manual steps and increase consistency across teams.'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Abdul translates operations into software with unusual clarity. The admin panel structure and practical workflows made our team immediately more efficient.',
    name: 'Operations Lead',
    role: 'Process Management',
    company: 'Healthcare Retail Group'
  },
  {
    quote:
      'He combines technical implementation with design instincts. The final product looked premium and also solved our daily process bottlenecks.',
    name: 'Project Manager',
    role: 'Digital Delivery',
    company: 'Service Automation Agency'
  },
  {
    quote:
      'The inventory logic and dashboard system were executed with attention to detail. Reporting visibility improved and the team trust increased.',
    name: 'Stock Supervisor',
    role: 'Inventory Operations',
    company: 'Farm Management Team'
  },
  {
    quote:
      'From first planning call to final deployment, Abdul worked like a solution architect, not just a coder. The platform was reliable and cleanly organized.',
    name: 'Founder',
    role: 'Business Owner',
    company: 'Regional HVAC Services'
  },
  {
    quote:
      'His approach to role-based system control solved our access conflicts. Departments now work independently without data overlap issues.',
    name: 'Admin Coordinator',
    role: 'Internal Systems',
    company: 'Operations Desk'
  },
  {
    quote:
      'The project had speed, structure, and quality. Automation alerts now prevent stock outages and support better planning across farms.',
    name: 'Field Supervisor',
    role: 'Farm Network',
    company: 'Agricultural Supply Team'
  }
];

export const heroHighlights: string[] = [
  'Self-taught full stack systems architect',
  '1 year of intensive hands-on product engineering',
  'Background in graphic design and freelance delivery',
  'Focus on scalable service and admin-control platforms',
  'Builder of pharmacy, farm, and service booking systems'
];

export const longFormStory: string[] = [
  'I am Abdul Rehman, a self-taught full stack problem solver focused on converting operational pain points into software architecture that teams can rely on daily.',
  'Over one year of intensive project building, I have delivered platforms that blend admin visibility, automation, and scalable infrastructure into practical products.',
  'My design background helps me craft premium interfaces while preserving technical depth, resulting in platforms that look strong and perform stronger.',
  'From freelance work to full-cycle deployments, I align planning, implementation, and system control around long-term maintainability.',
  'I prioritize clean structure, real-world usability, and growth-ready code for businesses that need software as a dependable operational backbone.'
];

export const impactStats = [
  {
    label: 'Production Systems',
    value: 3,
    suffix: '+',
    description: 'Live systems built and deployed for real operational use cases.'
  },
  {
    label: 'Admin Controlled',
    value: 100,
    suffix: '%',
    description: 'Every solution emphasizes centralized admin governance and visibility.'
  },
  {
    label: 'Hands-on Experience',
    value: 1,
    suffix: ' Year',
    description: 'Intensive, project-driven full stack engineering experience.'
  },
  {
    label: 'Cloud Uptime Focus',
    value: 24,
    suffix: '/7',
    description: 'Deployment approach designed for always-on service reliability.'
  }
];
