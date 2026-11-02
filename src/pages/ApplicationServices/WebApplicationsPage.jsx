import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Web',
    title: 'Web Applications',
    subtitle: 'High-performance, progressive web platforms engineered with modern frameworks, accessibility standards, and the resilience that enterprise-grade production demands.',
    bgImg: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Modern Web Engineering — From SPAs to Micro Frontends',
    body: [
      "The web is the universal delivery layer for enterprise software — and building it well requires more than choosing a framework. Architecture decisions made early determine whether your web application can scale to millions of users, pass accessibility audits, maintain consistent performance globally, and evolve quickly without accumulating technical debt.",
      "Improx Tech's web engineering practice combines deep frontend expertise, modern backend architecture, and DevOps capability to deliver web applications that are fast, accessible, and built to last.",
    ],
  },
  features: [
    { icon: 'fa-bolt', title: 'Core Web Vitals Optimisation', desc: 'LCP, CLS, and INP tuned for peak performance — every application ships with Lighthouse scores over 90 out of the box.' },
    { icon: 'fa-universal-access', title: 'WCAG 2.2 Accessibility', desc: 'Accessibility built in from design to code — keyboard navigation, ARIA semantics, and screen reader compatibility by default.' },
    { icon: 'fa-mobile-screen-button', title: 'Progressive Web App (PWA)', desc: 'Offline capability, installability, and push notifications bridging the gap between web and native mobile experiences.' },
    { icon: 'fa-magnifying-glass', title: 'SEO-Optimised Architecture', desc: 'Server-side rendering, structured data, semantic HTML, and Core Web Vitals excellence for maximum organic visibility.' },
    { icon: 'fa-lock', title: 'Security Hardening', desc: 'CSP headers, CSRF protection, XSS prevention, and dependency vulnerability scanning built into every CI pipeline.' },
    { icon: 'fa-gauge', title: 'Real-User Monitoring', desc: 'RUM integration with performance budgets, error tracking, and session replay for continuous production quality assurance.' },
  ],
  benefits: [
    { title: 'Faster Page Loads = Higher Conversions', desc: 'A 1-second improvement in page load time increases conversions by up to 27% — our performance-first approach delivers this.' },
    { title: 'Reduced Bounce Rates', desc: 'Smooth, responsive interactions built on modern frameworks dramatically reduce user abandonment on critical journeys.' },
    { title: 'Lower Infrastructure Costs', desc: 'Edge caching, static generation, and CDN-optimised architectures reduce origin server load and hosting costs.' },
    { title: 'Accessibility & Legal Compliance', desc: 'WCAG-compliant applications protect against accessibility litigation and expand your accessible user base.' },
  ],
  process: [
    { num: '01', title: 'Design System & Component Architecture', desc: 'Atomic design systems and reusable component libraries that enforce consistency and accelerate future development.' },
    { num: '02', title: 'Frontend & Backend Engineering', desc: 'Parallel development tracks for UI components, API layer, and data models with contract-first API design.' },
    { num: '03', title: 'Performance & Accessibility Auditing', desc: 'Lighthouse, axe, and WebPageTest audits integrated into the CI pipeline — quality gates on every pull request.' },
    { num: '04', title: 'Cross-Browser & Device Testing', desc: 'Automated Playwright/Cypress suites run against Chrome, Safari, Firefox, and Edge on desktop and mobile viewports.' },
    { num: '05', title: 'CDN Deployment & Global Distribution', desc: 'Static assets, edge caching, and regional deployments optimise TTFB for users in every geography.' },
  ],
  useCases: [
    { title: 'Customer Portals & Self-Service', desc: 'Authenticated portals giving customers visibility into orders, invoices, support tickets, and account management.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=700&q=80' },
    { title: 'Internal Operations Dashboards', desc: 'Real-time operational command centres aggregating data from multiple systems for operational teams.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title: 'Content & Knowledge Platforms', desc: 'High-traffic content platforms with personalisation engines, search, and editorial workflow management.', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80' },
    { title: 'E-commerce & Transactional Platforms', desc: 'Conversion-optimised storefronts with complex catalogue management, promotions, and checkout flows.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React', 'Next.js', 'Vue.js', 'Nuxt', 'Angular', 'TypeScript', 'TailwindCSS', 'Node.js', 'FastAPI', 'GraphQL', 'REST', 'PostgreSQL', 'Redis', 'Cloudflare', 'Vercel', 'AWS CloudFront', 'Playwright', 'Cypress'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80', title: 'Server Components in 2026: When to Use Them', desc: 'A practical decision framework for React Server Components, SSR, and static generation in modern web apps.', date: 'June 4, 2026' },
    { img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80', title: 'Core Web Vitals: The Engineering Playbook', desc: 'Technical strategies that actually move LCP, CLS, and INP from red to green in production applications.', date: 'May 21, 2026' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'Micro Frontends at Scale: Lessons from Production', desc: 'What we learned building micro frontend architectures for enterprise teams across 4 different organisations.', date: 'May 8, 2026' },
  ],
  ctaHeading: 'Ready to Build a World-Class Web Application?',
  ctaBody: 'Share your product vision and technical requirements — our architects will design the optimal web engineering approach for your context.',
};

function WebApplicationsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default WebApplicationsPage;
