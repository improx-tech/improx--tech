"""
Improx Tech - Blog FastAPI Bridge
Connects Improx Studio / SQLite (blogs.db) to the existing React Vite and Next.js frontends.
"""

import os
import sqlite3
from typing import Optional, List
from datetime import datetime
from fastapi import FastAPI, HTTPException, Query, BackgroundTasks, Request, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import urllib.request
import json
import markdown

DB_FILE = os.environ.get("BLOG_DB_PATH", "blogs.db")
NEXTJS_URL = os.environ.get("NEXTJS_URL", "http://localhost:3000")
REVALIDATE_SECRET = os.environ.get("REVALIDATION_SECRET", "improx-revalidate-secret")

app = FastAPI(
    title="Improx Tech Blog API",
    description="REST API for serving approved blogs to the React and Next.js frontends",
    version="1.0.0",
)

# Enable CORS for Vite (:5173), Next.js (:3000), and all local ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn


def render_markdown(text: str) -> str:
    """Converts markdown content to styled HTML."""
    if not text:
        return ""
    # If already HTML, return directly
    if "<p>" in text or "<div>" in text or "<h2>" in text:
        return text
    return markdown.markdown(text, extensions=["extra", "codehilite", "toc"])


def init_db():
    """Initializes tables and seeds high-fidelity technical articles if empty."""
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS blogs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            status TEXT DEFAULT 'approved',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS blog_metadata (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            blog_id INTEGER UNIQUE,
            slug TEXT UNIQUE NOT NULL,
            seo_title TEXT,
            meta_description TEXT,
            category TEXT,
            tags TEXT,
            featured_image TEXT,
            read_time TEXT,
            author_name TEXT,
            FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
        )
    """)
    conn.commit()

    # Seed if empty or fewer than 3 posts
    cursor.execute("SELECT COUNT(*) as count FROM blogs")
    if cursor.fetchone()["count"] < 3:
        initial_posts = [
            (
                "Migrating Monoliths to Event-Driven Microservices in 2026",
                "## Why Modernize Now?\n\nMonolithic systems often accumulate significant architectural debt over years of iterative feature delivery. Deployments become high-risk events, and scaling individual bottlenecks requires provisioning oversized compute instances for the entire fleet.\n\nTransitioning to an **event-driven microservices architecture** unlocks independent deployability, granular autoscaling, and fault isolation.\n\n### Core Principles of Migration\n\n1. **Strangler Fig Pattern**: Avoid big-bang rewrites. Progressively extract bounded contexts behind an API Gateway.\n2. **Domain-Driven Design (DDD)**: Isolate contexts by transaction boundaries rather than database tables.\n3. **Event Sourcing & CQRS**: Separate read pipelines from command processors using Kafka or GCP Pub/Sub.\n\n### Managing Distributed Transactions with Sagas\n\nWhen business logic spans multiple microservices, traditional two-phase commits (2PC) create heavy coupling and latency. The **Saga pattern** provides eventual consistency through a choreographed or orchestrated sequence of local transactions, paired with compensating actions if a downstream step fails.\n\n### Summary\n\nModernizing your architecture is an iterative journey. Start by identifying read-heavy bottlenecks, publish changes as immutable events, and expand your service graph with confidence.",
                "migrating-monoliths-to-event-driven-microservices",
                "Migrating Monoliths to Event-Driven Microservices | Improx Tech",
                "A deep dive into decomposing legacy systems into resilient, event-driven architectures with zero downtime and reliable saga orchestration.",
                "Architecture",
                "Microservices,Event-Driven,Cloud,Kafka",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Improx Architecture Group"
            ),
            (
                "Benchmarking Multi-Cloud Kubernetes Latency & Ingress Performance",
                "## The Reality of Multi-Cloud Networking\n\nOperating Kubernetes clusters across multiple hyperscalers promises redundancy and avoids vendor lock-in. However, inter-cloud transit latency, egress charges, and disparate ingress controllers introduce real operational hurdles.\n\n### Benchmark Setup\n\nWe tested service-to-service round-trip times (RTT) across:\n- **Google Cloud Platform (GKE)** - us-central1\n- **Amazon Web Services (EKS)** - us-east-1\n- **Microsoft Azure (AKS)** - East US\n\nNetworking was standardized on **Cilium Service Mesh** running on eBPF to bypass standard iptables translation overhead.\n\n### Key Takeaways\n- **Inter-Region P99 Latency**: Averaged between 32ms and 45ms over dedicated VPN tunnels.\n- **eBPF Ingress**: Cut CPU consumption by 28% compared to traditional ingress routing at 100k requests per second.\n- **Cost Caution**: Egress bandwidth remains the primary expense when orchestrating cross-cloud workflows.",
                "benchmarking-multi-cloud-kubernetes-latency",
                "Multi-Cloud Kubernetes Latency Benchmarks | Improx Tech",
                "Comparative latency and egress cost benchmarks across GCP GKE, AWS EKS, and Azure AKS with Cilium eBPF networking.",
                "DevOps & Cloud",
                "Kubernetes,Multi-Cloud,Networking,Envoy",
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
                "8 min read",
                "Platform Engineering Team"
            ),
            (
                "Enterprise AI Agent Orchestration: Lessons from Production Deployments",
                "## Moving Beyond Single Prompt-Response Chains\n\nBuilding reliable enterprise AI workflows requires more than calling an LLM endpoint. Real-world tasks demand multi-step execution, dynamic tool selection, validation loops, and strict security sandboxes.\n\n### The Agentic Architecture Stack\n\n1. **Protocol Standard (MCP)**: Unifying tool access via Model Context Protocol.\n2. **Context Compression**: Retaining only relevant state to avoid token explosion.\n3. **Execution Guardrails**: Verifying structured outputs with Pydantic schemas before executing database mutations.\n\nReliable agents are deterministic by design, auditable in real time, and equipped with failsafes.",
                "enterprise-ai-agent-orchestration-lessons",
                "Enterprise AI Agent Orchestration Lessons | Improx Tech",
                "Designing deterministic, secure multi-agent systems with MCP protocol support, sandboxed tool execution, and guardrail validations.",
                "AI & Data",
                "Generative AI,LLM,Agents,FastAPI",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
                "5 min read",
                "AI Research Group"
            )
        ]

        for title, content, slug, seo_title, meta_desc, cat, tags, img, read_time, author in initial_posts:
            cursor.execute("SELECT id FROM blog_metadata WHERE slug = ?", (slug,))
            if not cursor.fetchone():
                cursor.execute("INSERT INTO blogs (title, content, status) VALUES (?, ?, 'approved')", (title, content))
                bid = cursor.lastrowid
                cursor.execute("""
                    INSERT INTO blog_metadata (blog_id, slug, seo_title, meta_description, category, tags, featured_image, read_time, author_name)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, (bid, slug, seo_title, meta_desc, cat, tags, img, read_time, author))
        conn.commit()

    conn.close()


