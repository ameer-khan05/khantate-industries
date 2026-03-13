const items = [
  "Artificial Intelligence Strategy",
  "Web3 & Blockchain Advisory",
  "Executive Education",
  "Innovation Roadmapping",
  "Enterprise AI Readiness",
  "DeFi Strategy",
];

const allItems = [...items, ...items];

export function Ticker() {
  return (
    <div
      className="border-y border-border-subtle py-4 overflow-hidden bg-charcoal"
      aria-hidden="true"
    >
      <div className="flex gap-14 animate-ticker whitespace-nowrap">
        {allItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 text-[0.7rem] font-normal tracking-[0.15em] uppercase text-txt-muted shrink-0"
          >
            <span className="w-1 h-1 bg-gold/60 rounded-full shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
