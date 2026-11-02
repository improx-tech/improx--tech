import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · APIs',
    title: 'API Development',
    subtitle: 'Robust, versioned, and thoroughly documented APIs designed for performance, security, and the seamless integration your ecosystem partners depend on.',
    bgImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'APIs as Strategic Infrastructure — Not Just Data Pipes',
    body: [
      "Every modern enterprise runs on APIs — they connect your internal systems, enable partner integrations, power your mobile apps, and increasingly form the commercial layer of your digital products. Yet most APIs are designed as afterthoughts, built quickly to satisfy an immediate need without considering the developers who will consume them.",
      "Improx Tech's API practice treats every API as a product. We design with the consuming developer's experience in mind, build for the performance and reliability that SLAs demand, and document to the standard that accelerates partner and customer adoption.",
    ],
  },
  features: [
    { icon: 'fa-code-branch', title: 'RESTful API Design', desc: 'Resource-oriented, semantically correct REST APIs following OpenAPI 3.1 specification for universal tooling compatibility.' },
    { icon: 'fa-diagram-project', title: 'GraphQL APIs', desc: 'Strongly-typed schemas, efficient query resolution, and real-time subscriptions for flexible client-driven data fetching.' },
    { icon: 'fa-arrows-left-right', title: 'gRPC & Streaming APIs', desc: 'Low-latency, binary protocol APIs for inter-service communication and high-frequency data streaming use cases.' },
    { icon: 'fa-key', title: 'API Security & Authentication', desc: 'OAuth 2.0, API key management, JWT validation, rate limiting, and DDoS protection built into every endpoint.' },
    { icon: 'fa-book', title: 'Developer Portal & Documentation', desc: 'Auto-generated, interactive Swagger/Redoc documentation with live sandbox environments for partner onboarding.' },
    { icon: 'fa-code-commit', title: 'Versioning & Lifecycle Management', desc: 'Semantic versioning strategy, deprecation policies, and backwards-compatibility guarantees that protect your consumers.' },
  ],
  benefits: [
    { title: 'Faster Partner Integration', desc: 'Well-designed APIs with great documentation reduce partner integration time from weeks to hours.' },
    { title: 'New Revenue Streams', desc: 'Productised APIs with metered access enable API monetisation and new digital business models.' },
    { title: 'Reduced Frontend Coupling', desc: 'Contract-first API design decouples frontend and mobile teams from backend changes, accelerating parallel development.' },
    { title: 'Observability & SLA Assurance', desc: 'Per-endpoint latency, error rate, and throughput telemetry enable SLA management and rapid incident response.' },
  ],
  process: [
    { num: '01', title: 'API Strategy & Design Review', desc: 'Define API products, consumer personas, authentication strategy, and versioning policies before writing a line of code.' },
    { num: '02', title: 'Contract-First Specification', desc: 'OpenAPI / GraphQL schema authored and reviewed by consumer teams — design disagreements resolved before engineering begins.' },
    { num: '03', title: 'Implementation & Validation', desc: 'API implementation with automated contract tests, schema validation, and consumer-driven contract testing.' },
    { num: '04', title: 'Security Penetration Testing', desc: 'OWASP API Security Top 10 testing, fuzzing, and authentication bypass testing on every production API.' },
    { num: '05', title: 'Developer Portal & Go-Live', desc: 'Interactive documentation published, sandbox environment provisioned, and partner onboarding materials delivered.' },
  ],
  useCases: [
    { title: 'Platform & Ecosystem APIs', desc: 'Public or partner-facing APIs that enable third parties to build products and integrations on your platform.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
    { title: 'Internal Microservices APIs', desc: 'High-performance gRPC and event-driven APIs connecting microservices within your distributed application.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title: 'Payment & Financial APIs', desc: 'PCI-DSS compliant payment processing, reconciliation, and financial data APIs for FinTech and commerce platforms.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80' },
    { title: 'Data & Analytics APIs', desc: 'High-throughput data ingestion and query APIs serving analytics platforms and embedded reporting products.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Node.js / Express', 'Python / FastAPI', 'Go', 'Java / Spring Boot', 'GraphQL', 'gRPC', 'OpenAPI 3.1', 'Kong API Gateway', 'AWS API Gateway', 'OAuth 2.0', 'JWT', 'Redis', 'PostgreSQL', 'Swagger / Redoc', 'Postman', 'k6'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'REST vs. GraphQL vs. gRPC: Choosing the Right API Style', desc: 'A decision framework for selecting API protocols based on consumer patterns, team skills, and performance requirements.', date: 'June 3, 2026' },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'OWASP API Security Top 10: 2026 Edition', desc: 'Updated analysis of the most prevalent API security vulnerabilities and practical remediation strategies.', date: 'May 19, 2026' },
    { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', title: 'Building a Developer Portal That Developers Actually Love', desc: 'Design principles and tooling choices that make the difference between a good and great API developer experience.', date: 'May 6, 2026' },
  ],
  ctaHeading: 'Ready to Build APIs That Power Your Platform?',
  ctaBody: "Describe your integration requirements and consumer personas — we'll design an API strategy that serves your business and your developers.",
};

function ApiDevelopmentPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default ApiDevelopmentPage;
