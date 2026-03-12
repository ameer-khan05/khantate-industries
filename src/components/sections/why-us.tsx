"use client";

import { Target, Scale, Layers } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const reasons = [
  {
    icon: Target,
    title: "No Fluff, No Filler",
    description:
      "Every engagement produces something actionable. We don't bill for slide decks that gather dust — our deliverables drive decisions and create measurable impact.",
  },
  {
    icon: Scale,
    title: "Independent Perspective",
    description:
      "No vendor partnerships, no preferred tools, no hidden incentives. Our recommendations are grounded in what's right for your business, not what's right for our partners.",
  },
  {
    icon: Layers,
    title: "Fluent in Both Worlds",
    description:
      "Deep, practitioner-level expertise in both AI and Web3 — not surface-level familiarity. We speak the language of engineers and the language of boardrooms.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-deep py-[clamp(4rem,8vw,7rem)]"
      aria-label="Why us"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <BlurFade delay={0.1} inView>
            <span className="text-blue text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4 block">
              Our Approach
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2
              className="font-display text-white"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Rigorous Thinking.{" "}
              <span className="gradient-text">Practical Outcomes.</span>
            </h2>
          </BlurFade>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <BlurFade key={reason.title} delay={0.15 + i * 0.1} inView>
              <div className="group p-8 rounded-xl border border-ki-border bg-surface/40 hover:bg-raised/50 hover:border-ki-border2 hover:-translate-y-[3px] transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-lg border border-ki-border bg-surface flex items-center justify-center mb-6 group-hover:border-ki-border2 transition-colors duration-300">
                  <reason.icon className="size-5 text-blue" />
                </div>
                <h3 className="text-white text-lg font-medium mb-3">
                  {reason.title}
                </h3>
                <p className="text-ki-muted2 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
