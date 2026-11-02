import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const services = [
  { icon: 'fa-wand-magic-sparkles', title: 'Generative AI',         to: '/services/ai-ml/generative-ai',           desc: 'LLM integration, RAG pipelines and custom GPT-powered tools that automate knowledge work at enterprise scale.' },
  { icon: 'fa-robot',               title: 'Machine Learning',      to: '/services/ai-ml/machine-learning',        desc: 'Custom ML model development, training pipelines and production deployment for classification, regression and recommendation.' },
  { icon: 'fa-chart-bar',           title: 'Business Intelligence',  to: '/services/ai-ml/business-intelligence',   desc: 'Self-service BI platforms, executive dashboards and embedded analytics turning data into decisions.' },
  { icon: 'fa-comment-dots',        title: 'NLP & Automation',       to: '/services/ai-ml/nlp-automation',          desc: 'Text classification, sentiment analysis, entity extraction and intelligent process automation using NLP models.' },
  { icon: 'fa-chart-line',          title: 'Data Visualisation',     to: '/services/ai-ml/data-visualisation',      desc: 'Interactive, real-time data visualisation platforms built for operational and strategic decision-making.' },
  { icon: 'fa-crystal-ball',        title: 'Predictive Analytics',   to: '/services/ai-ml/predictive-analytics',    desc: 'Forecasting models, anomaly detection and propensity scoring that surface future outcomes from historical patterns.' },
];

const stats = [['150+', 'AI Projects'], ['40%', 'Avg Efficiency Gain'], ['85%', 'Model Accuracy Rate'], ['24hrs', 'Model to Prod']];

