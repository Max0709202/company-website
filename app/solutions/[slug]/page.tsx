import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/Section";
import { solutionBySlug, solutions } from "@/lib/content";

export async function generateStaticParams() {
  return solutions.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionBySlug(slug);
  return {
    title: page ? page.title : "Solutions",
    description:
      page?.description ||
      "maxIEI solution accelerators for AI, SaaS, workflow automation, secure portals, and RAG knowledge bases."
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionBySlug(slug);
  if (!page) notFound();
  return <ServicePageView page={page} />;
}
