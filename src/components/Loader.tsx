"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/content";

const SESSION_KEY = "portfolio-intro-played";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyPlayed =
      typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";

    if (alreadyPlayed) {
      // sessionStorage is only readable client-side, so this check — and the
      // state update that follows it — can only happen inside an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkip(true);
      setVisible(false);
      return;
    }

    document.documentElement.style.overflow = "hidden";

    let raf: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        document.documentElement.style.overflow = "";
        setTimeout(() => setVisible(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full opacity-40 blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139,107,255,0.5), rgba(91,140,255,0.25) 55%, transparent 75%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-br from-ink via-violet to-blue bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.div>

            <div className="flex w-56 flex-col items-center gap-3 sm:w-64">
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-dim via-violet to-blue"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex w-full items-center justify-between text-[12px] text-ink-faint">
                <span>Initializing portfolio</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
