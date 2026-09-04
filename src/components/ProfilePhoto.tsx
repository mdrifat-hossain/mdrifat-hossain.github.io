"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "motion/react";

// -----------------------------------------------------------------------
// PHOTO GOES HERE: /public/images/profile.png
// Use a background-removed (transparent PNG/WebP) upper-body shot.
// Until that file exists, a silhouette placeholder renders automatically.
// -----------------------------------------------------------------------
export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-sm"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Aura glow behind the subject */}
      <div
        className="absolute inset-0 -z-10 scale-90 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,107,255,0.45), rgba(91,140,255,0.2), transparent 75%)",
        }}
      />
      <div className="absolute inset-x-10 bottom-2 -z-10 h-10 rounded-full bg-violet/20 blur-2xl" />

      {!errored ? (
        <Image
          src="/images/profile.png"
          alt="Portrait of Md. Rifat Hossain"
          fill
          sizes="(min-width: 1024px) 384px, 70vw"
          className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(20,10,40,0.55)]"
          priority
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-end gap-3 rounded-[2.5rem] border border-dashed border-border-strong bg-white/[0.02] pb-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-bg-panel text-ink-faint">
            <User size={40} strokeWidth={1.4} />
          </div>
          <p className="max-w-[14rem] text-xs leading-relaxed text-ink-faint">
            Add your background-removed photo at
            <br />
            <code className="text-violet">/public/images/profile.png</code>
          </p>
        </div>
      )}
    </motion.div>
  );
}
