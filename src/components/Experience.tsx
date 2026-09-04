"use client";

import { motion } from "motion/react";
import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="Experience" title="Where I've worked" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet via-border to-transparent sm:left-[9px]" />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={job.role + job.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-gradient-to-br from-violet to-blue sm:h-[18px] sm:w-[18px]" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-ink">
                    {job.role}
                  </h3>
                  <span className="text-[13px] text-ink-faint">{job.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-violet">
                  {job.org} · {job.location}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-[13.5px] leading-relaxed text-ink-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
