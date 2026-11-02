import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · SaaS',
    title: 'SaaS Development',
    subtitle: 'Multi-tenant, subscription-based cloud products engineered for global scale, high concurrency, and the rapid iteration velocity that SaaS markets demand.',
    bgImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    bgVideo: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-animation-31991-large.mp4',
  },
  overview: {
    heading: 'Building Subscription Products That Scale to Millions of Users',
    body: [
      "SaaS is the dominant software delivery model of the modern era — but building a production-grade SaaS product is far more complex than building a standard web application. Multi-tenancy, subscription billing, usage metering, isolation architectures, and global distribution require a specialist approach.",
      "Improx Tech has engineered SaaS products from zero-to-one and scaled existing platforms to serve enterprise customers globally. We handle the hard infrastructure problems so your product team can focus on features that differentiate.",
    ],
  },
  features: [
    { icon: 'fa-building', title: 'Multi-Tenant Architecture', desc: 'Silo, pool, or hybrid tenancy models designed to balance data isolation, cost efficiency, and performance at any scale.' },
    { icon: 'fa-credit-card', title: 'Subscription & Billing Engine', desc: 'Stripe / Chargebee integrations, usage-based pricing, tiered plans, and dunning automation built into the core platform.' },
    { icon: 'fa-earth-americas', title: 'Global CDN & Edge Delivery', desc: 'Sub-100ms response times for users worldwide via strategically distributed content and compute infrastructure.' },
    { icon: 'fa-chart-line', title: 'Usage Analytics & Metering', desc: 'Per-tenant consumption tracking, feature usage heatmaps, and MRR/churn dashboards that inform product decisions.' },
    { icon: 'fa-key', title: 'SSO & Identity Management', desc: 'SAML 2.0, OIDC, and OAuth 2.0 integrations with enterprise identity providers for seamless enterprise onboarding.' },
    { icon: 'fa-infinity', title: 'Continuous Deployment Pipeline', desc: 'Feature flags, A/B testing infrastructure, and canary releases enable daily deployments without service disruption.' },
  ],
  benefits: [
    { title: 'Faster Time-to-Revenue', desc: 'Pre-built SaaS accelerators — auth, billing, onboarding, notifications — compress your path from concept to paying customers.' },
    { title: 'Enterprise-Ready from Launch', desc: 'SSO, audit logs, role management, and SLA reporting built in — closing enterprise deals without costly retrofits.' },
    { title: 'Predictable Infrastructure Costs', desc: 'Auto-scaling with cost controls ensures your infrastructure spend scales proportionally with revenue, not ahead of it.' },
    { title: 'Data Security & Compliance', desc: 'SOC 2 Type II controls, GDPR-compliant data residency, and tenant data isolation by design — not afterthought.' },
  ],
  process: [
    { num: '01', title: 'Product & Tenancy Strategy', desc: 'Define your target customer, pricing model, and the tenancy architecture that best serves your market and margin goals.' },
    { num: '02', title: 'SaaS Foundation Build', desc: 'Auth, billing, onboarding, notifications, and role management — the platform layer your features run on.' },
    { num: '03', title: 'Core Feature Development', desc: 'Your differentiating product features, built in priority order with customer feedback loops at every sprint boundary.' },
    { num: '04', title: 'Enterprise Feature Layer', desc: 'SSO, audit trails, admin panels, usage reporting, and security controls that unlock enterprise deal sizes.' },
    { num: '05', title: 'Scale, Optimise & Grow', desc: 'Performance profiling, database optimisation, cost engineering, and infrastructure scaling as your user base grows.' },
  ],
  useCases: [
    { title: 'B2B Workflow Automation SaaS', desc: 'Vertical-specific workflow tools replacing spreadsheets and email for entire industry segments.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
    { title: 'Developer Tools & API Platforms', desc: 'Self-serve API products with dashboards, usage metering, documentation, and SDK generation.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
    { title: 'HealthTech SaaS Platforms', desc: 'HIPAA-compliant practice management, telehealth, and patient engagement SaaS products.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
    { title: 'Analytics & Reporting SaaS', desc: 'Embedded analytics platforms delivering insights to end customers within the host application.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React', 'Next.js', 'Node.js', 'Python / FastAPI', 'Go', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Chargebee', 'Auth0', 'Clerk', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'LaunchDarkly'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', title: 'Multi-Tenant Architecture Patterns Compared', desc: 'Silo vs. pool vs. bridge — a technical analysis of the three dominant SaaS tenancy models.', date: 'June 9, 2026' },
    { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title: 'The SaaS Billing Layer: What to Build vs. Buy', desc: 'Evaluating Stripe, Chargebee, and custom billing engines for different SaaS business models.', date: 'May 25, 2026' },
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'Designing for Enterprise SaaS Sales from Day One', desc: 'The technical features that open enterprise deal sizes and what it costs to add them later.', date: 'May 12, 2026' },
  ],
  ctaHeading: 'Ready to Launch Your SaaS Product?',
  ctaBody: 'Tell us about your vision, target market, and key differentiators — our team will design the architecture and delivery plan.',
};

function SaaSDevelopmentPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default SaaSDevelopmentPage;
