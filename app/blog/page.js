import Link from "next/link";
import { blogPosts } from "../../data/site-content";

export const metadata = {
  title: "Blog | Ravi Chandera",
  description:
    "Writing by Ravi Chandera on agentic systems, LLM APIs, evaluation, and production AI engineering.",
};

export default function BlogPage() {
  return (
    <main className="page-shell">
      <div className="background-layer background-grid" aria-hidden="true" />
      <div className="background-layer background-orb orb-left" aria-hidden="true" />
      <div className="background-layer background-orb orb-right" aria-hidden="true" />
      <section className="panel blog-page-hero">
        <p className="eyebrow">Blog</p>
        <h1>Notes on shipping AI systems responsibly</h1>
        <p>
          Essays on retrieval, evaluation, orchestration, and the engineering
          habits that make model-driven products usable in the real world.
        </p>
        <Link href="/" className="button button-secondary">
          Back to portfolio
        </Link>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <article className="panel blog-list-item" key={post.slug}>
            <div className="blog-card-meta">
              <span>{post.tag}</span>
              <span>{post.readTime}</span>
            </div>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <div className="blog-card-footer">
              <time>{post.date}</time>
              <Link href={`/blog/${post.slug}`}>Open post</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
