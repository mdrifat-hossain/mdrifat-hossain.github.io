"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  tag,
  title,
  description,
  align = "left",
}: {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span
        className={cn(
          "mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-[13px] text-violet",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-blue" />
        {tag}
      </span>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold text-balance text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{description}</p>
      )}
    </motion.div>
  );
}
