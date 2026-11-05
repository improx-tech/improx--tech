import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  const rawExcerpt =
    post.excerpt?.rendered ||
    post.meta_description ||
    'Explore the architectural patterns, production benchmarks, and implementation guidance.';

  const excerpt = rawExcerpt.replace(/<[^>]+>/g, '').slice(0, 135) + (rawExcerpt.length > 135 ? '…' : '');

  const image =
    post.featured_image ||
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';

  const titleText = post.title?.rendered || (typeof post.title === 'string' ? post.title : 'Technical Article');
  const dateValue = post.date || post.created_at || new Date().toISOString();
  const dateText = new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const targetId = post.slug || post.id;
  const category = post.category || 'Architecture';
  const readTime = post.read_time || '8 min read';
  const authorName = post.author?.name || 'Improx Team';
  const authorRole = post.author?.role || 'Principal Architect';
  const authorAvatar =
    post.author?.avatar ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80';

  return (
    <article
      className="glass-card reveal active"
      style={{
        padding: 0,
        overflow: 'hidden',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-card)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Link to={`/blog/${targetId}`} style={{ position: 'relative', height: '220px', overflow: 'hidden', display: 'block' }}>
        <img
          src={image}
          alt={titleText}
          className="img-hover"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '4px 12px',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.5px',
          }}
        >
          {category}
        </span>
        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            padding: '4px 10px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: '#0F172A',
          }}
        >
          <i className="fa-regular fa-clock" style={{ marginRight: '4px', color: 'var(--brand)' }} />
          {readTime}
        </span>
      </Link>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-mid)', marginBottom: '10px' }}>
          <i className="fa-regular fa-calendar" />
          <span>{dateText}</span>
        </div>

        <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-hi)', margin: '0 0 12px', lineHeight: 1.38, letterSpacing: '-0.02em' }}>
          <Link to={`/blog/${targetId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {titleText}
          </Link>
        </h3>

        <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '20px' }}>
          {excerpt}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={authorAvatar}
              alt={authorName}
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--border-brand)' }}
            />
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-hi)', display: 'block', lineHeight: 1.2 }}>
                {authorName}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-mid)' }}>
                {authorRole}
              </span>
            </div>
          </div>

          <Link
            to={`/blog/${targetId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--brand)',
              fontWeight: 700,
              fontSize: '0.84rem',
              textDecoration: 'none',
            }}
          >
            Read <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.72rem' }} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
