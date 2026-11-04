import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* ─── Mega Menu Service Categories with Descriptions & Icons ──────────────── */
const NAV_SERVICES = [
  {
    label: 'Application Services',
    to: '/services/application-services',
    featured: {
      title: 'Enterprise App Suite',
      desc: 'Accelerate digital transformation with high-scale architecture and modern software delivery models.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      badge: 'Active Projects: 28'
    },
    sub: [
      { label: 'Custom Software Development', to: '/services/application-services/custom-software', desc: 'Bespoke corporate software designed for your unique workflows.', icon: 'fa-code' },
      { label: 'Enterprise Applications',      to: '/services/application-services/enterprise-applications', desc: 'Scalable ERP, CRM, and system integrations for global scale.', icon: 'fa-briefcase' },
      { label: 'SaaS Development',             to: '/services/application-services/saas-development', desc: 'Modern multi-tenant SaaS platforms engineered to scale dynamically.', icon: 'fa-layer-group' },
      { label: 'Mobile App Development',       to: '/services/application-services/mobile-app-development', desc: 'Native & hybrid iOS and Android solutions with premium UX.', icon: 'fa-mobile-screen-button' },
      { label: 'Web Applications',             to: '/services/application-services/web-applications', desc: 'Highly interactive, responsive, and secure frontend solutions.', icon: 'fa-laptop-code' },
      { label: 'Cloud Applications',           to: '/services/application-services/cloud-applications', desc: 'Serverless, microservices, and modern cloud-native architectures.', icon: 'fa-cloud' },
      { label: 'API Development',              to: '/services/application-services/api-development', desc: 'Secure, robust, and developer-friendly API integrations.', icon: 'fa-gears' },
      { label: 'System Integration',           to: '/services/application-services/system-integration', desc: 'Connecting disparate legacy and new tools into unified workflows.', icon: 'fa-circle-nodes' },
      { label: 'Legacy Modernization',         to: '/services/application-services/legacy-modernization', desc: 'Refactoring outdated core codebases onto modern cloud frameworks.', icon: 'fa-rocket' },
      { label: 'Maintenance & Support',        to: '/services/application-services/maintenance-support', desc: 'Proactive 24/7 monitoring, incident resolution, and SLAs.', icon: 'fa-headset' },
    ],
  },
  {
    label: 'Product Engineering',
    to: '/services/product-engineering',
    featured: {
      title: 'Design-to-Delivery',
      desc: 'Formulate, design, test and launch digital products engineered for modern consumer retention.',
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      badge: 'Product Success Rate: 98%'
    },
    sub: [
      { label: 'Product Strategy',        to: '/services/product-engineering/product-strategy', desc: 'Rigorous market research, persona creation, and visual mapping.', icon: 'fa-compass' },
      { label: 'UX / UI Design',          to: '/services/product-engineering/ux-design', desc: 'Exquisite, highly functional user experiences built for engagement.', icon: 'fa-bezier-curve' },
      { label: 'Rapid Prototyping',       to: '/services/product-engineering/rapid-prototyping', desc: 'Fast interactive models to validate features and secure stakeholder approval.', icon: 'fa-cubes' },
      { label: 'QA & Testing',            to: '/services/product-engineering/qa-testing', desc: 'Deep automated test coverages ensuring high performance.', icon: 'fa-shield-halved' },
      { label: 'DevOps & CI/CD',          to: '/services/product-engineering/devops', desc: 'Automated software delivery pipelines and cloud landing zones.', icon: 'fa-infinity' },
      { label: 'Open Source Engineering', to: '/services/product-engineering/open-source', desc: 'Leverage the speed of global community-tested engineering.', icon: 'fa-code-branch' },
    ],
  },
  {
    label: 'Technology Services',
    to: '/services/technology-services',
    featured: {
      title: 'Resilient Cloud Systems',
      desc: 'Establish solid cloud infrastructure frameworks that operate with ironclad security protocols.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      badge: 'Avg Cloud Savings: 40%'
    },
    sub: [
      { label: 'Cloud Migration',         to: '/services/technology-services/cloud-migration', desc: 'Zero downtime workload transfers to AWS, Azure, and Google Cloud.', icon: 'fa-cloud-arrow-up' },
      { label: 'DevSecOps',               to: '/services/technology-services/devsecops', desc: 'Automate security and compliance checks directly in your deployment.', icon: 'fa-shield-heart' },
      { label: 'Data Engineering',        to: '/services/technology-services/data-engineering', desc: 'Secure analytical databases, pipelines, and data warehouse setups.', icon: 'fa-database' },
      { label: 'Cybersecurity',           to: '/services/technology-services/cybersecurity', desc: 'Continuous threat monitoring, SIEM setup, and penetration tests.', icon: 'fa-lock' },
      { label: 'Infrastructure Mgmt',     to: '/services/technology-services/infrastructure', desc: 'Fully managed 24/7 servers, load balancing, and performance tuning.', icon: 'fa-server' },
      { label: 'IoT Solutions',           to: '/services/technology-services/iot', desc: 'Ingestion frameworks, edge compute nodes, and connected networks.', icon: 'fa-microchip' },
    ],
  },
  {
    label: 'AI & Business Intelligence',
    to: '/services/ai-ml',
    featured: {
      title: 'AI in Production',
      desc: 'Bridge the gap between model research and high-volume commercial production environments.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
      badge: 'ML Accuracy: 94.6%'
    },
    sub: [
      { label: 'Generative AI',           to: '/services/ai-ml/generative-ai', desc: 'Custom LLM deployments, RAG setups, and automated agent structures.', icon: 'fa-wand-magic-sparkles' },
      { label: 'Machine Learning',        to: '/services/ai-ml/machine-learning', desc: 'Classification models, custom neural networks, and automated retraining.', icon: 'fa-robot' },
      { label: 'Business Intelligence',   to: '/services/ai-ml/business-intelligence', desc: 'Clean dashboards, business metrics, and database analytical layers.', icon: 'fa-chart-pie' },
      { label: 'NLP & Automation',        to: '/services/ai-ml/nlp-automation', desc: 'Sentiment analyses, entity extraction, and intelligent chatbot setups.', icon: 'fa-comment-dots' },
      { label: 'Data Visualisation',      to: '/services/ai-ml/data-visualisation', desc: 'Real-time graphic data streams designed for operations directors.', icon: 'fa-chart-line' },
      { label: 'Predictive Analytics',    to: '/services/ai-ml/predictive-analytics', desc: 'Forecasting user actions and stock volumes based on historical data.', icon: 'fa-crystal-ball' },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]               = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
  const [activeMenu, setActiveMenu]               = useState(null); // null, or index 0-3
  const [scrolled, setScrolled]                   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpandedCat(null);
  }, [location]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpandedCat(null);
  };

  const toggleMobileCat = (idx) => {
    setMobileExpandedCat(prev => prev === idx ? null : idx);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.88)',
      borderBottom: '1px solid var(--border)',
      transition: 'background .25s ease, box-shadow .25s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : 'none',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
    }}>
      <nav style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>

        {/* Logo */}
        <Link to="/" onClick={closeAll} style={{
          fontFamily: 'var(--font-head)',
          fontSize: '1.4rem',
          fontWeight: 900,
          color: 'var(--text-hi)',
          letterSpacing: '-0.04em',
          textDecoration: 'none',
          flexShrink: 0
        }}>
          Improx<span style={{ color: 'var(--brand)' }}>Tech</span>
        </Link>

        {/* ── DESKTOP NAVIGATION MENU (> 1024px) ── */}
        <ul className="desktop-nav-menu" style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2px',
          alignItems: 'center',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link to="/" onClick={closeAll} style={desktopLinkStyle}>Home</Link>
          </li>

          {/* ── Direct-Link Mega Menu Triggers ── */}
          {NAV_SERVICES.map((cat, catIdx) => (
            <li
              key={cat.label}
              onMouseEnter={() => setActiveMenu(catIdx)}
              onMouseLeave={() => setActiveMenu(null)}
              style={{ position: 'static' }}
            >
              <Link
                to={cat.to}
                onClick={closeAll}
                style={{
                  ...desktopLinkStyle,
                  color: activeMenu === catIdx ? 'var(--brand)' : 'var(--text-mid)',
                  borderBottom: activeMenu === catIdx ? '2px solid var(--brand)' : '2px solid transparent',
                  borderRadius: '0px',
                  paddingBottom: '21px',
                  paddingTop: '21px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                {cat.label}
                <i className="fa-solid fa-chevron-down" style={{
                  fontSize: '0.55rem',
                  transition: 'transform .2s',
                  transform: activeMenu === catIdx ? 'rotate(180deg)' : 'none',
                  marginTop: '1px'
                }} />
              </Link>

              {/* ─── Premium Split-Layout Mega Panel Dropdown (Light Theme) ─── */}
              {activeMenu === catIdx && (
                <div style={{
                  position: 'absolute', top: '64px', left: 0, right: 0,
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderBottom: '1px solid var(--border)',
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                  zIndex: 999,
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  animation: 'fadeInSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  padding: '36px 0 42px',
                }}>
                  <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'flex', gap: '36px' }}>
                    
                    {/* LEFT PANEL: Sub-services Grid (72% width) */}
                    <div style={{ flex: '0 0 72%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '14px', marginBottom: '22px' }}>
                        <div>
                          <h4 style={{ color: 'var(--text-hi)', fontSize: '1.08rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-head)' }}>{cat.label}</h4>
                          <p style={{ color: 'var(--text-lo)', fontSize: '0.76rem', margin: '3px 0 0 0' }}>Deploy industry-leading solutions backed by seasoned system architects.</p>
                        </div>
                        <Link to={cat.to} onClick={closeAll} style={{ fontSize: '0.78rem', color: 'var(--brand)', fontWeight: 700, textDecoration: 'none' }}>
                          View All {cat.label} →
                        </Link>
                      </div>

                      {/* Dynamic grid mapping */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: cat.sub.length > 6 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                        gap: '16px 20px'
                      }}>
                        {cat.sub.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            onClick={closeAll}
                            className="navbar-mega-item"
                            style={{
                              display: 'flex',
                              gap: '12px',
                              padding: '10px 12px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              transition: 'background 0.2s, transform 0.2s',
                              alignItems: 'flex-start'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)';
                              e.currentTarget.style.transform = 'translateX(4px)';
                              const icon = e.currentTarget.querySelector('.item-icon');
                              const title = e.currentTarget.querySelector('.item-title');
                              if (icon) { icon.style.color = '#fff'; icon.style.background = 'var(--brand)'; }
                              if (title) title.style.color = 'var(--brand)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.transform = 'none';
                              const icon = e.currentTarget.querySelector('.item-icon');
                              const title = e.currentTarget.querySelector('.item-title');
                              if (icon) { icon.style.color = 'var(--brand)'; icon.style.background = 'rgba(37, 99, 235, 0.06)'; }
                              if (title) title.style.color = 'var(--text-hi)';
                            }}
                          >
                            {/* Small Icon Badge */}
                            <div className="item-icon" style={{
                              width: '32px', height: '32px', borderRadius: '6px',
                              background: 'rgba(37, 99, 235, 0.06)',
                              border: '1px solid rgba(37, 99, 235, 0.12)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: 'var(--brand)', flexShrink: 0, transition: 'all 0.2s'
                            }}>
                              <i className={`fa-solid ${s.icon}`} style={{ fontSize: '0.85rem' }} />
                            </div>

                            {/* Text Group */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span className="item-title" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-hi)', marginBottom: '2px', fontFamily: 'var(--font-head)', transition: 'color 0.2s' }}>
                                {s.label}
                              </span>
                              <span style={{ fontSize: '0.72rem', color: 'var(--text-lo)', lineHeight: 1.4 }}>
                                {s.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT PANEL: Rich Media Featured Section (28% width) */}
                    <div style={{ flex: '0 0 28%', borderLeft: '1px solid var(--border)', paddingLeft: '28px', display: 'flex', flexDirection: 'column' }}>
                      <p style={{ fontSize: '0.66rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-lo)', marginBottom: '14px' }}>Featured Highlight</p>
                      
                      <Link to={cat.to} onClick={closeAll} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                        <div 
                          className="mega-featured-card"
                          style={{
                            background: 'rgba(15, 23, 42, 0.015)',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'border-color 0.2s, background 0.2s'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.25)';
                            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.03)';
                            const img = e.currentTarget.querySelector('.featured-img');
                            if (img) img.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.015)';
                            const img = e.currentTarget.querySelector('.featured-img');
                            if (img) img.style.transform = 'scale(1)';
                          }}
                        >
                          <div style={{ position: 'relative', height: '130px', overflow: 'hidden', width: '100%' }}>
                            <img 
                              className="featured-img"
                              src={cat.featured.img} 
                              alt={cat.featured.title} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.7))' }} />
                            
                            {/* Glowing Badge */}
                            <span style={{
                              position: 'absolute', top: '12px', left: '12px',
                              background: 'var(--brand)',
                              color: '#fff',
                              fontSize: '0.62rem', fontWeight: 800,
                              padding: '4px 10px', borderRadius: '4px',
                              letterSpacing: '0.5px', textTransform: 'uppercase',
                              boxShadow: '0 2px 8px rgba(37,99,235,0.2)'
                            }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block', marginRight: '6px', boxShadow: '0 0 8px #10B981' }} />
                              {cat.featured.badge}
                            </span>
                          </div>

                          <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <h5 style={{ color: 'var(--text-hi)', fontSize: '0.92rem', fontWeight: 700, margin: '0 0 6px 0', fontFamily: 'var(--font-head)' }}>{cat.featured.title}</h5>
                              <p style={{ color: 'var(--text-mid)', fontSize: '0.74rem', margin: 0, lineHeight: 1.45 }}>{cat.featured.desc}</p>
                            </div>
                            <span style={{ color: 'var(--brand)', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', marginTop: '12px' }}>
                              Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.6rem' }} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </li>
          ))}

          <li><Link to="/#about" onClick={closeAll} style={desktopLinkStyle}>About</Link></li>
          <li><Link to="/blog" onClick={closeAll} style={desktopLinkStyle}>Blog</Link></li>
        </ul>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/contact" onClick={closeAll} className="btn btn-primary nav-cta-btn" style={{ padding: '9px 20px', fontSize: '0.86rem', flexShrink: 0 }}>
            Get Started
          </Link>

          {/* Animated Hamburger (Mobile & Tablet <= 1024px) */}
          <button
            className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </nav>

      {/* ── MOBILE / TABLET FULL-FEATURED DRAWER (<= 1024px) ── */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">

          {/* Navigation Links List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Link to="/" onClick={closeAll} className="mobile-nav-link">
              <i className="fa-solid fa-house" style={{ width: '20px', color: 'var(--brand)' }} /> Home
            </Link>

            {/* Accordion Categories */}
            {NAV_SERVICES.map((cat, idx) => {
              const isExpanded = mobileExpandedCat === idx;
              return (
                <div key={cat.label} className="mobile-accordion-group">
                  <div className="mobile-accordion-header">
                    <Link to={cat.to} onClick={closeAll} className="mobile-accordion-title">
                      {cat.label}
                    </Link>
                    <button
                      type="button"
                      className="mobile-accordion-toggle"
                      onClick={() => toggleMobileCat(idx)}
                      aria-label={`Toggle ${cat.label} sub-services`}
                    >
                      <i className="fa-solid fa-chevron-down" style={{
                        transition: 'transform 0.25s',
                        transform: isExpanded ? 'rotate(180deg)' : 'none',
                        color: isExpanded ? 'var(--brand)' : 'var(--text-lo)'
                      }} />
                    </button>
                  </div>

                  {/* Accordion Body */}
                  {isExpanded && (
                    <div className="mobile-accordion-body">
                      {cat.sub.map(s => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={closeAll}
                          className="mobile-sub-link"
                        >
                          <i className={`fa-solid ${s.icon}`} style={{ width: '18px', color: 'var(--brand)', fontSize: '0.82rem' }} />
                          <span>{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link to="/#about" onClick={closeAll} className="mobile-nav-link">
              <i className="fa-solid fa-users" style={{ width: '20px', color: 'var(--brand)' }} /> About Us
            </Link>
            <Link to="/blog" onClick={closeAll} className="mobile-nav-link">
              <i className="fa-solid fa-newspaper" style={{ width: '20px', color: 'var(--brand)' }} /> Tech Blog
            </Link>
            <Link to="/careers" onClick={closeAll} className="mobile-nav-link">
              <i className="fa-solid fa-briefcase" style={{ width: '20px', color: 'var(--brand)' }} /> Careers
            </Link>
          </div>

          {/* Mobile Drawer Footer Contacts */}
          <div className="mobile-drawer-footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <a href="tel:+919156470600" className="mobile-contact-pill">
                <i className="fa-solid fa-phone" style={{ color: 'var(--brand)' }} /> +91 91564 70600
              </a>
              <a href="mailto:enquiry@improxgroup.com" className="mobile-contact-pill">
                <i className="fa-solid fa-envelope" style={{ color: 'var(--brand)' }} /> enquiry@improxgroup.com
              </a>
            </div>

            <Link
              to="/contact"
              onClick={closeAll}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: '0.92rem' }}
            >
              Get Started <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop vs Mobile Toggle */
        .desktop-nav-menu {
          display: flex;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 38px;
          height: 38px;
          gap: 5px;
          padding: 8px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .menu-toggle span {
          width: 22px;
          height: 2px;
          background: var(--text-hi);
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Drawer Container */
        .mobile-nav-drawer {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(100vh - 64px);
          background: #ffffff;
          border-top: 1px solid var(--border);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 998;
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .mobile-nav-drawer.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-drawer-content {
          padding: 20px 20px 48px;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          border-radius: 8px;
          color: var(--text-hi);
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 0.98rem;
          text-decoration: none;
          background: rgba(15, 23, 42, 0.02);
          transition: background 0.15s, color 0.15s;
        }
        .mobile-nav-link:hover {
          background: rgba(37, 99, 235, 0.06);
          color: var(--brand);
        }

        .mobile-accordion-group {
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          background: #ffffff;
        }
        .mobile-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
        }
        .mobile-accordion-title {
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 0.96rem;
          color: var(--text-hi);
          text-decoration: none;
          flex: 1;
        }
        .mobile-accordion-toggle {
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid var(--border);
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.75rem;
        }
        .mobile-accordion-body {
          padding: 6px 14px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px dashed var(--border);
          background: rgba(248, 250, 252, 0.7);
        }
        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-mid);
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .mobile-sub-link:hover {
          color: var(--brand);
          background: rgba(37, 99, 235, 0.05);
        }

        .mobile-drawer-footer {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .mobile-contact-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid var(--border);
          color: var(--text-mid);
          font-size: 0.86rem;
          text-decoration: none;
          font-weight: 500;
        }

        /* Breakpoints */
        @media (max-width: 1024px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .menu-toggle {
            display: flex !important;
          }
          .mobile-nav-drawer {
            display: block;
          }
          .nav-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

const desktopLinkStyle = {
  color: 'var(--text-mid)',
  fontFamily: 'var(--font-head)',
  fontWeight: 600,
  fontSize: '0.85rem',
  padding: '8px 11px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'block',
  transition: 'color .15s ease, border-color .15s ease',
  whiteSpace: 'nowrap'
};
