import { profile } from "@/data/content";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built from scratch, pixel by pixel.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
