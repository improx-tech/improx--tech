// Improx Tech - Static Data Client Utility (Serverless / Static React)
import localPostsData from '../data/posts.json';

export const FALLBACK_POSTS = Array.isArray(localPostsData) && localPostsData.length > 0
  ? localPostsData
  : [];

export const isDummyPost = (p) => {
  if (!p) return true;
  const title = (p.title?.rendered || (typeof p.title === 'string' ? p.title : '')).toLowerCase();
  const slug = (p.slug || '').toLowerCase();
  return (
    title.includes('hello world') ||
    slug.includes('hello-world') ||
    slug.includes('test-studio')
  );
};

export const fetchFromWp = async (pathAndQuery = '') => {
  const clean = pathAndQuery.toLowerCase();

  // Return all non-dummy posts
  if (clean.includes('/posts') && !clean.match(/\/posts\/[^?&/]+/)) {
    return FALLBACK_POSTS.filter((p) => !isDummyPost(p));
  }

  // Find post by ID or Slug
  const match = pathAndQuery.match(/\/posts\/([^?&/]+)/);
  if (match) {
    const identifier = decodeURIComponent(match[1]).toLowerCase();
    const post = FALLBACK_POSTS.find(
      (p) => String(p.id) === identifier || String(p.slug || '').toLowerCase() === identifier
    );
    if (post && !isDummyPost(post)) return post;
  }

  return FALLBACK_POSTS.filter((p) => !isDummyPost(p));
};
