"use client";

import { useEffect, useState } from "react";
import { Container } from "./ui";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent bg-paper/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Abdul-Gafur Saeed, back to top">
          <span className="grid size-8 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-paper transition-transform duration-200 group-hover:-rotate-6">
            AG
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">Abdul-Gafur Saeed</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:bg-wash hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/Abdul-Gafur_CV.pdf"
            download="Abdul-Gafur_Saeed_CV.pdf"
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-150 hover:bg-ink-2"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl font-semibold tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Abdul-Gafur_CV.pdf"
              download="Abdul-Gafur_Saeed_CV.pdf"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink text-base font-medium text-paper"
            >
              Download CV
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
