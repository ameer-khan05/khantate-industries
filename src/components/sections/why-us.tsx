"use client";

import { useReveal } from "@/hooks/useReveal";

const reasons = [
  {
    num: "01",
    title: "No Fluff, No Filler",
    body: "We don't pad deliverables. Every recommendation is anchored in evidence and implementable within your constraints.",
  },
  {
    num: "02",
    title: "Operator-Turned-Advisor",
    body: "We've built products, shipped code, and scaled teams. Our advice comes from doing the work, not just studying it.",
  },
  {
    num: "03",
    title: "Technology-Agnostic",
    body: "We're not selling a platform or pushing a vendor. Our loyalty is to outcomes, not ecosystems.",
  },
];

export function WhyUs() {
  const ref = useReveal();

  return (
    <section
      id="why"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-charcoal"
      aria-label="Why us"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal label-caps flex items-center gap-3 mb-5">
          <span className="w-6 h-[0.5px] bg-gold" />
          Our Approach
        </div>
        <h2
          className="reveal reveal-delay-1 text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.05] text-warm-white mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Rigorous Thinking.
          <br />
          <span className="grad-text">Practical Outcomes.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.num}
              className={`reveal reveal-delay-${index + 1} gold-frame rounded-sm p-8 bg-void transition-all duration-600 hover:border-gold/40`}
            >
              <div className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-gold mb-6">
                {reason.num}
              </div>
              <h3
                className="text-[1.3rem] font-normal text-warm-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {reason.title}
              </h3>
              <p className="text-[0.85rem] font-light text-txt-muted-light leading-[1.8]">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