init_db()


def format_post_response(d: dict) -> dict:
    """Formats blog post into dual format: modern flat properties AND WordPress standard."""
    tags_raw = d.get("tags")
    tags = [t.strip() for t in tags_raw.split(",")] if tags_raw else []
    html_content = render_markdown(d.get("content", ""))
    meta_desc = d.get("meta_description") or ""

    formatted_date = str(d.get("created_at", datetime.now().isoformat()))
    img_url = d.get("featured_image") or "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"

    return {
        # Modern Flat Attributes
        "id": d["id"],
        "title": d["title"],
        "slug": d.get("slug") or f"post-{d['id']}",
        "content": html_content,
        "raw_content": d.get("content", ""),
        "meta_description": meta_desc,
        "seo_title": d.get("seo_title") or d["title"],
        "category": d.get("category") or "Engineering",
        "tags": tags,
        "featured_image": img_url,
        "created_at": formatted_date,
        "read_time": d.get("read_time") or "5 min read",
        "author": {
            "name": d.get("author_name") or "Improx Team",
            "role": "Technical Engineering",
        },

        # WordPress Compatibility Attributes (for existing React pages)
        "date": formatted_date,
        "title_rendered": d["title"],
        "content_rendered": html_content,
        "excerpt": {
            "rendered": f"<p>{meta_desc}</p>" if meta_desc else f"<p>{d['title']}</p>"
        },
        "_embedded": {
            "wp:featuredmedia": [
                {
                    "source_url": img_url,
                    "alt_text": d["title"]
                }
            ]
        }
    }


