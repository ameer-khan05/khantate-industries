"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663431327938/RBSmLsH9Si5jtbTzPWwg6U/hero-bg-irEr8Z4jLtxgvWSfPnzx2B.webp";

const stats = [
  { value: "50+", label: "Enterprises Advised" },
  { value: "10+", label: "Years of Expertise" },
  { value: "4", label: "Core Practices" },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/95 to-void/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left column — content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2.5 mb-10 transition-all duration-1000 ease-out ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold">
                AI &amp; Web3 Advisory
              </span>
              <span className="text-[0.68rem] text-txt-muted mx-1">
                &middot;
              </span>
              <span className="text-[0.68rem] font-normal tracking-[0.12em] uppercase text-txt-muted-light">
                Est. 2024
              </span>
            </div>

            {/* Headline — word-by-word reveal */}
            <h1
              className="font-display font-light leading-[0.95] tracking-tight mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {["The", "Future", "Belongs", "to the"].map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em] text-[clamp(3rem,7vw,6.5rem)] text-warm-white word-reveal"
                  style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
              <br className="hidden sm:block" />
              <span
                className="inline-block text-[clamp(3rem,7vw,6.5rem)] grad-text word-reveal"
                style={{ animationDelay: "0.8s" }}
              >
                Informed.
              </span>
              {/* Gold underline */}
              <span className="block h-[1.5px] bg-gradient-to-r from-gold-light via-gold to-gold-dark mt-3 draw-line max-w-[280px]" />
            </h1>

            {/* Subheadline */}
            <p
              className={`text-[clamp(0.95rem,1.4vw,1.05rem)] font-light text-txt-muted-light max-w-[48ch] leading-[1.8] mb-12 transition-all duration-1000 ease-out delay-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Khanate Industries helps business leaders and enterprises cut
              through the noise — translating AI and Web3 from buzzwords into
              measurable competitive advantage.
            </p>

            {/* CTAs */}
            <div
              className={`flex items-center gap-5 flex-wrap transition-all duration-1000 ease-out ${
                loaded
                  ? "opacity-100 translate-y-0 delay-900"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={() => handleClick("#contact")}
                className="group inline-flex items-center gap-2.5 bg-gold text-void text-[0.85rem] font-medium py-3.5 px-7 rounded-sm border-none transition-all duration-600 hover:bg-gold-light hover:-translate-y-0.5"
              >
                Book a Strategy Call
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-600 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleClick("#services")}
                className="group inline-flex items-center gap-2 text-txt-muted-light text-[0.85rem] font-normal py-3.5 px-6 rounded-sm border border-border-subtle transition-all duration-600 hover:border-border-gold hover:text-warm-white hover:bg-white/[0.02]"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-600 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right column — stats */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end">
            <div
              className={`gold-frame rounded-sm overflow-hidden transition-all duration-1000 ease-out ${
                loaded
                  ? "opacity-100 translate-y-0 delay-500"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group py-7 px-9 transition-colors duration-600 hover:bg-white/[0.02] ${
                    i < stats.length - 1 ? "border-b border-border-subtle" : ""
                  }`}
                >
                  <div
                    className="text-[2.8rem] font-light leading-none mb-1.5 grad-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[0.68rem] font-normal tracking-[0.18em] uppercase text-txt-muted transition-colors duration-600 group-hover:text-txt-muted-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-6 lg:left-8 flex items-center gap-4 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 delay-1200" : "opacity-0"
        }`}
      >
        <div className="w-[1px] h-10 bg-border-subtle relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-pulse" />
        </div>
        <span className="text-[0.6rem] font-medium tracking-[0.25em] uppercase text-txt-muted">
          Scroll
        </span>
      </div>
    </section>
  );
}
