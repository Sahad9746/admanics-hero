import { services, pillarMetadata } from "@/constants/services";
import { CategoryDetail } from "@/components/CategoryDetail";
import { ServiceDetail } from "@/components/ServiceDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // 1. Check if it's a Pillar
  const activePillar = Object.entries(pillarMetadata).find(
    ([_, meta]) => meta.slug === slug.toLowerCase()
  );

  if (activePillar) {
    const [_, metadata] = activePillar;
    return {
      title: `${metadata.title} | Admanics`,
      description: metadata.description,
    };
  }

  // 2. Check if it's a Service
  const activeService = services.find((s) => s.slug === slug);

  if (activeService) {
    return {
      title: `${activeService.title} | Admanics`,
      description: activeService.description,
    };
  }

  return { title: "Page Not Found" };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // 1. Check if it's a Pillar
  const activePillarEntry = Object.entries(pillarMetadata).find(
    ([_, meta]) => meta.slug === slug.toLowerCase()
  );

  if (activePillarEntry) {
    const [pillarName] = activePillarEntry;
    const filteredServices = services.filter((s) => s.pillar === pillarName);
    
    // Check if it's the "Production" pillar and render the specific ProductionDetail component
    if (pillarName === "Production") {
      const { client } = await import("@/sanity/lib/client");
      const reelsQuery = `*[_type == "work"] | order(_createdAt desc) [0...7] {
        title,
        category,
        videoUrl,
        "videoFileUrl": videoFile.asset->url,
        thumbnail,
        orientation
      }`;
      const reels = await client.fetch(reelsQuery);

      const { ProductionDetail } = await import("@/components/ProductionDetail");
      return (
        <ProductionDetail
          category="Production"
          services={filteredServices}
          reels={reels}
        />
      );
    }

    return (
      <CategoryDetail 
        category={pillarName as "Marketing" | "Production" | "ORM"} 
        services={filteredServices} 
      />
    );
  }

  // 2. Check if it's a Service
  const activeService = services.find((s) => s.slug === slug);

  if (activeService) {
    return <ServiceDetail service={activeService} />;
  }

  // 3. Not Found
  notFound();
}

export async function generateStaticParams() {
  const pillarSlugs = Object.values(pillarMetadata).map((meta) => ({
    slug: meta.slug,
  }));

  const serviceSlugs = services.map((service) => ({
    slug: service.slug,
  }));

  return [...pillarSlugs, ...serviceSlugs];
}
