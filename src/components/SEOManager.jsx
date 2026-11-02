import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL, DEFAULT_SEO, SEO_ROUTES } from '../utils/seoData';

/**
 * Utility to safely set or update <meta> tags in the document head.
 */
function setMetaTag(attrName, attrVal, content) {
  if (content === undefined || content === null) return;
  let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrVal);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Utility to set or update <link> tags in the document head.
 */
function setLinkTag(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Apply full SEO metadata to the active document.
 */
export function applySEO(metadata = {}) {
  const title = metadata.title || DEFAULT_SEO.title;
  const description = metadata.description || DEFAULT_SEO.description;
  const keywords = metadata.keywords || DEFAULT_SEO.keywords;
  const canonicalUrl = metadata.canonicalUrl || (BASE_URL + (window.location.pathname === '/' ? '' : window.location.pathname));
  const ogImage = metadata.ogImage || DEFAULT_SEO.ogImage;

  // 1. Title
  document.title = title;

  // 2. Standard Meta Tags
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'keywords', keywords);

  // 3. Canonical Tag
  setLinkTag('canonical', canonicalUrl);

  // 4. OpenGraph Tags
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', 'Improx Tech');
  setMetaTag('property', 'og:image', ogImage);

  // 5. Twitter Card Tags
  setMetaTag('property', 'twitter:card', 'summary_large_image');
  setMetaTag('property', 'twitter:title', title);
  setMetaTag('property', 'twitter:description', description);
  setMetaTag('property', 'twitter:url', canonicalUrl);
  setMetaTag('property', 'twitter:image', ogImage);
}

/**
 * Custom React Hook for overriding SEO metadata directly inside any component.
 * Useful for dynamic routes such as individual blog post pages.
 */
export function usePageSEO(customSEO) {
  useEffect(() => {
    if (customSEO && (customSEO.title || customSEO.description)) {
      applySEO(customSEO);
    }
  }, [
    customSEO?.title,
    customSEO?.description,
    customSEO?.keywords,
    customSEO?.canonicalUrl,
    customSEO?.ogImage,
  ]);
}

/**
 * SEOManager Component
 * Placed in App root to automatically synchronize <title>, <meta description>,
 * <meta keywords>, OpenGraph, Twitter, and canonical tags on every route transition.
 */
export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    // Clean pathname: remove trailing slash except for root '/'
    const path = location.pathname.length > 1 && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname;

    const matchedSEO = SEO_ROUTES[path];
    if (matchedSEO) {
      applySEO({
        ...matchedSEO,
        canonicalUrl: `${BASE_URL}${path === '/' ? '' : path}`,
      });
    } else if (!path.startsWith('/blog/')) {
      // General fallback if route is not explicitly mapped and not a dynamic blog
      applySEO();
    }
  }, [location.pathname]);

  return null;
}
