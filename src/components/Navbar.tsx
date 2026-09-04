"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { navItems, resumeUrl } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const activeId = useActiveSection(sectionIds);

  const scrollToSection = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <nav
        className="flex w-full max-w-fit items-center gap-1 rounded-2xl border border-border bg-bg-elevated/70 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:gap-1.5"
        aria-label="Primary"
      >
        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={item.href} className="relative">
                <button
                  data-cursor-hover
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-violet to-blue"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          data-cursor-hover
          href={resumeUrl}
          download
          className="ml-1 hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-dim to-blue px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform duration-200 hover:scale-[1.03] md:flex"
        >
          <Download size={15} strokeWidth={2.2} />
          Resume
        </a>

        {/* Mobile trigger */}
        <button
          data-cursor-hover
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-xl p-2.5 text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-border bg-bg-elevated/95 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = id === activeId;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors",
                        isActive ? "bg-white/5 text-ink" : "text-ink-muted hover:bg-white/5 hover:text-ink"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-dim to-blue px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download size={15} strokeWidth={2.2} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
