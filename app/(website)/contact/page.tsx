import { ContactContent } from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Admanics",
  description: "Get in touch with Admanics to discuss your AI marketing and growth strategy. We help businesses scale with automated systems.",
};

export default function ContactPage() {
  return <ContactContent />;
}
