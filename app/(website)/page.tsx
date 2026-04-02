import Hero from "@/components/Hero"
import { BrandSlider } from "@/components/BrandSlider";
import { AboutSection } from "@/components/AboutSection"
import { Services } from "@/components/Services";
import { StatsSection } from "@/components/StatsSection";
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Hero />
      <BrandSlider />
      <AboutSection />
      <StatsSection />
      <Services />
      <FAQ />
      <Footer />
    </main>
  )
}
