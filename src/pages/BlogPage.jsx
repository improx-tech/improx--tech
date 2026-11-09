import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { fetchFromWp, FALLBACK_POSTS, isDummyPost } from '../utils/wpApi';

function BlogPage() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchFromWp('/posts?per_page=12&_embed');
        if (Array.isArray(data) && data.length > 0) {
          const cleaned = data.filter((p) => !isDummyPost(p));
          if (cleaned.length > 0) {
            setPosts(cleaned);
          }
        }
      } catch (err) {
        // Keeps verified fallback posts
      }
    };

    fetchPosts();
  }, []);

  // Compute unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    posts.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, [posts]);

  // Filtered posts based on search & category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const title = (post.title?.rendered || (typeof post.title === 'string' ? post.title : '')).toLowerCase();
      const desc = (post.meta_description || post.excerpt?.rendered || '').toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || title.includes(q) || desc.includes(q);
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [posts, searchQuery, selectedCategory]);

  const showSpotlight = selectedCategory === 'All' && !searchQuery && filteredPosts.length > 0;
  const spotlightPost = showSpotlight ? filteredPosts[0] : null;
  const gridPosts = showSpotlight ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main className="blog-page-wrap">
      {/* ── Page Hero ── */}
      <section className="blog-page-hero reveal active">
        <span className="badge" style={{ background: 'rgba(37,99,235,0.08)', color: 'var(--brand)', border: '1px solid rgba(37,99,235,0.2)' }}>
          <span className="glow-dot" style={{ marginRight: '6px' }} /> Engineering & Architectural Journal
        </span>
        <h1>Insights, Blueprints & Production Benchmarks</h1>
        <p>
          Practical engineering playbooks on high-concurrency microservices, multi-cloud Kubernetes networking, and deterministic AI agent orchestration.
        </p>
      </section>

      {/* ── Filter & Search Toolbar ── */}
      <div className="blog-filter-bar reveal active">
        <div className="blog-categories-list">
          {categories.map((cat) => {
            const count = cat === 'All' ? posts.length : posts.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`category-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: '999px',
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(15,23,42,0.06)',
                    color: isActive ? '#fff' : 'var(--text-mid)',
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="blog-search-box">
          <i className="fa-solid fa-magnifying-glass" />
          <input
            type="search"
            placeholder="Search architectural insights..."
            aria-label="Search articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── Spotlight Featured Card (When on All & Not Searching) ── */}
      {spotlightPost && (
        <section className="reveal active" style={{ marginBottom: '48px' }}>
          {(() => {
            const sTitle = spotlightPost.title?.rendered || (typeof spotlightPost.title === 'string' ? spotlightPost.title : 'Featured Blueprint');
            const sExcerpt = spotlightPost.excerpt?.rendered
              ? spotlightPost.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 180) + '…'
              : spotlightPost.meta_description || '';
            const sImage = spotlightPost.featured_image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
            const sTargetId = spotlightPost.slug || spotlightPost.id;
            const sDate = new Date(spotlightPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            const sAuthor = spotlightPost.author || { name: 'Saurabh Deshmukh', role: 'Principal Enterprise Architect', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' };

            return (
              <div className="featured-blog-card">
                <Link to={`/blog/${sTargetId}`} className="featured-blog-img-wrap">
                  <img src={sImage} alt={sTitle} width="800" height="480" decoding="async" className="img-hover" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '18px',
                      padding: '5px 14px',
                      background: 'var(--brand)',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      borderRadius: '999px',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                    }}
                  >
                    ★ FEATURED BLUEPRINT
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '18px',
                      left: '18px',
                      padding: '4px 12px',
                      background: 'rgba(15,23,42,0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      borderRadius: '8px',
                    }}
                  >
                    {spotlightPost.category} · {spotlightPost.read_time || '8 min read'}
                  </span>
                </Link>

                <div className="featured-blog-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: '12px' }}>
                    <i className="fa-regular fa-calendar" />
                    <span>{sDate}</span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: 'var(--text-hi)', lineHeight: 1.25, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
                    <Link to={`/blog/${sTargetId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {sTitle}
                    </Link>
                  </h2>

                  <p style={{ color: 'var(--text-mid)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {sExcerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={sAuthor.avatar}
                        alt={sAuthor.name}
                        width="42"
                        height="42"
                        loading="lazy"
                        decoding="async"
                        style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-brand)' }}
                      />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-hi)' }}>{sAuthor.name}</strong>
                        <span style={{ fontSize: '0.76rem', color: 'var(--text-mid)' }}>{sAuthor.role}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${sTargetId}`} className="btn btn-primary" style={{ fontSize: '0.86rem', padding: '10px 22px' }}>
                      Read Blueprint <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* ── Articles Grid ── */}
      {filteredPosts.length === 0 ? (
        <div className="glass-card" style={{ padding: '64px 32px', textAlign: 'center', margin: '40px auto', maxWidth: '600px' }}>
          <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '2.5rem', color: 'var(--text-mid)', marginBottom: '16px', display: 'block' }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '8px' }}>No matching articles found</h3>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.94rem', marginBottom: '24px' }}>
            Try adjusting your search keywords or reset to "All Topics".
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {showSpotlight && gridPosts.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-hi)', letterSpacing: '-0.02em' }}>
                All Architectural Blueprints
              </h3>
            </div>
          )}

          <div className="blog-grid-modern">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug || post.id} post={post} />
            ))}
          </div>
        </>
      )}

      {/* ── Bottom Enterprise Architecture CTA ── */}
      <section style={{ marginTop: '96px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.06) 100%)',
            border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '24px',
            padding: '56px 40px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--brand)', marginBottom: '12px' }}>
            <span className="glow-dot" style={{ marginRight: '6px' }} /> Enterprise Advisory
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--text-hi)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Facing Architectural Scaling Bottlenecks?
          </h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Our principal cloud architects conduct comprehensive architecture audits for high-concurrency microservices, multi-region Kubernetes, and enterprise AI integrations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              Schedule Architecture Audit <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
            </Link>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
              Explore Practices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
