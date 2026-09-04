"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white/[0.02] p-6 sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-ink-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-border bg-bg-panel/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-violet/60"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-ink-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl border border-border bg-bg-panel/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-violet/60"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about the opportunity or project..."
          className="resize-none rounded-xl border border-border bg-bg-panel/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-violet/60"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          data-cursor-hover
          type="submit"
          disabled={status === "loading"}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-dim to-blue px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-10px_rgba(139,107,255,0.7)] transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} className="animate-spin" /> Sending
            </>
          ) : (
            <>
              <Send size={15} /> Send message
            </>
          )}
        </button>

        {status === "success" && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-sm text-emerald-400"
          >
            <CheckCircle2 size={15} /> Message sent — I&apos;ll reply soon.
          </motion.span>
        )}
        {status === "error" && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-sm text-red-400"
          >
            <AlertCircle size={15} /> {errorMsg}
          </motion.span>
        )}
      </div>
    </form>
  );
}
