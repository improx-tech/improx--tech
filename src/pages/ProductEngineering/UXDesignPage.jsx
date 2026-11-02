import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Product Engineering · Design',
    title: 'UX / UI Design',
    subtitle: 'Human-centred design systems, interaction patterns and pixel-perfect interfaces — built for the users who matter and the engineers who have to ship them.',
    bgImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Design That Solves Problems, Not Just Looks Good',
    body: [
      "Great UX is invisible. When design works, users accomplish their goals without friction, confusion or frustration — they simply get things done. When it fails, even technically brilliant software gets abandoned. Improx Tech's design practice starts with deep user understanding and ends with interfaces that are not just beautiful, but genuinely useful.",
      "We bridge the gap between user research, interaction design and front-end engineering — delivering design systems and component libraries that translate seamlessly from Figma to production without the usual loss in translation.",
    ],
  },
  features: [
    { icon: 'fa-users',          title: 'User Research & Testing',     desc: 'Qualitative interviews, usability tests and quantitative behavioural analysis that surface real user needs and friction points.' },
    { icon: 'fa-sitemap',        title: 'Information Architecture',    desc: 'Content hierarchies, navigation structures and user flows designed to minimise cognitive load and maximise task completion.' },
    { icon: 'fa-pen-ruler',      title: 'Wireframing & Prototyping',   desc: 'Low-fidelity wireframes to high-fidelity interactive Figma prototypes, validated with users before engineering begins.' },
    { icon: 'fa-palette',        title: 'Design System Creation',      desc: 'Scalable component libraries with tokens, variants and documentation that enforce consistency across every screen.' },
    { icon: 'fa-mobile-screen',  title: 'Responsive & Adaptive Design',desc: 'Layouts and interaction patterns optimised for every viewport — mobile, tablet and desktop — without compromise.' },
    { icon: 'fa-universal-access','title': 'Accessibility (WCAG 2.2)', desc: 'Colour contrast, ARIA labelling, keyboard navigation and screen-reader compatibility built in by default — not retrofitted.' },
  ],
  benefits: [
    { title: 'Higher User Adoption',      desc: 'Intuitive interfaces reduce the learning curve, driving faster onboarding and higher feature adoption across your user base.' },
    { title: 'Reduced Support Overhead',  desc: 'Well-designed UX eliminates the confusion that generates support tickets — your team spends less time explaining how things work.' },
    { title: 'Faster Engineering Delivery',desc: 'A comprehensive design system with reusable components lets engineers build features in hours, not days.' },
    { title: 'Better Conversion Rates',   desc: 'Optimised user journeys on marketing and transactional surfaces directly improve sign-up, checkout and activation rates.' },
  ],
  process: [
    { num: '01', title: 'Discovery & Empathy Mapping', desc: 'User interviews, competitive UX audit and behavioural data analysis to build a shared understanding of your users.' },
    { num: '02', title: 'IA & User Flow Design',       desc: 'Define the information architecture, navigation model and critical user journeys before any visual design begins.' },
    { num: '03', title: 'Wireframes & Concept',        desc: 'Low-fidelity wireframes explored rapidly, presented for feedback and iterated before moving to high-fidelity.' },
    { num: '04', title: 'High-Fidelity Design',        desc: 'Pixel-perfect Figma screens with a fully documented design system ready for developer handoff.' },
    { num: '05', title: 'Usability Testing & QA',      desc: 'Prototype testing with real users, iteration based on findings, and design QA during engineering implementation.' },
  ],
  useCases: [
    { title: 'SaaS Product Design',        desc: 'End-to-end UX for B2B and B2C SaaS products — from onboarding flows to complex dashboard interfaces.',            img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80' },
    { title: 'Enterprise Internal Tools',  desc: 'Replacing clunky internal systems with modern, efficient interfaces that actually match how your employees work.',    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80' },
    { title: 'E-commerce UX Optimisation',desc: 'Conversion-focused redesigns of product discovery, cart, checkout and post-purchase journeys.',                      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
    { title: 'Mobile App UX',              desc: 'Native iOS and Android UX patterns with gesture-based navigation, haptic feedback and platform design guidelines.',   img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['Figma', 'FigJam', 'Storybook', 'Zeroheight', 'Framer', 'Lottie', 'Hotjar', 'FullStory', 'Maze', 'UserTesting', 'axe Accessibility', 'Chromatic'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80', title: 'Design Tokens: The Foundation of Scalable Design Systems',    desc: 'How design tokens connect Figma to code and keep visual consistency as your product grows.',                       date: 'June 9, 2026'  },
    { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80', title: 'Mobile-First UX in 2026: What Has Changed',                 desc: 'New interaction patterns, gesture models and performance expectations shaping mobile UX this year.',              date: 'May 26, 2026' },
    { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', title: 'Measuring UX Quality Beyond NPS',                           desc: 'The metrics that actually tell you whether your product experience is improving — beyond vanity scores.',          date: 'May 12, 2026' },
  ],
  ctaHeading: 'Ready to Elevate Your Product Experience?',
  ctaBody: 'Share your product and users — our design team will define a research-grounded UX strategy and deliver interfaces your users will love.',
};

function UXDesignPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} parentLabel="Product Engineering" parentTo="/services/product-engineering" />;
}

export default UXDesignPage;
