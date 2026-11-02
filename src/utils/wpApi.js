// Improx Tech - Blog & WordPress API client utility
import localPostsData from '../data/posts.json';

const PROD_API_URL      = 'https://improxtech.com/api/blogs';
const PROD_WP_URL       = 'https://improxtech.com/wp-json/wp/v2';
const FASTAPI_LOCAL_URL = 'http://localhost:8000/wp-json/wp/v2';
const FASTAPI_ALT_URL   = 'http://localhost:8000/api/blogs';
const LOCAL_WP_URL      = 'http://improx-tech.local/wp-json/wp/v2';
const PUBLIC_WP_URL     = 'https://public-api.wordpress.com/wp/v2/sites/improxtech.wordpress.com';
const FALLBACK_WP_URL   = 'https://improxtech.wordpress.com/wp-json/wp/v2';

export const FALLBACK_POSTS = Array.isArray(localPostsData) && localPostsData.length > 0
  ? localPostsData
  : [
      {
        id: 1,
        slug: 'migrating-monoliths-to-event-driven-microservices',
        date: '2026-10-28T10:00:00Z',
        category: 'Architecture',
        title: {
          rendered: 'Migrating Monoliths to Event-Driven Microservices in 2026',
        },
        excerpt: {
          rendered:
            '<p>A deep dive into decomposing legacy systems into resilient, event-driven architectures with zero downtime and reliable saga orchestration.</p>',
        },
        content: {
          rendered: `
            <h2>Why Modernize Now?</h2>
            <p>Monolithic systems often accumulate significant architectural debt over years of iterative feature delivery. Transitioning to an event-driven microservices architecture unlocks independent deployability, granular autoscaling, and fault isolation.</p>
          `,
        },
        featured_image:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      },
    ];

export const getWpUrls = (pathAndQuery) => {
  const cleanPath = pathAndQuery.startsWith('/') ? pathAndQuery : `/${pathAndQuery}`;
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';

  return [
    `${origin}/api/blogs`,
    `${FASTAPI_LOCAL_URL}${cleanPath}`,
    `${FASTAPI_ALT_URL}${cleanPath.replace(/^\/posts/, '')}`,
    `${LOCAL_WP_URL}${cleanPath}`,
    `${FALLBACK_WP_URL}${cleanPath}`,
    `${PUBLIC_WP_URL}${cleanPath}`,
  ];
};

export const fetchFromWp = async (pathAndQuery) => {
  const urls = getWpUrls(pathAndQuery);

  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
      if (data && typeof data === 'object' && !Array.isArray(data)) return data;
    } catch (err) {
      // Continue to next URL
    }
  }

  // Graceful fallback to embedded local database records if API is currently offline
  const clean = pathAndQuery.toLowerCase();
  if (clean.includes('/posts') && !clean.match(/\/posts\/[^?&/]+/)) {
    return FALLBACK_POSTS;
  }

  const match = pathAndQuery.match(/\/posts\/([^?&/]+)/);
  if (match) {
    const identifier = decodeURIComponent(match[1]).toLowerCase();
    const post = FALLBACK_POSTS.find(
      (p) => String(p.id) === identifier || String(p.slug || '').toLowerCase() === identifier
    );
    if (post) return post;
  }

  return FALLBACK_POSTS;
};
