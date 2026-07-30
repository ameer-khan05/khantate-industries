export function About() {
  return (
    <section id="about" className="border-b border-black/20 py-20 lg:py-28" aria-labelledby="about-title">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <div className="portrait-placeholder relative min-h-[32rem] overflow-hidden border border-black/25 p-7 text-white">
          <div className="flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.13em]">
            <span>Portrait placeholder</span>
            <span>To be replaced</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="display text-[clamp(8rem,22vw,15rem)] leading-none tracking-[-0.1em] text-white/95">AK</span>
          </div>
          <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-5 border-t border-white/50 pt-4">
            <span className="max-w-[18ch] text-xs font-bold uppercase tracking-[0.1em]">Operator · Advisor · Builder</span>
            <span className="text-xs">Chicago</span>
          </div>
        </div>

        <div className="flex flex-col justify-between lg:pl-8">
          <div>
            <span className="eyebrow text-[#2447e8]">About Ameer</span>
            <h2 id="about-title" className="display mt-7 max-w-[11ch] text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.92]">
              I work where the product meets the market.
            </h2>
          </div>

          <div className="mt-12 grid gap-7 border-t border-black/25 pt-7 md:grid-cols-2">
            <p className="text-base leading-7 text-black/70">
              I help early-stage teams make better product decisions, tell a sharper
              story, and create the relationships that move a company forward.
            </p>
            <p className="text-base leading-7 text-black/70">
              My current portfolio spans personal health data, AI-agent governance,
              decentralized finance, and computational expert intelligence. The
              categories change; the work remains the same: turn complexity into
              traction.
            </p>
          </div>

          <blockquote className="display mt-12 border-l-4 border-[#ee5d32] pl-6 text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.02]">
            “The best strategy is specific enough to change what gets built next.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
