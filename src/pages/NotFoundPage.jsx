import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 - Page Not Found | Improx Tech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 60px', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center', margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#ef4444',
          fontSize: '2rem',
          marginBottom: '24px'
        }}>
          <i className="fa-solid fa-triangle-exclamation" />
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, var(--text-hi) 0%, var(--brand) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 16px' }}>
          404
        </h1>

        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 700, color: 'var(--text-hi)', margin: '0 0 16px' }}>
          Page Not Found
        </h2>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 32px' }}>
          The page you requested does not exist, has been removed, or has been relocated. Please check the URL or return to our homepage.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '0.98rem' }}>
            <i className="fa-solid fa-house" style={{ marginRight: '8px' }} /> Return Home
          </Link>
          <Link to="/services" className="btn btn-outline" style={{ padding: '14px 28px', fontSize: '0.98rem' }}>
            Explore Services <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </main>
  );
}
