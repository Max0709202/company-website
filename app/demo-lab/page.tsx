import { CardGrid, PageHero, Section } from "@/components/Section";
import { demos } from "@/lib/content";

export const metadata = {
  title: "Demo Lab",
  description: "ReimeiTech Demo Lab: AI document assistant, SaaS admin dashboard, secure portal, CRM automation, API monitor, and AI reporting demos."
};

export default function DemoLabPage() {
  return (
    <main>
      <PageHero
        eyebrow="Demo Lab"
        title="Proof-of-thinking demos for AI, SaaS, APIs, portals, and dashboards."
        description="The Demo Lab shows how ReimeiTech connects data, AI, workflows, admin controls, security layers, and user interfaces into working software patterns."
        ctas={["Start a Project", "Explore Services"]}
        tags={["AI Document Assistant", "SaaS Dashboard", "Secure Portal", "CRM Automation", "API Monitor", "AI Reporting"]}
      />
      <Section kicker="Demos" title="Internal demos clients can understand" intro="Each demo can become a short video, interactive prototype, or hosted proof of concept.">
        <CardGrid cards={demos} />
      </Section>
    </main>
  );
}
