import { Link } from 'react-router-dom';

const stats = [
  { val: '15+', label: 'Years of Engineering Growth', desc: 'Continuous technology delivery since 2011' },
  { val: '300+', label: 'Enterprise Deployments', desc: 'Mission-critical systems delivered worldwide' },
  { val: '98%', label: 'Client Retention Rate', desc: 'Long-term strategic partnership model' },
  { val: '450+', label: 'Architects & Engineers', desc: 'Specialized squads across cloud, AI & web' },
];

const pillars = [
  {
    icon: 'fa-cube',
    title: 'High-Concurrency Software Delivery',
    desc: 'We engineer bespoke microservices, high-scale SaaS architectures, and cloud-native backbones built to withstand millions of transactions with sub-50ms latency.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Zero-Trust Security & ISO 27001',
    desc: 'Security is baked into our design system from sprint zero. Automated vulnerability scanning, OWASP Top-10 adherence, and hardened deployment landing zones.',
  },
  {
    icon: 'fa-brain',
    title: 'Pragmatic AI in Commercial Production',
    desc: 'Moving beyond research into commercial production. We build deterministic multi-agent architectures, RAG pipelines, and automated LLM workflows with strict guardrails.',
  },
  {
    icon: 'fa-people-group',
    title: 'Embedded Agile Product Squads',
    desc: 'Our cross-functional teams operate directly as an extension of your engineering organization, participating in daily standups with full repository transparency.',
  },
];

const values = [
  {
    icon: 'fa-lightbulb',
    title: 'Relentless Innovation',
    desc: 'We continuously evaluate emerging technology paradigms — from eBPF networking to generative AI agents — integrating only battle-tested advancements into client systems.',
  },
  {
    icon: 'fa-handshake-angle',
    title: 'Absolute Transparency',
    desc: 'Open git repositories, live deployment telemetry, honest architectural trade-off assessments, and zero hidden technical debt.',
  },
  {
    icon: 'fa-award',
    title: 'Engineering Craftsmanship',
    desc: 'We write clean, strictly typed, rigorously tested software backed by automated CI/CD pipelines and comprehensive system documentation.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Measurable Enterprise Impact',
    desc: 'Every technical decision is tied to commercial outcomes: decreasing cloud infrastructure TCO, compressing time-to-market, and maximizing system uptime.',
  },
];

const industries = [
  {
    icon: 'fa-building-columns',
    title: 'FinTech & Banking',
    desc: 'High-throughput transactional ledgers, fraud detection AI pipelines, automated settlement engines, and PCI-DSS compliance.',
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant patient portals, distributed medical record ingestion, clinical decision support algorithms, and telemetry.',
  },
  {
    icon: 'fa-truck-fast',
    title: 'Supply Chain & Logistics',
    desc: 'Real-time IoT fleet monitoring, route optimization heuristics, warehouse automated inventory sync, and multi-tier tracking.',
  },
  {
    icon: 'fa-cloud',
    title: 'Enterprise Multi-Tenant SaaS',
    desc: 'Multi-region Kubernetes clusters, tenant isolation database schemas, dynamic autoscaling, and usage-based billing engines.',
  },
];

const timeline = [
  {
    year: '2011',
    title: 'Founding & Custom Software Consultancy',
    desc: 'Improx Tech was founded in Pune, India, delivering high-performance backend systems and custom Java and web architectures for regional enterprises.',
  },
  {
    year: '2016',
    title: 'Global Delivery & Cloud Engineering',
    desc: 'Expanded capabilities to include enterprise cloud migration, automated DevOps delivery pipelines, and cross-platform mobile solutions for international clients.',
  },
  {
    year: '2020',
    title: 'ISO 27001 Certification & DevSecOps Standard',
    desc: 'Formally achieved ISO 27001 information security certification, institutionalizing zero-trust protocols across all software development lifecycles.',
  },
  {
    year: '2023',
    title: 'Inauguration of AI & Data Innovation Lab',
    desc: 'Established our dedicated artificial intelligence center in Pune, developing generative AI agent frameworks, vector database architectures, and custom neural networks.',
  },
  {
    year: '2026',
    title: 'Next-Generation Enterprise Digital Ecosystems',
    desc: 'Delivering end-to-end digital engineering across cloud, AI, and mission-critical applications for global enterprises with 24/7 SLA-backed operations.',
  },
];

