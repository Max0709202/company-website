import { PageHero, Section } from "@/components/Section";
import { stack } from "@/lib/content";

export const metadata = {
  title: "Technology",
  description: "ReimeiTech technology stack for AI engineering, frontend, backend, databases, cloud, integrations, automation, and security."
};

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        title="Modern engineering tools chosen for production systems."
        description="ReimeiTech uses technology to support the architecture: fast interfaces, reliable APIs, secure data, practical AI, connected tools, and maintainable deployment."
        ctas={["Discuss a Technical Project", "Explore What We Build"]}
        tags={["React", "Next.js", "FastAPI", "OpenAI", "PostgreSQL", "AWS", "Docker", "RBAC"]}
      />
      <Section kicker="Stack" title="Technology by capability" intro="The goal is not to show logos. The goal is to show what ReimeiTech can engineer.">
        <div className="grid grid-4">
          {stack.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
