"use client";

import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./BrandIcons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-violet/40"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(139,107,255,0.35), transparent 70%)" }}
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-ink-faint">
            {project.role} · {project.type}
          </p>
          <h3 className="mt-1 font-[var(--font-display)] text-xl font-semibold text-ink">
            {project.name}
          </h3>
        </div>
        {project.githubUrl && (
          <a
            data-cursor-hover
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-200 hover:border-violet/50 hover:text-ink"
          >
            <GithubIcon size={16} />
          </a>
        )}
      </div>

      <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((point, i) => (
          <li key={i} className="flex gap-2 text-[13px] leading-relaxed text-ink-muted">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-white/[0.02] px-2 py-1 text-[11.5px] text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-5 flex gap-4 border-t border-border pt-4 text-[13px]">
          {project.githubUrl && (
            <a
              data-cursor-hover
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink"
            >
              Source <ArrowUpRight size={13} />
            </a>
          )}
          {project.liveUrl && (
            <a
              data-cursor-hover
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink"
            >
              Live <ExternalLink size={13} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Projects"
          title="Selected work"
          description="A mix of AI/ML systems, computer vision pipelines, and full-stack products — each one built end-to-end."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
