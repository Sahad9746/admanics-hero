import { AboutPageClient } from "@/components/AboutPageClient";
import { TeamSection } from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <AboutPageClient 
      teamSection={<TeamSection />}
    />
  );
}
