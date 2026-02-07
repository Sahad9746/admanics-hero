import { ServicesListing } from "@/components/ServicesListing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Admanics Intelligent Systems",
  description: "Explore our modular growth infrastructure, from data-driven marketing to AI-powered brand protection.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <ServicesListing />
    </main>
  );
}
