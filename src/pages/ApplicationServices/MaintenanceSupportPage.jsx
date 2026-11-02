import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Support',
    title: 'Maintenance & Support',
    subtitle: '24/7 proactive monitoring, SLA-backed incident response, continuous performance optimisation, and a dedicated engineering team keeping your critical applications running at peak.',
    bgImg: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Your Applications Don\'t Stop. Neither Do We.',
    body: [
      "Production software requires continuous attention. Security patches, dependency updates, performance degradation, infrastructure incidents, and user-reported bugs demand expert response — often at the worst possible times. Many organisations discover too late that their build team's support plan isn't adequate for the realities of production operations.",
      "Improx Tech's Application Managed Services provide enterprises with a dedicated support organisation — SREs, application engineers, and security specialists — delivering proactive maintenance and reactive incident response under binding SLA commitments.",
    ],
  },
  features: [
    { icon: 'fa-tower-broadcast', title: '24/7 Proactive Monitoring', desc: 'Synthetic monitoring, real-user monitoring, log aggregation, and intelligent alerting catching issues before users notice them.' },
    { icon: 'fa-clock', title: 'SLA-Backed Incident Response', desc: 'P1 incidents acknowledged within 15 minutes, with dedicated war rooms and real-time status communication to stakeholders.' },
    { icon: 'fa-shield-virus', title: 'Security Patch Management', desc: 'Continuous dependency scanning, CVE monitoring, and scheduled patch windows keeping your security posture current.' },
    { icon: 'fa-gauge-high', title: 'Performance Tuning', desc: 'Quarterly performance audits identifying and resolving query bottlenecks, memory leaks, and infrastructure inefficiencies.' },
    { icon: 'fa-code', title: 'Bug Fixes & Minor Enhancements', desc: 'Dedicated engineering capacity for production defect resolution and small feature requests within agreed response windows.' },
    { icon: 'fa-chart-bar', title: 'Monthly Health Reporting', desc: 'Detailed monthly reports covering incidents, performance trends, security status, and capacity planning recommendations.' },
  ],
  benefits: [
    { title: 'Guaranteed Uptime SLAs', desc: '99.95% uptime SLA commitments backed by financial remedies — not just best-effort assurances.' },
    { title: 'Free Your Internal Teams', desc: 'Offload operational burden from your internal engineering team, freeing them to focus on feature development and innovation.' },
    { title: 'Expert On-Call at Fraction of the Cost', desc: 'A dedicated SRE team available around the clock costs a fraction of hiring equivalent in-house talent.' },
    { title: 'Proactive Rather Than Reactive', desc: 'Our monitoring and alerting infrastructure catches 73% of incidents before they reach users — MTTR reduced dramatically.' },
  ],
  process: [
    { num: '01', title: 'Application Onboarding & Assessment', desc: 'Knowledge transfer, architecture documentation, monitoring setup, and runbook creation for every application we take on.' },
    { num: '02', title: 'Monitoring & Alerting Configuration', desc: 'Custom dashboards, SLA-aligned alert thresholds, and on-call rotations configured before support go-live.' },
    { num: '03', title: 'Ongoing Proactive Maintenance', desc: 'Scheduled patch windows, dependency updates, database maintenance, and infrastructure health checks on agreed cadences.' },
    { num: '04', title: 'Incident Response & Resolution', desc: 'Multi-tier triage with defined escalation paths, war room protocols, and root cause analysis delivery within 48 hours.' },
    { num: '05', title: 'Monthly Review & Continuous Improvement', desc: 'Stakeholder review of the previous month\'s incidents, performance data, and recommendations for the next period.' },
  ],
  useCases: [
    { title: 'Post-Launch Application Support', desc: 'Seamless handover from build phase to sustained operations with full context preservation for the support team.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80' },
    { title: 'Third-Party Application Support', desc: 'Managed support for applications built by other vendors where the original development team is no longer available.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80' },
    { title: 'High-Availability E-commerce Platforms', desc: '24/7 support for revenue-generating commerce platforms where every minute of downtime has a direct financial cost.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Regulated Industry Applications', desc: 'Compliance-aware support for healthcare, finance, and legal applications where SLAs intersect with regulatory obligations.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Datadog', 'PagerDuty', 'Prometheus', 'Grafana', 'ELK Stack', 'Sentry', 'AWS CloudWatch', 'Azure Monitor', 'New Relic', 'Snyk', 'Dependabot', 'Jira Service Management', 'OpsGenie', 'StatusPage'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80', title: 'SRE Practices Every Engineering Team Should Adopt', desc: 'Site reliability engineering principles that reduce production incidents and improve application stability.', date: 'June 12, 2026' },
    { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', title: 'Defining SLAs That Actually Mean Something', desc: 'How to write meaningful service level agreements that align engineering priorities with business expectations.', date: 'May 29, 2026' },
    { img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', title: 'The True Cost of Unplanned Downtime in 2026', desc: 'Quantifying the financial, reputational, and operational impact of production outages across industries.', date: 'May 16, 2026' },
  ],
  ctaHeading: 'Ready for Enterprise-Grade Application Support?',
  ctaBody: 'Tell us about your application portfolio and uptime requirements — we will design an SLA-backed support programme tailored to your needs.',
};

function MaintenanceSupportPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default MaintenanceSupportPage;
