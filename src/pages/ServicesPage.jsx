import { Link } from 'react-router-dom';

const practices = [
  {
    title: 'Product Engineering',
    icon: 'fa-rocket',
    to: '/services/product-engineering',
    desc: 'From market research and roadmapping to clickable UX flows, QA, and cloud native release pipelines.',
    color: '#2563EB',
    sub: ['Product Strategy', 'UX / UI Design', 'Rapid Prototyping', 'QA & Testing', 'DevOps & CI/CD', 'Open Source']
  },
  {
    title: 'Application Services',
    icon: 'fa-layer-group',
    to: '/services/application-services',
    desc: 'Bespoke custom software, robust enterprise systems (ERP/CRM), SaaS architectures, and API integrations.',
    color: '#06B6D4',
    sub: ['Custom Software', 'Enterprise Apps', 'SaaS Development', 'Mobile Apps', 'Web Applications', 'APIs']
  },
  {
    title: 'Technology Services',
    icon: 'fa-server',
    to: '/services/technology-services',
    desc: 'Zero-downtime multi-cloud migration, DevSecOps pipeline hardening, analytics, and SIEM security.',
    color: '#4F46E5',
    sub: ['Cloud Migration', 'DevSecOps', 'Data Engineering', 'Cybersecurity', 'Managed Cloud', 'IoT Platforms']
  },
  {
    title: 'AI & Business Intelligence',
    icon: 'fa-brain',
    to: '/services/ai-ml',
    desc: 'Generative AI architectures, custom machine learning models, predictive intelligence, and executive BI dashboards.',
    color: '#8B5CF6',
    sub: ['Generative AI', 'Machine Learning', 'BI Analytics', 'NLP Automation', 'Data Visualisation', 'Predictive']
  }
];

function ServicesPage() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* ── Hero ── */}
      <section style={{ position: 'relative', padding: '120px 24px 60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(248,250,252,.85) 0%,rgba(255,255,255,.6) 50%,rgba(248,250,252,.98) 100%)', zIndex: 1 }} />
        <div className="hero-blob hero-blob-1" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', top: '-10%', right: '-5%' }} />
        
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', color: 'var(--brand)' }}>
            <span className="glow-dot" /> Our Capabilities
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, color: 'var(--text-hi)', lineHeight: 1.1, marginBottom: '22px', letterSpacing: '-0.03em' }}>
            Enterprise{' '}
            <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Digital Capabilities</span>
          </h1>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto' }}>
            Explore our comprehensive technology offerings designed to accelerate transformation, streamline cloud infrastructure, and build intelligent products.
          </p>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="section-pad-sm" style={{ paddingBottom: '120px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '28px' }}>
            {practices.map((p, idx) => (
              <div key={idx} className="glass-card reveal active" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '36px 30px', background: 'var(--bg-card)', border: '1px solid var(--border)', transitionDelay: `${idx * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: `0 4px 16px ${p.color}25` }}>
                    <i className={`fa-solid ${p.icon}`} style={{ fontSize: '1.3rem' }} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-hi)' }}>{p.title}</h3>
                </div>

                <p style={{ color: 'var(--text-mid)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', flex: 1 }}>
                  <span style={{ fontSize: '0.66rem', textTransform: 'uppercase', color: 'var(--text-lo)', fontWeight: 800, letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>Sub Services</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.sub.map(s => (
                      <span key={s} style={{ fontSize: '0.72rem', color: 'var(--brand)', background: 'rgba(37,99,235,0.05)', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>

                <Link to={p.to} className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '0.82rem', padding: '10px' }}>
                  Explore Practice <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default ServicesPage;