const blogs = [
  { img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80', title: 'LLMs in Enterprise: Where Real Value Is Being Created', desc: 'Moving beyond chatbots — the enterprise use cases where Generative AI is delivering measurable ROI.', date: 'June 12, 2026' },
  { img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80', title: 'MLOps in 2026: Closing the Model-to-Production Gap', desc: 'How mature MLOps practices reduce the 87% of ML models that never reach production deployment.', date: 'May 29, 2026' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'Building a Data-First Culture for AI Success', desc: 'Why AI initiatives fail — and how organisational and data foundations determine AI outcomes more than model choice.', date: 'May 15, 2026' },
];

export default function AiMlPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(248,250,252,.85) 0%,rgba(255,255,255,.65) 50%,rgba(248,250,252,.98) 100%)', zIndex: 1 }} />
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .1 }} />
        </div>
        <div className="hero-blob hero-blob-1" /><div className="hero-blob hero-blob-2" />
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '180px 24px 100px', position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}><span className="glow-dot" /> AI · Machine Learning · Analytics</span>
          <h1 className="reveal" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.06, color: 'var(--text-hi)', letterSpacing: '-0.03em', marginBottom: '22px' }}>
            AI & Business <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Intelligence</span>
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem,1.8vw,1.22rem)', color: 'var(--text-mid)', maxWidth: '700px', margin: '0 auto 44px', lineHeight: 1.78 }}>
            From Generative AI and machine learning to business intelligence and predictive analytics — we build intelligent systems that create measurable competitive advantage for enterprise organisations.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px' }}>Start an AI Project <i className="fa-solid fa-arrow-right" /></Link>
            <a href="#capabilities" className="btn btn-secondary" style={{ padding: '14px 36px' }}>Explore Services</a>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: '44px', justifyContent: 'center', marginTop: '52px', flexWrap: 'wrap' }}>
            {stats.map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 900, color: 'var(--brand)' }}>{v}</div>
                <div style={{ color: 'var(--text-lo)', fontSize: '0.8rem', marginTop: '3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div className="glass-panel reveal">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.8vw,2.1rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '16px' }}>Intelligence Built Into Your Business Operations</h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.82, marginBottom: '14px' }}>
              AI and machine learning are no longer experimental capabilities — they are production systems running at the heart of the world's most competitive enterprises. Customer support automation, demand forecasting, fraud detection, personalisation engines and intelligent document processing are delivering measurable ROI today.
            </p>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.82 }}>
              Improx Tech's AI practice bridges the gap between data science research and production engineering — delivering AI systems that are accurate, reliable, explainable and continuously improving.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="capabilities" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow">Service Lines</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Our AI & Intelligence Capabilities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(285px,1fr))', gap: '20px' }}>
            {services.map((s, i) => (
              <Link key={i} to={s.to} className="glass-card reveal" style={{ padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '11px', background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.15rem', color: 'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '7px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.65 }}>{s.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--brand)', fontSize: '0.77rem', fontWeight: 600, marginTop: '10px' }}>Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.64rem' }} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-pad section-raised" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow">Why Improx Tech</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>AI That Actually Works in Production</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {[
              { icon: 'fa-flask',        t: 'Research to Production',       d: 'We close the 87% gap — every model we build is designed for production deployment, not just notebook accuracy.' },
              { icon: 'fa-database',     t: 'Data-First Approach',          d: 'We assess and fix data quality before modelling — because garbage-in-garbage-out is the leading cause of AI failure.' },
              { icon: 'fa-magnifying-glass', t: 'Explainable AI',           d: 'Every model ships with interpretability tooling so business stakeholders understand why the AI makes its decisions.' },
              { icon: 'fa-rotate',       t: 'MLOps & Continuous Learning',  d: 'Automated retraining pipelines and drift detection keep models accurate as your data distribution evolves.' },
              { icon: 'fa-shield-halved',t: 'Responsible AI',               d: 'Bias testing, fairness constraints and AI governance frameworks embedded into every engagement.' },
              { icon: 'fa-chart-line',   t: 'Measurable Business ROI',      d: 'Every AI project is defined with measurable business KPIs — not just technical accuracy metrics.' },
            ].map((b, i) => (
              <div key={i} className="glass-card reveal" style={{ padding: '26px', display: 'flex', gap: '15px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${b.icon}`} style={{ fontSize: '1.1rem', color: 'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '5px' }}>{b.t}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.83rem', lineHeight: 1.65 }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '40px' }}><span className="eyebrow">Success Story</span></div>
          <div className="glass-card reveal" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '20px' }}>
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '360px' }} />
            <div style={{ padding: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge">Enterprise · Generative AI</span>
              <h3 style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '16px', lineHeight: 1.2, marginTop: '12px' }}>
                AI Support Automation — 78% Faster Resolution
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.82, marginBottom: '28px' }}>
                We built an NLP-powered ticket triage and intelligent resolution system for a global enterprise — cutting average handle time from 18 minutes to under 4, while improving customer satisfaction scores by 23 points.
              </p>
              <div style={{ display: 'flex', gap: '28px', marginBottom: '28px' }}>
                {[['78%', 'Faster Resolution'], ['23pt', 'CSAT Improvement'], ['$2.1M', 'Annual Saving']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand)' }}>{v}</div>
                    <div style={{ color: 'var(--text-lo)', fontSize: '0.76rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>Discuss a Similar Project <i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="section-pad section-raised" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '48px' }}><span className="eyebrow">Insights</span><h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Related Articles</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
            {blogs.map((b, i) => (
              <article key={i} className="glass-card reveal" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={b.img} alt={b.title} className="img-hover" style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
                <div style={{ padding: '22px' }}>
                  <span style={{ color: 'var(--brand)', fontSize: '0.72rem', fontWeight: 600 }}>{b.date}</span>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-hi)', margin: '7px 0 9px', lineHeight: 1.4 }}>{b.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '13px' }}>{b.desc}</p>
                  <a href="#read" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--brand)', fontWeight: 600, fontSize: '0.78rem' }}>Read <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.64rem' }} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Start an AI Project</span>
              <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '16px' }}>
                Ready to make your business <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI-powered?</span>
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.78 }}>Tell us your business challenge and data landscape — our AI team will define the right approach to deliver measurable outcomes.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
