"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./ui";
import { NAV, PROFILE } from "@/content/site";

function isActive(pathname, href) {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  return p === href || p.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${PROFILE.name}, home`}>
          <span className="grid size-8 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-paper transition-transform duration-200 group-hover:-rotate-6">
            {PROFILE.initials}
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">{PROFILE.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {NAV.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:bg-wash hover:text-ink ${
                  active ? "text-ink" : "text-muted"
                }`}
              >
                {l.label}
                {active ? <span className="mt-0.5 block h-px bg-ink" aria-hidden="true" /> : null}
              </Link>
            );
          })}
        </nav>

        <a
          href={PROFILE.cv}
          download={PROFILE.cvFileName}
          className="hidden h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-ink-2 active:scale-[0.98] lg:inline-flex"
        >
          Download CV
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
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
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col py-4">
            {[{ href: "/", label: "Home" }, ...NAV].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={(l.href === "/" ? pathname === "/" : isActive(pathname, l.href)) ? "page" : undefined}
                className="border-b border-line py-4 font-display text-2xl font-semibold tracking-tight aria-[current=page]:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PROFILE.cv}
              download={PROFILE.cvFileName}
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
