"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LangToggle from "./LangToggle";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale } = useLocale();
  const t = translations[locale].nav;

  const navLinks = [
    { href: "#projects", label: t.projects },
    { href: "#experience", label: t.experience },
    { href: "#blog", label: t.blog },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / site name */}
        <Link href="/" className="font-semibold text-brand text-lg tracking-tight">
          Jingqi Lu
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={locale === "zh" ? "/files/CV_Jingqi_zh.pdf" : "/files/CV_Jingqi.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-colors"
          >
            {t.cv}
          </a>
          <LangToggle />
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.toggleMenu}
          >
            <span
              className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-700 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={locale === "zh" ? "/files/CV_Jingqi_zh.pdf" : "/files/CV_Jingqi.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand font-medium"
          >
            {t.downloadCv}
          </a>
        </div>
      )}
    </header>
  );
}
