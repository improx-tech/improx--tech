import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  const rawExcerpt =
    post.excerpt?.rendered ||
    post.meta_description ||
    'Read the full article to explore the approach, key takeaways, and implementation guidance.';

  const excerpt = rawExcerpt.replace(/<[^>]+>/g, '').slice(0, 160) + (rawExcerpt.length > 160 ? '…' : '');

  const image =
    post.featured_image ||
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80';

  const titleText = post.title?.rendered || (typeof post.title === 'string' ? post.title : 'Technical Article');
  const dateValue = post.date || post.created_at || new Date().toISOString();
  const targetId = post.slug || post.id;
  const category = post.category || 'Engineering';

  return (
    <article className="blog-card glass-card reveal active">
      <div className="blog-card-image-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={image} alt={titleText} loading="lazy" />
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'var(--brand)',
            color: '#fff',
            fontSize: '0.72rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '6px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          {category}
        </span>
      </div>
      <div className="blog-card-body">
        <time dateTime={dateValue}>
          {new Date(dateValue).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h3>{titleText}</h3>
        <p>{excerpt}</p>
        <Link to={`/blog/${targetId}`} className="btn btn-primary">
          Read More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px', fontSize: '0.85em' }} />
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
