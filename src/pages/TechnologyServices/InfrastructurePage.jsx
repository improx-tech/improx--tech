import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Technology Services · Infrastructure',
    title: 'Infrastructure Management',
    subtitle: 'Managed cloud infrastructure with 24/7 monitoring, intelligent auto-scaling, proactive cost governance and SLA-backed operational excellence across AWS, Azure and GCP.',
    bgImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Infrastructure That Runs Itself. Teams That Focus on Products.',
    body: [
      'Infrastructure management has evolved. Modern cloud infrastructure is not just virtual machines and storage — it is a complex ecosystem of managed services, auto-scaling groups, service meshes, observability pipelines and cost controls that must work together seamlessly at enterprise scale.',
      'Improx Tech takes full operational ownership of your cloud infrastructure — from initial architecture and provisioning through to 24/7 monitoring, incident response and continuous optimisation. Your engineering teams get back to building products instead of managing infrastructure.',
    ],
  },
  features: [
    { icon: 'fa-file-code',         title: 'Infrastructure as Code',       desc: 'Every resource provisioned and managed via Terraform and CDK — version-controlled, peer-reviewed and fully reproducible.' },
    { icon: 'fa-chart-line',        title: '24/7 Monitoring & Alerting',   desc: 'Prometheus, Grafana and cloud-native monitoring with custom dashboards and SLA-aligned alerting thresholds.' },
    { icon: 'fa-arrows-up-down',    title: 'Auto-Scaling & HA Design',     desc: 'Horizontal and vertical scaling policies with multi-AZ and multi-region high availability architectures.' },
    { icon: 'fa-coins',             title: 'FinOps & Cost Governance',     desc: 'Resource tagging, budget alerts, rightsizing recommendations and reserved instance management to optimise spend.' },
    { icon: 'fa-rotate',            title: 'Disaster Recovery',            desc: 'Active-passive and active-active DR architectures with automated failover meeting your RPO and RTO targets.' },
    { icon: 'fa-network-wired',     title: 'Network Architecture',         desc: 'VPC design, transit gateways, private endpoints, WAF and CDN configuration for secure, performant networking.' },
  ],
  benefits: [
    { title: 'Free Your Engineering Teams',    desc: 'Offload infrastructure operations so your developers can focus entirely on building product features that generate value.' },
    { title: '99.99% Uptime Achievable',       desc: 'Multi-region, multi-AZ designs with automated failover and battle-tested runbooks delivering enterprise-grade availability.' },
    { title: 'Predictable Infrastructure Cost',desc: 'FinOps discipline and automated rightsizing typically reduce cloud spend by 30–50% without sacrificing performance.' },
    { title: 'Always Audit-Ready',             desc: 'IaC-managed infrastructure with full change history, access logs and configuration compliance continuously validated.' },
  ],
  process: [
    { num: '01', title: 'Infrastructure Audit',          desc: 'Comprehensive review of current architecture, security posture, cost efficiency and operational maturity.' },
    { num: '02', title: 'Target State Design',           desc: 'Design the optimal infrastructure architecture for your workloads — performance, cost, security and compliance balanced.' },
    { num: '03', title: 'IaC Migration & Provisioning',  desc: 'Migrate existing resources under IaC management and provision new infrastructure using Terraform modules.' },
    { num: '04', title: 'Monitoring & Runbook Setup',    desc: 'Deploy observability stack, configure alerting, write incident runbooks and establish on-call rotation.' },
    { num: '05', title: 'Ongoing Managed Operations',    desc: '24/7 monitoring, proactive patching, monthly cost reviews and quarterly architecture optimisation.' },
  ],
  useCases: [
    { title: 'Production Cloud Operations',    desc: 'Full managed operations for production workloads — monitoring, incident response and continuous optimisation.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
    { title: 'Multi-Region HA Architecture',   desc: 'Design and operate globally distributed infrastructure with automated failover and sub-second health checking.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
    { title: 'FinOps Programme',               desc: 'Cloud cost optimisation engagement reducing infrastructure spend while maintaining or improving performance.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80' },
    { title: 'Kubernetes Platform Operations', desc: 'Managed EKS, AKS or GKE clusters with Helm, GitOps, observability and cluster upgrade management.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['AWS', 'Azure', 'GCP', 'Terraform', 'Pulumi', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'Datadog', 'PagerDuty', 'AWS CloudWatch', 'Azure Monitor', 'Ansible', 'Packer'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'Platform Engineering: The Future of Infrastructure', desc: 'How internal developer platforms are replacing traditional infra ops and accelerating developer velocity.', date: 'June 4, 2026' },
    { img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', title: 'FinOps Maturity Model: From Reactive to Optimised', desc: 'The four stages of cloud cost management maturity and how to advance through each one.', date: 'May 21, 2026' },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'Kubernetes at Enterprise Scale: Operational Lessons', desc: 'What we learned running Kubernetes in production for large enterprises — the hard parts nobody warns you about.', date: 'May 7, 2026' },
  ],
  ctaHeading: 'Ready for Managed Infrastructure Operations?',
  ctaBody: 'Tell us about your cloud environment and operational challenges — we will design a managed infrastructure programme that keeps your systems running at peak.',
};

function InfrastructurePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Technology Services" parentTo="/services/technology-services" />;
}
export default InfrastructurePage;
