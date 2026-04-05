import Image from "next/image";
import Link from "next/link";
import {
  blogPosts,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data/site-content";

function buildCurvePath(samples, pointAt) {
  let path = "";

  for (let index = 0; index <= samples; index += 1) {
    const ratio = index / samples;
    const [x, y] = pointAt(ratio);
    path += `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)} `;
  }

  return path.trim();
}

function MathematicsBackdrop() {
  const orbitA = buildCurvePath(260, (ratio) => {
    const angle = ratio * Math.PI * 2;
    return [
      790 + 315 * Math.sin(3 * angle + Math.PI / 5),
      320 + 210 * Math.sin(4 * angle),
    ];
  });

  const orbitB = buildCurvePath(260, (ratio) => {
    const angle = ratio * Math.PI * 2;
    return [
      805 + 270 * Math.cos(5 * angle + Math.PI / 8),
      340 + 170 * Math.sin(2 * angle + Math.PI / 3),
    ];
  });

  const manifold = buildCurvePath(240, (ratio) => {
    const angle = ratio * Math.PI * 2;
    return [
      230 + ratio * 1020,
      760
        - 130 * Math.sin(angle * 1.5 + Math.PI / 7)
        - 52 * Math.cos(angle * 4.5)
        - 24 * Math.sin(angle * 9),
    ];
  });

  const nodes = Array.from({ length: 8 }, (_, index) => {
    const angle = (index / 8) * Math.PI * 2;

    return {
      cx: 790 + 250 * Math.cos(angle),
      cy: 320 + 165 * Math.sin(angle),
    };
  });

  return (
    <div className="background-layer background-geometry" aria-hidden="true">
      <svg
        className="background-plot"
        viewBox="0 0 1600 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="field-gradient" x1="220" y1="150" x2="1240" y2="880">
            <stop offset="0%" stopColor="rgba(53, 95, 120, 0.34)" />
            <stop offset="52%" stopColor="rgba(191, 92, 58, 0.18)" />
            <stop offset="100%" stopColor="rgba(22, 34, 41, 0.02)" />
          </linearGradient>
          <linearGradient id="curve-gradient" x1="520" y1="180" x2="1040" y2="760">
            <stop offset="0%" stopColor="#d76845" />
            <stop offset="100%" stopColor="#2f5b72" />
          </linearGradient>
        </defs>

        <g className="plot-grid">
          {Array.from({ length: 8 }, (_, index) => (
            <line
              key={`vertical-${index}`}
              x1={170 + index * 170}
              y1="70"
              x2={170 + index * 170}
              y2="1030"
            />
          ))}
          {Array.from({ length: 6 }, (_, index) => (
            <line
              key={`horizontal-${index}`}
              x1="90"
              y1={160 + index * 150}
              x2="1510"
              y2={160 + index * 150}
            />
          ))}
        </g>

        <ellipse className="plot-halo" cx="810" cy="330" rx="460" ry="300" />
        <circle className="plot-ring" cx="790" cy="320" r="122" />
        <circle className="plot-ring" cx="790" cy="320" r="196" />
        <circle className="plot-ring" cx="790" cy="320" r="284" />

        <path className="plot-flow flow-primary" d={orbitA} />
        <path className="plot-flow flow-secondary" d={orbitB} />
        <path className="plot-flow flow-manifold" d={manifold} />

        <g className="plot-axis">
          <line x1="790" y1="60" x2="790" y2="980" />
          <line x1="120" y1="320" x2="1480" y2="320" />
        </g>

        <g className="plot-nodes">
          {nodes.map((node, index) => (
            <circle key={index} cx={node.cx} cy={node.cy} r="7" />
          ))}
        </g>

        <path
          className="plot-density"
          d="M 1060 180 C 1220 240 1310 410 1290 600 C 1265 760 1160 870 1015 915"
        />
        <path
          className="plot-density"
          d="M 510 170 C 370 250 295 400 305 590 C 315 730 410 865 540 920"
        />
      </svg>
    </div>
  );
}

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

function SignalCard() {
  const equations = [
    {
      label: "Latent map",
      value: "phi(t) = [sin(3t + pi/5), sin(4t)]",
    },
    {
      label: "Retrieval score",
      value: "argmax P(z|x, c) under latency < 220ms",
    },
    {
      label: "Stability band",
      value: "||Delta y|| <= epsilon with sparse control",
    },
  ];

  const metrics = [
    "Phase space tuned for signal over ornament",
    "Topology inspired by coupled oscillators",
    "Visual density balanced for readability",
  ];

  const phaseA = buildCurvePath(180, (ratio) => {
    const angle = ratio * Math.PI * 2;
    return [
      160 + 88 * Math.sin(3 * angle + Math.PI / 6),
      104 + 52 * Math.sin(4 * angle),
    ];
  });

  const phaseB = buildCurvePath(180, (ratio) => {
    const angle = ratio * Math.PI * 2;
    return [
      160 + 76 * Math.cos(5 * angle + Math.PI / 8),
      104 + 46 * Math.sin(2 * angle + Math.PI / 3),
    ];
  });

  return (
    <article className="panel signal-card">
      <div className="signal-card-head">
        <p>Mathematical surface</p>
        <span>Structured, not decorative</span>
      </div>

      <svg
        className="signal-diagram"
        viewBox="0 0 320 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="signal-diagram-grid">
          {Array.from({ length: 5 }, (_, index) => (
            <line
              key={`signal-v-${index}`}
              x1={48 + index * 56}
              y1="28"
              x2={48 + index * 56}
              y2="182"
            />
          ))}
          {Array.from({ length: 4 }, (_, index) => (
            <line
              key={`signal-h-${index}`}
              x1="36"
              y1={46 + index * 36}
              x2="284"
              y2={46 + index * 36}
            />
          ))}
        </g>
        <circle className="signal-diagram-ring" cx="160" cy="104" r="72" />
        <circle className="signal-diagram-ring" cx="160" cy="104" r="104" />
        <path className="signal-diagram-path primary" d={phaseA} />
        <path className="signal-diagram-path secondary" d={phaseB} />
        <line className="signal-diagram-axis" x1="160" y1="20" x2="160" y2="188" />
        <line className="signal-diagram-axis" x1="28" y1="104" x2="292" y2="104" />
        <circle className="signal-diagram-node" cx="224" cy="76" r="5" />
        <circle className="signal-diagram-node" cx="98" cy="138" r="5" />
      </svg>

      <div className="signal-card-grid">
        {equations.map((equation) => (
          <div key={equation.label} className="signal-equation">
            <strong>{equation.label}</strong>
            <code>{equation.value}</code>
          </div>
        ))}
      </div>

      <ul className="signal-metrics">
        {metrics.map((metric) => (
          <li key={metric}>{metric}</li>
        ))}
      </ul>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="background-layer background-grid" aria-hidden="true" />
      <div className="background-layer background-orb orb-left" aria-hidden="true" />
      <div className="background-layer background-orb orb-right" aria-hidden="true" />
      <MathematicsBackdrop />

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

          <div className="hero-insight-grid">
            <div className="highlight-panel">
              <p>Selected impact</p>
              <ul>
                {profile.quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>

            <SignalCard />
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
