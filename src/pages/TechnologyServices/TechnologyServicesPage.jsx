import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const services = [
  { icon: 'fa-cloud-arrow-up',  title: 'Cloud Migration',          to: '/services/technology-services/cloud-migration',   desc: 'Seamless rehost, replatform and re-architect migrations to AWS, Azure and GCP with zero downtime.' },
  { icon: 'fa-shield-halved',   title: 'DevSecOps',                to: '/services/technology-services/devsecops',          desc: 'Security embedded into every stage of your CI/CD pipeline — not added as an afterthought.' },
  { icon: 'fa-database',        title: 'Data Engineering',         to: '/services/technology-services/data-engineering',   desc: 'Scalable data pipelines, warehouses and lakehouses that turn raw data into decision-ready insights.' },
  { icon: 'fa-lock',            title: 'Cybersecurity',            to: '/services/technology-services/cybersecurity',      desc: 'Threat modelling, penetration testing, SIEM and zero-trust architecture for enterprise protection.' },
  { icon: 'fa-server',          title: 'Infrastructure Management',to: '/services/technology-services/infrastructure',     desc: 'Managed cloud infrastructure with 24/7 monitoring, auto-scaling and cost optimisation.' },
  { icon: 'fa-microchip',       title: 'IoT Solutions',            to: '/services/technology-services/iot',                desc: 'End-to-end IoT platforms — edge devices, gateways, data ingestion and real-time analytics.' },
];

const stats = [['500+','Cloud Migrations'],['99.9%','Uptime Delivered'],['60%','Avg Cost Reduction'],['24/7','Support Coverage']];

