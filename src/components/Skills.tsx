"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Skills"
          title="Tools I reach for"
          description="A working toolkit spanning AI/ML, computer vision, and full-stack development."
        />

        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-border bg-white/[0.02] p-5 transition-colors duration-300 hover:border-violet/40"
            >
              <h3 className="font-[var(--font-display)] text-[15px] font-semibold text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1 text-[12.5px] text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
