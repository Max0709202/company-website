import { notFound } from "next/navigation";
import { CardGrid, PageHero, Section, ServicePageView } from "@/components/Section";
import { buildCategories, serviceBySlug, servicePages } from "@/lib/content";

export async function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = serviceBySlug(slug);
  return {
    title: page ? page.title : "Services",
    description: page?.description || "ReimeiTech services for AI automation, SaaS, APIs, dashboards, portals, data, cloud, and security."
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  if (!slug?.length) {
    return (
      <main>
        <PageHero
          eyebrow="Services"
          title="Explore ReimeiTech service categories."
          description="Detailed service pages preserve the source material across AI automation, SaaS, portals, APIs, data, cloud, security, design, and support."
          ctas={["Start a Project", "View Demo Lab"]}
          tags={["AI", "SaaS", "APIs", "Dashboards", "Portals", "Security"]}
        />
        <Section kicker="Service hub" title="What We Build" intro="Choose a category to explore deeper service pages.">
          <CardGrid cards={buildCategories} columns={2} />
        </Section>
      </main>
    );
  }

  const page = serviceBySlug(slug);
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
