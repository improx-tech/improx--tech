// Improx Tech - Blog & WordPress API client utility
import localPostsData from '../data/posts.json';

const PROD_API_URL      = 'https://improxtech.com/api/blogs';
const PROD_WP_URL       = 'https://improxtech.com/wp-json/wp/v2';
const FASTAPI_LOCAL_URL = 'http://localhost:8000/wp-json/wp/v2';
const FASTAPI_ALT_URL   = 'http://localhost:8000/api/blogs';
const LOCAL_WP_URL      = 'http://improx-tech.local/wp-json/wp/v2';

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
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';

  return [
    `${origin}/api/blogs`,
    `${PROD_API_URL}`,
    `${PROD_WP_URL}${cleanPath}`,
    `${FASTAPI_LOCAL_URL}${cleanPath}`,
    `${FASTAPI_ALT_URL}${cleanPath.replace(/^\/posts/, '')}`,
    `${LOCAL_WP_URL}${cleanPath}`,
  ];
};

export const fetchFromWp = async (pathAndQuery) => {
  const urls = getWpUrls(pathAndQuery);

  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1800);

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
    } catch (err) {
      // Continue to next candidate URL
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
