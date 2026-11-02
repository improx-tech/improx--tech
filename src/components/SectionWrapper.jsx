function SectionWrapper({ id, eyebrow, title, subtitle, children, alt }) {
  return (
    <section id={id} className={`section-pad${alt ? ' section-alt' : ''}`}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {(eyebrow || title) && (
          <div className="reveal" style={{ marginBottom: '56px' }}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title   && <h2 style={{ fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', fontWeight: 800, color: 'var(--text-hi)' }}>{title}</h2>}
            {subtitle && <p style={{ color: 'var(--text-mid)', fontSize: '1rem', marginTop: '14px', maxWidth: '600px', lineHeight: 1.75 }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
