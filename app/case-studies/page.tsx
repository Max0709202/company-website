import { CardGrid, ClosingCTA, PageHero, Section } from "@/components/Section";
import { blueprints } from "@/lib/content";

export const metadata = {
  title: "Blueprints",
  description:
    "maxIEI solution blueprints for healthcare automation, fintech dashboards, agency portals, SaaS MVPs, operations automation, and knowledge copilots."
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blueprints"
        title="Technical breakdowns, not invented testimonials."
        description="Most of our client work sits under NDA. Rather than publish vague success metrics we cannot evidence, we publish the architecture: the problem, the system design, the modules, the security layer, and the business outcome."
        ctas={["Discuss a similar system", "View the Demo Lab"]}
        tags={["Healthcare", "FinTech", "Agencies", "SaaS", "Operations", "Knowledge AI"]}
      />

      <Section
        num="01"
        kicker="Integrity in practice"
        title="Why there are no logos on this page"
        intro="Publishing client names we do not have permission to use, or metrics we cannot substantiate, would fail the first value the company is named for. These blueprints are the honest version."
      >
        <div className="compare">
          <div className="compare-before">
            <h3>What we will not do</h3>
            <ul>
              <li>Publish client logos without written permission</li>
              <li>Quote performance numbers we cannot evidence</li>
              <li>Present a concept build as a shipped client project</li>
              <li>Reuse a competitor&apos;s case study as our own</li>
            </ul>
          </div>
          <div className="compare-after">
            <h3>What we do instead</h3>
            <ul>
              <li>Publish the full architecture and module breakdown</li>
              <li>Walk through real code and demos on the first call</li>
              <li>Provide references directly, with client consent</li>
              <li>Explain exactly which parts we have built before</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        alt
        num="02"
        kicker="Blueprints"
        title="How we solve common business problems"
        intro="Each blueprint is a real architecture we can adapt. Any of them can become a deeper case study once a client agrees to be named."
      >
        <CardGrid cards={blueprints} columns={3} media />
      </Section>

      <ClosingCTA
        title="Recognise your problem in one of these?"
        text="Most engagements start with a blueprint that is eighty percent right. Tell us where yours differs and we will scope the other twenty."
      />
    </main>
  );
}
