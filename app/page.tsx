import Link from "next/link";
import { CardGrid, Section } from "@/components/Section";
import { blueprints, buildCategories, capabilityCards, demos, faqs, processSteps, stack } from "@/lib/content";

const problems = [
  "Manual workflows",
  "Disconnected tools",
  "Slow customer support",
  "No internal dashboard",
  "Repeated data entry",
  "Poor API integration",
  "Security concerns",
  "Fragile prototypes"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          suppressHydrationWarning
        >
          <source src="/videos/software-development-laptop.mp4" type="video/mp4" />
        </video>
        <div className="container hero-panel">
          <div className="eyebrow">AI automation · SaaS platforms · secure integrations</div>
          <h1>Build smarter software. Move faster.</h1>
          <p className="hero-copy">
            ReimeiTech creates AI-powered apps, SaaS platforms, and secure integrations for growing teams.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a Project
            </Link>
            <Link className="button button-secondary" href="/what-we-build">
              Explore Capabilities
            </Link>
          </div>
          <div className="proof-strip">
            {["Next.js", "FastAPI", "OpenAI", "Claude", "PostgreSQL", "AWS", "Docker", "Secure APIs"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Section
        kicker="Problem to product"
        title="Turn messy operations into working software systems."
        intro="The site leads with ReimeiTech's technical strength: practical architecture, AI workflows, APIs, dashboards, portals, and secure delivery."
      >
        <div className="grid grid-4">
          {problems.map((problem) => (
            <article className="card" key={problem}>
              <h3>{problem}</h3>
              <p>Map the friction, design the system, connect the tools, and give the team a cleaner way to work.</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        alt
        kicker="Technical capability"
        title="What ReimeiTech builds"
        intro="AI, SaaS, APIs, cloud, data, automation, portals, dashboards, and admin systems belong in one coherent architecture."
      >
        <CardGrid cards={capabilityCards} />
      </Section>

      <Section
        kicker="Systems"
        title="Services organized around buildable systems."
        intro="The source material asks for deeper service coverage, so the service hub is built as a multi-category map rather than a thin list."
      >
        <CardGrid cards={buildCategories} columns={2} />
      </Section>

      <Section
        alt
        kicker="Before and after"
        title="Manual operations vs automated systems"
        intro="A direct explanation of value for teams with spreadsheets, disconnected apps, repeated handoffs, and unclear visibility."
      >
        <div className="before-after">
          <article className="card">
            <h3>Before ReimeiTech</h3>
            <ul>
              <li>Manual spreadsheets and repeated copy-paste work</li>
              <li>Disconnected apps and no shared operational dashboard</li>
              <li>Slow customer response and unclear process ownership</li>
              <li>Security risk from informal access and unmanaged files</li>
            </ul>
          </article>
          <article className="card">
            <h3>After ReimeiTech</h3>
            <ul>
              <li>AI-assisted workflows and connected APIs</li>
              <li>Central dashboards, portals, reports, and admin controls</li>
              <li>Cleaner handoffs, notifications, audit logs, and permissions</li>
              <li>Production-ready software that can keep improving</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        kicker="Architecture thinking"
        title="Built like a real system, not a fragile prototype."
        intro="Every project is designed around clean data flow, secure access, reliable APIs, maintainable interfaces, and measurable business workflows."
      >
        <div className="diagram">
          {[
            ["Business Inputs", "Documents, CRM records, emails, forms, payments, spreadsheets, databases"],
            ["Integration Layer", "APIs, webhooks, data sync, validation, retry logic, monitoring"],
            ["AI / Automation Layer", "RAG, agents, classification, summarization, workflow rules, human approvals"],
            ["Business Application", "Dashboard, portal, SaaS app, admin panel, reporting interface"],
            ["Security & Monitoring", "Auth, RBAC, encryption, audit logs, alerts, backups, admin controls"]
          ].map(([title, text]) => (
            <div className="diagram-step" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section alt kicker="Demo Lab" title="Proof of thinking, not empty claims." intro="Internal demos show how ReimeiTech connects AI, data, APIs, dashboards, admin tools, and secure workflows.">
        <CardGrid cards={demos.slice(0, 6)} columns={3} />
      </Section>

      <Section kicker="Blueprints" title="How we solve real business problems" intro="When public client claims are unavailable, solution blueprints show practical architecture without inventing fake results.">
        <CardGrid cards={blueprints} />
      </Section>

      <Section alt kicker="Reimei BuildLoop" title="Map. Design. Build. Validate. Launch. Improve." intro="A clear delivery process helps clients understand how ideas become reliable systems.">
        <CardGrid cards={processSteps} columns={3} />
      </Section>

      <Section kicker="Core technology" title="Modern stack, explained by purpose." intro="The stack is shown as capability proof, not a logo wall.">
        <div className="grid grid-4">
          {stack.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt kicker="FAQ" title="Common project questions" intro="Practical answers for teams planning AI, SaaS, dashboards, portals, APIs, or automation.">
        <CardGrid cards={faqs} columns={2} />
      </Section>

      <Section kicker="Start" title="Have a workflow, product idea, or software problem?" intro="Tell us what is manual, slow, disconnected, sensitive, or ready to become a reliable system.">
        <Link className="button button-primary" href="/contact">
          Request Technical Consultation
        </Link>
      </Section>
    </main>
  );
}
