import Hero from "@/components/Hero"
import { AboutSection } from "@/components/AboutSection"
import { Solutions } from "@/components/Solutions"
import { Services } from "@/components/Services"
import { ScrollFeatures } from "@/components/ScrollFeatures"
import { Results } from "@/components/Results"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Hero />
      <AboutSection />
      <Solutions />
      <Services />
      <ScrollFeatures />
      <FAQ />
      <Footer />
    </main>
  )
}
