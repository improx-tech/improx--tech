import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Cloud',
    title: 'Cloud Applications',
    subtitle: 'Cloud-native architectures — microservices, serverless, and container orchestration — built for elastic scale, operational resilience, and continuous delivery at global speed.',
    bgImg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80',
    bgVideo: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-animation-31991-large.mp4',
  },
  overview: {
    heading: 'Engineering Applications That Thrive in the Cloud',
    body: [
      "Cloud-native is not just about where your application runs — it's about how it's designed. Cloud-native applications are architected to exploit the dynamic provisioning, managed services, and global distribution that modern cloud platforms offer. The result is higher availability, lower operating costs, and faster feature delivery.",
      "Improx Tech designs and builds cloud-native applications from first principles — right-sizing services, selecting the optimal compute model, and engineering for the operational realities of distributed systems from day one.",
    ],
  },
  features: [
    { icon: 'fa-cubes', title: 'Microservices Architecture', desc: 'Independent, deployable services with well-defined contracts enabling teams to develop, deploy, and scale autonomously.' },
    { icon: 'fa-server', title: 'Serverless & Event-Driven Design', desc: 'Lambda/Functions-based workloads eliminating server management overhead for event-driven processing at any scale.' },
    { icon: 'fa-docker', title: 'Container Orchestration', desc: 'Docker containerisation and Kubernetes orchestration for consistent, reproducible deployments across all environments.' },
    { icon: 'fa-cloud-arrow-up', title: 'Multi-Cloud Strategy', desc: 'Architect for cloud-agnosticism using Terraform and abstraction layers that prevent vendor lock-in.' },
    { icon: 'fa-chart-line', title: 'Auto-Scaling & Cost Governance', desc: 'Horizontal and vertical scaling policies with cost tagging, budget alerts, and rightsizing automation.' },
    { icon: 'fa-rotate', title: 'Disaster Recovery & HA', desc: 'Active-active and active-passive DR architectures delivering 99.99% availability SLAs for critical workloads.' },
  ],
  benefits: [
    { title: 'Pay Only for What You Use', desc: 'Serverless and auto-scaling architectures eliminate over-provisioning — your infrastructure bill scales with actual demand.' },
    { title: 'Deploy Anywhere in the World', desc: 'Multi-region deployments deliver low-latency experiences to users globally with automatic failover between regions.' },
    { title: 'Operational Resilience', desc: 'Self-healing infrastructure, circuit breakers, and chaos engineering practices build applications that tolerate failures gracefully.' },
    { title: 'Developer Velocity', desc: 'Managed services abstract infrastructure complexity, freeing engineering teams to focus on business logic and feature delivery.' },
  ],
  process: [
    { num: '01', title: 'Cloud Architecture Assessment', desc: 'Evaluate current infrastructure, define target state architecture, and create a phased migration and optimisation roadmap.' },
    { num: '02', title: 'Infrastructure as Code (IaC)', desc: 'All cloud resources provisioned via Terraform and CDK — versioned, reviewable, and reproducible across environments.' },
    { num: '03', title: 'Service Development & Containerisation', desc: 'Application services developed with cloud-native patterns, containerised with Docker, and hardened for production.' },
    { num: '04', title: 'Observability Stack Setup', desc: 'Distributed tracing, metrics pipelines, log aggregation, and alerting configured before first production deployment.' },
    { num: '05', title: 'CI/CD & GitOps Automation', desc: 'Automated build, test, and deployment pipelines with ArgoCD or Flux for declarative, auditable cloud delivery.' },
  ],
  useCases: [
    { title: 'High-Traffic Consumer Platforms', desc: 'Applications serving millions of concurrent users with sub-second response times through intelligent auto-scaling.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80' },
    { title: 'Real-Time Data Processing', desc: 'Event-driven architectures processing millions of events per second with Kafka, Kinesis, and stream processors.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title: 'Global SaaS Infrastructure', desc: 'Multi-region SaaS backends with data residency controls, tenant isolation, and per-region performance optimisation.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80' },
    { title: 'Cloud Migration Projects', desc: 'Lift-and-shift to re-architected cloud-native migrations executed with zero downtime and full data integrity.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'AWS Lambda', 'Azure Functions', 'Kafka', 'SQS/SNS', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'Istio'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', title: 'Platform Engineering: The Next Evolution of DevOps', desc: 'How internal developer platforms are transforming cloud application delivery at scale.', date: 'June 6, 2026' },
    { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', title: 'FinOps for Engineering Teams: Controlling Cloud Spend', desc: 'Practical techniques for engineers to understand and optimise cloud costs in production workloads.', date: 'May 23, 2026' },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'Kubernetes in Production: The Gotchas Nobody Tells You', desc: 'Hard-won lessons from running Kubernetes clusters in production for 50+ enterprise clients.', date: 'May 9, 2026' },
  ],
  ctaHeading: 'Ready to Build Cloud-Native Applications?',
  ctaBody: 'Tell us about your scale requirements, cloud strategy, and current infrastructure — we will design the optimal cloud-native architecture.',
};

function CloudApplicationsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default CloudApplicationsPage;
