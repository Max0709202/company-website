import { PageHero, Section } from "@/components/Section";

export const metadata = {
  title: "Start a Project",
  description: "Contact ReimeiTech for AI automation, SaaS development, API integration, dashboards, secure portals, and custom software projects."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Project Consultation"
        title="Tell us what you want to build, automate, or integrate."
        description="Share your current workflow, tools, business problem, software idea, users, sensitive data needs, timeline, and budget range. We will help identify the right technical direction."
        ctas={["Request Technical Consultation"]}
        tags={["AI", "SaaS", "Dashboard", "Portal", "API Integration", "Automation", "Security"]}
      />
      <Section kicker="Consultation form" title="Start with the real project context" intro="This structure follows the brief's diagnostic contact flow rather than a generic name-email-message form.">
        <form className="card form">
          <label>
            Name
            <input name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
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
              <option>AI Automation</option>
              <option>SaaS Development</option>
              <option>Web Application</option>
              <option>API Integration</option>
              <option>Dashboard or Portal</option>
              <option>Cybersecurity / Secure Development</option>
              <option>Maintenance / Support</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full">
            What is currently manual, slow, risky, or disconnected?
            <textarea name="problem" rows={4} placeholder="Describe the workflow or software problem." />
          </label>
          <label>
            Current tools or systems
            <input name="tools" placeholder="CRM, Stripe, Google Sheets, help desk, database..." />
          </label>
          <label>
            Who will use the system?
            <input name="users" placeholder="Customers, admins, staff, partners, tenants..." />
          </label>
          <label>
            Sensitive data?
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
              <option>1-3 months</option>
              <option>3-6 months</option>
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
              <option>$5,000-$15,000</option>
              <option>$15,000-$50,000</option>
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
            <button className="button button-primary" type="button">
              Request Technical Consultation
            </button>
          </div>
        </form>
      </Section>
    </main>
  );
}
