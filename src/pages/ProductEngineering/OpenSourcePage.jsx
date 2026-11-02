import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · Open Source',
    title: 'Open Source Engineering',
    subtitle: 'Leveraging, contributing to and building on open-source ecosystems to accelerate delivery velocity, reduce licensing costs and embed your brand in the developer community.',
    bgImg: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Open Source Is a Strategy, Not Just a Tool Choice',
    body: [
      "The world's best software companies are built on open-source foundations — and many of them actively contribute back to the ecosystems they depend on. Strategic open-source engagement reduces your time-to-market, eliminates unnecessary licensing overhead, and positions your engineering brand to attract top-tier developer talent.",
      "Improx Tech's open-source engineering practice covers three dimensions: selecting and integrating the right OSS tools for your stack, contributing upstream to reduce maintenance burden, and — for clients with platform ambitions — designing and launching open-source products that build ecosystem and developer community.",
    ],
  },
  features: [
    { icon: 'fa-magnifying-glass', title: 'OSS Stack Evaluation & Selection',  desc: 'Rigorous evaluation of open-source tools against security posture, maintenance activity, licence compatibility and community health.' },
    { icon: 'fa-code-branch',      title: 'Upstream Contribution Strategy',    desc: 'Identify high-value upstream contribution opportunities that reduce your private fork maintenance and build community goodwill.' },
    { icon: 'fa-box-open',         title: 'Internal Tool Open-Sourcing',       desc: 'Package and publish internal libraries and tools as open-source projects with proper documentation, CI and release management.' },
    { icon: 'fa-book',             title: 'Documentation & DX',                desc: 'Developer experience-first documentation — READMEs, API docs, tutorials and contribution guides that drive adoption.' },
    { icon: 'fa-shield-halved',    title: 'OSS Security & Licence Compliance', desc: 'Automated dependency scanning, SBOM generation and licence compatibility checks to manage open-source risk.' },
    { icon: 'fa-users',            title: 'Community & Ecosystem Building',    desc: 'Community strategy, governance model design and developer relations programmes for open-source product launches.' },
  ],
  benefits: [
    { title: 'Dramatically Reduced Build Time',  desc: 'Leveraging battle-tested open-source components eliminates months of undifferentiated engineering on commodity functionality.' },
    { title: 'Zero Licensing Overhead',           desc: 'Correctly selected OSS eliminates per-seat and per-usage licensing costs that compound as your platform scales.' },
    { title: 'Top Talent Attraction',             desc: 'Engineering teams with visible open-source contributions attract higher-calibre developers who want to work on impactful projects.' },
    { title: 'Ecosystem Distribution',            desc: 'An open-source tool used by thousands of developers creates inbound awareness and trust that no marketing budget can replicate.' },
  ],
  process: [
    { num: '01', title: 'OSS Audit & Risk Assessment',  desc: 'Inventory your current open-source dependencies, identify licence conflicts, outdated packages and unpatched CVEs.' },
    { num: '02', title: 'Strategy Definition',           desc: 'Define your open-source posture — consumer, contributor or publisher — and the tools and governance to support it.' },
    { num: '03', title: 'Integration & Hardening',       desc: 'Integrate selected OSS components, implement security hardening, and set up automated scanning in CI pipelines.' },
    { num: '04', title: 'Contribution Programme',        desc: 'Identify upstream contribution opportunities, establish internal review processes and begin contributing fixes and features.' },
    { num: '05', title: 'Community Launch (if applicable)',desc: 'For OSS product launches: documentation, governance model, community channels and developer relations programme.' },
  ],
  useCases: [
    { title: 'OSS-First Stack Design',          desc: 'Build a complete product stack on open-source foundations — evaluated, secured and maintained with best practices.',             img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=700&q=80' },
    { title: 'Internal Tool Publication',       desc: 'Open-source an internal library or tool to build community, attract contributors and reduce maintenance burden.',              img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
    { title: 'Dependency Security Remediation', desc: 'Systematic audit and remediation of vulnerable open-source dependencies across a large enterprise application portfolio.',      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80' },
    { title: 'Developer Tool Product Launch',   desc: 'Launch a developer-facing open-source product with community strategy, documentation and initial traction programme.',         img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['GitHub', 'GitLab', 'Snyk', 'FOSSA', 'Dependabot', 'OWASP Dependency-Check', 'CycloneDX (SBOM)', 'Docusaurus', 'TypeDoc', 'Storybook', 'npm / pnpm', 'Semantic Release', 'Changesets'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80', title: 'Open Source as a Go-to-Market Strategy',              desc: 'How developer tools companies use open source to build distribution, trust and top-of-funnel product awareness.',         date: 'June 5, 2026'  },
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'Managing Open Source Risk in Enterprise',             desc: 'Licence compliance, supply chain security and dependency governance for large enterprise software portfolios.',            date: 'May 22, 2026' },
    { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', title: 'Writing Documentation That Developers Actually Read', desc: 'The principles behind great developer documentation — and the tools that make it easier to maintain at scale.',            date: 'May 8, 2026'  },
  ],
  ctaHeading: 'Ready to Build an Open Source Strategy?',
  ctaBody: 'Tell us about your current stack and goals — we will design an open-source approach that accelerates delivery and reduces risk.',
};

function OpenSourcePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default OpenSourcePage;
