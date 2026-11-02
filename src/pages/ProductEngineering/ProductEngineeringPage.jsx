import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const services = [
  { icon: 'fa-chess-knight', title: 'Product Strategy',        link: '/services/product-engineering/product-strategy',    desc: 'Market research, roadmapping and go-to-market strategy that aligns technology investment with business outcomes.' },
  { icon: 'fa-pen-ruler',    title: 'UX / UI Design',          link: '/services/product-engineering/ux-design',           desc: 'Human-centred design systems, wireframes and high-fidelity prototypes that users love and engineers can build.' },
  { icon: 'fa-rocket',       title: 'Rapid Prototyping',       link: '/services/product-engineering/rapid-prototyping',   desc: 'Clickable, testable prototypes in days — validate ideas before committing full engineering resources.' },
  { icon: 'fa-vial-circle-check', title: 'QA & Testing',       link: '/services/product-engineering/qa-testing',          desc: 'Automated test suites, performance benchmarks and security validation across every release.' },
  { icon: 'fa-infinity',     title: 'DevOps & CI/CD',          link: '/services/product-engineering/devops',              desc: 'Zero-downtime deployment pipelines, infrastructure as code and observability platforms.' },
  { icon: 'fa-code-branch',  title: 'Open Source Engineering', link: '/services/product-engineering/open-source',         desc: 'Leveraging and contributing to open-source ecosystems to accelerate delivery and reduce licensing cost.' },
];

const process = [
  { num: '01', title: 'Discovery & Scoping',        desc: 'We map your users, business goals and technical constraints to define the right product scope.' },
  { num: '02', title: 'Strategy & Architecture',    desc: 'Product roadmap, technology selection and scalable architecture designed before coding begins.' },
  { num: '03', title: 'Design & Prototype',         desc: 'UX flows and interactive prototypes validated with real users in the first two weeks.' },
  { num: '04', title: 'Agile Engineering Sprints',  desc: 'Bi-weekly increments with working software, continuous integration and stakeholder demos.' },
  { num: '05', title: 'QA, Launch & Scale',         desc: 'Automated quality gates, production release and post-launch optimisation to sustain growth.' },
];

const benefits = [
  { icon: 'fa-bullseye',          title: 'Aligned with Business Goals',  desc: 'Every engineering decision is grounded in your commercial objectives — not just technical preference.' },
  { icon: 'fa-rocket',            title: 'Faster Time-to-Market',        desc: 'Parallel design and engineering tracks, reusable components, and CI/CD pipelines compress delivery by 40%.' },
  { icon: 'fa-shield-halved',     title: 'Built-in Quality',             desc: 'Automated testing, code review standards, and security scanning embedded from sprint one — no retrospective debt.' },
  { icon: 'fa-chart-line',        title: 'Scalable from Day One',        desc: 'Architecture and design decisions that support your product from MVP to millions of users without rewrites.' },
  { icon: 'fa-users',             title: 'Embedded Product Teams',       desc: 'Cross-functional squads with PMs, designers, engineers and QA working as a single cohesive unit.' },
  { icon: 'fa-eye',               title: 'Full Transparency',            desc: 'Open backlog, live dashboards and weekly demos — you always know exactly what is being built and why.' },
];

const blogs = [
  { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', title: 'The Product Engineering Mindset', desc: 'Why treating every feature as a product decision leads to better software and better businesses.', date: 'June 11, 2026' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', title: 'Design Systems at Scale', desc: 'How a well-maintained design system multiplies engineering velocity across large product organisations.', date: 'May 30, 2026' },
  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title: 'From 0 to 1: Shipping Your First Product', desc: 'The product engineering playbook for taking a new digital product from concept to paying customers.', date: 'May 18, 2026' },
];

function ProductEngineeringPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(248,250,252,.85) 0%,rgba(255,255,255,.6) 50%,rgba(248,250,252,.95) 100%)', zIndex: 1 }} />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80" alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .1 }} />
        </div>
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '180px 24px 100px', position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>
            <span className="glow-dot" /> End-to-End Product Engineering
          </span>
          <h1 className="reveal" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.06, marginBottom: '22px', color: 'var(--text-hi)', letterSpacing: '-0.03em' }}>
            Product{' '}
            <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engineering</span>
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1.05rem,1.8vw,1.25rem)', color: 'var(--text-mid)', maxWidth: '680px', margin: '0 auto 44px', lineHeight: 1.78 }}>
            From product strategy and UX design to engineering, QA and DevOps — we build, validate and continuously improve digital products that users love and businesses rely on.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Start a Project <i className="fa-solid fa-arrow-right" />
            </Link>
            <a href="#capabilities" className="btn btn-secondary" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Explore Services
            </a>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '56px', flexWrap: 'wrap' }}>
            {[['6', 'Service Lines'], ['500+', 'Products Built'], ['15 Yrs', 'Experience']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 900, color: 'var(--brand)' }}>{v}</div>
                <div style={{ color: 'var(--text-lo)', fontSize: '0.82rem', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Overview panel ── */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div className="glass-panel reveal">
            <h2 style={{ fontSize: 'clamp(1.5rem,2.8vw,2.1rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '18px' }}>What Is Product Engineering?</h2>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.82, marginBottom: '14px' }}>
              Product engineering goes beyond writing code. It is the discipline of combining product thinking — user research, strategy, roadmapping — with rigorous software engineering to build digital products that solve real problems, delight users, and scale to meet business demand.
            </p>
            <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.82 }}>
              Improx Tech's product engineering practice covers the entire product lifecycle: from the first whiteboard session to continuous production iteration — with dedicated cross-functional teams accountable for outcomes, not just outputs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section id="capabilities" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Service Lines</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Our Product Engineering Capabilities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(285px,1fr))', gap: '20px' }}>
            {services.map((s, i) => (
              <Link key={i} to={s.link} className="glass-card reveal"
                style={{ padding: '30px', display: 'flex', gap: '18px', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '11px', background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.2rem', color: 'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.86rem', lineHeight: 1.65 }}>{s.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--brand)', fontSize: '0.78rem', fontWeight: 600, marginTop: '10px' }}>
                    Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-pad section-raised" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Methodology</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>How We Build Products</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '20px' }}>
            {process.map((s, i) => (
              <div key={i} className="glass-card reveal" style={{ padding: '36px 28px', position: 'relative', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div style={{ position: 'absolute', top: '-12px', right: '-6px', fontSize: '6.5rem', fontWeight: 900, color: 'rgba(15,23,42,.02)', lineHeight: 1, userSelect: 'none', fontFamily: 'var(--font-head)' }}>{s.num}</div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '0.8rem', color: '#fff', position: 'relative', zIndex: 1 }}>{s.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '8px', position: 'relative', zIndex: 1 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.65, position: 'relative', zIndex: 1 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Why Improx Tech</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>The Product Engineering Advantage</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(285px,1fr))', gap: '20px' }}>
            {benefits.map((b, i) => (
              <div key={i} className="glass-card reveal" style={{ padding: '28px', display: 'flex', gap: '16px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '11px', background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${b.icon}`} style={{ fontSize: '1.1rem', color: 'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '6px' }}>{b.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.84rem', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="section-pad section-alt" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Success Story</span>
          </div>
          <div className="glass-card reveal" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '20px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Case study" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '360px' }} />
            <div style={{ padding: '52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge">FinTech · Product Engineering</span>
              <h3 style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '16px', lineHeight: 1.2 }}>
                Digital Banking Platform — 0 to 1 in 16 Weeks
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '28px' }}>
                We took a FinTech startup from initial product concept to a fully deployed, regulatory-compliant digital banking platform in 16 weeks — strategy, UX, engineering, QA and DevOps, all under one roof.
              </p>
              <div style={{ display: 'flex', gap: '28px', marginBottom: '28px' }}>
                {[['16 Wk', 'Time to Market'], ['98%', 'Test Coverage'], ['99.99%', 'Uptime SLA']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--brand)' }}>{v}</div>
                    <div style={{ color: 'var(--text-lo)', fontSize: '0.76rem' }}>{l}</div>
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
      <section className="section-pad section-raised" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: '52px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand)' }}>Insights</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.8rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Related Articles</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(275px,1fr))', gap: '24px' }}>
            {blogs.map((b, i) => (
              <article key={i} className="glass-card reveal" style={{ padding: 0, overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <img src={b.img} alt={b.title} className="img-hover" style={{ width: '100%', height: '195px', objectFit: 'cover' }} />
                <div style={{ padding: '22px' }}>
                  <span style={{ color: 'var(--brand)', fontSize: '0.74rem', fontWeight: 600 }}>{b.date}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-hi)', margin: '8px 0 10px', lineHeight: 1.4 }}>{b.title}</h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '14px' }}>{b.desc}</p>
                  <a href="#read" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand)', fontWeight: 600, fontSize: '0.8rem' }}>
                    Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.68rem' }} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section-pad">
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow" style={{ color: 'var(--brand)' }}>Start a Project</span>
              <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '18px' }}>
                Ready to build your next{' '}
                <span style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>digital product?</span>
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '1rem', lineHeight: 1.78 }}>
                Our product engineering teams are ready to partner with you — from the first product conversation to continuous post-launch iteration.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductEngineeringPage;
