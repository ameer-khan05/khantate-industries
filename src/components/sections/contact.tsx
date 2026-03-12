"use client";

import { useState, type FormEvent } from "react";
import {
  Globe,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const details = [
  {
    icon: Globe,
    label: "Availability",
    value: "Remote & On-Site · Worldwide",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: Briefcase,
    label: "Engagement Type",
    value: "Project-Based & Retainer",
  },
];

const interests = [
  "AI Strategy & Advisory",
  "Web3 & Blockchain Strategy",
  "Executive Education & Workshops",
  "Innovation Roadmapping",
  "General Inquiry",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [interest, setInterest] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("interest", interest);

    try {
      const res = await fetch("https://formspree.io/f/mojngwdo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setInterest("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-deep py-[clamp(4rem,8vw,7rem)]"
      aria-label="Contact"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <BlurFade delay={0.1} inView>
              <span className="text-blue text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4 block">
                Get In Touch
              </span>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2
                className="font-display text-white mb-6"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Let&rsquo;s Talk About{" "}
                <span className="gradient-text">What&rsquo;s Next.</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-ki-muted2 text-[0.95rem] leading-relaxed mb-10 max-w-[440px]">
                Every engagement begins with a 30-minute introductory call to
                understand your challenges, goals, and whether we&rsquo;re the
                right fit. No pitch decks — just a real conversation.
              </p>
            </BlurFade>

            <div className="space-y-0">
              {details.map((detail, i) => (
                <BlurFade key={detail.label} delay={0.35 + i * 0.1} inView>
                  <div className="flex items-center gap-4 py-5 border-b border-ki-border">
                    <detail.icon className="size-4 text-blue shrink-0" />
                    <div>
                      <span className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase block mb-0.5">
                        {detail.label}
                      </span>
                      <span className="text-ki-muted2 text-sm">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <BlurFade delay={0.2} inView direction="left">
            <div className="rounded-xl border border-ki-border bg-surface/40 p-8 sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 className="size-12 text-blue mb-4" />
                  <h3 className="text-white text-xl font-medium mb-2">
                    Message Received
                  </h3>
                  <p className="text-ki-muted2 text-sm">
                    Ameer will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Jane"
                        className="bg-surface border-ki-border text-white placeholder:text-ki-muted h-11 rounded-lg focus:border-blue"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="bg-surface border-ki-border text-white placeholder:text-ki-muted h-11 rounded-lg focus:border-blue"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                    >
                      Work Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="bg-surface border-ki-border text-white placeholder:text-ki-muted h-11 rounded-lg focus:border-blue"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                    >
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Corp"
                      className="bg-surface border-ki-border text-white placeholder:text-ki-muted h-11 rounded-lg focus:border-blue"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                    >
                      Area of Interest
                    </label>
                    <Select value={interest} onValueChange={(v) => setInterest(v ?? "")}>
                      <SelectTrigger className="bg-surface border-ki-border text-white h-11 rounded-lg data-[placeholder]:text-ki-muted">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-ki-border">
                        {interests.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="text-ki-muted2 hover:text-white focus:text-white focus:bg-raised"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-ki-muted text-xs font-semibold tracking-[0.1em] uppercase mb-2 block"
                    >
                      How Can We Help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your challenges and goals..."
                      className="bg-surface border-ki-border text-white placeholder:text-ki-muted rounded-lg resize-none focus:border-blue"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="size-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-gradient-to-r from-blue to-violet text-white text-sm font-medium h-12 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-[0_0_20px_rgba(75,139,244,0.15)] disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    {status !== "submitting" && (
                      <ArrowRight className="ml-2 size-4" />
                    )}
                  </Button>
                </form>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
