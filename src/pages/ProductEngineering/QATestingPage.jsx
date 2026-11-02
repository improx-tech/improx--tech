import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · Quality',
    title: 'QA & Testing',
    subtitle: 'Automated test suites, performance benchmarking and security validation that catch defects before users do — embedded at every stage of your delivery pipeline.',
    bgImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Quality Is Not a Phase. It Is a Practice.',
    body: [
      "Treating QA as a final gate before release is a model that consistently fails. By the time defects surface in manual end-of-sprint testing, they are expensive to fix and demoralising to the team. Improx Tech embeds quality engineering throughout the development lifecycle — shifting testing left so issues are caught at the point of introduction, not the point of deployment.",
      "Our QA practice covers automated unit, integration and end-to-end testing; performance and load testing; accessibility auditing; and security vulnerability scanning — all wired into your CI/CD pipeline to enforce quality standards on every pull request.",
    ],
  },
  features: [
    { icon: 'fa-vial',            title: 'Automated Unit & Integration Tests', desc: 'Comprehensive test suites covering business logic, API contracts and database interactions — running on every commit.' },
    { icon: 'fa-robot',           title: 'End-to-End Test Automation',         desc: 'Playwright and Cypress suites simulating real user journeys across browsers, devices and authenticated states.' },
    { icon: 'fa-gauge-high',      title: 'Performance & Load Testing',         desc: 'k6 and Gatling load tests validating response times, throughput and failure modes under peak traffic conditions.' },
    { icon: 'fa-shield-halved',   title: 'Security Testing (OWASP)',           desc: 'OWASP Top 10 scanning, dependency vulnerability checks and penetration testing integrated into CI pipelines.' },
    { icon: 'fa-universal-access','title': 'Accessibility Auditing',           desc: 'Automated axe-core scanning and manual screen-reader testing to meet WCAG 2.2 AA compliance requirements.' },
    { icon: 'fa-chart-bar',       title: 'Test Coverage & Reporting',          desc: 'Coverage reports, flaky test detection and quality dashboards that give engineering leads real visibility.' },
  ],
  benefits: [
    { title: 'Bugs Caught Early = Lower Cost',  desc: 'A defect fixed in development costs 10× less than one caught in production — systematic early testing pays for itself many times over.' },
    { title: 'Deploy with Confidence',          desc: 'Automated quality gates on every PR mean your team ships to production knowing the build is tested, secure and performant.' },
    { title: 'Faster Delivery Cadence',         desc: 'Counterintuitively, thorough automated testing accelerates delivery — fewer production incidents mean less time on firefighting.' },
    { title: 'Regulatory Compliance Support',   desc: 'Documented test evidence, audit logs and accessibility reports support compliance with HIPAA, GDPR, and SOC 2 requirements.' },
  ],
  process: [
    { num: '01', title: 'QA Strategy & Test Planning',  desc: 'Define the testing pyramid, coverage goals, tooling selection and CI/CD integration plan for your specific stack.' },
    { num: '02', title: 'Test Environment Setup',       desc: 'Configure test databases, API mocks, browser environments and CI runner configuration for reliable, repeatable runs.' },
    { num: '03', title: 'Test Suite Development',       desc: 'Unit, integration and E2E tests authored in parallel with feature development — not as an afterthought.' },
    { num: '04', title: 'Performance & Security Scans', desc: 'Load test scenarios and OWASP security scans built and run against staging environments before every release.' },
    { num: '05', title: 'CI Integration & Monitoring',  desc: 'Tests wired into GitHub Actions / GitLab CI with quality gates, coverage thresholds and failure alerting.' },
  ],
  useCases: [
    { title: 'Greenfield Product QA Setup',    desc: 'Establish a complete QA practice from scratch for a new product — strategy, tooling, automation and reporting.',          img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80' },
    { title: 'Legacy System Regression Suite', desc: 'Build a regression test suite for a legacy application to safely enable refactoring and modernisation work.',             img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80' },
    { title: 'High-Traffic Platform Testing',  desc: 'Load test e-commerce or SaaS platforms ahead of peak traffic events — Black Friday, product launches, marketing campaigns.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title: 'Compliance-Critical Testing',    desc: 'Healthcare and FinTech test documentation and audit trails satisfying HIPAA, PCI-DSS and SOC 2 auditor requirements.',     img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Playwright', 'Cypress', 'Jest', 'Vitest', 'k6', 'Gatling', 'OWASP ZAP', 'Snyk', 'axe-core', 'Stryker', 'Allure Reports', 'GitHub Actions', 'GitLab CI', 'SonarQube', 'Dependabot'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', title: 'The Testing Pyramid in 2026: Still Relevant?',           desc: 'How modern front-end complexity and microservices are reshaping the classic unit/integration/E2E testing model.',        date: 'June 8, 2026'  },
    { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title: 'Playwright vs. Cypress: An Honest 2026 Comparison',      desc: 'Feature parity, performance, parallel execution and DX compared for teams choosing an E2E testing framework.',          date: 'May 25, 2026' },
    { img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', title: 'Performance Testing Before Every Release',               desc: 'How to build load testing into your CI pipeline without slowing down every PR — tooling and strategy.',                 date: 'May 11, 2026' },
  ],
  ctaHeading: 'Ready to Build Unbreakable Software Quality?',
  ctaBody: 'Tell us about your current testing gaps and stack — we will design a quality engineering strategy that gives your team confidence to ship.',
};

function QATestingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default QATestingPage;
