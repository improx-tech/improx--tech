import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';

const services = [
  { icon: 'fa-code',              title: 'Custom Software Development',  link: '/services/application-services/custom-software',         desc: 'Bespoke applications built to encapsulate your unique business logic and workflow requirements.' },
  { icon: 'fa-building-columns',  title: 'Enterprise Applications',      link: '/services/application-services/enterprise-applications',  desc: 'Robust internal platforms — ERP, HRMS, CRM — engineered for scale and organisational alignment.' },
  { icon: 'fa-layer-group',       title: 'SaaS Development',             link: '/services/application-services/saas-development',         desc: 'Multi-tenant, subscription-based cloud products built for high concurrency and global scale.' },
  { icon: 'fa-mobile-screen',     title: 'Mobile App Development',       link: '/services/application-services/mobile-app-development',   desc: 'iOS, Android, and cross-platform apps with native performance and delightful user experiences.' },
  { icon: 'fa-globe',             title: 'Web Applications',             link: '/services/application-services/web-applications',         desc: 'Progressive, responsive web platforms engineered with modern frameworks and accessibility standards.' },
  { icon: 'fa-server',            title: 'Cloud Applications',           link: '/services/application-services/cloud-applications',       desc: 'Cloud-native solutions leveraging containers, serverless, and microservices architectures.' },
  { icon: 'fa-network-wired',     title: 'API Development',              link: '/services/application-services/api-development',          desc: 'RESTful and GraphQL APIs designed for performance, versioning, and secure third-party integration.' },
  { icon: 'fa-link',              title: 'System Integration',           link: '/services/application-services/system-integration',       desc: 'Unify disparate systems into seamless operational workflows, eliminating data silos.' },
  { icon: 'fa-clock-rotate-left', title: 'Legacy Modernization',         link: '/services/application-services/legacy-modernization',     desc: 'Systematic uplift of outdated codebases to modern architectures — safely and incrementally.' },
  { icon: 'fa-headset',           title: 'Maintenance & Support',        link: '/services/application-services/maintenance-support',      desc: '24/7 proactive monitoring, patching, performance tuning, and SLA-backed incident resolution.' },
];

const processSteps = [
  { num: '01', title: 'Discovery & Architecture Design', desc: 'We align on business goals, map user journeys, define non-functionals, and design a scalable technical blueprint.' },
  { num: '02', title: 'Iterative Agile Development',     desc: 'Bi-weekly sprints deliver functional modules with continuous demos, feedback loops, and evolving feature sets.' },
  { num: '03', title: 'QA, Security & Performance',      desc: 'Comprehensive automated test suites, penetration testing, and load simulations validate every release candidate.' },
  { num: '04', title: 'CI/CD Deployment & Launch',       desc: 'Blue/green deployments via hardened pipelines ensure zero-downtime releases to any cloud environment.' },
  { num: '05', title: 'Ongoing Support & Evolution',     desc: 'Post-launch monitoring, SLA management, and quarterly roadmap reviews keep your platform ahead of the curve.' },
];

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Go', 'Java / Spring',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
  'GraphQL', 'REST', 'gRPC', 'Kafka', 'Terraform', 'GitHub Actions',
];

const benefits = [
  { icon: 'fa-rocket',         title: 'Reduced Time-to-Market', desc: 'Agile frameworks, pre-built accelerators, and reusable component libraries compress delivery timelines by up to 40%.' },
  { icon: 'fa-shield-halved',  title: 'Enterprise-Grade Security', desc: 'DevSecOps practices, OWASP compliance, and zero-trust principles embedded from sprint one.' },
  { icon: 'fa-arrow-trend-up', title: 'Elastic Scalability', desc: 'Architectures designed to absorb 10× traffic growth without re-engineering your core platform.' },
  { icon: 'fa-coins',          title: 'Optimised TCO', desc: 'Cloud cost governance, right-sizing, and automation reduce total cost of ownership year-on-year.' },
  { icon: 'fa-users-gear',     title: 'Dedicated Product Teams', desc: 'Cross-functional squads with engineers, QA, designers, and architects fully embedded in your delivery cadence.' },
  { icon: 'fa-chart-gantt',    title: 'Full Transparency', desc: 'Real-time project dashboards, weekly stakeholder reports, and open backlogs with no black-box delivery.' },
];

