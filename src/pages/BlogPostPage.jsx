import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFromWp, FALLBACK_POSTS } from '../utils/wpApi';

function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [allPosts, setAllPosts] = useState(FALLBACK_POSTS);

  // Scroll reading progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch current post and all posts for related section
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError('');
      window.scrollTo(0, 0);

      try {
        const data = await fetchFromWp(`/posts/${id}?_embed`);
        if (data) {
          setPost(data);
        } else {
          setError('Article not found or currently unavailable.');
        }

        // Fetch related posts pool
        const all = await fetchFromWp('/posts?per_page=6&_embed');
        if (Array.isArray(all) && all.length > 0) {
          setAllPosts(all);
        }
      } catch (err) {
        setError('Article not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    } else {
      setError('Invalid article link.');
      setLoading(false);
    }
  }, [id]);

  const title = post?.title?.rendered || (typeof post?.title === 'string' ? post.title : 'Technical Article');
  const rawContent = post?.content?.rendered || (typeof post?.content === 'string' ? post.content : '');
  const excerptText = post?.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]+>/g, '').trim() : post?.meta_description || '';
  const dateValue = post?.date || post?.created_at || new Date().toISOString();
  const category = post?.category || 'Enterprise Architecture';
  const readTime = post?.read_time || '8 min read';
  const authorName = post?.author?.name || 'Saurabh Deshmukh';
  const authorRole = post?.author?.role || 'Principal Enterprise Architect';
  const authorAvatar = post?.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
  const authorBio = post?.author?.bio || 'Leads enterprise platform modernization, high-concurrency event-driven backbones, and deterministic AI execution frameworks at Improx Tech.';
  const tags = Array.isArray(post?.tags) ? post.tags : ['Enterprise Architecture', 'Cloud-Native', 'High-Concurrency'];
  const keyTakeaways = Array.isArray(post?.key_takeaways) ? post.key_takeaways : null;

  const featuredImage =
    post?.featured_image ||
    post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';

  // Extract Table of Contents headings and inject clean IDs
  const { toc, processedHtml } = useMemo(() => {
    if (!rawContent) return { toc: [], processedHtml: '' };

    const tocItems = [];
    let counter = 0;

    const modified = rawContent.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, innerText) => {
      const cleanText = innerText.replace(/<[^>]+>/g, '').trim();
      const slugId = `section-${counter++}-${cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
      tocItems.push({ id: slugId, text: cleanText });
      return `<h2 id="${slugId}" ${attrs}>${innerText}</h2>`;
    });

    return { toc: tocItems, processedHtml: modified };
  }, [rawContent]);

  // Related articles (filter out current post)
  const relatedPosts = useMemo(() => {
    const currentIdentifier = String(post?.id || post?.slug || id).toLowerCase();
    return allPosts
      .filter((p) => {
        const pId = String(p.id || '').toLowerCase();
        const pSlug = String(p.slug || '').toLowerCase();
        return pId !== currentIdentifier && pSlug !== currentIdentifier;
      })
      .slice(0, 3);
  }, [allPosts, post, id]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleScrollToHeading = (headingId) => {
    const el = document.getElementById(headingId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingTop: 'clamp(84px, 10vw, 110px)', paddingBottom: '96px' }}>
      {/* Top Floating Reading Progress Bar */}
      <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />

      <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '20px' }}>
            <div className="loader" aria-label="Loading article..." />
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>Loading architectural article...</p>
          </div>
        )}

        {error && (
          <div className="glass-card" style={{ padding: '60px 32px', textAlign: 'center', margin: '60px auto', maxWidth: '600px' }}>
            <i className="fa-solid fa-file-circle-exclamation" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '18px', display: 'block' }} />
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '12px' }}>Article Not Found</h2>
            <p style={{ color: 'var(--text-mid)', marginBottom: '28px', lineHeight: 1.6 }}>{error}</p>
            <Link to="/blog" className="btn btn-primary">
              <i className="fa-solid fa-arrow-left" /> Return to Insights Hub
            </Link>
          </div>
        )}

        {!loading && !error && post && (
          <>
            {/* ── Breadcrumb Navigation ── */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-mid)', marginBottom: '28px', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'var(--text-mid)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/blog" style={{ color: 'var(--text-mid)', textDecoration: 'none' }}>Blog & Insights</Link>
              <span>/</span>
              <span style={{ color: 'var(--brand)', fontWeight: 600 }}>{category}</span>
            </nav>

            {/* ── Article Header ── */}
            <header style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(37,99,235,0.08)', color: 'var(--brand)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <span className="glow-dot" style={{ marginRight: '6px' }} />
                  {category}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fa-regular fa-clock" /> {readTime}
                </span>
                <span className="badge" style={{ background: 'rgba(16,185,129,0.08)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)', fontSize: '0.68rem' }}>
                  <i className="fa-solid fa-shield-check" style={{ marginRight: '4px' }} /> Peer-Reviewed
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)', fontWeight: 900, color: 'var(--text-hi)', lineHeight: 1.15, letterSpacing: '-0.035em', marginBottom: '20px' }}>
                {title}
              </h1>

              {excerptText && (
                <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '980px' }}>
                  {excerptText}
                </p>
              )}

              {/* Author & Share Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                padding: '20px 0',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)'
              }}>
                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={authorAvatar}
                    alt={authorName}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-brand)' }}
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.96rem', color: 'var(--text-hi)' }}>{authorName}</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>{authorRole} · {new Date(dateValue).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>

                {/* Share Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-mid)', fontWeight: 600, marginRight: '4px' }}>Share:</span>
                  <button
                    onClick={handleCopyLink}
                    style={{
                      background: copied ? 'var(--brand)' : 'var(--bg-card)',
                      color: copied ? '#fff' : 'var(--text-hi)',
                      border: '1px solid var(--border)',
                      padding: '8px 14px',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className={copied ? "fa-solid fa-check" : "fa-solid fa-link"} />
                    {copied ? 'Copied URL!' : 'Copy Link'}
                  </button>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '8px 12px', borderRadius: 'var(--r-pill)', fontSize: '0.85rem' }}
                    aria-label="Share on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" style={{ color: '#0A66C2' }} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '8px 12px', borderRadius: 'var(--r-pill)', fontSize: '0.85rem' }}
                    aria-label="Share on X"
                  >
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </div>
              </div>
            </header>

            {/* ── Featured Visual ── */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-raise)', marginBottom: '48px' }}>
              <img
                src={featuredImage}
                alt={title}
                style={{ width: '100%', height: 'auto', maxHeight: '560px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: '18px', left: '18px', padding: '8px 16px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)', borderRadius: '12px', color: '#fff', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-solid fa-diagram-project" style={{ color: 'var(--accent)' }} />
                <span>Improx Tech Digital Architecture Group · Verified 2026 Production Standard</span>
              </div>
            </div>

            {/* ── Main Two-Column Reading Grid ── */}
            <div className="single-post-grid">
              {/* Left Column: Article Body */}
              <article>
                {/* Key Takeaways Callout Card */}
                {keyTakeaways && keyTakeaways.length > 0 && (
                  <div className="key-takeaways-card">
                    <h3>
                      <i className="fa-solid fa-lightbulb" style={{ color: 'var(--brand)' }} />
                      Executive Summary & Key Takeaways
                    </h3>
                    <ul>
                      {keyTakeaways.map((takeaway, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Main Content Body */}
                <div
                  className="single-post-content wp-content"
                  dangerouslySetInnerHTML={{ __html: processedHtml }}
                />

                {/* Article Tags */}
                {tags && tags.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-hi)', marginRight: '6px' }}>Topics:</span>
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="tech-pill"
                        style={{ fontSize: '0.8rem', padding: '5px 14px', borderRadius: 'var(--r-pill)' }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Author Bio Card */}
                <div className="author-bio-card">
                  <img src={authorAvatar} alt={authorName} className="author-bio-avatar" />
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand)', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                      Written By
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-hi)', margin: '0 0 4px' }}>
                      {authorName}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--brand)', fontWeight: 600, marginBottom: '8px' }}>
                      {authorRole}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.6, margin: 0 }}>
                      {authorBio}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--border)' }}>
                  <Link to="/blog" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
                    <i className="fa-solid fa-arrow-left" /> Back to All Articles
                  </Link>
                  <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.88rem' }}>
                    Request Architectural Audit <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>

              {/* Right Column: Sticky Sidebar */}
              <aside className="single-post-sidebar">
                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div className="toc-card">
                    <h4>
                      <i className="fa-solid fa-list-ul" /> Table of Contents
                    </h4>
                    <ul className="toc-list">
                      {toc.map((item, idx) => (
                        <li key={item.id}>
                          <a
                            className="toc-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleScrollToHeading(item.id);
                            }}
                          >
                            <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.78rem' }}>0{idx + 1}.</span>
                            <span>{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Practice Domain Quick Card */}
                <div className="glass-card" style={{ padding: '24px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand)', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                    Practice Focus
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '14px' }}>
                    {category}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: 'var(--text-mid)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--brand)' }} /> Production Scalability
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--brand)' }} /> High-Concurrency Messaging
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--brand)' }} /> Zero-Downtime Governance
                    </li>
                  </ul>
                </div>

                {/* Engineering Consultation Callout */}
                <div style={{ background: 'var(--grad-brand)', borderRadius: 'var(--r-lg)', padding: '28px', color: '#fff', boxShadow: '0 10px 30px rgba(37,99,235,0.25)' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px', opacity: 0.9 }}>
                    Advisory Services
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
                    Modernizing Your Digital Architecture?
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '20px' }}>
                    Schedule a confidential 30-minute technical review with our principal cloud and software architects.
                  </p>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#fff',
                      color: 'var(--brand)',
                      padding: '10px 20px',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    Schedule Review <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }} />
                  </Link>
                </div>
              </aside>
            </div>

            {/* ── Related Articles Section ── */}
            {relatedPosts.length > 0 && (
              <section style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                  <div>
                    <span className="eyebrow" style={{ color: 'var(--brand)' }}>Further Exploration</span>
                    <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-hi)' }}>Related Technical Articles</h3>
                  </div>
                  <Link to="/blog" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                    View All Insights <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  {relatedPosts.map((r, i) => {
                    const rTitle = r.title?.rendered || (typeof r.title === 'string' ? r.title : 'Article');
                    const rExcerpt = r.excerpt?.rendered ? r.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 110) + '…' : r.meta_description || '';
                    const rImg = r.featured_image || r._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80';
                    const rCategory = r.category || 'Tech Article';
                    const rId = r.slug || r.id;

                    return (
                      <article key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                          <img src={rImg} alt={rTitle} className="img-hover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '3px 10px', background: 'var(--grad-brand)', borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>
                            {rCategory}
                          </span>
                        </div>
                        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-hi)', margin: '0 0 10px', lineHeight: 1.4 }}>
                            {rTitle}
                          </h4>
                          <p style={{ color: 'var(--text-mid)', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '16px' }}>
                            {rExcerpt}
                          </p>
                          <div style={{ marginTop: 'auto' }}>
                            <Link to={`/blog/${rId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand)', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                              Read Article <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default BlogPostPage;
