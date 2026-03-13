"use client";

import { useState, type FormEvent } from "react";
import { Check, AlertCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const contactDetails = [
  { label: "Email", value: "hello@khanate.io" },
  { label: "Location", value: "San Francisco, CA" },
  { label: "Availability", value: "Accepting new clients" },
];

const interestOptions = [
  "AI Strategy & Advisory",
  "Web3 & Blockchain",
  "Executive Education",
  "Innovation Roadmapping",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mojngwdo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-void border border-border-subtle text-warm-white text-[0.88rem] font-light py-3.5 px-4 rounded-sm outline-none transition-all duration-600 focus:border-gold/50 focus:shadow-[0_0_0_2px_rgba(184,149,106,0.08)] placeholder:text-txt-muted/40";

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-void"
      aria-label="Contact"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div>
          <div className="reveal label-caps flex items-center gap-3 mb-5">
            <span className="w-6 h-[0.5px] bg-gold" />
            Get in Touch
          </div>
          <h2
            className="reveal reveal-delay-1 text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&rsquo;s Build
            <br />
            <span className="grad-text">Something Together</span>
          </h2>
          <p className="reveal reveal-delay-2 text-[0.92rem] font-light text-txt-muted-light leading-[1.8] max-w-[50ch]">
            Whether you&rsquo;re exploring AI adoption, evaluating Web3
            opportunities, or need strategic guidance on emerging technology —
            we&rsquo;re here to help.
          </p>

          <div className="mt-10">
            {contactDetails.map((detail, i) => (
              <div
                key={detail.label}
                className={`reveal reveal-delay-${i + 2} py-6 border-b border-border-subtle ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-txt-muted mb-1.5">
                  {detail.label}
                </div>
                <div
                  className="text-lg font-normal text-warm-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal reveal-delay-2 gold-frame rounded-sm bg-charcoal p-8 lg:p-10">
          {status === "success" ? (
            <div className="text-center py-14 px-8">
              <div className="w-14 h-14 border border-border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-6 h-6 text-gold" />
              </div>
              <h3
                className="text-[1.6rem] font-light text-warm-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Message Sent
              </h3>
              <p className="text-[0.88rem] font-light text-txt-muted-light">
                We&rsquo;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-txt-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-txt-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label
                  htmlFor="interest"
                  className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-txt-muted"
                >
                  Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className={`${inputClasses} appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                  }}
                >
                  <option value="">Select your interest</option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label
                  htmlFor="message"
                  className="text-[0.62rem] font-medium tracking-[0.18em] uppercase text-txt-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project or challenge..."
                  className={`${inputClasses} resize-y min-h-[120px]`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm mb-4">
                  <AlertCircle className="size-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gold text-void text-[0.85rem] font-medium py-4 px-8 rounded-sm border-none transition-all duration-600 hover:bg-gold-light hover:-translate-y-0.5 disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
