"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, Check } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/mojngwdo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#2447e8] py-20 text-white lg:py-28" aria-labelledby="contact-title">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <span className="eyebrow text-[#d7f63c]">Start a conversation</span>
          <h2 id="contact-title" className="display mt-8 max-w-[9ch] text-[clamp(4rem,7vw,7.4rem)] leading-[0.86]">
            Building something ambitious?
          </h2>
          <p className="mt-8 max-w-[40ch] text-base leading-7 text-white/70">
            I work selectively with founders and technical teams on product,
            go-to-market, partnerships, and the commercial story around what they
            are building.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/30 pt-6 text-xs font-bold uppercase tracking-[0.1em] text-white/65">
            <div>
              <span className="block text-[#d7f63c]">Format</span>
              <span className="mt-2 block">Advisory · Embedded · Project</span>
            </div>
            <div>
              <span className="block text-[#d7f63c]">Availability</span>
              <span className="mt-2 block">Selective engagements</span>
            </div>
          </div>
        </div>

        <div className="border border-white/35 bg-[#f3f0e8] p-6 text-[#17191d] sm:p-9">
          {status === "success" ? (
            <div className="flex min-h-[30rem] flex-col items-center justify-center text-center">
              <div className="flex size-14 items-center justify-center bg-[#d7f63c]"><Check size={24} /></div>
              <h3 className="display mt-6 text-4xl">Message received.</h3>
              <p className="mt-3 max-w-[34ch] text-sm leading-6 text-black/55">Thanks for reaching out. Ameer will follow up directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                  Name
                  <input className="field mt-2" name="name" type="text" required placeholder="Your name" />
                </label>
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                  Email
                  <input className="field mt-2" name="email" type="email" required placeholder="you@company.com" />
                </label>
              </div>

              <label className="mt-5 block text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                Company or project
                <input className="field mt-2" name="company" type="text" placeholder="What are you building?" />
              </label>

              <label className="mt-5 block text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                Where could I help?
                <select className="field mt-2" name="interest" required defaultValue="">
                  <option value="" disabled>Select an area</option>
                  <option>Product strategy</option>
                  <option>Go-to-market and positioning</option>
                  <option>Business development and partnerships</option>
                  <option>Fundraising narrative</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className="mt-5 block text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                Context
                <textarea className="field mt-2 min-h-32 resize-y" name="message" required placeholder="Tell me where things stand and what needs to move." />
              </label>

              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-red-700">
                  <AlertCircle size={16} /> Something went wrong. Please try again.
                </p>
              )}

              <button type="submit" disabled={status === "submitting"} className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#17191d] px-6 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#ee5d32] disabled:opacity-50">
                {status === "submitting" ? "Sending…" : "Send message"} <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
