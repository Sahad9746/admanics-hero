import { AboutPageClient } from "@/components/AboutPageClient";
import { TeamSection } from "@/components/TeamSection";

export const revalidate = 60; // Revalidate every 60 seconds

export default function AboutPage() {
  return (
    <AboutPageClient 
      teamSection={<TeamSection />}
    />
  );
}
