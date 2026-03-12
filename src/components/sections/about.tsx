"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

const expertisePills = [
  "Machine Learning",
  "Blockchain",
  "DeFi",
  "LLMs",
  "AI Ethics",
  "Smart Contracts",
  "Product Strategy",
];

export function About() {
  return (
    <section
      id="about"
      className="bg-deep py-[clamp(4rem,8vw,7rem)]"
      aria-label="About"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <BlurFade delay={0.1} inView>
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ki-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Ameer Khan, Founder of Khanate Industries"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                <BorderBeam
                  colorFrom="#4B8BF4"
                  colorTo="#8B5CF6"
                  size={120}
                  duration={8}
                  borderWidth={1.5}
                />
                {/* Experience Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface/80 backdrop-blur-md border border-ki-border">
                  <span className="text-white text-sm font-medium">
                    10+ Years Expertise
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Text Column */}
          <div>
            <BlurFade delay={0.15} inView>
              <span className="text-blue text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4 block">
                Founder
              </span>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <h2
                className="font-display text-white mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                Ameer Khan
              </h2>
            </BlurFade>

            <BlurFade delay={0.35} inView>
              <blockquote className="border-l-2 border-blue pl-5 mb-8">
                <p className="text-ki-muted2 text-lg italic font-light leading-relaxed">
                  &ldquo;Most organizations don&rsquo;t have an AI problem. They
                  have a clarity problem.&rdquo;
                </p>
              </blockquote>
            </BlurFade>

            <BlurFade delay={0.45} inView>
              <div className="space-y-4 mb-8">
                <p className="text-ki-muted2 text-[0.95rem] leading-relaxed">
                  With over a decade of experience at the intersection of
                  emerging technology and business strategy, Ameer founded
                  Khanate Industries to bridge the gap between technical
                  possibility and strategic reality.
                </p>
                <p className="text-ki-muted2 text-[0.95rem] leading-relaxed">
                  His advisory work spans Fortune 500 enterprises to high-growth
                  startups, helping leadership teams make informed decisions
                  about AI adoption, Web3 integration, and digital
                  transformation — without the hype.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.55} inView>
              <div className="flex flex-wrap gap-2">
                {expertisePills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 rounded-full border border-ki-border bg-surface text-ki-muted2 text-xs font-medium tracking-wide"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