function AboutPage() {
  return (
    <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      
      {/* ── 1. Hero Section ── */}
      <section style={{ position: 'relative', padding: 'clamp(115px, 14vw, 150px) 24px clamp(50px, 7vw, 75px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(248,250,252,0.92) 0%, rgba(255,255,255,0.7) 50%, rgba(248,250,252,0.98) 100%)', zIndex: 1 }} />
        <div className="hero-blob hero-blob-1" style={{ width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', top: '-12%', left: '-8%' }} />
        <div className="hero-blob hero-blob-2" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', bottom: '-10%', right: '-5%' }} />
        
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-lo)', marginBottom: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-lo)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand)', fontWeight: 600 }}>About Us</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '56px', alignItems: 'center' }}>
            <div className="reveal active">
              <span className="eyebrow" style={{ color: 'var(--brand)' }}>
                <span className="glow-dot" /> Enterprise Digital Engineering
              </span>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, color: 'var(--text-hi)', lineHeight: 1.08, marginBottom: '22px', letterSpacing: '-0.035em' }}>
                We Architect, Engineer & Scale{' '}
                <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Digital Ecosystems
                </span>
              </h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                Improx Tech is a premier digital engineering partner. Headquartered in Pune, India, we unite human-centered product design, resilient cloud architectures, and production artificial intelligence to construct robust platforms that unlock tangible enterprise value.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--grad-brand)', padding: '14px 34px' }}>
                  Partner With Us <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link to="/services" className="btn btn-secondary" style={{ padding: '14px 30px' }}>
                  Explore Capabilities
                </Link>
              </div>
            </div>
            
            {/* Hero Visual Frame */}
            <div className="reveal active" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-raise)' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" 
                alt="Improx Tech Collaborative Engineering Squad" 
                style={{ width: '100%', height: '100%', minHeight: '380px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)' }} />

              {/* Floating Pune HQ Badge */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                padding: '12px 18px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)',
                backdropFilter: 'blur(10px)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: '0.9rem' }} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--text-hi)' }}>Pune Delivery HQ</strong>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-lo)' }}>Baner Road Tech Corridor, India</span>
                </div>
              </div>

              {/* Top Security Badge */}
              <div style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                padding: '8px 14px',
                borderRadius: '99px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--border)',
                boxShadow: '0 6px 18px rgba(15, 23, 42, 0.1)',
                backdropFilter: 'blur(10px)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-hi)' }}>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Statistics Grid ── */}
      <section className="section-pad-sm section-raised" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {stats.map((s, idx) => (
              <div key={idx} className="reveal active">
                <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 900, background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: 'var(--font-head)', lineHeight: 1 }}>
                  {s.val}
                </div>
                <div style={{ color: 'var(--text-hi)', fontSize: '0.96rem', marginTop: '8px', fontWeight: 700 }}>{s.label}</div>
                <div style={{ color: 'var(--text-lo)', fontSize: '0.78rem', marginTop: '4px' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Engineering Pillars ── */}
      <section className="section-pad">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>How We Deliver</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', fontWeight: 800, color: 'var(--text-hi)' }}>The Architectural Pillars of Improx Tech</h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', maxWidth: '640px', margin: '12px auto 0', lineHeight: 1.7 }}>
              Our delivery model combines mature software engineering discipline with the speed and flexibility of dedicated embedded squads.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {pillars.map((p, idx) => (
              <div key={idx} className="glass-card reveal active" style={{ padding: '32px 28px', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fa-solid ${p.icon}`} style={{ fontSize: '1.25rem', color: 'var(--brand)' }} />
                </div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.68 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Core Values ── */}
      <section className="section-pad section-alt" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Our Foundation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Values That Anchor Our Engineering</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {values.map((v, idx) => (
              <div key={idx} className="glass-card reveal active" style={{ padding: '32px 28px', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fa-solid ${v.icon}`} style={{ fontSize: '1.25rem', color: 'var(--brand)' }} />
                </div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.68 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Domains & Industries ── */}
      <section className="section-pad">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Enterprise Sectors</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Industries We Empower</h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', maxWidth: '640px', margin: '12px auto 0', lineHeight: 1.7 }}>
              Deep domain knowledge combined with proven architectural accelerators across regulated and high-volume sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="glass-card reveal active" style={{ padding: '32px 28px', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fa-solid ${ind.icon}`} style={{ fontSize: '1.25rem', color: 'var(--brand)' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '10px' }}>{ind.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.68 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Evolution Timeline ── */}
      <section className="section-pad section-alt" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal active" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Our Trajectory</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', fontWeight: 800, color: 'var(--text-hi)' }}>A 15-Year History of Engineering Innovation</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '19px', width: '2px', background: 'linear-gradient(to bottom, var(--brand), var(--accent))' }} />
            {timeline.map((item, idx) => (
              <div key={idx} className="reveal active" style={{ display: 'flex', gap: '20px', position: 'relative', paddingLeft: '50px' }}>
                <div style={{
                  position: 'absolute',
                  left: '9px',
                  top: '4px',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'var(--grad-brand)',
                  border: '3px solid #fff',
                  boxShadow: '0 2px 10px rgba(37,99,235,0.3)',
                  zIndex: 2
                }} />
                <div>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand)', fontFamily: 'var(--font-head)' }}>{item.year}</span>
                  <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-hi)', margin: '4px 0 6px 0' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.68, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action ── */}
      <section className="section-pad">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div className="glass-panel reveal active" style={{ padding: 'clamp(36px, 6vw, 60px) 24px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)', justifyContent: 'center' }}>Build Together</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text-hi)', marginBottom: '18px', letterSpacing: '-0.025em' }}>
              Ready to Accelerate Your Enterprise Technology?
            </h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 32px' }}>
              Connect directly with our senior technology architects to evaluate your roadmap, explore system modernization, or assemble a dedicated engineering squad.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem', background: 'var(--grad-brand)' }}>
                Start a Conversation <i className="fa-solid fa-arrow-right" />
              </Link>
              <a href="tel:+919156470600" className="btn btn-secondary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
                <i className="fa-solid fa-phone" style={{ color: 'var(--brand)' }} /> +91 91564 70600
              </a>
            </div>
            <p style={{ color: 'var(--text-lo)', fontSize: '0.85rem', margin: 0 }}>
              Direct email: <a href="mailto:enquiry@improxgroup.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>enquiry@improxgroup.com</a> · Pune, India
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutPage;
