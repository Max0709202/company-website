import { CardGrid, ClosingCTA, MediaBand, PageHero, Section } from "@/components/Section";
import { buildCategories, capabilityCards, demos, processSteps, stack, videos } from "@/lib/content";

export const metadata = {
  title: "What We Build",
  description:
    "maxIEI services across AI automation, SaaS, web apps, portals, APIs, data engineering, cloud, security, and long-term product growth."
};

export default function WhatWeBuildPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we build"
        title="Software systems built for real business workflows."
        description="maxIEI builds AI applications, SaaS platforms, portals, APIs, dashboards, automation, data systems, cloud infrastructure, and the security foundations underneath all of it."
        ctas={["Start a project", "View the Demo Lab"]}
        tags={["AI", "SaaS", "Portals", "APIs", "Data", "Cloud", "Security", "Design"]}
        video={videos.appDesignReview}
        videoLabel="Product team reviewing application design"
      />

      <Section
        num="01"
        kicker="Service map"
        title="Eight categories, one architecture"
        intro="Most engagements touch three or four of these. We scope the whole system rather than selling a single feature and letting the integration become your problem."
      >
        <CardGrid cards={buildCategories} columns={2} media />
      </Section>

      <MediaBand
        video={videos.aiCoding}
        kicker="Excellence"
        title="Every build is reviewed before it ships."
        text="Architecture review, code review, security review, and an evaluation pass on any AI component. The standard is the same regardless of project size."
      />

      <Section
        alt
        num="02"
        kicker="Featured systems"
        title="Systems we build most often"
        intro="Concrete examples of what a maxIEI engagement usually produces."
      >
        <CardGrid cards={capabilityCards} columns={3} media />
      </Section>

      <Section
        num="03"
        kicker="Demo Lab"
        title="See the thinking before you commit"
        intro="Working demos and blueprints that show what the architecture looks like ahead of a production build."
      >
        <CardGrid cards={demos.slice(0, 4)} columns={4} numbered />
      </Section>

      <Section
        alt
        num="04"
        kicker="Delivery"
        title="From workflow map to launch"
        intro="Each engagement moves through the same six-stage process, so you always know what is happening and what comes next."
      >
        <CardGrid cards={processSteps} columns={3} numbered />
      </Section>

      <Section
        num="05"
        kicker="Stack"
        title="Technology coverage"
        intro="Frontend, backend, AI, data, cloud, integrations, security, and automation."
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

      <ClosingCTA
        title="Not sure which of these you need?"
        text="Describe the problem instead of the solution. Mapping it to the right system is our job, and the first conversation costs nothing."
      />
    </main>
  );
}
