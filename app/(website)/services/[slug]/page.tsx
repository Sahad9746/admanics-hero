import { services, pillarMetadata } from "@/constants/services";
import { CategoryDetail } from "@/components/CategoryDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Find pillar by slug
  const activePillar = Object.entries(pillarMetadata).find(
    ([_, meta]) => meta.slug === slug.toLowerCase()
  );

  if (!activePillar) return { title: "Category Not Found" };

  const [_, metadata] = activePillar;

  return {
    title: `${metadata.title} | Admanics`,
    description: metadata.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // Find pillar by slug
  const activePillarEntry = Object.entries(pillarMetadata).find(
    ([_, meta]) => meta.slug === slug.toLowerCase()
  );

  if (!activePillarEntry) {
    notFound();
  }

  const [pillarName] = activePillarEntry;
  const filteredServices = services.filter((s) => s.pillar === pillarName);

  return (
    <CategoryDetail 
      category={pillarName as "Marketing" | "Production" | "ORM"} 
      services={filteredServices} 
    />
  );
}

export async function generateStaticParams() {
  return Object.values(pillarMetadata).map((meta) => ({
    slug: meta.slug,
  }));
}
