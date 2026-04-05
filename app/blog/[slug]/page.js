import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/site-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Ravi Chandera`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="background-layer background-grid" aria-hidden="true" />
      <div className="background-layer background-orb orb-left" aria-hidden="true" />
      <div className="background-layer background-orb orb-right" aria-hidden="true" />

      <article className="panel article-shell">
        <div className="article-head">
          <p className="eyebrow">{post.tag}</p>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <p className="article-summary">{post.summary}</p>
        </div>

        <div className="article-body">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="article-actions">
          <Link href="/blog" className="button button-secondary">
            Back to all posts
          </Link>
          <Link href="/" className="button button-primary">
            View portfolio
          </Link>
        </div>
      </article>
    </main>
  );
}
