"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 py-20">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#443b54 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="relative z-10 max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Software &amp; <br />{" "}
            <span className="text-primary text-glow">DevOps</span> Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed"
          >
            Building scalable systems and driving digital transformation across
            Africa. 5+ years of experience designing, deploying, and maintaining
            scalable web platforms and enterprise systems across Africa. AWS and Azure Certified Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6"
          >
            <a
              className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-[#443b54] bg-transparent hover:bg-[#2e2839] text-white text-base font-bold transition-all transform hover:-translate-y-1"
              href="/Abdul-Gafur_CV.pdf"
              download="Abdul-Gafur_CV.pdf"
            >
              <span className="material-symbols-outlined mr-2 text-sm">
                download
              </span>
              Download CV
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex items-center gap-8 mt-12 text-slate-500 w-full justify-center lg:justify-start"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-white">5+</span>
              <span className="text-xs uppercase tracking-wide">
                Years Exp.
              </span>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-white">40+</span>
              <span className="text-xs uppercase tracking-wide">Projects</span>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-xs uppercase tracking-wide">Uptime</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-accent-glow/50 shadow-cyan-glow animate-pulse"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background-dark bg-[#2e2839] z-10">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 relative">
                <Image
                  src="/profile.jpg"
                  alt="Abdul-Gafur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-background-card p-3 rounded-xl border border-[#2e2839] shadow-lg z-20"
            >
              <span className="material-symbols-outlined text-accent-cyan text-3xl">
                cloud
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute -bottom-2 -left-4 bg-background-card p-3 rounded-xl border border-[#2e2839] shadow-lg z-20"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                code
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
