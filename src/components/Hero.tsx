"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { profile, heroSkills, resumeUrl } from "@/data/content";
import SocialIcons from "./SocialIcons";
import ProfilePhoto from "./ProfilePhoto";

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex h-8 items-center overflow-hidden sm:h-9">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="font-[var(--font-display)] text-lg font-medium text-transparent bg-gradient-to-r from-violet to-blue bg-clip-text sm:text-xl"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function FloatingSkills() {
  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      {heroSkills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: [0, i % 2 === 0 ? -7 : -4, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 + i * 0.06 },
            y: {
              duration: 3.4 + (i % 3) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            },
          }}
          className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-ink-muted backdrop-blur-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-28 items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-ink-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-[var(--font-display)] text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-2"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-muted sm:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              data-cursor-hover
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-dim to-blue px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(139,107,255,0.7)] transition-transform duration-200 hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              data-cursor-hover
              href="#contact"
              className="rounded-xl border border-border bg-white/[0.02] px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-violet/50 hover:bg-white/[0.05]"
            >
              Get In Touch
            </a>
            <a
              data-cursor-hover
              href={resumeUrl}
              download="Md_Rifat_Hossain.pdf"
              className="text-sm font-medium text-ink-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-violet"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialIcons className="mt-8" />
          </motion.div>

          <FloatingSkills />
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-faint sm:flex"
      >
        <span className="text-[11px]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
