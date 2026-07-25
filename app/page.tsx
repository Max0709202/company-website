import Link from "next/link";
import Image from "next/image";
import { Arrow, CardGrid, ClosingCTA, Marquee, MediaBand, Section, Split } from "@/components/Section";
import {
  architecture,
  blueprints,
  brand,
  buildCategories,
  demos,
  faqs,
  hq,
  processSteps,
  stack,
  values,
  videos
} from "@/lib/content";

const heroStats: [string, string][] = [
  ["7", "countries, one standard"],
  ["16h", "engineering coverage daily"],
  ["100%", "senior engineers"],
  ["3", "non-negotiable values"]
];

const before = [
  "Manual spreadsheets and repeated copy-paste work",
  "Disconnected apps with no shared operational view",
  "Slow customer response and unclear process ownership",
  "Security risk from informal access and unmanaged files"
];

const after = [
  "AI-assisted workflows and connected APIs",
  "Central dashboards, portals, reports, and admin controls",
  "Clean handoffs, notifications, audit logs, and permissions",
  "Production software that keeps improving after launch"
];

export default function HomePage() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <video className="hero-media" autoPlay muted loop playsInline suppressHydrationWarning>
          <source src={videos.homeHero} type="video/mp4" />
        </video>
        <div className="hero-grid" />
        <div className="wrap">
          <span className="eyebrow mono">International AI software company · {hq.label}</span>
          <h1 className="display hero-title">
            Trusted AI systems, <em>engineered to last.</em>
          </h1>
          <p className="lead hero-sub">
            {brand.name} builds production-grade AI, SaaS, and integration systems for teams that need software to be
            reliable, secure, and honest about what it does. Headquartered in {hq.city}. Engineered across seven
            countries.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              Start a project <Arrow />
            </Link>
            <Link className="btn btn-ghost" href="/what-we-build">
              Explore capabilities
            </Link>
          </div>
          <div className="hero-meta">
            {heroStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span className="mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------- 01 values ---------- */}
      <Section
        num="01"
        kicker="How we operate"
        title="Three values. No exceptions."
        intro="maxIEI is named for them. Integrity, Excellence, and Innovation are not a poster in a hallway — they are the criteria every engagement is measured against."
        id="values"
      >
        <div className="values">
          {values.map((value, i) => (
            <article className="value" key={value.id} style={{ ["--hue" as string]: value.hue }}>
              <div className="value-media">
                <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
                <Image src={value.image} alt="" width={900} height={600} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="value-body">
                <h3>{value.name}</h3>
                <strong style={{ fontSize: "1rem", letterSpacing: "-0.02em" }}>{value.headline}</strong>
                <p>{value.text}</p>
                <ul className="pills">
                  {value.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="statement" style={{ marginTop: "var(--gut)" }}>
          <p className="statement-values">
            <span>Integrity.</span> <span>Excellence.</span> <span>Innovation.</span>
          </p>
          <blockquote>{brand.promise}</blockquote>
        </div>
      </Section>

      {/* ---------- global team band ---------- */}
      <MediaBand
        video={videos.homeTeamBand}
        kicker="One team, seven countries"
        title="An American CEO, a Japanese CTO, and engineers on four continents."
        text="Distributed is not a compromise here — it is the design. Work moves from Tokyo to Kuala Lumpur to Manila to Lyon to São Paulo to Austin, which means your project is rarely asleep and never dependent on one person being awake."
      >
        <div className="hero-actions">
          <Link className="btn btn-ghost" href="/company#team">
            Meet the team <Arrow />
          </Link>
        </div>
      </MediaBand>

      {/* ---------- 02 what we build ---------- */}
      <Section
        num="02"
        kicker="Capability"
        title="What we build"
        intro="AI, SaaS, APIs, cloud, data, automation, portals, dashboards, and admin systems — designed as one coherent architecture rather than a pile of disconnected features."
      >
        <CardGrid cards={buildCategories.slice(0, 6)} columns={3} media />
        <div className="hero-actions" style={{ marginBottom: 0 }}>
          <Link className="btn btn-ghost" href="/what-we-build">
            View the full service map <Arrow />
          </Link>
        </div>
      </Section>

      {/* ---------- 03 architecture ---------- */}
      <Section
        alt
        num="03"
        kicker="Excellence in practice"
        title="Built like a system, not a prototype."
        intro="Every project is designed around clean data flow, secure access, reliable APIs, maintainable interfaces, and measurable business workflows."
      >
        <div style={{ display: "grid", gap: "var(--gut)" }}>
          <Split
            image="/images/office-interior.jpg"
            alt="Engineering workspace"
            kicker="Architecture first"
            title="The boring decisions are the ones that keep working."
            text="Anyone can demo an AI feature. Keeping it correct, observable, and safe eighteen months later is engineering. We design for the second one."
            points={[
              "Data model and permission boundaries agreed before build",
              "Every integration handles retries, validation, and failure states",
              "AI outputs measured against an evaluation set, not vibes",
              "Documented handoff so your team is never locked in"
            ]}
          />
          <div className="flow">
            {architecture.map(([title, text], i) => (
              <div className="flow-row" key={title}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <span className="desc">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- 04 before / after ---------- */}
      <Section
        num="04"
        kicker="Outcome"
        title="Manual operations vs. engineered systems"
        intro="A direct comparison for teams currently running on spreadsheets, disconnected apps, repeated handoffs, and unclear visibility."
      >
        <div className="compare">
          <div className="compare-before">
            <h3>Before</h3>
            <ul>
              {before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-after">
            <h3>After maxIEI</h3>
            <ul>
              {after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------- demo lab band ---------- */}
      <MediaBand
        video={videos.homeInnovationBand}
        kicker="Innovation in practice"
        title="Proof of thinking, not marketing claims."
        text="Our Demo Lab holds working internal builds that show how we connect AI, data, APIs, dashboards, admin tools, and secure workflows — before you commit to a production engagement."
      >
        <div className="hero-actions">
          <Link className="btn btn-ghost" href="/demo-lab">
            Open the Demo Lab <Arrow />
          </Link>
        </div>
      </MediaBand>

      {/* ---------- 05 demos ---------- */}
      <Section
        num="05"
        kicker="Demo Lab"
        title="Systems we have already built for ourselves"
        intro="Each demo is a real architecture we can adapt, not a screenshot. They exist so you can judge our engineering before signing anything."
      >
        <CardGrid cards={demos.slice(0, 6)} columns={3} numbered />
      </Section>

      {/* ---------- 06 blueprints ---------- */}
      <Section
        alt
        num="06"
        kicker="Blueprints"
        title="How we solve real business problems"
        intro="Where client work is under NDA, we publish the architecture instead of inventing testimonials. Integrity applies to our own marketing too."
      >
        <CardGrid cards={blueprints} columns={3} media />
      </Section>

      {/* ---------- 07 process ---------- */}
      <Section
        num="07"
        kicker="Delivery"
        title="Map. Design. Build. Validate. Launch. Improve."
        intro="A predictable six-stage process so you always know what is happening, what is next, and what it costs."
      >
        <CardGrid cards={processSteps} columns={3} numbered />
      </Section>

      {/* ---------- HQ split ---------- */}
      <Section
        alt
        num="08"
        kicker="Headquarters"
        title={`${hq.city}, ${hq.state}`}
        intro={`Our legal and commercial home is ${hq.label}. Contracts, client relationships, and accountability sit here — engineering spans the rest of the world.`}
        id="hq-preview"
      >
        <Split
          reverse
          image="/images/hq-austin.jpg"
          alt={`${hq.city} skyline at dusk`}
          kicker={hq.timezone}
          title="One accountable home base."
          text="A distributed team still needs a single place where responsibility stops. For us that is Austin — one entity, one contract, one point of escalation, regardless of which timezone wrote the code."
          points={[
            `${hq.district}`,
            "US entity, US contracts, US-based client ownership",
            "Engineering coverage from Tokyo through to Austin",
            "Escalation path that does not depend on office hours"
          ]}
        />
        <div className="hero-actions" style={{ marginBottom: 0 }}>
          <Link className="btn btn-ghost" href="/company#hq">
            See the map and company profile <Arrow />
          </Link>
        </div>
      </Section>

      {/* ---------- 09 stack ---------- */}
      <Section
        num="09"
        kicker="Technology"
        title="Modern stack, chosen by purpose."
        intro="Not a logo wall. Each of these is here because it solves a specific class of problem well."
      >
        <div className="grid g4">
          {stack.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------- 10 faq ---------- */}
      <Section
        alt
        num="10"
        kicker="FAQ"
        title="Common project questions"
        intro="Practical answers for teams planning AI, SaaS, dashboards, portals, APIs, or automation work."
      >
        <CardGrid cards={faqs} columns={2} />
      </Section>

      <ClosingCTA
        title="Have a workflow that should be software?"
        text="Tell us what is manual, slow, disconnected, sensitive, or ready to scale. We will tell you honestly whether it is worth building — and what it would take."
      />
    </main>
  );
}
