import Link from "next/link";
import Image from "next/image";
import type { Card, ServicePage } from "@/lib/content";
import { marqueeItems } from "@/lib/content";

/* ---------- icon ---------- */

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- hero video routing ---------- */

type HeroVideo = { src: string; label: string };

const heroVideos = {
  ai: { src: "/videos/programmer-workstation.mp4", label: "Developer workstation running AI systems" },
  appDesign: { src: "/videos/app-design-review.mp4", label: "Product team reviewing application design" },
  data: { src: "/videos/data-reporting-desk.mp4", label: "Business data reports and analytics" },
  infrastructure: { src: "/videos/data-center-engineers.mp4", label: "Engineers working in a data center" },
  planning: { src: "/videos/product-planning-meeting.mp4", label: "Team planning a technical product build" },
  teamwork: { src: "/videos/team-laptop-help.mp4", label: "Team collaborating around a laptop" },
  contact: { src: "/videos/project-handshake.mp4", label: "Client consultation and project handoff" },
  software: { src: "/videos/software-development-laptop.mp4", label: "Software engineer working on a laptop" }
} satisfies Record<string, HeroVideo>;

function selectHeroVideo(eyebrow: string, title: string): HeroVideo {
  const text = `${eyebrow} ${title}`.toLowerCase();

  if (text.includes("contact") || text.includes("consultation") || text.includes("project")) return heroVideos.contact;
  if (text.includes("company") || text.includes("team") || text.includes("about")) return heroVideos.teamwork;
  if (text.includes("technology") || text.includes("cloud") || text.includes("security") || text.includes("api"))
    return heroVideos.infrastructure;
  if (text.includes("report") || text.includes("dashboard") || text.includes("data") || text.includes("blueprint"))
    return heroVideos.data;
  if (text.includes("process") || text.includes("sprint") || text.includes("case")) return heroVideos.planning;
  if (text.includes("saas") || text.includes("product") || text.includes("app") || text.includes("portal"))
    return heroVideos.appDesign;
  if (text.includes("ai") || text.includes("automation") || text.includes("rag") || text.includes("document"))
    return heroVideos.ai;
  if (text.includes("demo") || text.includes("what we build") || text.includes("services")) return heroVideos.teamwork;

  return heroVideos.software;
}

/* ---------- section shell ---------- */

export function Section({
  num,
  kicker,
  title,
  intro,
  children,
  alt = false,
  id
}: {
  num?: string;
  kicker?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section className={`sec${alt ? " sec-alt" : ""}`} id={id}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            {num || kicker ? (
              <span className="sec-num">
                {num ? <b>{num}</b> : null}
                {num && kicker ? " — " : null}
                {kicker}
              </span>
            ) : null}
            <h2 className="sec-title">{title}</h2>
          </div>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- cards ---------- */

export function CardGrid({
  cards,
  columns = 3,
  media = false,
  numbered = false
}: {
  cards: Card[];
  columns?: 2 | 3 | 4;
  media?: boolean;
  numbered?: boolean;
}) {
  return (
    <div className={`grid g${columns}`}>
      {cards.map((card, i) => {
        const body = (
          <article className="card">
            {media && card.image ? (
              <div className="card-media">
                <Image src={card.image} alt="" width={800} height={500} sizes="(max-width: 620px) 100vw, 33vw" />
              </div>
            ) : null}
            {numbered ? <span className="card-index">{String(i + 1).padStart(2, "0")}</span> : null}
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.items ? (
              <ul className="pills">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {card.href ? (
              <span className="card-more">
                Explore <Arrow />
              </span>
            ) : null}
          </article>
        );

        return card.href ? (
          <Link className="card-link" key={card.title} href={card.href}>
            {body}
          </Link>
        ) : (
          <div key={card.title}>{body}</div>
        );
      })}
    </div>
  );
}

/* ---------- marquee ---------- */

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- full-bleed media band ---------- */

export function MediaBand({
  video,
  image,
  kicker,
  title,
  text,
  children
}: {
  video?: string;
  image?: string;
  kicker: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="band">
      {video ? (
        <video className="band-media" autoPlay muted loop playsInline suppressHydrationWarning>
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <Image className="band-media" src={image} alt="" fill sizes="100vw" />
      ) : null}
      <div className="wrap">
        <div className="band-inner">
          <span className="eyebrow mono">{kicker}</span>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- split media + copy ---------- */

export function Split({
  image,
  video,
  alt = "",
  kicker,
  title,
  text,
  points,
  reverse = false
}: {
  image?: string;
  video?: string;
  alt?: string;
  kicker: string;
  title: string;
  text: string;
  points?: string[];
  reverse?: boolean;
}) {
  return (
    <div className={`split${reverse ? " reverse" : ""}`}>
      <div className="split-media">
        {video ? (
          <video autoPlay muted loop playsInline suppressHydrationWarning aria-label={alt}>
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <Image src={image} alt={alt} width={1000} height={750} sizes="(max-width: 900px) 100vw, 50vw" />
        ) : null}
      </div>
      <div className="split-body">
        <span className="eyebrow mono">{kicker}</span>
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        {points ? (
          <ul className="checks">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

/* ---------- page hero ---------- */

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
    <section className="phero">
      <video className="hero-media" autoPlay muted loop playsInline suppressHydrationWarning aria-label={video.label}>
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="wrap">
        <span className="eyebrow mono">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {ctas ? (
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              {ctas[0]} <Arrow />
            </Link>
            {ctas[1] ? (
              <Link className="btn btn-ghost" href="/what-we-build">
                {ctas[1]}
              </Link>
            ) : null}
          </div>
        ) : null}
        {tags ? (
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- closing CTA ---------- */

export function ClosingCTA({
  kicker = "Start here",
  title,
  text,
  label = "Request a technical consultation"
}: {
  kicker?: string;
  title: string;
  text: string;
  label?: string;
}) {
  return (
    <section className="cta">
      <div className="wrap">
        <span className="eyebrow mono" style={{ justifyContent: "center" }}>
          {kicker}
        </span>
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact">
            {label} <Arrow />
          </Link>
          <Link className="btn btn-ghost" href="/what-we-build">
            See what we build
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- service detail page ---------- */

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
      <Section num="01" kicker="Scope" title="What this engagement covers" intro="Each area below is scoped, estimated, and reviewed before a single line of production code is written.">
        <div className="svc-list">
          {page.sections.map((section) => (
            <article className="svc-item" key={section.title}>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section
        alt
        num="02"
        kicker="Related"
        title={page.category.includes("SaaS") ? "Related SaaS & product services" : "Related AI & automation services"}
        intro="Most engagements need more than one of these. We scope the system, not the feature."
      >
        <div className="tags">
          {page.related.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>
      <ClosingCTA
        title="Ready to scope this properly?"
        text="Tell us what is manual, slow, disconnected, or risky today. We will map it into an architecture you can actually build."
      />
    </main>
  );
}
