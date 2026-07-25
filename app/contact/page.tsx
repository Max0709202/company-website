import { Arrow, PageHero, Section } from "@/components/Section";
import { hq, team, videos } from "@/lib/content";

export const metadata = {
  title: "Start a Project",
  description:
    "Contact maxIEI for AI automation, SaaS development, API integration, dashboards, secure portals, and custom software projects."
};

const coverage = team.map((person) => `${person.flag} ${person.location.split(",")[1]?.trim()}`);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Project consultation"
        title="Tell us what you want to build, automate, or integrate."
        description="Share the workflow, the tools you already use, who needs access, and what is sensitive. We will come back with an honest technical direction — including whether we think you should build it at all."
        tags={["AI", "SaaS", "Dashboards", "Portals", "API integration", "Automation", "Security"]}
        video={videos.contactHero}
        videoLabel="Client consultation and project handoff"
      />

      <Section
        num="01"
        kicker="Consultation form"
        title="Start with the real project context"
        intro="These questions are the ones we would ask on a first call anyway. Answering them here means the first conversation starts somewhere useful."
      >
        <form className="form">
          <label>
            Name
            <input name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" />
          </label>
          <label>
            Company
            <input name="company" placeholder="Company or team" />
          </label>
          <label>
            Project type
            <select name="type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>AI automation</option>
              <option>SaaS development</option>
              <option>Web application</option>
              <option>API integration</option>
              <option>Dashboard or portal</option>
              <option>Security / secure development</option>
              <option>Maintenance / support</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full">
            What is currently manual, slow, risky, or disconnected?
            <textarea name="problem" rows={4} placeholder="Describe the workflow or software problem in plain language." />
          </label>
          <label>
            Current tools or systems
            <input name="tools" placeholder="CRM, Stripe, Google Sheets, help desk, database…" />
          </label>
          <label>
            Who will use the system?
            <input name="users" placeholder="Customers, admins, staff, partners, tenants…" />
          </label>
          <label>
            Sensitive data involved?
            <select name="sensitive" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Yes, likely</option>
              <option>No</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Timeline
            <select name="timeline" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>As soon as possible</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Planning for later</option>
            </select>
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Under $5,000</option>
              <option>$5,000–$15,000</option>
              <option>$15,000–$50,000</option>
              <option>$50,000+</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Main technical need
            <select name="need" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>AI</option>
              <option>SaaS</option>
              <option>Dashboard</option>
              <option>Portal</option>
              <option>API integration</option>
              <option>Automation</option>
              <option>Security</option>
            </select>
          </label>
          <label className="full">
            Project description
            <textarea name="description" rows={6} placeholder="Tell us what you want the system to do." />
          </label>
          <div className="full">
            <button className="btn btn-primary" type="submit">
              Request technical consultation <Arrow />
            </button>
          </div>
        </form>
      </Section>

      <Section
        alt
        num="02"
        kicker="What happens next"
        title="Three steps, no sales pipeline"
        intro="You will talk to engineers, not an account manager. If the fit is wrong, we will say so on the first call rather than the third."
      >
        <div className="grid g3">
          {[
            ["Within one business day", "We read the brief properly and reply with clarifying questions or a direct answer on fit."],
            ["First call", "A 45-minute technical conversation with the people who would actually run the project."],
            ["Written direction", "A short document covering the recommended architecture, scope, risks, and an honest estimate."]
          ].map(([title, text], i) => (
            <article className="card" key={title}>
              <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="statement" style={{ marginTop: "var(--gut)" }}>
          <span className="eyebrow mono" style={{ justifyContent: "center" }}>
            Coverage
          </span>
          <p className="statement-values" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", marginTop: 16 }}>
            {hq.label}
          </p>
          <blockquote>
            Headquarters in {hq.city} ({hq.timezone}), with engineers in {coverage.join(", ")}. Between us there is
            almost always someone awake.
          </blockquote>
        </div>
      </Section>
    </main>
  );
}
