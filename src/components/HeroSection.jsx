import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const heroLines = [
  'Building enterprise software that scales.',
  'Accelerating digital transformation globally.',
  'AI-powered platforms. Measurable outcomes.',
];

function HeroSection() {
  const [activeLine, setActiveLine] = useState(0);
  const text = useMemo(() => heroLines[activeLine], [activeLine]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLine((c) => (c + 1) % heroLines.length);
    }, 3400);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Video */}
      <div className="hero-bg">
        <div className="hero-overlay-gradient" />
        <video
          className="hero-video"
          autoPlay muted loop playsInline aria-hidden="true"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-animation-31991-large.mp4" type="video/mp4" />
        </video>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Technology background"
        />
      </div>

      {/* Ambient Blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '180px 24px 100px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>

        <div className="reveal">
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span className="glow-dot" /> Pune, India &nbsp;·&nbsp; Global Enterprise Delivery
          </span>

          <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 5.2rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '16px', color: '#fff' }}>
            Improx<span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> Tech</span>
          </h1>

          <h2 className="hero-rotator" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)', color: '#94A3B8', marginBottom: '24px', fontWeight: 500, minHeight: '3.2rem', lineHeight: 1.4 }}>
            {text}
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '36px', maxWidth: '560px', lineHeight: 1.75 }}>
            From mission-critical applications to AI-powered decision platforms — we design, engineer, and deliver secure digital products that accelerate enterprise growth.
          </p>

          {/* Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { icon: 'fa-shield-halved', label: 'Enterprise Security' },
              { icon: 'fa-bolt', label: 'Rapid Delivery' },
              { icon: 'fa-chart-line', label: 'Measurable ROI' },
            ].map((p) => (
              <span key={p.label} className="hero-pill">
                <i className={`fa-solid ${p.icon}`} style={{ color: '#60A5FA' }} /> {p.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '15px 36px' }}>
              Get Started <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link to="/services/application-services" className="btn btn-secondary" style={{ fontSize: '1.05rem', padding: '15px 36px' }}>
              View Services
            </Link>
          </div>
        </div>

        {/* Side Panel */}
        <div className="glass-card reveal" style={{ padding: '40px', borderRadius: '24px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--gradient-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <i className="fa-solid fa-microchip" style={{ color: '#fff', fontSize: '1.3rem' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>Enterprise-Focused Engineering</h3>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '28px' }}>
            Purpose-built software, modern cloud foundations, and intelligent automation — tailored for complex business operations at any scale.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Dedicated product teams for end-to-end delivery',
              'Security-first architecture & compliance frameworks',
              'Agile execution with measurable milestones',
              '24/7 SLA-backed support & monitoring',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <i className="fa-solid fa-check" style={{ color: '#3B82F6', marginTop: '3px', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '24px' }}>
            {[['300+', 'Clients'], ['1200+', 'Projects'], ['15 Yrs', 'Experience']].map(([val, label]) => (
              <div key={label}>
                <strong style={{ display: 'block', fontSize: '1.4rem', fontWeight: 800, color: '#60A5FA', fontFamily: 'var(--font-heading)' }}>{val}</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <i className="fa-solid fa-chevron-down" />
        Scroll
      </div>
    </section>
  );
}

export default HeroSection;
