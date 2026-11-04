import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFromWp } from '../utils/wpApi';

function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchFromWp(`/posts/${id}?_embed`);
        if (data) {
          setPost(data);
        } else {
          setError('Post not found or failed to load.');
        }
      } catch (err) {
        setError('Post not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    } else {
      setError('Invalid post ID.');
      setLoading(false);
    }
  }, [id]);

  const title = post?.title?.rendered || (typeof post?.title === 'string' ? post.title : 'Technical Article');
  const contentHtml = post?.content?.rendered || (typeof post?.content === 'string' ? post.content : '');
  const dateValue = post?.date || post?.created_at || new Date().toISOString();
  const category = post?.category || 'Technical Article';
  const readTime = post?.read_time || '5 min read';
  const authorName = post?.author?.name || 'Improx Team';

  const featuredImage =
    post?.featured_image ||
    post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80';

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: 'clamp(90px, 12vw, 120px)', paddingBottom: '64px' }}>
      <main className="post-wrapper" style={{ padding: '0 24px', maxWidth: '960px', margin: '0 auto' }}>
        {loading && (
          <div className="loader-container">
            <div className="loader" aria-label="Loading" />
          </div>
        )}

        {error && (
          <div className="glass-card" style={{ padding: '40px', textAlign: 'center', margin: '40px 0' }}>
            <p className="error-message" style={{ marginBottom: '16px' }}>{error}</p>
            <Link to="/blog" className="btn btn-primary">
              ← Return to Articles
            </Link>
          </div>
        )}

        {!loading && !error && post && (
          <>
            {/* Centered Breadcrumb / Back Navigation */}
            <nav style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: 'var(--text-lo)', marginBottom: '24px' }}>
              <Link to="/" style={{ color: 'var(--text-lo)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/blog" style={{ color: 'var(--text-lo)', textDecoration: 'none' }}>Blogs</Link>
              <span>/</span>
              <span style={{ color: 'var(--brand)', fontWeight: 600 }}>{category}</span>
            </nav>

            {/* Clear Transparent Blog Header */}
            <header className="single-post-header" style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="eyebrow" style={{ color: 'var(--brand)', width: 'fit-content' }}>
                <span className="glow-dot" style={{ marginRight: '8px' }} /> {category.toUpperCase()}
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, color: 'var(--text-hi)', lineHeight: 1.15, letterSpacing: '-0.04em', margin: 0, width: '100%' }}>
                {title}
              </h1>

              {/* Meta Row Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-lo)',
                fontSize: '0.92rem',
                flexWrap: 'wrap',
                gap: '12px 18px',
                margin: '10px 0 0 0'
              }}>
                {/* Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fa-regular fa-calendar" />
                  <time dateTime={dateValue}>
                    {new Date(dateValue).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <span>•</span>
                {/* Read Time */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fa-regular fa-clock" />
                  <span>{readTime}</span>
                </div>
                <span>•</span>
                {/* Author Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-lo)' }}>By:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-mid)', fontSize: '0.85rem' }}>{authorName}</span>
                </div>
              </div>
            </header>

            {/* Render featured image */}
            <div className="post-hero-image-wrapper" style={{ margin: '0 0 48px 0', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
              <img src={featuredImage} alt={title} style={{ width: '100%', height: 'auto', maxHeight: '540px', objectFit: 'cover' }} />
            </div>

            {/* Dynamic Content */}
            <div
              className="single-post-content wp-content"
              style={{
                color: 'var(--text-mid)',
                fontSize: '1.15rem',
                lineHeight: 1.9,
                maxWidth: '820px',
                margin: '0 auto',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'break-word'
              }}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Bottom Actions Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '48px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              <Link to="/blog" className="btn btn-secondary" style={{ padding: '12px 26px', borderRadius: '99px' }}>
                ← All Articles
              </Link>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 26px', borderRadius: '99px' }}>
                Request Consultation <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default BlogPostPage;
