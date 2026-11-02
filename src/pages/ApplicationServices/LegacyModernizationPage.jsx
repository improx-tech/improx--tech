import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Modernisation',
    title: 'Legacy Modernization',
    subtitle: 'Systematic, risk-controlled transformation of outdated systems to modern cloud-native architectures — without disrupting the business operations they power.',
    bgImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Transform Yesterday\'s Systems Without Shutting Down Today\'s Business',
    body: [
      "Legacy systems are the unspoken debt of every successful enterprise. They contain decades of institutional knowledge, proven business logic, and critical integrations — but they also hold organisations back. Slow deployment cycles, security vulnerabilities, high maintenance costs, and an inability to integrate with modern systems put your competitive position at risk.",
      "Improx Tech's Legacy Modernisation practice applies proven patterns — strangler fig, branch-by-abstraction, anti-corruption layers — to decompose and replace legacy systems incrementally, with every step delivering value and reducing risk without big-bang rewrites.",
    ],
  },
  features: [
    { icon: 'fa-magnifying-glass-chart', title: 'Application Portfolio Assessment', desc: 'Technical audit of existing systems — code quality, dependency analysis, security posture, and modernisation prioritisation framework.' },
    { icon: 'fa-code-branch', title: 'Strangler Fig Migration Pattern', desc: 'Incrementally replace legacy components with modern equivalents, keeping the system live and operational throughout.' },
    { icon: 'fa-database', title: 'Legacy Data Migration', desc: 'Schema transformation, data cleansing, and validated migration to modern databases with full reconciliation.' },
    { icon: 'fa-shield-halved', title: 'Security Vulnerability Remediation', desc: 'Systematic remediation of CVEs, outdated dependencies, and architectural security gaps exposed during assessment.' },
    { icon: 'fa-rotate', title: 'Re-Architecture to Microservices', desc: 'Decompose monolithic applications into independently deployable microservices with domain-aligned service boundaries.' },
    { icon: 'fa-cloud-arrow-up', title: 'Cloud Migration & Lift-and-Shift', desc: 'Rehost, replatform, or re-architect migration strategies selected based on business urgency and technical debt profile.' },
  ],
  benefits: [
    { title: 'Dramatically Reduced Maintenance Costs', desc: 'Modern, well-structured codebases are 60-70% cheaper to maintain than legacy systems of equivalent complexity.' },
    { title: 'Faster Feature Delivery', desc: 'Modernised platforms support CI/CD pipelines and reduce deployment time from months to hours.' },
    { title: 'Improved Security Posture', desc: 'Eliminate unpatched CVEs, outdated encryption standards, and compliance gaps that legacy systems accumulate over decades.' },
    { title: 'Unlock Cloud Economics', desc: 'Modern cloud-native architectures access auto-scaling, managed services, and global distribution unavailable to legacy apps.' },
  ],
  process: [
    { num: '01', title: 'Legacy Assessment & Risk Mapping', desc: 'Document the existing system, identify undocumented business logic, quantify technical debt, and define modernisation scope.' },
    { num: '02', title: 'Target Architecture Design', desc: 'Define the future-state architecture, migration pattern selection, and a phased roadmap minimising business disruption.' },
    { num: '03', title: 'Incremental Decomposition', desc: 'Extract high-priority modules from the legacy system one at a time, replacing them with modern equivalents while keeping the system live.' },
    { num: '04', title: 'Data Migration & Validation', desc: 'Migrate and validate historical data, ensuring business continuity and full data integrity throughout the transition.' },
    { num: '05', title: 'Decommission & Documentation', desc: 'Safely decommission legacy components once their replacements are proven, and document the new system thoroughly.' },
  ],
  useCases: [
    { title: 'Mainframe to Cloud Migration', desc: 'Re-host or re-architect COBOL and AS/400 workloads to modern cloud platforms while preserving business logic integrity.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80' },
    { title: 'Monolith to Microservices', desc: 'Decompose large Rails, Django, or Java EE monoliths into independently deployable microservices domains.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title: 'Legacy ERP Modernisation', desc: 'Replace or extend on-premise SAP/Oracle ERP systems with cloud-native modules and custom integrations.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
    { title: 'End-of-Life Technology Replacement', desc: "Re-build applications running on unsupported frameworks or languages before security windows close.", img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React', 'Next.js', 'Node.js', 'Python', 'Go', 'Java / Spring Boot', '.NET Core', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'Apache Kafka', 'dbt', 'SonarQube', 'Snyk'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', title: 'The Strangler Fig Pattern: A Practical Implementation Guide', desc: 'Step-by-step engineering guidance for applying strangler fig to production legacy systems safely.', date: 'June 11, 2026' },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'Calculating the True Cost of Keeping Legacy Systems', desc: 'A TCO framework that quantifies the hidden costs of legacy maintenance, security risk, and opportunity cost.', date: 'May 26, 2026' },
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'Mainframe Modernisation in 2026: Options Compared', desc: 'Rehost, replatform, refactor, and replace — a decision guide for enterprise mainframe migration strategies.', date: 'May 13, 2026' },
  ],
  ctaHeading: 'Ready to Modernise Your Legacy Systems?',
  ctaBody: 'Share your legacy landscape and business constraints — our modernisation architects will design a risk-controlled transformation roadmap.',
};

function LegacyModernizationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default LegacyModernizationPage;
