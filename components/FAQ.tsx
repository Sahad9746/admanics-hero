"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does automation work?",
    answer:
      "We build custom workflows that connect your advertising, website, CRM, and sales tools into one system. When a lead arrives, it's automatically tracked, nurtured, and passed to sales without manual handoffs. The system learns and optimizes itself over time.",
  },
  {
    question: "What tools do you integrate?",
    answer:
      "We work with Zoho CRM, Zapier, Google Ads, Facebook Ads, Shopify, and most major platforms. If your tool has an API, we can connect it. We assess your existing stack and build workflows that fit your specific needs.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Most clients see measurable improvements within four to six weeks. The first phase focuses on data collection and system setup. Once workflows are live, optimization happens continuously based on real performance data.",
  },
  {
    question: "Do you handle ongoing support?",
    answer:
      "Yes. We provide continuous monitoring, optimization, and support. Your system evolves as your business grows. We track performance, identify bottlenecks, and refine workflows to keep your growth predictable and efficient.",
  },
  {
    question: "What about data security?",
    answer:
      "Data security is non-negotiable. We follow industry standards for encryption, access control, and compliance. All integrations use secure APIs, and your data remains in your own systems. We never store sensitive information unnecessarily.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      className={`rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen ? "bg-neutral-900/40 border-white/20" : "bg-transparent border-white/10 hover:bg-white/5"}`}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-6 md:p-10 text-left gap-4"
      >
        <span className="text-body-lg text-white">{question}</span>
        <div
          className={`p-3 md:p-4 rounded-full border border-white/10 transition-all shrink-0 ${isOpen ? "bg-white text-black scale-110" : "bg-transparent text-white"}`}
        >
          {isOpen ? (
            <Minus size={18} className="md:w-[24px] md:h-[24px]" />
          ) : (
            <Plus size={18} className="md:w-[24px] md:h-[24px]" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="px-6 md:px-10 pb-8 md:pb-10 pt-0">
              <p className="text-neutral-400 leading-relaxed text-sm md:text-xl font-medium border-t border-white/10 pt-6 md:pt-8 line-height-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-neutral-950 py-16 md:py-64 px-6 md:px-12 font-sans text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header - Center Aligned for Cinematic Feel */}
        <div className="flex flex-col items-center text-center gap-8 md:gap-10 mb-10 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <span className="text-label text-neutral-500">
              Support Infrastructure
            </span>
            <GradientText
              words="Common Queries"
              className="text-heading-xl lowercase"
            />
          </motion.div>
          <p className="text-body-xl text-neutral-400 max-w-2xl">
            Everything you need to know about deploying and managing your
            automated growth systems.
          </p>
        </div>

        {/* Q&A List */}
        <div className="space-y-4 md:space-y-6 mb-16 md:mb-48">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => toggleFAQ(idx)}
            />
          ))}
        </div>

        {/* Footer actions - Still have questions? */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10"
        >
          <h3 className="text-heading-md text-white mb-4 md:mb-6">
            Still have questions?
          </h3>
          <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-12 font-medium">
            Reach out and let&apos;s talk about your specific infrastructure
            requirements.
          </p>
          <a href="/contact">
            <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl whitespace-nowrap">
              Book Consultation &rarr;
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
