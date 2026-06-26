import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contato', href: '#contato' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="font-serif text-2xl font-medium tracking-tight text-ivory"
        >
          Smeat
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden btn-primary md:inline-flex">
          Reservar mesa
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-px bg-ivory transition-all ${
              mobileOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-transform ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-ink transition-all duration-500 md:hidden ${
          mobileOpen ? 'max-h-96 border-b border-ivory/10' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 py-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-ivory/80"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primary mt-2 w-fit"
            onClick={() => setMobileOpen(false)}
          >
            Reservar mesa
          </a>
        </nav>
      </div>
    </header>
  );
}
