import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · DevOps',
    title: 'DevOps & CI/CD',
    subtitle: 'Zero-downtime deployment pipelines, infrastructure as code, and full-stack observability that transform software delivery from a bottleneck into a competitive advantage.',
    bgImg: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Deliver Software Faster. Break Things Less.',
    body: [
      "DevOps is not a job title — it is an organisational capability. When done well, it compresses the cycle from code commit to production deployment from weeks to minutes, gives engineering teams confidence to ship frequently, and provides the observability needed to detect and resolve incidents before users notice them.",
      "Improx Tech's DevOps practice designs and implements the complete delivery infrastructure — CI/CD pipelines, infrastructure as code, container orchestration, monitoring and alerting — tailored to your team size, stack and deployment cadence requirements.",
    ],
  },
  features: [
    { icon: 'fa-code-branch',      title: 'CI/CD Pipeline Design',         desc: 'Multi-stage pipelines with automated build, test, security scan and deployment steps on every pull request merge.' },
    { icon: 'fa-file-code',        title: 'Infrastructure as Code (IaC)',   desc: 'All cloud resources provisioned via Terraform or Pulumi — versioned, peer-reviewed and reproducible across all environments.' },
    { icon: 'fa-docker',           title: 'Containerisation & Kubernetes',  desc: 'Docker containerisation and Kubernetes orchestration with Helm charts for consistent, scalable deployments.' },
    { icon: 'fa-chart-line',       title: 'Observability & Monitoring',     desc: 'Prometheus metrics, distributed tracing, structured logging and real-time alerting configured before go-live.' },
    { icon: 'fa-arrows-rotate',    title: 'GitOps & Release Management',    desc: 'ArgoCD or Flux-based GitOps workflows with blue/green and canary release strategies for zero-downtime deployments.' },
    { icon: 'fa-shield-halved',    title: 'DevSecOps Integration',          desc: 'Secret management, SAST/DAST scanning and dependency auditing embedded into pipelines — not bolted on later.' },
  ],
  benefits: [
    { title: 'Ship Multiple Times Per Day',   desc: 'Automated pipelines remove manual deployment gates — teams deploy when code is ready, not when ops has bandwidth.' },
    { title: 'Mean Time to Recovery < 15 min',desc: 'Automated rollback, feature flags and runbooks reduce the blast radius and recovery time when incidents occur.' },
    { title: 'Infrastructure Consistency',    desc: 'IaC eliminates environment drift — dev, staging and production behave identically, ending the "works on my machine" era.' },
    { title: 'Cost Governance',               desc: 'Tagged resources, budget alerts and auto-scaling policies prevent cloud bill surprises as your usage scales.' },
  ],
  process: [
    { num: '01', title: 'DevOps Maturity Assessment',   desc: 'Audit current deployment processes, tooling, lead times and incident metrics to establish a baseline and identify the highest-impact improvements.' },
    { num: '02', title: 'Pipeline Architecture Design',  desc: 'Design the CI/CD pipeline stages, branching strategy, environment promotion model and security gate placement.' },
    { num: '03', title: 'IaC & Environment Setup',       desc: 'Provision all environments via Terraform, configure Kubernetes clusters, networking, secrets and RBAC policies.' },
    { num: '04', title: 'Observability Stack',           desc: 'Deploy Prometheus, Grafana, OpenTelemetry and alerting rules calibrated to your SLOs before any production traffic.' },
    { num: '05', title: 'Team Enablement & Runbooks',   desc: 'Engineering team training, runbook documentation and on-call rotation design to sustain the DevOps capability independently.' },
  ],
  useCases: [
    { title: 'Greenfield DevOps Setup',        desc: 'Build a complete CI/CD and infrastructure foundation for a new product or startup from scratch.',                            img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=700&q=80' },
    { title: 'DevOps Transformation',          desc: 'Modernise a legacy deployment process — reduce release cycles from months to days with automated pipelines.',                img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
    { title: 'Multi-Cloud Infrastructure',     desc: 'Design and implement a cloud-agnostic IaC strategy that works across AWS, Azure and GCP without vendor lock-in.',            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80' },
    { title: 'Kubernetes Migration',           desc: 'Migrate bare-metal or VM-based workloads to Kubernetes with minimal downtime and full observability from day one.',           img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'Flux', 'Terraform', 'Pulumi', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Datadog', 'HashiCorp Vault', 'AWS', 'Azure', 'GCP'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80', title: 'Platform Engineering Is the Next DevOps',              desc: 'How internal developer platforms are abstracting infrastructure complexity and accelerating product team velocity.',    date: 'June 6, 2026'  },
    { img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', title: 'GitOps in Production: Lessons from 50 Deployments',    desc: 'What we learned implementing ArgoCD and Flux for enterprise clients — the wins, the pitfalls and the patterns.',       date: 'May 23, 2026' },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'DORA Metrics: Measuring DevOps Performance',         desc: 'How to use deployment frequency, lead time, MTTR and change failure rate to improve your engineering delivery.',       date: 'May 9, 2026'  },
  ],
  ctaHeading: 'Ready to Transform Your Software Delivery?',
  ctaBody: 'Share your current deployment process and pain points — we will design a DevOps architecture that lets your team ship with speed and confidence.',
};

function DevOpsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default DevOpsPage;
