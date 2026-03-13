const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6 lg:px-8 bg-void" role="contentinfo">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <a
          href="#hero"
          className="flex items-center gap-3 no-underline group"
          aria-label="Khanate Industries home"
        >
          <div className="w-6 h-6 border border-border-gold rounded-sm flex items-center justify-center">
            <span className="text-[0.5rem] font-semibold tracking-[0.1em] text-gold">
              KI
            </span>
          </div>
          <span className="text-[0.82rem] font-medium tracking-[0.06em] text-warm-white">
            Khanate Industries
          </span>
        </a>

        <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.75rem] font-light text-txt-muted no-underline transition-colors duration-600 hover:text-warm-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-[0.7rem] font-light text-txt-muted">
          &copy; {new Date().getFullYear()} Khanate Industries. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
