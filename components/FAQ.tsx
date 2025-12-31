"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const faqs = [
  {
    question: "How does automation work?",
    answer: "We build custom workflows that connect your advertising, website, CRM, and sales tools into one system. When a lead arrives, it's automatically tracked, nurtured, and passed to sales without manual handoffs. The system learns and optimizes itself over time.",
  },
  {
    question: "What tools do you integrate?",
    answer: "We work with Zoho CRM, Zapier, Google Ads, Facebook Ads, Shopify, and most major platforms. If your tool has an API, we can connect it. We assess your existing stack and build workflows that fit your specific needs.",
  },
  {
    question: "How long until we see results?",
    answer: "Most clients see measurable improvements within four to six weeks. The first phase focuses on data collection and system setup. Once workflows are live, optimization happens continuously based on real performance data.",
  },
  {
    question: "Do you handle ongoing support?",
    answer: "Yes. We provide continuous monitoring, optimization, and support. Your system evolves as your business grows. We track performance, identify bottlenecks, and refine workflows to keep your growth predictable and efficient.",
  },
  {
    question: "What about data security?",
    answer: "Data security is non-negotiable. We follow industry standards for encryption, access control, and compliance. All integrations use secure APIs, and your data remains in your own systems. We never store sensitive information unnecessarily.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header - Center Aligned */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
            <TextGenerateEffect 
                words="Questions"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-400"
          >
            Everything you need to know about automated growth systems
          </motion.p>
        </div>

        {/* Q&A List */}
        <div className="space-y-6 mb-24">
            {faqs.map((faq, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col gap-3 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                    <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                    <p className="text-neutral-400 leading-relaxed text-base">{faq.answer}</p>
                </motion.div>
            ))}
        </div>

        {/* Footer actions - Still have questions? */}
        <motion.div 
            id="ready"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
        >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Reach out and let's talk about your growth
            </p>
            <a href="/contact">
                <Button className="bg-neutral-100 text-black hover:bg-white rounded-lg px-10 py-4 text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all cursor-pointer">
                    Contact
                </Button>
            </a>
        </motion.div>

      </div>
    </section>
  );
}
