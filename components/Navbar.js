"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#2e2839] px-6 md:px-10 py-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-white cursor-pointer group"
        >
          <div className="size-8 text-primary group-hover:rotate-12 transition-transform duration-300">
            <span className="material-symbols-outlined text-3xl">terminal</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">
            Abdul-Gafur
          </h2>
        </Link>

        <nav
          className={`${isOpen ? "flex flex-col absolute top-[73px] left-0 w-full bg-background-dark p-6 border-b border-[#2e2839]" : "hidden"} md:flex md:static md:flex-row md:items-center gap-8 md:bg-transparent md:p-0 md:border-none md:w-auto`}
        >
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-6 rounded-lg items-center justify-center transition-all shadow-[0_0_15px_rgba(131,60,246,0.3)]">
          Hire Me
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </header>
  );
}
