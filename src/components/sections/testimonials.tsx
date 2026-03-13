"use client";

import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ameer helped us cut through the AI hype and build a practical roadmap that actually aligned with our business goals. Within 6 months, we'd deployed 3 high-impact use cases.",
    author: "Chief Strategy Officer",
    company: "Fortune 500 Financial Services",
    metric: "+43%",
    metricLabel: "Operational Efficiency",
  },
  {
    quote:
      "The Web3 advisory engagement was exceptional. They didn't just explain the technology — they helped us understand where it could create genuine competitive advantage.",
    author: "VP of Innovation",
    company: "Global Manufacturing Corp",
    metric: "$12M",
    metricLabel: "New Revenue Stream",
  },
  {
    quote:
      "The executive education program transformed how our leadership team thinks about emerging technology. It's rare to find someone who can make these concepts accessible without dumbing them down.",
    author: "Chief Learning Officer",
    company: "Enterprise Healthcare",
    metric: "200+",
    metricLabel: "Executives Trained",
  },
];

export function Testimonials() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      if (direction === "next") {
        setActive((prev) => (prev + 1) % testimonials.length);
      } else {
        setActive(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      }
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  useEffect(() => {
    const interval = setInterval(() => navigate("next"), 8000);
    return () => clearInterval(interval);
  }, [navigate]);

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 px-6 lg:px-8 bg-void"
      aria-label="Testimonials"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="reveal label-caps flex items-center gap-3 mb-5">
          <span className="w-6 h-[0.5px] bg-gold" />
          Client Impact
        </div>
        <h2
          className="reveal reveal-delay-1 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] text-warm-white mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Real Results from{" "}
          <span className="grad-text">Real Engagements</span>
        </h2>

        {/* Testimonial */}
        <div className="reveal reveal-delay-2">
          <div className="gold-frame rounded-sm p-8 lg:p-12 bg-charcoal">
            {/* Gold quote mark */}
            <div
              className="text-[4rem] leading-none text-gold/30 mb-4 select-none"
              style={{ fontFamily: "var(--font-display)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div
              key={active}
              className={
                isAnimating
                  ? "opacity-0 translate-y-2 transition-all duration-300"
                  : "fade-in-up"
              }
            >
              <blockquote
                className="text-[clamp(1.15rem,2.2vw,1.6rem)] font-light text-warm-white leading-[1.6] mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {current.quote}
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <div className="text-[0.88rem] font-normal text-warm-white mb-1">
                    {current.author}
                  </div>
                  <div className="text-[0.78rem] font-light text-txt-muted">
                    {current.company}
                  </div>
                </div>
                <div className="flex items-baseline gap-2 px-5 py-3 border border-border-subtle rounded-sm bg-void">
                  <span
                    className="text-[1.8rem] font-light grad-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {current.metric}
                  </span>
                  <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-txt-muted">
                    {current.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => !isAnimating && setActive(i)}
                  className={`h-[2px] rounded-full transition-all duration-600 ${
                    i === active
                      ? "w-8 bg-gold"
                      : "w-4 bg-border-subtle hover:bg-txt-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("prev")}
                className="w-10 h-10 border border-border-subtle rounded-sm flex items-center justify-center text-txt-muted transition-all duration-600 hover:border-border-gold hover:text-warm-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("next")}
                className="w-10 h-10 border border-border-subtle rounded-sm flex items-center justify-center text-txt-muted transition-all duration-600 hover:border-border-gold hover:text-warm-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
