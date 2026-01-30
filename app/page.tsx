import Hero from "@/components/Hero"
import { BrandSlider } from "@/components/BrandSlider";
import { AboutSection } from "@/components/AboutSection"
import { Solutions } from "@/components/Solutions"
import { Services } from "@/components/Services";
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
      <Solutions />
      <AboutSection />
      <StatsSection />
      <Services />
      <ScrollFeatures />
      <FAQ />
      <Footer />
    </main>
  )
}
