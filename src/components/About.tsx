"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="About"
          title="A little about how I work"
          description="The short version of my story, and what drives the projects below."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-[15px] leading-relaxed text-ink-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-2xl border border-border bg-white/[0.02] p-6"
          >
            <div className="mb-5 flex items-center gap-2.5 text-ink">
              <GraduationCap size={18} className="text-violet" />
              <h3 className="font-[var(--font-display)] text-base font-semibold">Currently</h3>
            </div>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex justify-between gap-4">
                <span>Degree</span>
                <span className="text-right text-ink">B.Sc. CSE, UIU</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>CGPA</span>
                <span className="text-ink">3.87 / 4.00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Role</span>
                <span className="text-right text-ink">Undergraduate TA</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Focus</span>
                <span className="text-right text-ink">AI / ML Systems</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
