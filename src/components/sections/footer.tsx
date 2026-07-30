const links = [
  ["Ventures", "#ventures"],
  ["Capabilities", "#capabilities"],
  ["About", "#about"],
  ["Writing", "#writing"],
  ["Contact", "#contact"],
];

export function Footer() {
  return (
    <footer className="bg-[#17191d] py-8 text-white">
      <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center bg-[#d7f63c] text-[0.58rem] font-bold tracking-[0.14em] text-[#17191d]">AK</span>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em]">Ameer Khan / Khanate</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs text-white/55 no-underline transition-colors hover:text-white">{label}</a>
          ))}
        </nav>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Khanate.</p>
      </div>
    </footer>
  );
}
