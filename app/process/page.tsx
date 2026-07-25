import { CardGrid, ClosingCTA, PageHero, Section, Split } from "@/components/Section";
import { architecture, processSteps, videos } from "@/lib/content";

export const metadata = {
  title: "Process",
  description:
    "The maxIEI BuildLoop: map, design, build, validate, launch, and improve production-ready software systems."
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="maxIEI BuildLoop"
        title="A predictable process for turning workflows into software."
        description="We map the problem, design the architecture, build the system, validate real workflows, launch securely, and keep improving based on how the software is actually used."
        ctas={["Start with a workflow map", "View capabilities"]}
        tags={["Discovery", "Architecture", "Development", "Testing", "Launch", "Support"]}
        video={videos.processHero}
        videoLabel="Team planning a technical product build"
      />

      <Section
        num="01"
        kicker="Process"
        title="Map. Design. Build. Validate. Launch. Improve."
        intro="Structured enough for serious platform work, flexible enough for MVPs, prototypes, integrations, and modernization projects."
      >
        <CardGrid cards={processSteps} columns={3} numbered />
      </Section>

      <Section
        alt
        num="02"
        kicker="What you get at each stage"
        title="No stage ends without something you can hold."
        intro="Every stage produces an artifact you own — a map, a spec, a running system, a test report, a deployment, a changelog. Progress is never a status update alone."
      >
        <Split
          video={videos.processSplit}
          alt="Team reviewing delivery milestones together"
          kicker="Integrity in delivery"
          title="Honest scoping, including the parts you will not like."
          text="If a request is a bad idea, too expensive for the value, or better solved by software you can buy off the shelf, we say so during scoping rather than after invoicing."
          points={[
            "Fixed scope and a written estimate before build starts",
            "Weekly demo of working software, not a progress percentage",
            "Change requests priced openly before they are accepted",
            "Full source, documentation, and infrastructure handed over"
          ]}
        />
      </Section>

      <Section
        num="03"
        kicker="Architecture"
        title="The layers every build passes through"
        intro="Whatever the domain, a maxIEI system is assembled from the same five layers. It is what makes the work reviewable and the handoff possible."
      >
        <div className="flow">
          {architecture.map(([title, text], i) => (
            <div className="flow-row" key={title}>
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <span className="desc">{text}</span>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCTA
        title="Start with the map, not the code."
        text="The first stage is a workflow map. It is cheap, fast, and it is where most of the expensive mistakes get caught."
        label="Book a workflow map"
      />
    </main>
  );
}
