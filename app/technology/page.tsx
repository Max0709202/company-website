import { ClosingCTA, PageHero, Section, Split } from "@/components/Section";
import { stack, videos } from "@/lib/content";

export const metadata = {
  title: "Technology",
  description:
    "The maxIEI technology stack for AI engineering, frontend, backend, databases, cloud, integrations, automation, and security."
};

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        title="Modern engineering tools, chosen for production."
        description="Technology serves the architecture, not the pitch deck: fast interfaces, reliable APIs, secure data, practical AI, connected tools, and deployment a team can actually maintain."
        ctas={["Discuss a technical project", "Explore what we build"]}
        tags={["React", "Next.js", "FastAPI", "Claude", "PostgreSQL", "AWS", "Docker", "RBAC"]}
        video={videos.circuitProcessor}
        videoLabel="High tech circuit board with processor"
      />

      <Section
        num="01"
        kicker="Stack"
        title="Technology by capability"
        intro="The goal is not to show logos. The goal is to show what maxIEI can engineer, and why each choice is on the list."
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

      <Section
        alt
        num="02"
        kicker="Selection criteria"
        title="How a tool earns a place here"
        intro="We are deliberately conservative about what enters the stack and deliberately aggressive about evaluating what could improve it."
      >
        <Split
          video="/videos/data-center-engineers.mp4"
          alt="Engineers working in a data center"
          kicker="Innovation with judgement"
          title="New does not automatically mean better."
          text="We evaluate emerging tools continuously and adopt them when they measurably improve reliability, cost, or delivery speed. Everything else stays in the lab until it earns its place."
          points={[
            "Proven in production, not just in a benchmark",
            "Maintainable by your team after handoff",
            "Model-agnostic AI design so providers can be swapped",
            "A documented exit path — no lock-in by accident"
          ]}
        />
      </Section>

      <ClosingCTA
        title="Want a technical opinion before you commit?"
        text="Bring your current stack and constraints. We will tell you what we would keep, what we would replace, and what we would not touch."
      />
    </main>
  );
}