class WordPressWrapperPost:
    """Wrapper that supports both post['title']['rendered'] and post['title']."""
    pass


@app.get("/")
def root():
    return {
        "service": "Improx Tech Blog API",
        "status": "online",
        "database": DB_FILE,
        "endpoints": [
            "/api/blogs",
            "/api/blogs/{id_or_slug}",
            "/wp-json/wp/v2/posts",
            "/wp-json/wp/v2/posts/{id}",
            "/docs"
        ]
    }


@app.get("/api/blogs")
@app.get("/wp-json/wp/v2/posts")
def list_blogs(category: Optional[str] = None):
    """Returns list of approved blogs for the index and cards."""
    conn = get_db()
    cursor = conn.cursor()

    query = """
        SELECT b.id, b.title, b.content, b.status, b.created_at,
               m.slug, m.seo_title, m.meta_description, m.category,
               m.tags, m.featured_image, m.read_time, m.author_name
        FROM blogs b
        LEFT JOIN blog_metadata m ON b.id = m.blog_id
        WHERE b.status IN ('approved', 'published')
    """
    params = []
    if category:
        query += " AND m.category = ?"
        params.append(category)

    query += " ORDER BY b.created_at DESC"
    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()

    posts = []
    for row in rows:
        post = format_post_response(dict(row))
        # Ensure title.rendered and content.rendered are dictionary-accessible as well
        post["title"] = {"rendered": post["title"]}
        post["content"] = {"rendered": post["content"]}
        posts.append(post)
    return posts


@app.get("/api/blogs/{identifier}")
@app.get("/wp-json/wp/v2/posts/{identifier}")
def get_blog(identifier: str):
    """Returns a single blog post by numeric ID or slug."""
    conn = get_db()
    cursor = conn.cursor()

    is_numeric = identifier.isdigit()
    if is_numeric:
        cursor.execute("""
            SELECT b.id, b.title, b.content, b.status, b.created_at,
                   m.slug, m.seo_title, m.meta_description, m.category,
                   m.tags, m.featured_image, m.read_time, m.author_name
            FROM blogs b
            LEFT JOIN blog_metadata m ON b.id = m.blog_id
            WHERE b.id = ? OR m.slug = ?
        """, (int(identifier), identifier))
    else:
        cursor.execute("""
            SELECT b.id, b.title, b.content, b.status, b.created_at,
                   m.slug, m.seo_title, m.meta_description, m.category,
                   m.tags, m.featured_image, m.read_time, m.author_name
            FROM blogs b
            LEFT JOIN blog_metadata m ON b.id = m.blog_id
            WHERE m.slug = ?
        """, (identifier,))

    row = cursor.fetchone()
    conn.close()

    if not row:
        raise HTTPException(status_code=404, detail="Blog post not found")

    post = format_post_response(dict(row))
    post["title"] = {"rendered": post["title"]}
    post["content"] = {"rendered": post["content"]}
    return post


