const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-ki-border bg-void" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Khanate Industries home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-violet flex items-center justify-center text-white font-semibold text-xs tracking-tight">
            KI
          </div>
          <span className="text-white font-medium text-sm">
            Khanate Industries
          </span>
        </a>

        {/* Nav */}
        <nav
          className="flex items-center gap-6"
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ki-muted text-sm hover:text-ki-muted2 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-ki-muted text-xs">
          &copy; 2026 Khanate Industries &middot; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
