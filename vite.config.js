import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'webhook-handler',
      configureServer(server) {
        // API Webhook handler for Improx Studio publishing
        server.middlewares.use('/api/webhook', (req, res) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', '*');
          res.setHeader('Content-Type', 'application/json');

          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.end();
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const data = body ? JSON.parse(body) : {};
                console.log('\n[Improx Studio Webhook] Event:', data.event || 'ping');

                if (data.event === 'blog.publish' && data.blog) {
                  const postsFilePath = path.resolve(__dirname, 'src/data/posts.json');
                  let posts = [];
                  if (fs.existsSync(postsFilePath)) {
                    try {
                      posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));
                    } catch (e) {
                      posts = [];
                    }
                  }

                  const b = data.blog;
                  const newPost = {
                    id: b.id || Date.now(),
                    slug: b.slug || `post-${b.id}`,
                    date: b.scheduled_at || new Date().toISOString(),
                    category: b.category || 'General',
                    tags: Array.isArray(b.tags) ? b.tags : [],
                    title: { rendered: b.title },
                    excerpt: { rendered: `<p>${b.meta_description || ''}</p>` },
                    meta_description: b.meta_description || '',
                    content: { rendered: b.content_html || b.content_markdown || '' },
                    featured_image: b.featured_image_base64
                      ? `data:image/jpeg;base64,${b.featured_image_base64}`
                      : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
                    _embedded: {
                      'wp:featuredmedia': [{
                        source_url: b.featured_image_base64
                          ? `data:image/jpeg;base64,${b.featured_image_base64}`
                          : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
                      }]
                    }
                  };

                  const existingIdx = posts.findIndex(p => p.id === newPost.id || p.slug === newPost.slug);
                  if (existingIdx >= 0) {
                    posts[existingIdx] = newPost;
                  } else {
                    posts.unshift(newPost);
                  }

                  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');
                  console.log(`[Improx Studio Webhook] Successfully saved: "${b.title}" to src/data/posts.json`);
                }

                res.statusCode = 200;
                res.end(JSON.stringify({
                  status: 'ok',
                  message: 'Improx Studio Webhook Received',
                  id: data.blog?.id || 1,
                  url: data.blog?.slug ? `/blog/${data.blog.slug}` : '/blog'
                }));
              } catch (err) {
                res.statusCode = 200;
                res.end(JSON.stringify({ status: 'ok', message: 'Received' }));
              }
            });
            return;
          }

          res.statusCode = 200;
          res.end(JSON.stringify({ status: 'ok', message: 'Webhook endpoint active' }));
        });

        // Serve /api/blogs endpoint directly from posts.json
        server.middlewares.use('/api/blogs', (req, res) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Content-Type', 'application/json');
          const postsFilePath = path.resolve(__dirname, 'src/data/posts.json');
          if (fs.existsSync(postsFilePath)) {
            const raw = fs.readFileSync(postsFilePath, 'utf8');
            res.statusCode = 200;
            res.end(raw);
          } else {
            res.statusCode = 200;
            res.end('[]');
          }
        });
      }
    }
  ],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