const blogs = [
  { img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', title:'Cloud Cost Optimisation Strategies for 2026', desc:'Practical engineering techniques to cut AWS and Azure bills without sacrificing reliability.', date:'June 9, 2026' },
  { img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', title:'Zero Trust: A Practical Implementation Guide', desc:'Step-by-step playbook for rolling out zero-trust network access in enterprise environments.', date:'May 27, 2026' },
  { img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', title:'Modern Data Stack in 2026', desc:'dbt, Snowflake, Airbyte and the tools reshaping how enterprises manage analytical data.', date:'May 13, 2026' },
];

export default function TechnologyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position:'relative', minHeight:'82vh', display:'flex', alignItems:'center', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0 }}>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(160deg,rgba(248,250,252,.85) 0%,rgba(255,255,255,.6) 50%,rgba(248,250,252,.98) 100%)', zIndex:1 }} />
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', opacity:.1 }} />
        </div>
        <div className="hero-blob hero-blob-1" /><div className="hero-blob hero-blob-2" />
        <div style={{ maxWidth:'1240px', margin:'0 auto', padding:'180px 24px 100px', position:'relative', zIndex:2, width:'100%', textAlign:'center' }}>
          <span className="eyebrow reveal" style={{ justifyContent:'center' }}><span className="glow-dot" /> Cloud · Security · Infrastructure</span>
          <h1 className="reveal" style={{ fontSize:'clamp(2.8rem,6vw,5rem)', fontWeight:900, lineHeight:1.06, color:'var(--text-hi)', letterSpacing:'-0.03em', marginBottom:'22px' }}>
            Technology <span style={{ background:'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Services</span>
          </h1>
          <p className="reveal" style={{ fontSize:'clamp(1rem,1.8vw,1.22rem)', color:'var(--text-mid)', maxWidth:'680px', margin:'0 auto 44px', lineHeight:1.78 }}>
            Enterprise-grade cloud, security and infrastructure services that keep your technology estate resilient, efficient and always ahead of emerging threats.
          </p>
          <div className="reveal" style={{ display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding:'14px 36px' }}>Start a Project <i className="fa-solid fa-arrow-right" /></Link>
            <a href="#capabilities" className="btn btn-secondary" style={{ padding:'14px 36px' }}>Explore Services</a>
          </div>
          <div className="reveal" style={{ display:'flex', gap:'44px', justifyContent:'center', marginTop:'52px', flexWrap:'wrap' }}>
            {stats.map(([v,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'var(--font-head)', fontSize:'2rem', fontWeight:900, color:'var(--brand)' }}>{v}</div>
                <div style={{ color:'var(--text-lo)', fontSize:'0.8rem', marginTop:'3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad-sm" style={{ borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'880px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
          <div className="glass-panel reveal">
            <h2 style={{ fontSize:'clamp(1.5rem,2.8vw,2.1rem)', fontWeight:800, color:'var(--text-hi)', marginBottom:'16px' }}>The Backbone of Your Digital Operations</h2>
            <p style={{ color:'var(--text-mid)', fontSize:'1rem', lineHeight:1.82, marginBottom:'14px' }}>
              Modern enterprises run on resilient, secure and cost-optimised technology infrastructure. Whether you are migrating legacy workloads to the cloud, hardening your security posture, or building the data pipelines your AI ambitions depend on — Improx Tech brings the engineering depth and operational discipline to deliver.
            </p>
            <p style={{ color:'var(--text-mid)', fontSize:'1rem', lineHeight:1.82 }}>
              Our technology services teams work across AWS, Azure and GCP, covering the full infrastructure lifecycle from architecture design through 24/7 managed operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="capabilities" className="section-pad" style={{ borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'1240px', margin:'0 auto', padding:'0 24px' }}>
          <div className="reveal" style={{ marginBottom:'52px' }}>
            <span className="eyebrow">Service Lines</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.8vw,2.8rem)', fontWeight:800, color:'var(--text-hi)' }}>Our Technology Capabilities</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(285px,1fr))', gap:'20px' }}>
            {services.map((s,i) => (
              <Link key={i} to={s.to} className="glass-card reveal" style={{ padding:'28px', display:'flex', gap:'16px', alignItems:'flex-start', textDecoration:'none', color:'inherit' }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'11px', background:'rgba(37,99,235,.06)', border:'1px solid rgba(37,99,235,.12)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <i className={`fa-solid ${s.icon}`} style={{ fontSize:'1.15rem', color:'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--text-hi)', marginBottom:'7px' }}>{s.title}</h3>
                  <p style={{ color:'var(--text-mid)', fontSize:'0.85rem', lineHeight:1.65 }}>{s.desc}</p>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:'5px', color:'var(--brand)', fontSize:'0.77rem', fontWeight:600, marginTop:'10px' }}>Details <i className="fa-solid fa-arrow-right" style={{ fontSize:'0.64rem' }} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-pad section-raised" style={{ borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'1240px', margin:'0 auto', padding:'0 24px' }}>
          <div className="reveal" style={{ marginBottom:'52px' }}>
            <span className="eyebrow">Why Improx Tech</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.8vw,2.8rem)', fontWeight:800, color:'var(--text-hi)' }}>Technology Services That Deliver</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px' }}>
            {[
              { icon:'fa-cloud',         t:'Multi-Cloud Expertise',      d:'Certified architects across AWS, Azure and GCP with 500+ migrations delivered.' },
              { icon:'fa-shield-halved', t:'Security-First Approach',    d:'Every engagement includes threat modelling, compliance mapping and security testing.' },
              { icon:'fa-gauge-high',    t:'Performance-Oriented',       d:'SLAs backed by real monitoring — not best-effort assurances.' },
              { icon:'fa-coins',         t:'FinOps Discipline',          d:'Cost tagging, budget alerts and rightsizing delivering 40–60% average cloud savings.' },
              { icon:'fa-rotate',        t:'Always-On Operations',       d:'24/7 NOC with < 15-minute P1 response and automated incident remediation.' },
              { icon:'fa-people-group',  t:'Certified Engineers',        d:'Teams hold AWS, Azure, GCP, CISSP and CKA certifications — not just slides.' },
            ].map((b,i) => (
              <div key={i} className="glass-card reveal" style={{ padding:'26px', display:'flex', gap:'15px' }}>
                <div style={{ width:'44px', height:'44px', borderRadius:'10px', background:'rgba(37,99,235,.06)', border:'1px solid rgba(37,99,235,.12)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <i className={`fa-solid ${b.icon}`} style={{ fontSize:'1.1rem', color:'var(--brand)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize:'0.94rem', fontWeight:700, color:'var(--text-hi)', marginBottom:'5px' }}>{b.t}</h3>
                  <p style={{ color:'var(--text-mid)', fontSize:'0.83rem', lineHeight:1.65 }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="section-pad" style={{ borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'1240px', margin:'0 auto', padding:'0 24px' }}>
          <div className="reveal" style={{ marginBottom:'48px' }}><span className="eyebrow">Insights</span><h2 style={{ fontSize:'clamp(1.8rem,3.8vw,2.8rem)', fontWeight:800, color:'var(--text-hi)' }}>Related Articles</h2></div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}>
            {blogs.map((b,i) => (
              <article key={i} className="glass-card reveal" style={{ padding:0, overflow:'hidden' }}>
                <img src={b.img} alt={b.title} className="img-hover" style={{ width:'100%', height:'190px', objectFit:'cover' }} />
                <div style={{ padding:'22px' }}>
                  <span style={{ color:'var(--brand)', fontSize:'0.72rem', fontWeight:600 }}>{b.date}</span>
                  <h3 style={{ fontSize:'0.98rem', fontWeight:700, color:'var(--text-hi)', margin:'7px 0 9px', lineHeight:1.4 }}>{b.title}</h3>
                  <p style={{ color:'var(--text-mid)', fontSize:'0.84rem', lineHeight:1.65, marginBottom:'13px' }}>{b.desc}</p>
                  <a href="#read" style={{ display:'inline-flex', alignItems:'center', gap:'5px', color:'var(--brand)', fontWeight:600, fontSize:'0.78rem' }}>Read <i className="fa-solid fa-arrow-right" style={{ fontSize:'0.64rem' }} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad">
        <div style={{ maxWidth:'1240px', margin:'0 auto', padding:'0 24px' }}>
          <div className="contact-grid">
            <div className="reveal">
              <span className="eyebrow">Get in Touch</span>
              <h2 style={{ fontSize:'clamp(1.9rem,3.8vw,2.9rem)', fontWeight:800, color:'var(--text-hi)', marginBottom:'16px' }}>
                Ready to modernise your <span style={{ background:'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>technology infrastructure?</span>
              </h2>
              <p style={{ color:'var(--text-mid)', fontSize:'1rem', lineHeight:1.78 }}>Tell us your cloud strategy, security requirements or infrastructure challenges — our architects will design the right solution.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