const blogs = [
  { title: 'Microservices vs. Monolith in 2026: The Real Trade-offs', desc: 'A balanced engineering analysis of when each architecture pattern delivers the most value.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', date: 'June 8, 2026' },
  { title: 'The State of React in Enterprise Applications', desc: 'How large organisations are standardising on React ecosystems for internal and customer-facing apps.', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80', date: 'May 22, 2026' },
  { title: 'API-First Development: A Strategic Advantage', desc: 'Why leading digital businesses design APIs before implementation — and how to adopt the methodology.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', date: 'May 10, 2026' },
];

function ApplicationServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="page-hero-bg">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(248,250,252,0.85) 0%, rgba(255,255,255,0.6) 50%, rgba(248,250,252,0.98) 100%)', zIndex: 1 }} />
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, zIndex: 0 }} />
        </div>

        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '180px 24px 100px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="eyebrow reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
            <span className="glow-dot" /> Enterprise Software Solutions
          </span>
          <h1 className="reveal" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '24px', color: 'var(--text-hi)', letterSpacing: '-0.03em' }}>
            Application{' '}
            <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Services
            </span>
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--text-mid)', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.75 }}>
            We architect, engineer, and continuously evolve mission-critical software applications that power enterprise operations and fuel digital growth.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.05rem' }}>
              Start a Project <i className="fa-solid fa-arrow-right" />
            </Link>
            <a href="#capabilities" className="btn btn-secondary" style={{ padding: '15px 40px', fontSize: '1.05rem' }}>
              Explore Services
            </a>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '56px', flexWrap: 'wrap' }}>
            {[['10+', 'Service Lines'], ['1200+', 'Delivered'], ['15 Yrs', 'Experience']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <strong style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>{v}</strong>
                <span style={{ color: 'var(--text-lo)', fontSize: '0.85rem' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Overview ── */}
      <section style={{ padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }} className="glass-panel reveal">
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '20px', textAlign: 'center', color: 'var(--text-hi)' }}>
            Accelerating Digital Capabilities Across the Stack
          </h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, textAlign: 'center' }}>
            In today's competitive landscape, software is your most strategic asset. Improx Tech delivers end-to-end application services — from greenfield product development and SaaS platforms to legacy modernization and system integration. Every engagement begins with understanding your business context and ends with software that creates lasting value.
          </p>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <SectionWrapper id="capabilities" eyebrow="Core Capabilities" title="Our Application Expertise">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="glass-card reveal"
              style={{ padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.3rem', color: 'var(--brand)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-hi)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.65 }}>{s.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand)', fontSize: '0.8rem', fontWeight: 600, marginTop: '12px' }}>
                  View Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Development Process ── */}
      <SectionWrapper eyebrow="Methodology" title="How We Deliver" subtitle="A disciplined, iterative delivery model refined across 1200+ enterprise engagements.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {processSteps.map((s, i) => (
            <div key={i} className="process-step reveal" style={{ position: 'relative', paddingLeft: '72px' }}>
              <div className="step-num" style={{ position: 'absolute', left: 0, top: 0, width: '44px', height: '44px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', color: '#fff', boxShadow: '0 4px 16px rgba(37,99,235,0.2)' }}>
                {s.num}
              </div>
              <div style={{ paddingTop: '6px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '700px' }}>{s.desc}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div style={{ position: 'absolute', left: '21px', top: '52px', bottom: '-40px', width: '2px', background: 'linear-gradient(to bottom, rgba(37,99,235,0.2), transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Technologies ── */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow reveal" style={{ textAlign: 'center', display: 'block' }}>Technology Stack</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '48px', color: 'var(--text-hi)', letterSpacing: '-0.03em' }}>
            Technologies We Leverage
          </h2>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {technologies.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <SectionWrapper eyebrow="Why Improx Tech" title="The Enterprise Advantage" subtitle="Six reasons why 300+ enterprises trust us for their most critical software delivery.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {benefits.map((b, i) => (
            <div key={i} className="glass-card reveal" style={{ padding: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={`fa-solid ${b.icon}`} style={{ color: '#fff', fontSize: '1.2rem' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-hi)' }}>{b.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Case Study ── */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span className="eyebrow reveal" style={{ display: 'block' }}>Success Story</span>
          <div className="glass-card reveal" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '24px' }}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Case study"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }}
            />
            <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge">Logistics · Cloud Migration</span>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '20px', color: 'var(--text-hi)', lineHeight: 1.2 }}>
                Global Supply Chain Platform Transformation
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                Rebuilt a monolithic logistics application into a responsive, microservices-based platform — cutting operational processing time by 40% and enabling real-time API integrations with 30+ international shipping partners.
              </p>
              <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
                {[['40%', 'Faster Processing'], ['30+', 'API Integrations'], ['99.97%', 'Uptime SLA']].map(([v, l]) => (
                  <div key={l}>
                    <strong style={{ display: 'block', fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand)', fontFamily: 'var(--font-heading)' }}>{v}</strong>
                    <span style={{ color: 'var(--text-lo)', fontSize: '0.8rem' }}>{l}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                Discuss a Similar Project <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blogs ── */}
      <SectionWrapper eyebrow="Insights" title="Related Articles">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {blogs.map((b, i) => (
            <article key={i} className="glass-card reveal" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src={b.img} alt={b.title} className="hover-scale" style={{ width: '100%', height: '210px', objectFit: 'cover' }} />
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ color: 'var(--brand)', fontSize: '0.78rem', fontWeight: 600 }}>{b.date}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-hi)', lineHeight: 1.4 }}>{b.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.65, flex: 1 }}>{b.desc}</p>
                <a href="#read" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--brand)', fontWeight: 600, fontSize: '0.85rem', marginTop: '8px' }}>
                  Read Article <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Contact ── */}
      <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Start a Project</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.03em', color: 'var(--text-hi)', lineHeight: 1.15 }}>
                Ready to build your next{' '}
                <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  application?
                </span>
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Our engineering teams are ready to architect and deliver solutions that drive measurable outcomes for your business.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ApplicationServicesPage;
