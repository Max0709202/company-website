import { notFound } from "next/navigation";
import { CardGrid, ClosingCTA, PageHero, Section, ServicePageView } from "@/components/Section";
import { buildCategories, serviceBySlug, servicePages } from "@/lib/content";

export async function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = serviceBySlug(slug);
  return {
    title: page ? page.title : "Services",
    description:
      page?.description ||
      "maxIEI services for AI automation, SaaS, APIs, dashboards, portals, data engineering, cloud, and security."
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  if (!slug?.length) {
    return (
      <main>
        <PageHero
          eyebrow="Services"
          title="Explore maxIEI service categories."
          description="Detailed service pages across AI automation, SaaS, portals, APIs, data, cloud, security, design, and long-term support."
          ctas={["Start a project", "View the Demo Lab"]}
          tags={["AI", "SaaS", "APIs", "Dashboards", "Portals", "Security"]}
        />
        <Section
          num="01"
          kicker="Service hub"
          title="What we build"
          intro="Choose a category to explore the deeper service pages underneath it."
        >
          <CardGrid cards={buildCategories} columns={2} media />
        </Section>
        <ClosingCTA
          title="Describe the problem, not the product."
          text="Tell us what is manual, slow, or risky today. Choosing the right category is our job."
        />
      </main>
    );
  }

  const page = serviceBySlug(slug);
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
