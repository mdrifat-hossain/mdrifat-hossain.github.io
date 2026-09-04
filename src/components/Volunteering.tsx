"use client";

import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { volunteering } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Volunteering() {
  return (
    <section id="volunteering" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="Volunteering" title="Giving back" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {volunteering.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-border bg-white/[0.02] p-5 transition-colors duration-300 hover:border-violet/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-blue/20 text-violet">
                <HeartHandshake size={18} />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-[15px] font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] text-ink-muted">
                  {item.org} · {item.location}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{item.period}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
