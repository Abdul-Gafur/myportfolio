"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-[#2e2839] text-center text-slate-500 text-sm"
    >
      <p>© 2026 Abdul-Gafur</p>
    </motion.footer>
  );
}
