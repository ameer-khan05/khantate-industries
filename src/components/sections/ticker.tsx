import { Marquee } from "@/components/ui/marquee";

const items = [
  "Artificial Intelligence Strategy",
  "Web3 & Blockchain Advisory",
  "Executive Education",
  "Innovation Roadmapping",
  "Enterprise AI Readiness",
  "DeFi Strategy",
];

function TickerItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-6 mx-6">
      <span className="text-ki-muted2 text-sm font-medium tracking-wide whitespace-nowrap">
        {text}
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full bg-blue shrink-0"
        aria-hidden="true"
      />
    </div>
  );
}

export function Ticker() {
  return (
    <section
      className="border-t border-b border-ki-border bg-deep py-4 overflow-hidden"
      aria-label="Services marquee"
    >
      <Marquee pauseOnHover className="[--duration:30s]">
        {items.map((item) => (
          <TickerItem key={item} text={item} />
        ))}
      </Marquee>
    </section>
  );
}
