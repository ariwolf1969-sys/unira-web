"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/acerca", label: "Acerca de" },
  { href: "/cooperativa", label: "Cooperativa" },
  { href: "/finanzas", label: "Finanzas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-lg transition-transform group-hover:scale-110">U</div>
            <span className="text-xl font-bold text-foreground"><span className="gradient-text">Unira</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href ? "bg-primary/10 text-primary" : "text-muted hover:text-foreground hover:bg-surface-light"}`}>{link.label}</Link>
            ))}
            <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="ml-3 px-5 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-all duration-200">Pre-inscribirse</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-light transition-colors" aria-label="Abrir menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === link.href ? "bg-primary/10 text-primary" : "text-muted hover:text-foreground hover:bg-surface-light"}`}>{link.label}</Link>
            ))}
            <Link href="https://forms.gle/pqC3Y5cpi6urC9ya9" target="_blank" rel="noopener noreferrer" className="block mt-2 px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg text-center transition-all">Pre-inscribirse</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
