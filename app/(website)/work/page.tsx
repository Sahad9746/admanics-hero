import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CustomVideoPlayer } from "@/components/CustomVideoPlayer";
import WorkGrid from "@/components/WorkGrid";

// Revalidate data every 60 seconds
export const revalidate = 60;

async function getWork() {
  const query = `
    *[_type == "work"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      client,
      category,
      videoUrl,
      thumbnail,
      description
    }
  `;
  return client.fetch(query);
}

export default async function WorkPage() {
  const sanityWorks = await getWork();

  // Demo Content (Fallback if Sanity is empty)
  const demoWorks = [
    {
      _id: "demo-1",
      title: "Neon City Documentary",
      slug: { current: "neon-city" },
      client: "Netflix",
      category: "Documentary",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/images/services/production-v3.png",
      description: "A deep dive into the cyberpunk aesthetic of modern Tokyo.",
    },
    {
      _id: "demo-2",
      title: "Summer Vibes Campaign",
      slug: { current: "summer-vibes" },
      client: "Coca-Cola",
      category: "Commercial",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/images/services/marketing-v3.png",
      description: "Refreshing visuals for the new summer flavor.",
    },
    {
      _id: "demo-3",
      title: "Future Tech Reveal",
      slug: { current: "future-tech" },
      client: "Apple",
      category: "Corporate",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "/images/services/intelligence.png",
      description: "Introducing the next generation of wearable technology.",
    },
    {
      _id: "demo-4",
      title: "Fashion Week 2025",
      slug: { current: "fashion-week" },
      client: "Vogue",
      category: "Social Media",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnail: "/images/services/orm-v3.png",
      description: "Highlight reel from Paris Fashion Week.",
      orientation: "portrait",
    },
    {
      _id: "demo-5",
      title: "Urban Rhythm",
      slug: { current: "urban-rhythm" },
      client: "Nike",
      category: "Social Media",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Volcanos.mp4",
      thumbnail: "/images/services/marketing.png",
      description: "High-energy street style campaign.",
      orientation: "portrait",
    },
  ];

  const works = sanityWorks.length > 0 ? sanityWorks : demoWorks;

  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-24">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        {/* Header (Left Aligned & Minimal) */}
        <div className="mb-24 md:mb-32">
          <h1 className="text-heading-hero text-white mb-8">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]">
              WORKS.
            </span>
          </h1>
          <div className="h-px w-24 bg-white/20 mb-8" />
          <p className="text-body-xl text-neutral-400 max-w-2xl">
            A curated collection of visual narratives designed to captivate and
            convert.
          </p>
        </div>

        {/* Work Grid (Cinematic List) */}
        <WorkGrid works={works} />
      </div>
    </div>
  );
}
