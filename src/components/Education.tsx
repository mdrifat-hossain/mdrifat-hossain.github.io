"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="Education" title="Academic background" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {education.map((school, i) => (
            <motion.div
              key={school.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-violet/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-blue/20 text-violet">
                <GraduationCap size={19} />
              </div>
              <h3 className="mt-4 font-[var(--font-display)] text-base font-semibold text-ink">
                {school.school}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{school.credential}</p>
              {school.period && <p className="mt-2 text-xs text-ink-faint">{school.period}</p>}
              <p className="mt-3 text-[13px] text-violet">{school.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
