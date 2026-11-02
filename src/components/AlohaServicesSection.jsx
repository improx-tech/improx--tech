import { useState } from 'react';

const servicesData = [
  {
    id: 'app-services',
    title: 'Application Services',
    icon: 'fa-laptop-code',
    description: 'Enterprise applications with user-first UX, strong performance standards, and secure integrations.',
    subgroups: [
      'Enterprise App Development', 'Custom Web Applications', 'Mobile App Engineering',
      'Cloud-Native Apps', 'App Modernization', 'API Strategy & Integration', 'Legacy Migration'
    ]
  },
  {
    id: 'prod-eng',
    title: 'Product Engineering',
    icon: 'fa-cubes',
    description: 'Custom software products, architecture planning, and complete delivery from concept to scale.',
    subgroups: [
      'New Product Development', 'MVP Development', 'SaaS Product Engineering',
      'IoT Product Engineering', 'Quality Assurance', 'DevOps & Release Management'
    ]
  },
  {
    id: 'tech-services',
    title: 'Technology Services',
    icon: 'fa-cloud-arrow-up',
    description: 'Cloud infrastructure, modernization, managed data systems, and operational tooling.',
    subgroups: [
      'Cloud Infrastructure', 'Cybersecurity & Risk', 'Managed IT Services',
      'Enterprise Networks', 'Cloud Migration (AWS/Azure/GCP)', 'IT Consulting'
    ]
  },
  {
    id: 'ai-bi',
    title: 'AI & Business Intelligence',
    icon: 'fa-brain',
    description: 'AI, machine learning, analytics, and automation pipelines that improve decision-making.',
    subgroups: [
      'Machine Learning Solutions', 'Generative AI & LLMs', 'Predictive Analytics',
      'Natural Language Processing', 'Data Engineering', 'Robotic Process Automation'
    ]
  }
];

function AlohaServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-head reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="eyebrow" style={{ color: '#3B82F6', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Services</p>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '16px' }}>Technology capabilities aligned to outcomes</h2>
          <p style={{ color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>
            Explore our core competencies designed to accelerate your enterprise digital transformation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-card reveal"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px 32px',
                cursor: 'pointer'
              }}
            >
              <div 
                style={{ 
                  transform: activeService === service.id ? 'translateY(-20px)' : 'translateY(0)',
                  transition: 'transform 0.4s ease',
                  zIndex: 2,
                  position: 'relative'
                }}
              >
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '16px', 
                  background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '24px', transition: 'background 0.3s ease'
                }}>
                  <i className={`fa-solid ${service.icon}`} style={{ fontSize: '1.8rem', color: '#3B82F6' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-white)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>

              {/* Sub-groups overlay on hover */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.8) 50%, rgba(11, 15, 25, 0) 100%)',
                  padding: '40px 32px 32px',
                  opacity: activeService === service.id ? 1 : 0,
                  transform: activeService === service.id ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 3,
                  pointerEvents: activeService === service.id ? 'auto' : 'none'
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.subgroups.map((item, index) => (
                    <li key={index} style={{ fontSize: '0.85rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-angle-right" style={{ color: '#3B82F6', fontSize: '0.7rem' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlohaServicesSection;
