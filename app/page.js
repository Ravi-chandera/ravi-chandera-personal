import Image from "next/image";
import Link from "next/link";
import ConstellationBackground from "../components/constellation-background";
import {
  blogPosts,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data/site-content";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <span>{post.tag}</span>
        <span>{post.readTime}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <div className="blog-card-footer">
        <time>{post.date}</time>
        <Link href={`/blog/${post.slug}`}>Read article</Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="background-layer background-orb orb-left" aria-hidden="true" />
      <div className="background-layer background-orb orb-right" aria-hidden="true" />
      <ConstellationBackground />

      <section className="hero panel">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-intro">{profile.hero.intro}</p>
          <p className="hero-summary">{profile.hero.summary}</p>

          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="button button-primary">
              Contact Me
            </a>
            <Link href="/blog" className="button button-secondary">
              Visit Blog
            </Link>
          </div>

          <dl className="contact-grid">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  ravi-chandera
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  Ravi-chandera
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <Image
              src="/ravi-chandera.jpg"
              alt="Portrait of Ravi Chandera"
              width={4032}
              height={2268}
              priority
            />
          </div>

          <div className="highlight-panel">
            <p>Selected impact</p>
            <ul>
              {profile.quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-stack">
        <SectionTitle
          eyebrow="Experience"
          title="Applied AI work with measurable outcomes"
          description="I focus on production systems where model quality, retrieval design, and operational reliability matter at the same time."
        />

        {experience.map((item) => (
          <article className="panel timeline-card" key={item.company}>
            <div className="timeline-header">
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company} - {item.location}
                </p>
              </div>
              <span>{item.period}</span>
            </div>
            <ul className="bullet-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-stack">
        <SectionTitle
          eyebrow="Capabilities"
          title="Tools I use to ship"
          description="A mix of model engineering, backend development, and delivery infrastructure."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="panel skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <div className="section-stack">
          <SectionTitle
            eyebrow="Projects"
            title="Systems shaped by constraints"
            description="I like projects that need guardrails, evaluation discipline, and strong backend design."
          />
          <div className="stack-grid">
            {projects.map((project) => (
              <article className="panel project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="bullet-list compact">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="section-stack">
          <SectionTitle
            eyebrow="Education"
            title="Academic foundation"
            description="Formal training that grounded my transition into applied AI systems and model engineering."
          />
          <div className="stack-grid">
            {education.map((item) => (
              <article className="panel education-card" key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-stack">
        <SectionTitle
          eyebrow="Blog"
          title="Writing about AI systems, tooling, and delivery"
          description="A dedicated space for notes on retrieval, production model APIs, evaluation loops, and the engineering decisions behind them."
        />

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
