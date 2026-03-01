"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#2e2839] px-6 md:px-10 py-4"
    >
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:static md:flex-row md:items-center gap-8 md:bg-transparent md:p-0 md:border-none md:w-auto">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-primary text-sm font-medium transition-colors"
            >
              <motion.span whileHover={{ y: -2 }} className="inline-block">
                {item}
              </motion.span>
            </Link>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-6 rounded-lg items-center justify-center transition-colors shadow-[0_0_15px_rgba(131,60,246,0.3)]"
        >
          Hire Me
        </motion.button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col absolute top-[73px] left-0 w-full bg-background-dark p-6 border-b border-[#2e2839] gap-4 shadow-xl z-40 md:hidden"
            >
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-primary text-lg font-medium transition-colors border-b border-[#2e2839] pb-4 last:border-0"
                >
                  {item}
                </Link>
              ))}
              <button
                className="mt-4 bg-primary text-white font-bold h-12 rounded-lg w-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
