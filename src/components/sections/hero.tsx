"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";

const stats = [
  { value: 50, suffix: "+", label: "Enterprises Advised" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 4, suffix: "", label: "Core Services" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient Orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4B8BF4 0%, transparent 70%)",
          animation: "drift-1 12s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          animation: "drift-2 15s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-[20%] w-[350px] h-[350px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
          animation: "drift-3 10s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Dot Pattern */}
      <DotPattern
        width={40}
        height={40}
        cr={1}
        className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-32 flex items-center gap-16">
        {/* Left Column */}
        <div className="flex-1 max-w-[720px]">
          {/* Badge */}
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-ki-border bg-surface/50 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
              </span>
              <AnimatedShinyText className="text-ki-muted2 text-xs font-semibold tracking-[0.15em] uppercase">
                AI &amp; Web3 Advisory &middot; Est. 2024
              </AnimatedShinyText>
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.2} inView>
            <h1
              className="font-display leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(3.5rem, 8.5vw, 8rem)",
                fontWeight: 300,
              }}
            >
              The Future
              <br />
              Belongs to the
              <br />
              <span className="gradient-text">Informed.</span>
            </h1>
          </BlurFade>

          {/* Subheadline */}
          <BlurFade delay={0.35} inView>
            <p className="text-ki-muted2 text-lg leading-relaxed max-w-[540px] mb-10">
              Khanate Industries helps business leaders and enterprises cut
              through the noise — translating AI and Web3 from buzzwords into
              measurable competitive advantage.
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.5} inView>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-gradient-to-r from-blue to-violet text-white text-sm font-medium px-6 h-11 rounded-lg hover:opacity-90 hover:-translate-y-[2px] transition-all duration-200 shadow-[0_0_24px_rgba(75,139,244,0.2)]">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="text-ki-muted2 border-ki-border text-sm font-medium px-6 h-11 rounded-lg hover:text-white hover:border-ki-border2 hover:-translate-y-px transition-all duration-200"
                >
                  Explore Services
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Stat Panel — desktop only */}
        <BlurFade delay={0.6} inView direction="left">
          <div className="hidden lg:flex flex-col gap-0 w-[260px] rounded-xl border border-ki-border bg-surface/60 backdrop-blur-md overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-7 px-6 ${
                  i < stats.length - 1 ? "border-b border-ki-border" : ""
                }`}
              >
                <div className="text-white font-display text-4xl font-light mb-1.5 flex items-baseline">
                  <NumberTicker value={stat.value} delay={0.8 + i * 0.2} />
                  {stat.suffix && (
                    <span className="gradient-text">{stat.suffix}</span>
                  )}
                </div>
                <span className="text-ki-muted text-xs font-semibold tracking-[0.12em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-[clamp(1.5rem,5vw,4rem)] flex items-center gap-3 text-ki-muted">
        <div className="w-px h-8 bg-ki-border relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-blue"
            style={{
              height: "100%",
              animation: "fade-up 2s ease-in-out infinite",
            }}
          />
        </div>
        <span className="text-xs font-medium tracking-[0.15em] uppercase flex items-center gap-1.5">
          Scroll to explore
          <ChevronDown className="size-3 animate-bounce" />
        </span>
      </div>
    </section>
  );
}
