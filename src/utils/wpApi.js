// Improx Tech - Blog & WordPress API client utility
import localPostsData from '../data/posts.json';

export const FALLBACK_POSTS = Array.isArray(localPostsData) && localPostsData.length > 0
  ? localPostsData
  : [];

// Filter out generic WordPress test posts like "Hello World" or empty drafts
export const isDummyPost = (p) => {
  if (!p) return true;
  const title = (p.title?.rendered || (typeof p.title === 'string' ? p.title : '')).toLowerCase();
  const slug = (p.slug || '').toLowerCase();
  const content = (p.content?.rendered || (typeof p.content === 'string' ? p.content : '')).toLowerCase();
  return (
    title.includes('hello world') ||
    slug.includes('hello-world') ||
    slug.includes('test-studio') ||
    content.includes('welcome to wordpress') ||
    (content.length < 50 && !p.excerpt)
  );
};

export const getWpUrls = (pathAndQuery) => {
  const cleanPath = pathAndQuery.startsWith('/') ? pathAndQuery : `/${pathAndQuery}`;
  
  // If an explicit remote WordPress API URL is provided via environment variables, use only that
  const customApi = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WP_API_URL;
  if (customApi) {
    return [`${customApi.replace(/\/$/, '')}${cleanPath}`];
  }

  const isLocal = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local')
  );

  // In production, do not attempt to probe localhost:8000 or improx-tech.local to avoid
  // network timeout latency (7.8s) and browser console connection errors.
  if (!isLocal) {
    return [];
  }

  return [
    `http://localhost:8000/wp-json/wp/v2${cleanPath}`,
    `http://localhost:8000/api/blogs${cleanPath.replace(/^\/posts/, '')}`,
    `http://improx-tech.local/wp-json/wp/v2${cleanPath}`,
  ];
};

export const fetchFromWp = async (pathAndQuery) => {
  const urls = getWpUrls(pathAndQuery);

  if (urls.length > 0) {
    for (const url of urls) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1200);

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!res.ok) continue;
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const realPosts = data.filter((p) => !isDummyPost(p));
          if (realPosts.length > 0) return realPosts;
        } else if (data && typeof data === 'object' && !Array.isArray(data)) {
          if (!isDummyPost(data)) return data;
        }
      } catch {
        // Continue to next candidate URL
      }
    }
  }

  // Graceful fallback to verified curated enterprise database records
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
