const steps = [
  ["01", "Understand the technology", "Get beneath the demo, jargon, and inherited assumptions."],
  ["02", "Identify the wedge", "Choose the market, user, and urgent problem that create momentum."],
  ["03", "Shape the product", "Align the experience and roadmap around real adoption."],
  ["04", "Build the narrative", "Make the value clear to customers, partners, and investors."],
  ["05", "Open the market", "Create conversations, partnerships, and repeatable commercial motion."],
];

export function WhyUs() {
  return (
    <section className="border-b border-black/20 py-20 lg:py-28" aria-labelledby="method-title">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <span className="eyebrow text-[#ee5d32]">Operating method</span>
          <h2 id="method-title" className="display mt-7 max-w-[8ch] text-[clamp(3.2rem,5vw,5.5rem)] leading-[0.92]">
            Clarity before scale.
          </h2>
          <p className="mt-7 max-w-[35ch] text-sm leading-6 text-black/58">
            I work at the seam between the product and the market—where technical
            ambition becomes a focused commercial strategy.
          </p>
        </div>
        <ol className="border-t border-black/25">
          {steps.map(([number, title, body]) => (
            <li key={number} className="grid gap-3 border-b border-black/25 py-5 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-baseline">
              <span className="text-[0.66rem] font-bold text-[#2447e8]">{number}</span>
              <strong className="text-sm">{title}</strong>
              <span className="text-sm leading-6 text-black/55">{body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
