import { Link } from 'react-router-dom';

const stats = [
  { val: '15+', label: 'Years of Growth' },
  { val: '300+', label: 'Global Clients' },
  { val: '98%', label: 'Client Retention' },
  { val: '450+', label: 'Expert Engineers' }
];

const values = [
  { icon: 'fa-lightbulb', title: 'Relentless Innovation', desc: 'We continuously push boundaries, integrating emerging AI, cloud paradigms, and design methodologies into production systems.' },
  { icon: 'fa-shield-halved', title: 'Absolute Integrity', desc: 'Transparency is our hallmark. Open code repositories, real-time telemetry dashboards, and straightforward communication.' },
  { icon: 'fa-users', title: 'Extreme Collaboration', desc: 'We operate as embedded product squads, unifying clients, designers, and engineers under shared milestones and metrics.' },
  { icon: 'fa-award', title: 'Engineering Excellence', desc: 'We write clean, documented, highly tested code that reduces technical debt and scales seamlessly from MVP to millions.' }
];

const timeline = [
  { year: '2011', title: 'Improx Tech Founded', desc: 'Started in Pune, India as a core custom software consultancy specializing in Java and web architectures.' },
  { year: '2016', title: 'Global Delivery Expansion', desc: 'Established international offices and expanded capabilities to cloud transformation and scalable DevOps.' },
  { year: '2021', title: 'AI & Data Lab Launch', desc: 'Inaugurated a dedicated research center for Machine Learning, Business Intelligence, and advanced Analytics.' },
  { year: '2026', title: 'Enterprise Digital Ecosystems', desc: 'Pioneering end-to-end digital transformation for global enterprises with integrated AI-agent systems.' }
];

function AboutPage() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* ── Hero Section ── */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(248,250,252,.85) 0%,rgba(255,255,255,.6) 50%,rgba(248,250,252,.98) 100%)', zIndex: 1 }} />
        <div className="hero-blob hero-blob-1" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', top: '-10%', left: '-5%' }} />
        
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div className="reveal active">
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>
              <span className="glow-dot" /> About Our Company
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, color: 'var(--text-hi)', lineHeight: 1.1, marginBottom: '22px', letterSpacing: '-0.03em' }}>
              We build technology that{' '}
              <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>empowers businesses</span>
            </h1>
            <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              Improx Tech is a premier digital engineering partner. We combine design thinking, advanced software engineering, and artificial intelligence to construct robust solutions that drive enterprise value.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--grad-brand)' }}>Partner With Us <i className="fa-solid fa-arrow-right" /></Link>
              <Link to="/services" className="btn btn-secondary">Our Capabilities</Link>
            </div>
          </div>
          
          <div className="reveal active" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-raise)' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Improx Tech Collaborative Team" style={{ width: '100%', height: 'auto', minHeight: '340px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── Statistics Grid ── */}
      <section className="section-pad-sm section-raised" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
          {stats.map((s, idx) => (
            <div key={idx} className="reveal active" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'var(--font-head)' }}>{s.val}</div>
              <div style={{ color: 'var(--text-mid)', fontSize: '0.9rem', marginTop: '6px', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-pad">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Our Foundation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Values That Guide Our Delivery</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((v, idx) => (
              <div key={idx} className="glass-card reveal active" style={{ padding: '36px 30px', border: '1px solid var(--border)', background: 'var(--bg-card)', transitionDelay: `${idx * 0.15}s` }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <i className={`fa-solid ${v.icon}`} style={{ fontSize: '1.25rem', color: 'var(--brand)' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.86rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company History / Timeline ── */}
      <section className="section-pad section-alt" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Timeline</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Our History of Innovation</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20px', width: '2px', background: 'var(--border)' }} />
            {timeline.map((item, idx) => (
              <div key={idx} className="reveal active" style={{ display: 'flex', gap: '24px', position: 'relative', paddingLeft: '48px' }}>
                <div style={{ position: 'absolute', left: '10px', top: '4px', width: '22px', height: '22px', borderRadius: '50%', background: 'var(--grad-brand)', border: '4px solid #fff', boxShadow: '0 2px 8px rgba(37,99,235,0.3)' }} />
                <div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand)' }}>{item.year}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-hi)', margin: '4px 0' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutPage;
