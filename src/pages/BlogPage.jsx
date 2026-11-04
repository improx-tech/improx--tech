import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { fetchFromWp } from '../utils/wpApi';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchFromWp('/posts?per_page=20&_embed');
        const rawPosts = Array.isArray(data) ? data : [data];
        // Filter out default dummy WordPress posts like "Hello world!"
        const cleanedPosts = rawPosts.filter(p => {
          const t = (p.title?.rendered || (typeof p.title === 'string' ? p.title : '')).toLowerCase();
          const s = (p.slug || '').toLowerCase();
          return !t.includes('hello world') && !s.includes('hello-world') && !s.includes('test-studio');
        });
        setPosts(cleanedPosts.length > 0 ? cleanedPosts : rawPosts);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Compute unique categories
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    posts.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [posts]);

  // Compute unique tags
  const tags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((p) => {
      if (Array.isArray(p.tags)) {
        p.tags.forEach((t) => tagSet.add(t));
      }
    });
    return Array.from(tagSet);
  }, [posts]);

  // Filtered posts based on search & category selection
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const title = (post.title?.rendered || (typeof post.title === 'string' ? post.title : '')).toLowerCase();
      const desc = (post.meta_description || post.excerpt?.rendered || '').toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || title.includes(q) || desc.includes(q);
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <main className="blog-page-wrap">
      <section className="blog-page-hero reveal active">
        <span className="badge">Insights & Analytics</span>
        <h1>Improx Tech Intelligence Reports</h1>
        <p>
          Our latest technical observations, engineering blueprints, cloud setup guides, and software security reviews.
        </p>
      </section>

      <div className="blog-layout">
        <div className="blog-main">
          {loading && (
            <div className="loader-container">
              <div className="loader" aria-label="Loading" />
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          {!loading && !error && filteredPosts.length === 0 && (
            <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
              <h3>No articles found</h3>
              <p style={{ color: 'var(--text-lo)', marginTop: '8px' }}>
                Try adjusting your search query or selecting a different category.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          {!loading && !error && filteredPosts.length > 0 && (
            <div className="blog-list">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id || post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        <aside className="blog-sidebar">
          {/* Search Box */}
          <div className="glass-card sidebar-widget">
            <h3>Search</h3>
            <div className="blog-search-wrap">
              <input
                type="search"
                placeholder="Search articles..."
                aria-label="Search blog posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                aria-label="Search"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-magnifying-glass" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="glass-card sidebar-widget">
            <h3>Categories</h3>
            <div className="sidebar-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? 'var(--brand)' : 'transparent',
                    color: selectedCategory === cat ? '#fff' : 'var(--text-mid)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="glass-card sidebar-widget">
            <h3>Recent Posts</h3>
            <div className="sidebar-recent" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {posts.slice(0, 3).map((p) => {
                const title = p.title?.rendered || (typeof p.title === 'string' ? p.title : 'Article');
                const pId = p.slug || p.id;
                return (
                  <div key={pId} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--brand)', textTransform: 'uppercase', fontWeight: 700 }}>
                      {p.category || 'Tech'}
                    </span>
                    <Link
                      to={`/blog/${pId}`}
                      style={{
                        color: 'var(--text-hi)',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        lineHeight: 1.35,
                        textDecoration: 'none',
                      }}
                    >
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="glass-card sidebar-widget">
              <h3>Tags</h3>
              <div className="sidebar-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      fontSize: '0.78rem',
                      color: 'var(--text-mid)',
                      cursor: 'pointer',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      <section className="section cta-banner-section">
        <div className="glass-card reveal active cta-banner">
          <h2>Looking for Technical Consultation?</h2>
          <p>
            Get in touch with an engineering consultant today to review database performance, cloud infrastructure, or code reviews.
          </p>
          <a className="btn btn-primary" href="/contact">
            Contact Our Team <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
