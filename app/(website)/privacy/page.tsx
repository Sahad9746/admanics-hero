import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Privacy Policy | Admanics",
  description: "Privacy Policy for Admanics",
};

export default function PrivacyPage() {
  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col pt-24 md:pt-32">
      <main className="flex-1 max-w-4xl mx-auto py-12 px-6 md:px-12 w-full">
        <div className="mb-12">
          <GradientText
            words="Privacy Policy"
            className="text-heading-lg mb-4"
            as="h1"
          />
          <p className="text-neutral-400">Last updated: March 2026</p>
        </div>

        <div className="space-y-8 text-neutral-300 leading-relaxed font-sans text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, the items requested, delivery notes, and other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect about you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Services, including to facilitate payments, provide products and services you request (and send related information), develop new features, provide customer support to Users, develop safety features, authenticate users, and send product updates and administrative messages.</li>
              <li>Perform internal operations, including to prevent fraud and abuse of our Services; to troubleshoot software bugs and operational problems; to conduct data analysis, testing, and research; and to monitor and analyze usage and activity trends.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
            <p className="mb-4">
              We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us.</li>
              <li>With the general public if you submit content in a public forum, such as blog comments, social media posts, or other features of our Services that are viewable by the general public.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Statement, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:growth@admanics.com" className="text-blue-400 hover:text-blue-300 transition-colors">growth@admanics.com</a><br/>
              Phone: 9900454378
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
