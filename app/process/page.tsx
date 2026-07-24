import { CardGrid, PageHero, Section } from "@/components/Section";
import { processSteps } from "@/lib/content";

export const metadata = {
  title: "Process",
  description: "Reimei BuildLoop: map, design, build, validate, launch, and improve production-ready software systems."
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reimei BuildLoop"
        title="A practical process for turning workflows into software."
        description="We map the problem, design the architecture, build the system, validate real workflows, launch securely, and improve based on usage."
        ctas={["Start With a Workflow Map", "View Capabilities"]}
        tags={["Discovery", "Architecture", "Development", "Testing", "Launch", "Support"]}
      />
      <Section kicker="Process" title="Map. Design. Build. Validate. Launch. Improve." intro="The process is structured enough for serious builds and flexible enough for MVPs, prototypes, integrations, and modernization.">
        <CardGrid cards={processSteps} />
      </Section>
    </main>
  );
}
