import Link from "next/link";
import type { Card, ServicePage } from "@/lib/content";

type HeroVideo = {
  src: string;
  label: string;
};

const heroVideos = {
  ai: {
    src: "/videos/programmer-workstation.mp4",
    label: "Developer workstation with code and AI systems"
  },
  appDesign: {
    src: "/videos/app-design-review.mp4",
    label: "Product team reviewing app software design"
  },
  data: {
    src: "/videos/data-reporting-desk.mp4",
    label: "Business data reports and analytics on a desk"
  },
  infrastructure: {
    src: "/videos/data-center-engineers.mp4",
    label: "Engineers working in a data center"
  },
  planning: {
    src: "/videos/product-planning-meeting.mp4",
    label: "Team planning a technical product build"
  },
  teamwork: {
    src: "/videos/team-laptop-help.mp4",
    label: "Team collaborating around a laptop"
  },
  contact: {
    src: "/videos/project-handshake.mp4",
    label: "Business consultation and project handoff"
  },
  software: {
    src: "/videos/software-development-laptop.mp4",
    label: "Software developer working on a laptop"
  }
} satisfies Record<string, HeroVideo>;

function selectHeroVideo(eyebrow: string, title: string): HeroVideo {
  const text = `${eyebrow} ${title}`.toLowerCase();

  if (text.includes("contact") || text.includes("consultation") || text.includes("project consultation")) {
    return heroVideos.contact;
  }

  if (text.includes("technology") || text.includes("cloud") || text.includes("security") || text.includes("api")) {
    return heroVideos.infrastructure;
  }

  if (text.includes("report") || text.includes("dashboard") || text.includes("data") || text.includes("fintech")) {
    return heroVideos.data;
  }

  if (text.includes("process") || text.includes("buildloop") || text.includes("sprint") || text.includes("case")) {
    return heroVideos.planning;
  }

  if (text.includes("saas") || text.includes("product") || text.includes("app") || text.includes("portal")) {
    return heroVideos.appDesign;
  }

  if (text.includes("ai") || text.includes("automation") || text.includes("rag") || text.includes("document")) {
    return heroVideos.ai;
  }

  if (text.includes("demo") || text.includes("what we build") || text.includes("services")) {
    return heroVideos.teamwork;
  }

  return heroVideos.software;
}

export function Section({
  kicker,
  title,
  intro,
  children,
  alt = false
}: {
  kicker?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="container">
        <div className="section-head">
          <div>
            {kicker ? <div className="kicker">{kicker}</div> : null}
            <h2>{title}</h2>
          </div>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function CardGrid({ cards, columns = 3 }: { cards: Card[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={`grid grid-${columns}`}>
      {cards.map((card) => {
        const body = (
          <article className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.items ? (
              <ul className="pill-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        );

        return card.href ? (
          <Link key={card.title} href={card.href} aria-label={card.title}>
            {body}
          </Link>
        ) : (
          <div key={card.title}>{body}</div>
        );
      })}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctas,
  tags
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctas?: string[];
  tags?: string[];
}) {
  const video = selectHeroVideo(eyebrow, title);

  return (
    <section className="page-hero">
      <video className="page-hero-video" autoPlay muted loop playsInline aria-label={video.label}>
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="hero-copy">{description}</p>
        {ctas ? (
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              {ctas[0]}
            </Link>
            {ctas[1] ? (
              <Link className="button button-secondary" href="/what-we-build">
                {ctas[1]}
              </Link>
            ) : null}
          </div>
        ) : null}
        {tags ? (
          <div className="proof-strip">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <main>
      <PageHero
        eyebrow={`${page.category} / ${page.eyebrow}`}
        title={page.title}
        description={page.description}
        ctas={page.ctas}
        tags={page.tags}
      />
      <section className="section">
        <div className="container numbered section-list">
          {page.sections.map((section) => (
            <article className="service-section card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
      <Section
        alt
        kicker="Related"
        title={page.category.includes("SaaS") ? "Related SaaS & Product Services" : "Related AI & Automation Services"}
        intro="Explore adjacent pages when the project needs a larger system than one isolated feature."
      >
        <div className="proof-strip">
          {page.related.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>
    </main>
  );
}
