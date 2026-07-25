import { CardGrid, ClosingCTA, MediaBand, PageHero, Section } from "@/components/Section";
import { demos, videos } from "@/lib/content";

export const metadata = {
  title: "Demo Lab",
  description:
    "The maxIEI Demo Lab: AI document assistant, SaaS admin dashboard, secure portal, CRM automation, API monitor, and AI reporting demos."
};

export default function DemoLabPage() {
  return (
    <main>
      <PageHero
        eyebrow="Demo Lab"
        title="Working demos for AI, SaaS, APIs, portals, and dashboards."
        description="The Demo Lab is where we build for ourselves. Each demo shows how maxIEI connects data, AI, workflows, admin controls, security layers, and user interfaces into a pattern we can adapt to your business."
        ctas={["Start a project", "Explore capabilities"]}
        tags={["Document AI", "SaaS dashboard", "Secure portal", "CRM automation", "API monitor", "AI reporting"]}
        video={videos.programmerWorkstation}
        videoLabel="Developer building at a workstation"
      />

      <MediaBand
        video={videos.aiCodeStream}
        kicker="Why this exists"
        title="Judge the engineering before you sign anything."
        text="Slide decks are easy. Running systems are not. Everything here is something we built and maintain ourselves, which means we can walk you through the code, the failure modes, and the parts we would do differently."
      />

      <Section
        num="01"
        kicker="Demos"
        title="Internal builds clients can actually understand"
        intro="Each demo can be shown as a walkthrough, an interactive prototype, or a hosted proof of concept scoped to your own data."
      >
        <CardGrid cards={demos} columns={3} numbered />
      </Section>

      <ClosingCTA
        title="Want one of these pointed at your data?"
        text="A scoped proof of concept usually takes days, not months, and it answers the feasibility question before you commit to a build."
        label="Request a proof of concept"
      />
    </main>
  );
}
