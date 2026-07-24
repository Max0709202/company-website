import { CardGrid, PageHero, Section } from "@/components/Section";
import { buildCategories, capabilityCards, demos, processSteps, stack } from "@/lib/content";

export const metadata = {
  title: "What We Build",
  description: "Explore ReimeiTech services across AI automation, SaaS, web apps, portals, APIs, data, cloud, security, product design, and growth."
};

export default function WhatWeBuildPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Build"
        title="Software systems built for real business workflows."
        description="ReimeiTech builds AI apps, SaaS platforms, portals, APIs, dashboards, automation, data systems, cloud infrastructure, and secure software foundations."
        ctas={["Start a Project", "View Demo Lab"]}
        tags={["AI", "SaaS", "Portals", "APIs", "Data", "Cloud", "Security", "Design", "Support"]}
      />
      <Section kicker="Categories" title="A complete service hub" intro="The service inventory is grouped into categories so clients can find the system they actually need.">
        <CardGrid cards={buildCategories} columns={2} />
      </Section>
      <Section alt kicker="Featured systems" title="Common systems we can build" intro="Examples that make technical capability concrete.">
        <CardGrid cards={capabilityCards} />
      </Section>
      <Section kicker="Demo examples" title="See the thinking behind the build" intro="Demos and blueprints show what the architecture can look like before a production build.">
        <CardGrid cards={demos.slice(0, 4)} columns={4} />
      </Section>
      <Section alt kicker="How we build" title="From workflow map to launch" intro="Each engagement moves through a practical engineering process.">
        <CardGrid cards={processSteps} />
      </Section>
      <Section kicker="Stack" title="Technology coverage" intro="Frontend, backend, AI, data, cloud, integrations, security, and automation.">
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
