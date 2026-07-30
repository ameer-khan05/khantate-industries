const items = [
  "Product strategy",
  "Go-to-market",
  "Business development",
  "Positioning",
  "Partnerships",
  "Venture building",
];

export function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-black/20 bg-[#d7f63c] py-3.5" aria-hidden="true">
      <div className="ticker-track flex w-max items-center">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center text-[0.7rem] font-bold uppercase tracking-[0.13em]">
            <span className="mx-7 size-1.5 bg-[#17191d]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
