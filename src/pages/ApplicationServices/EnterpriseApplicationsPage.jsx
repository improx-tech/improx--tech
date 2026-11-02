import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Enterprise',
    title: 'Enterprise Applications',
    subtitle: 'Scalable, secure, and deeply integrated internal platforms — ERP, CRM, HRMS, and beyond — engineered to drive organisational alignment and operational excellence.',
    bgImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'The Digital Backbone of High-Performance Organisations',
    body: [
      "Enterprise applications are the operational nervous system of large organisations. When they work well, every department moves faster; when they fail, the entire business slows down. Improx Tech designs and builds enterprise platforms that connect people, data, and processes across your entire organisation.",
      "We don't resell off-the-shelf software with a custom wrapper. We engineer purpose-built enterprise systems with the configurability, security posture, and integration depth that modern enterprises demand — all without the bloat of generic ERP suites.",
    ],
  },
  features: [
    { icon: 'fa-sitemap', title: 'End-to-End Process Automation', desc: 'Map and automate multi-step business processes across departments, reducing manual effort and human error at scale.' },
    { icon: 'fa-database', title: 'Unified Data Architecture', desc: 'Single source of truth across finance, operations, HR, and sales — eliminating data fragmentation and reporting inconsistencies.' },
    { icon: 'fa-users-gear', title: 'Role-Based Access & Governance', desc: 'Fine-grained permission models ensuring the right people access the right data with full audit trail compliance.' },
    { icon: 'fa-plug', title: 'Deep Third-Party Integration', desc: 'Native integrations with SAP, Salesforce, Microsoft 365, Oracle, and 100+ enterprise tools via standards-based APIs.' },
    { icon: 'fa-chart-bar', title: 'Embedded Analytics & Reporting', desc: 'Real-time operational dashboards and scheduled reports built directly into the platform — no separate BI tool required.' },
    { icon: 'fa-mobile-screen', title: 'Multi-Platform Access', desc: 'Responsive web applications and companion mobile apps enabling your workforce wherever they operate.' },
  ],
  benefits: [
    { title: 'Organisation-Wide Alignment', desc: 'A single platform eliminates departmental silos, ensuring every team operates from the same data and processes.' },
    { title: 'Regulatory Compliance', desc: 'Built-in compliance workflows, audit logs, and data retention policies satisfy SOX, GDPR, and industry-specific requirements.' },
    { title: 'Lower Operational Overhead', desc: 'Automation of repetitive administrative tasks reduces headcount burden and operational costs significantly.' },
    { title: 'Faster Decision Making', desc: 'Real-time operational data surfaces to leadership instantly, reducing decision latency from days to minutes.' },
  ],
  process: [
    { num: '01', title: 'Business Process Mapping', desc: 'We document current workflows, identify automation opportunities, and define the target operating model.' },
    { num: '02', title: 'Enterprise Architecture Design', desc: 'Scalable data models, integration patterns, and security architecture are defined before development begins.' },
    { num: '03', title: 'Phased Module Development', desc: 'Core modules are delivered in phases — each one production-ready — minimising disruption to live operations.' },
    { num: '04', title: 'Data Migration & Integration', desc: 'Legacy data is cleansed, migrated, and validated. Integrations with existing systems are built and tested end-to-end.' },
    { num: '05', title: 'User Training & Change Management', desc: 'Comprehensive training programmes and adoption support ensure your teams embrace the new platform fully.' },
  ],
  useCases: [
    { title: 'Custom ERP Systems', desc: 'Finance, procurement, inventory, and supply chain management in a single, cohesive platform.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
    { title: 'CRM & Sales Platforms', desc: 'Pipeline management, customer 360° views, and automated outreach workflows for revenue teams.', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=700&q=80' },
    { title: 'HRMS & Workforce Platforms', desc: 'Payroll, performance management, onboarding, and employee self-service portals built to your HR policies.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80' },
    { title: 'Project & Portfolio Management', desc: 'Cross-departmental project tracking, resource allocation, and milestone reporting for complex enterprises.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React', 'Angular', 'Node.js', 'Java / Spring Boot', '.NET Core', 'PostgreSQL', 'Oracle DB', 'Redis', 'RabbitMQ', 'SAP Integration', 'Salesforce API', 'Azure AD', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', title: 'ERP Modernisation: Phased Migration vs. Big Bang', desc: 'A risk analysis of two approaches to replacing legacy enterprise systems in large organisations.', date: 'June 2, 2026' },
    { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', title: 'Building a Composable Enterprise Architecture in 2026', desc: 'How MACH principles are reshaping how enterprises think about application portfolios.', date: 'May 20, 2026' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'The ROI of Enterprise Application Consolidation', desc: 'Quantifying the financial and operational returns of replacing fragmented tool stacks with unified platforms.', date: 'May 3, 2026' },
  ],
  ctaHeading: 'Ready to Transform Your Enterprise Operations?',
  ctaBody: "Let our enterprise architects design a platform that connects your entire organisation and drives measurable productivity gains from day one.",
};

function EnterpriseApplicationsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default EnterpriseApplicationsPage;
