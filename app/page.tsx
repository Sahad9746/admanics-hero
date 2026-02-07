import Hero from "@/components/Hero"
import { BrandSlider } from "@/components/BrandSlider";
import { AboutSection } from "@/components/AboutSection"
import { Services } from "@/components/Services";
import { ResultsSection } from "@/components/ResultsSection";
import { StatsSection } from "@/components/StatsSection";
import { ScrollFeatures } from "@/components/ScrollFeatures"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admanics | Automated Growth Systems",
  description: "Scale your business with AI-powered marketing and automated operations systems. Admanics builds the infrastructure for predictable growth.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Hero />
      <BrandSlider />
      <AboutSection />
      <StatsSection />
      <Services />
      <ResultsSection />
      {/* <ScrollFeatures /> */}
      <FAQ />
      <Footer />
    </main>
  )
}
