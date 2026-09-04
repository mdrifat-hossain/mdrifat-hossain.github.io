"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Contact"
          title="Get in touch"
          description="Have a role, project, or idea in mind? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <a
              data-cursor-hover
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3.5 rounded-2xl border border-border bg-white/[0.02] p-4 transition-colors duration-200 hover:border-violet/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-blue/20 text-violet">
                <Mail size={17} />
              </div>
              <div>
                <p className="text-xs text-ink-faint">Email</p>
                <p className="text-sm text-ink">{profile.email}</p>
              </div>
            </a>

            <a
              data-cursor-hover
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3.5 rounded-2xl border border-border bg-white/[0.02] p-4 transition-colors duration-200 hover:border-violet/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-blue/20 text-violet">
                <Phone size={17} />
              </div>
              <div>
                <p className="text-xs text-ink-faint">Phone</p>
                <p className="text-sm text-ink">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 rounded-2xl border border-border bg-white/[0.02] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-blue/20 text-violet">
                <MapPin size={17} />
              </div>
              <div>
                <p className="text-xs text-ink-faint">Location</p>
                <p className="text-sm text-ink">{profile.location}</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="mb-3 text-xs text-ink-faint">Find me elsewhere</p>
              <SocialIcons />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
