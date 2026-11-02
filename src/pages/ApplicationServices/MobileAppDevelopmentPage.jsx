import { useEffect } from 'react';
import ServiceSubpageLayout from '../../components/ServiceSubpageLayout';

const data = {
  hero: {
    eyebrow: 'Application Services · Mobile',
    title: 'Mobile App Development',
    subtitle: 'Native iOS, Android, and cross-platform mobile applications engineered for peak performance, fluid UX, and the operational demands of enterprise-grade deployment.',
    bgImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=80',
  },
  overview: {
    heading: 'Mobile Experiences That Work at Enterprise Scale',
    body: [
      "Mobile is no longer a secondary channel — for most organisations, it is the primary touchpoint for customers, field workers, and partners. Poorly built mobile apps damage brand reputation, erode user trust, and create security vulnerabilities across your entire digital estate.",
      "Improx Tech builds mobile applications that are fast, secure, offline-capable, and designed with the rigour enterprise operations demand. Whether you need a consumer-facing app serving millions or an internal field operations tool for your workforce, we engineer for reliability first.",
    ],
  },
  features: [
    { icon: 'fa-apple', title: 'Native iOS Development', desc: 'SwiftUI and UIKit-based applications leveraging the latest iOS platform capabilities — ARKit, Core ML, HealthKit, and beyond.' },
    { icon: 'fa-android', title: 'Native Android Development', desc: 'Kotlin-first Android applications with Material You design, background services, and hardware integration for modern devices.' },
    { icon: 'fa-layer-group', title: 'Cross-Platform with React Native', desc: 'Single codebase delivering near-native performance on both iOS and Android — faster development, lower maintenance overhead.' },
    { icon: 'fa-wifi', title: 'Offline-First Architecture', desc: 'Local-first data sync, conflict resolution, and background sync enabling full functionality without connectivity.' },
    { icon: 'fa-bell', title: 'Push Notifications & Engagement', desc: 'FCM/APNs integration with personalised notification logic, deep linking, and re-engagement automation.' },
    { icon: 'fa-fingerprint', title: 'Biometric Security & Auth', desc: 'Face ID, Touch ID, and device attestation integrated with your enterprise identity provider for seamless, secure access.' },
  ],
  benefits: [
    { title: 'Faster User Adoption', desc: 'Intuitive, platform-native UX patterns that users understand immediately — reducing training time and support burden.' },
    { title: 'Field Productivity Gains', desc: 'Offline capability, barcode scanning, GPS tracking, and device integration empower field teams to work faster anywhere.' },
    { title: 'App Store Optimisation', desc: 'Technical performance, metadata strategy, and review management expertise to maximise organic download growth.' },
    { title: 'Enterprise MDM Compatibility', desc: 'Apps designed for deployment via Intune, Jamf, and other MDM platforms with corporate policy compliance built in.' },
  ],
  process: [
    { num: '01', title: 'User Research & Journey Mapping', desc: 'We study your users — whether customers or employees — to design flows that feel natural and remove all friction.' },
    { num: '02', title: 'Interactive Prototype & Design', desc: 'High-fidelity, interactive prototypes in Figma validated with real users before engineering investment begins.' },
    { num: '03', title: 'Agile Mobile Development', desc: 'Two-week sprints with working app builds on TestFlight and Firebase App Distribution for continuous stakeholder review.' },
    { num: '04', title: 'Device & OS Matrix Testing', desc: 'Automated and manual testing across 50+ device/OS combinations ensuring consistent behaviour for all your users.' },
    { num: '05', title: 'App Store Submission & Launch', desc: 'End-to-end App Store and Play Store submission management, compliance review, and phased rollout strategy.' },
  ],
  useCases: [
    { title: 'Consumer Mobile Applications', desc: 'Retention-optimised consumer apps with personalisation engines, gamification, and viral growth mechanics.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80' },
    { title: 'Field Service & Workforce Apps', desc: 'GPS-enabled, offline-first tools for technicians, delivery drivers, and field inspection teams.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80' },
    { title: 'mHealth & Wellness Apps', desc: 'HealthKit and Google Fit integrated wellness and chronic disease management applications.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80' },
    { title: 'Retail & Commerce Apps', desc: 'Personalised shopping, loyalty programmes, AR try-on, and in-app payment experiences.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80' },
  ],
  techs: ['React Native', 'Expo', 'Swift / SwiftUI', 'Kotlin', 'Flutter', 'Firebase', 'Redux / Zustand', 'WatermelonDB', 'Node.js', 'FastAPI', 'AWS Amplify', 'FCM', 'APNs', 'Detox', 'Jest'],
  blogs: [
    { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80', title: 'React Native vs. Flutter in 2026: An Honest Comparison', desc: 'Performance benchmarks, ecosystem maturity, and team fit analysis for cross-platform mobile development.', date: 'June 7, 2026' },
    { img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=600&q=80', title: 'Building Offline-First Mobile Apps for Enterprise', desc: 'Sync strategies, conflict resolution patterns, and data models for reliable offline mobile experiences.', date: 'May 24, 2026' },
    { img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80', title: 'Mobile App Security: OWASP Top 10 for Mobile', desc: 'Practical mitigations for the most critical mobile security vulnerabilities found in enterprise applications.', date: 'May 11, 2026' },
  ],
  ctaHeading: 'Ready to Build Your Mobile Application?',
  ctaBody: 'Share your app concept, target users, and platform requirements — our mobile architects will propose the optimal approach.',
};

function MobileAppDevelopmentPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <ServiceSubpageLayout {...data} />;
}

export default MobileAppDevelopmentPage;
