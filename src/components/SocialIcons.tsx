"use client";

import { Mail } from "lucide-react";
import { socialLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

const links = [
  { key: "email", href: socialLinks.email, label: "Email", Icon: Mail },
  { key: "github", href: socialLinks.github, label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", href: socialLinks.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "x", href: socialLinks.x, label: "X", Icon: XIcon },
];

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {links.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          href={href}
          target={key === "email" ? undefined : "_blank"}
          rel={key === "email" ? undefined : "noopener noreferrer"}
          aria-label={label}
          data-cursor-hover
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/50 hover:text-ink hover:shadow-[0_0_0_1px_rgba(139,107,255,0.3),0_8px_20px_-8px_rgba(139,107,255,0.6)]"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
