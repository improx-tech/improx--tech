import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Custom Software',
    title: 'Custom Software Development',
    subtitle: 'Bespoke digital solutions engineered from the ground up — built to encapsulate your unique business logic and deliver a decisive competitive advantage.',
    bgImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80',
    bgVideo: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-computer-keyboard-close-up-4264-large.mp4',
  },
  overview: {
    heading: 'Software Designed Around Your Business — Not the Other Way Around',
    body: [
      "Off-the-shelf solutions force your organisation to adapt to their limitations. At Improx Tech, we believe your software should mirror your operations, not constrain them. We architect bespoke digital solutions from scratch — every feature, data structure, and workflow precision-engineered to your context.",
      "From replacing outdated internal tools to building entirely new digital ecosystems, our custom development practice combines product thinking with deep engineering expertise to deliver software that becomes a genuine competitive asset.",
    ],
  },
  features: [
    { icon: 'fa-lock', title: 'Proprietary Logic Encapsulation', desc: 'Translate your unique business rules, pricing engines, and trade secrets into secure, tested algorithms that no SaaS product can replicate.' },
    { icon: 'fa-puzzle-piece', title: 'Seamless System Integration', desc: 'Connect internal systems, third-party APIs, and legacy databases into one cohesive operational platform with zero data silos.' },
    { icon: 'fa-gauge-high', title: 'High-Performance Architecture', desc: 'Handle intensive data processing, high user concurrency, and complex transaction routing without performance degradation.' },
    { icon: 'fa-palette', title: 'Bespoke UX Design', desc: "Interfaces purpose-built for your users' actual workflows — not generic templates adapted with surface-level restyling." },
    { icon: 'fa-shield-halved', title: 'Security by Default', desc: 'OWASP-compliant code, role-based access control, and encryption standards embedded from the first sprint — never bolted on after.' },
    { icon: 'fa-up-right-and-down-left-from-center', title: 'Elastic Scalability', desc: 'Cloud-native architectures that automatically scale resources based on real-time demand without re-engineering core systems.' },
  ],
  benefits: [
    { title: 'Full IP Ownership', desc: 'You own the source code, architecture, and data outright — zero licensing fees, no vendor lock-in.' },
    { title: 'Operational Efficiency Gains', desc: 'Automate manual processes and streamline operations precisely tailored to how your team works, delivering measurable productivity lift.' },
    { title: 'Sustainable Codebase', desc: 'Clean, documented, and modular codebases built to modern standards so future enhancements are seamless and affordable.' },
    { title: 'Competitive Differentiation', desc: 'Software no competitor can buy off a shelf — your processes, your IP, your moat.' },
  ],
  process: [
    { num: '01', title: 'Discovery & Requirements Engineering', desc: 'We immerse in your operations to map every requirement, defining the optimal system architecture and technology choices.' },
    { num: '02', title: 'UX Prototyping & Validation', desc: 'Wireframes and interactive prototypes align stakeholders on the solution before a single line of production code is written.' },
    { num: '03', title: 'Agile Development Sprints', desc: 'Bi-weekly sprints deliver functional modules with continuous demos, enabling feedback-driven evolution throughout development.' },
    { num: '04', title: 'QA & Security Validation', desc: 'Automated test suites, penetration testing, and performance benchmarks validate every release candidate.' },
    { num: '05', title: 'Deployment & Long-term Evolution', desc: 'CI/CD-powered rollout followed by monitoring, support, and ongoing feature roadmap execution.' },
  ],
  useCases: [
    { title: 'ERP & Operations Platforms', desc: 'Centralise finance, procurement, inventory, and HR into a single custom-built management platform.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80' },
    { title: 'FinTech & Trading Systems', desc: 'Secure, low-latency trading platforms, payment gateways, and KYC/AML compliance engines.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
    { title: 'Healthcare Management Systems', desc: 'HIPAA-compliant patient portals, EHR platforms, and clinical decision support tools.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Supply Chain & Logistics Platforms', desc: 'Real-time shipment tracking, demand forecasting, and warehouse automation systems.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React', 'Next.js', 'Node.js', 'Python', 'Java / Spring Boot', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'Terraform'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'When Custom Software Beats SaaS: A Decision Framework', desc: 'Five criteria that determine when building beats buying for enterprise software needs.', date: 'June 5, 2026' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title: 'Domain-Driven Design for Complex Business Software', desc: 'How DDD principles help align engineering models with real-world operational domains.', date: 'May 18, 2026' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'Securing Custom Applications from Day Zero', desc: 'A practical DevSecOps checklist for development teams building proprietary enterprise software.', date: 'May 5, 2026' },
  ],
  ctaHeading: 'Ready to Build Your Custom Software Vision?',
  ctaBody: 'Share your goals and our architects will define the right approach, technology stack, and delivery timeline for your project.',
};

function CustomSoftwarePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default CustomSoftwarePage;
