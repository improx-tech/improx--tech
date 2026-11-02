import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · Strategy',
    title: 'Product Strategy',
    subtitle: 'Market positioning, product roadmapping and go-to-market strategy that ensures every technology investment is tied directly to measurable business outcomes.',
    bgImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Strategy First. Code Second.',
    body: [
      "Most products fail not because of bad engineering, but because of poor product strategy. Building the wrong thing perfectly is still a failure. At Improx Tech, every engagement begins with a rigorous product strategy phase — understanding your users, your market, your competition and your commercial goals before a single line of production code is written.",
      "Our product strategists bring together business analysis, user research and technology expertise to define a clear, validated product direction that your engineering team can execute with confidence.",
    ],
  },
  features: [
    { icon: 'fa-magnifying-glass-chart', title: 'Market & Competitive Analysis',   desc: 'Structured research into your target market, user segments, competitor positioning and white-space opportunities.' },
    { icon: 'fa-users',                  title: 'User Research & Persona Mapping',  desc: 'Qualitative interviews, quantitative surveys and usability studies that reveal real user needs and pain points.' },
    { icon: 'fa-map',                    title: 'Product Roadmapping',              desc: 'Prioritised, time-bounded product roadmaps that balance strategic ambition with delivery realism.' },
    { icon: 'fa-chart-line',             title: 'Business Case & OKR Alignment',   desc: 'Define success metrics, KPIs and OKRs that connect product initiatives to revenue and retention goals.' },
    { icon: 'fa-handshake',              title: 'Stakeholder Alignment Workshops',  desc: 'Facilitated workshops that align product, engineering, sales and leadership on a shared product vision.' },
    { icon: 'fa-rocket',                 title: 'Go-to-Market Strategy',            desc: 'Launch planning, pricing strategy and distribution channels tailored to your target customer profile.' },
  ],
  benefits: [
    { title: 'Avoid Costly Missteps',    desc: 'Spending three months on strategy saves twelve months of building the wrong product — the ROI is unambiguous.' },
    { title: 'Validated Before Built',   desc: 'User research and prototype testing validate demand before committing full engineering resources to a direction.' },
    { title: 'Cross-Team Alignment',     desc: 'A documented, agreed product strategy eliminates the constant reprioritisation and scope creep that kills delivery cadence.' },
    { title: 'Investor-Ready Narrative', desc: 'A well-articulated product strategy with supporting market data strengthens fundraising and board presentations.' },
  ],
  process: [
    { num: '01', title: 'Stakeholder Discovery',    desc: 'Structured interviews with founders, product owners and key customers to surface goals, constraints and assumptions.' },
    { num: '02', title: 'Market Landscape Mapping', desc: 'Competitor analysis, market sizing and customer segmentation to identify the highest-value opportunity.' },
    { num: '03', title: 'User Research Sprint',     desc: 'Rapid qualitative research with target users to validate problem statements and uncover unmet needs.' },
    { num: '04', title: 'Strategy Definition',      desc: 'Product vision, positioning statement and prioritised initiative list presented and workshopped with stakeholders.' },
    { num: '05', title: 'Roadmap & Handoff',        desc: 'Delivery roadmap with epics, milestones and success metrics handed to the engineering team for execution.' },
  ],
  useCases: [
    { title: 'New Product Launch',           desc: 'Define and validate a go-to-market strategy for a new digital product before investing in full-scale engineering.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80' },
    { title: 'Product Pivot or Repositioning',desc: 'Reassess product-market fit and redefine positioning for products that have plateaued in growth or adoption.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' },
    { title: 'Enterprise SaaS Strategy',     desc: 'Build a product-led growth strategy for B2B SaaS products targeting enterprise segments with long sales cycles.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
    { title: 'Platform Strategy',            desc: 'Design the strategy for a platform business model — ecosystem, APIs, developer relations and partner channels.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Miro', 'Notion', 'Figma (Research)', 'Hotjar', 'Amplitude', 'Google Analytics', 'Typeform', 'Dovetail', 'Productboard', 'Linear', 'Jira', 'Confluence'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title: 'The Jobs-to-Be-Done Framework in 2026', desc: 'How leading product teams use JTBD theory to uncover unmet user needs and build products people actually want.', date: 'June 10, 2026' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'OKRs vs. KPIs: What Product Teams Should Measure', desc: 'Untangling the difference between goals and metrics, and how to use both to drive product decisions.', date: 'May 27, 2026' },
    { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title: 'Why Most Product Roadmaps Fail (and How to Fix Yours)', desc: 'The common pitfalls in product roadmapping and the structured approaches that actually keep teams aligned.', date: 'May 14, 2026' },
  ],
  ctaHeading: 'Ready to Define Your Product Strategy?',
  ctaBody: 'Share your product vision and business goals — our strategists will define a clear direction and validated roadmap for your team.',
};

function ProductStrategyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default ProductStrategyPage;
