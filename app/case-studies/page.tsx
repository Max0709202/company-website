import { CardGrid, PageHero, Section } from "@/components/Section";
import { blueprints } from "@/lib/content";

export const metadata = {
  title: "Case Studies & Blueprints",
  description: "ReimeiTech solution blueprints for healthcare automation, fintech dashboards, agency portals, SaaS MVPs, and local business automation."
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies / Blueprints"
        title="Technical breakdowns without fake client claims."
        description="When public client details are unavailable, ReimeiTech uses solution blueprints to show problem, architecture, system modules, security layer, and business value."
        ctas={["Discuss a Similar System", "View Demo Lab"]}
        tags={["Healthcare", "FinTech", "Agencies", "SaaS", "Local Businesses"]}
      />
      <Section kicker="Blueprints" title="How ReimeiTech would solve common business problems" intro="Each blueprint can become a deeper case study when real project evidence is available.">
        <CardGrid cards={blueprints} />
      </Section>
    </main>
  );
}
