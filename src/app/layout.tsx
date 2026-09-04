import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.name} — AI/ML Engineer & Full-Stack Developer`,
  description: profile.tagline,
  metadataBase: new URL("https://your-domain.example"),
  openGraph: {
    title: `${profile.name} — AI/ML Engineer & Full-Stack Developer`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Engineer & Full-Stack Developer`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Loader />
        <CustomCursor />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
