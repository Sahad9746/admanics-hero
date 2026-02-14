"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface TeamMember {
  name: string;
  role: string;
  image: any;
}

export function TeamGrid({ team }: { team: TeamMember[] }) {
  return (
    <section className="bg-neutral-950 py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">
            The Minds Behind
          </span>
          <GradientText
            words="Our Leadership"
            className="text-4xl md:text-5xl font-bold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 mb-6 relative">
                 {/* Placeholder for actual image */}
                 <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                    <span className="text-4xl font-light opacity-20">{member.name.charAt(0)}</span>
                 </div>
                 {member.image && (
                    <Image 
                        src={urlFor(member.image).url()} 
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-neutral-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
