import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · Prototyping',
    title: 'Rapid Prototyping',
    subtitle: 'From whiteboard concept to a clickable, testable prototype in days — validate your product ideas with real users before committing a single line of production code.',
    bgImg: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Test Assumptions Cheaply. Build Certainty Quickly.',
    body: [
      "The most expensive mistake in product development is building something users do not want. Rapid prototyping is the discipline of creating a realistic, testable representation of your product — interactive enough to generate genuine user feedback — at a fraction of the cost and time of full engineering.",
      "Improx Tech's rapid prototyping practice compresses weeks of uncertainty into days of validated learning. We produce high-fidelity interactive prototypes in Figma, validate them with your target users, and hand off a design foundation that engineering can build from with confidence.",
    ],
  },
  features: [
    { icon: 'fa-pen-to-square',   title: 'Concept Sketching & Ideation',  desc: 'Structured ideation sessions that generate and rapidly filter product concepts before investing in design production.' },
    { icon: 'fa-object-group',    title: 'Low-Fidelity Wireframes',        desc: 'Grayscale wireframes that define structure, hierarchy and flow — fast to produce and easy to change.' },
    { icon: 'fa-layer-group',     title: 'High-Fidelity Interactive Proto',desc: 'Pixel-perfect Figma prototypes with real interactions, transitions and data states that feel like the finished product.' },
    { icon: 'fa-flask',           title: 'User Testing & Validation',       desc: 'Moderated and unmoderated testing sessions with your target users that surface usability issues before engineering begins.' },
    { icon: 'fa-rotate',          title: 'Rapid Iteration Cycles',          desc: 'Multiple design-test-iterate cycles compressed into days — so you arrive at the right solution with evidence.' },
    { icon: 'fa-file-export',     title: 'Engineering-Ready Handoff',       desc: 'Annotated design specs, component inventories and developer notes that eliminate ambiguity during implementation.' },
  ],
  benefits: [
    { title: 'Validate Before You Build',   desc: 'Discover usability problems and wrong assumptions in days rather than months — before engineering resources are committed.' },
    { title: '10× Cheaper to Fix',          desc: 'A change to a prototype costs hours. The same change in production code costs weeks. Prototyping shifts the cost curve dramatically.' },
    { title: 'Stakeholder Buy-In',          desc: 'A tangible, interactive prototype gets stakeholder alignment and investor confidence far more effectively than a slide deck.' },
    { title: 'Engineering Confidence',      desc: 'Developers build faster and with fewer questions when they have a well-tested, detailed prototype as their specification.' },
  ],
  process: [
    { num: '01', title: 'Idea & Scope Alignment',  desc: 'Define what needs to be prototyped, the key assumptions to test and the target users for validation.' },
    { num: '02', title: 'Concept & Wireframing',   desc: 'Rapid low-fidelity sketches exploring multiple solutions — narrowed down through internal review.' },
    { num: '03', title: 'Interactive Prototype',   desc: 'High-fidelity Figma prototype built with realistic content, interactions and edge-case states.' },
    { num: '04', title: 'User Testing Sessions',   desc: 'Facilitated testing with 5–8 target users per round, capturing behavioural observations and verbal feedback.' },
    { num: '05', title: 'Iterate & Handoff',       desc: 'Prototype refined based on findings, annotated for engineering handoff, and signed off by stakeholders.' },
  ],
  useCases: [
    { title: 'New Feature Validation',    desc: 'Test a new product feature with real users before dedicating a full engineering sprint to building it.',           img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80' },
    { title: 'MVP Product Development',   desc: 'Define and validate the minimum viable product experience before committing to full-scale development.',           img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80' },
    { title: 'Checkout & Conversion Flows',desc: 'Prototype and test critical conversion journeys — sign-up, checkout, onboarding — to maximise completion rates.',  img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Internal Tool Redesign',    desc: 'Prototype a modernised interface for legacy internal tools to get employee buy-in before engineering begins.',     img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Figma', 'FigJam', 'Framer', 'Maze', 'UserTesting', 'Loom', 'Miro', 'Notion', 'Zeroheight', 'Marvel', 'InVision'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', title: 'How Many Prototype Test Users Is Enough?',          desc: 'The research behind the "5 users" rule and when you actually need more to reach statistically meaningful insights.',    date: 'June 7, 2026'  },
    { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title: 'Figma Prototyping in 2026: Advanced Techniques',    desc: 'Variables, conditional logic and component properties that bring Figma prototypes closer to real product behaviour.',   date: 'May 24, 2026' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title: 'From Prototype to Production: Managing the Handoff', desc: 'Best practices for engineering handoff that preserve design intent and reduce implementation back-and-forth.',          date: 'May 10, 2026' },
  ],
  ctaHeading: 'Ready to Validate Your Product Idea Fast?',
  ctaBody: 'Tell us what you want to test and who your users are — we will have an interactive prototype ready to test within days.',
};

function RapidPrototypingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default RapidPrototypingPage;
