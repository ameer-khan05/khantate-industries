"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop&crop=face&auto=format";

const skills = [
  "Machine Learning",
  "Blockchain",
  "DeFi",
  "LLMs",
  "AI Ethics",
  "Smart Contracts",
  "Product Strategy",
];

export function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-void"
      aria-label="About"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Portrait */}
        <div className="reveal">
          <div className="relative gold-frame rounded-sm overflow-hidden group">
            <div className="aspect-[3/4] max-h-[560px] overflow-hidden relative">
              <Image
                src={FOUNDER_IMG}
                alt="Ameer Khan, Founder of Khanate Industries"
                fill
                className="object-cover object-top grayscale-[15%] contrast-[1.03] transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-void/80 backdrop-blur-xl border border-border-subtle rounded-sm py-4 px-5">
              <div
                className="text-[2rem] font-light leading-none grad-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                10+
              </div>
              <div className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-txt-muted mt-1">
                Years Expertise
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal label-caps flex items-center gap-3 mb-5">
            <span className="w-6 h-[0.5px] bg-gold" />
            Founder
          </div>
          <h2
            className="reveal reveal-delay-1 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ameer Khan
          </h2>

          <blockquote
            className="reveal reveal-delay-2 text-[clamp(1.2rem,2vw,1.6rem)] font-light italic text-warm-white leading-[1.5] my-8 pl-6 border-l border-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;Most organizations don&rsquo;t have an AI problem.
            <br />
            They have a clarity problem.&rdquo;
          </blockquote>

          <p className="reveal reveal-delay-2 text-[0.92rem] font-light text-txt-muted-light leading-[1.8] mb-4 max-w-[50ch]">
            Ameer Khan is a technologist, strategist, and educator at the
            intersection of artificial intelligence and decentralized systems.
            Over a decade working inside and alongside enterprises, Ameer has
            developed a rare ability to translate deeply technical concepts into
            actionable business strategy.
          </p>
          <p className="reveal reveal-delay-3 text-[0.92rem] font-light text-txt-muted-light leading-[1.8] max-w-[50ch]">
            Khanate Industries exists because the gap between what&rsquo;s
            possible with AI and Web3 — and what most organizations actually
            implement — remains enormous. We close that gap.
          </p>

          <div className="reveal reveal-delay-4 flex flex-wrap gap-2 mt-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.68rem] font-normal tracking-wide text-txt-muted-light py-1.5 px-3 border border-border-subtle rounded-sm transition-all duration-600 hover:border-border-gold hover:text-gold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