@app.post("/api/webhook")
@app.post("/api/webhooks/publish-blog")
@app.post("/api/publish")
async def webhook_publish_blog(request: Request, x_api_key: Optional[str] = Header(None)):
    """
    Webhook handler for Improx Studio.
    Handles 'ping' test connection events and blog publish events.
    Persists published blogs to SQLite (blogs.db).
    """
    try:
        data = await request.json()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid JSON payload: {e}")

    # 1. Handle "Test Connection" ping from Improx Studio
    if data.get("event") == "ping" or data.get("type") == "ping":
        print("[PING] Improx Studio ping test received successfully!")
        return {"status": "ok", "message": "Improx Studio Connected"}

    # 2. Extract blog payload (supports both nested {"blog": {...}} or flat {...})
    blog_data = data.get("blog") if isinstance(data.get("blog"), dict) else data

    title = blog_data.get("title") or blog_data.get("post_title") or "Untitled Publication"
    slug = blog_data.get("slug") or title.lower().replace(" ", "-").replace(":", "").replace("?", "")
    
    # Content can come as markdown or html
    content = (
        blog_data.get("content")
        or blog_data.get("markdown")
        or blog_data.get("html")
        or blog_data.get("post_content")
        or ""
    )
    
    meta_description = (
        blog_data.get("meta_description")
        or blog_data.get("seo_description")
        or blog_data.get("excerpt")
        or ""
    )
    seo_title = blog_data.get("seo_title") or title
    category = blog_data.get("category") or blog_data.get("post_category") or "Engineering"
    
    raw_tags = blog_data.get("tags") or []
    if isinstance(raw_tags, list):
        tags_str = ",".join(str(t) for t in raw_tags)
    else:
        tags_str = str(raw_tags)

    featured_image = (
        blog_data.get("featured_image")
        or blog_data.get("image")
        or blog_data.get("image_url")
        or ""
    )
    author_name = blog_data.get("author") or blog_data.get("author_name") or "Improx Team"
    status = blog_data.get("status") or "published"
    read_time = blog_data.get("read_time") or "5 min read"

    conn = get_db()
    cursor = conn.cursor()

    # Check if slug exists to update or insert
    cursor.execute("SELECT blog_id FROM blog_metadata WHERE slug = ?", (slug,))
    existing = cursor.fetchone()

    if existing:
        b_id = existing["blog_id"]
        cursor.execute("""
            UPDATE blogs SET title = ?, content = ?, status = ? WHERE id = ?
        """, (title, content, status, b_id))
        cursor.execute("""
            UPDATE blog_metadata 
            SET seo_title = ?, meta_description = ?, category = ?, tags = ?, featured_image = ?, read_time = ?, author_name = ?
            WHERE blog_id = ?
        """, (seo_title, meta_description, category, tags_str, featured_image, read_time, author_name, b_id))
    else:
        cursor.execute("""
            INSERT INTO blogs (title, content, status) VALUES (?, ?, ?)
        """, (title, content, status))
        b_id = cursor.lastrowid
        cursor.execute("""
            INSERT INTO blog_metadata (blog_id, slug, seo_title, meta_description, category, tags, featured_image, read_time, author_name)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (b_id, slug, seo_title, meta_description, category, tags_str, featured_image, read_time, author_name))

    conn.commit()
    conn.close()

    # Automatically sync to src/data/posts.json so Git-based deployments are instantly updated
    try:
        posts_json_path = os.path.join(os.path.dirname(__file__), "src", "data", "posts.json")
        os.makedirs(os.path.dirname(posts_json_path), exist_ok=True)
        all_posts = list_blogs()
        with open(posts_json_path, "w", encoding="utf-8") as f:
            json.dump(all_posts, f, indent=2)
        print(f"[SYNC] Updated {len(all_posts)} posts in {posts_json_path}")
    except Exception as sync_err:
        print(f"[SYNC WARNING] Could not update posts.json: {sync_err}")

    print(f"[PUBLISH] Webhook received and saved blog: '{title}' (slug: {slug}, id: {b_id})")

    return {
        "status": "success",
        "message": "Blog published successfully",
        "id": b_id,
        "blog_id": b_id,
        "slug": slug,
        "url": f"/blog/{slug}"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("blog_api:app", host="0.0.0.0", port=8000, reload=True)
