"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-4 bg-background-dark relative overflow-hidden"
      id="experience"
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative pl-8 border-l border-[#2e2839] space-y-12"
        >
          {/* Item 1 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background-dark bg-primary group-hover:scale-125 transition-transform"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-white">DevOps Engineer</h3>
              <span className="text-sm font-medium text-slate-400">
                July 2025 - Present
              </span>
            </div>
            <div className="text-primary text-sm font-medium mb-3">
              CloudFruition • London, UK
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Architected and maintained CI/CD pipelines using GitHub Actions
              and Jenkins, reducing deployment time by 40%. Automated
              infrastructure provisioning with Terraform and AWS CloudFormation.
              Deployed AWS CloudWatch, Prometheus, and Grafana for real-time
              observability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                AWS
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Terraform
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                GitHub Actions
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Jenkins
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Prometheus / Grafana
              </span>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background-dark bg-slate-600 group-hover:bg-primary transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Technical Lead and Full-Stack Developer
              </h3>
              <span className="text-sm font-medium text-slate-400">
                Dec 2022 - Present
              </span>
            </div>
            <div className="text-primary text-sm font-medium mb-3">
              Paahibu Space • Wa, Ghana
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Architected and deployed Ndiara - a full-stack digital ecosystem
              for African women entrepreneurs. Integrated 6 independent
              sub-platforms via a centralised RESTful API middleware. Integrated
              multi-channel payment gateways, and facilitated 20+ STEAM
              workshops.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Laravel
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Figma
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                API Middleware
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Payment APIs
              </span>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background-dark bg-slate-600 group-hover:bg-primary transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Full-Stack Developer
              </h3>
              <span className="text-sm font-medium text-slate-400">
                June 2023 - Dec 2024
              </span>
            </div>
            <div className="text-primary text-sm font-medium mb-3">
              Namibra Inc • Kumasi, Ghana
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Built and launched a full-stack e-commerce platform with custom
              ERP system integration, streamlining business operations by 30%.
              Participated in 15+ agile sprint cycles and improved existing
              legacy codebases across 3 client platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                React.js
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Laravel
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                MySQL
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Docker
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                REST APIs
              </span>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background-dark bg-slate-600 group-hover:bg-primary transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Software Engineer
              </h3>
              <span className="text-sm font-medium text-slate-400">
                2020 - 2021
              </span>
            </div>
            <div className="text-primary text-sm font-medium mb-3">
              Nifty Global Systems (Part-Time)
            </div>
            <ul className="text-slate-400 text-sm leading-relaxed mb-4 list-disc pl-5 space-y-2">
              <li>
                Digitized the voting process for 5+ schools by reducing 60% in
                voting time and manual errors by building a secure online voting
                platform using PHP, Python and MySQL.
              </li>
              <li>
                Enhanced student records management for a college of 4,000+
                students as measured by faster results processing and
                accessibility by designing a custom MIS using PHP, Python,
                JavaScript, and SQL.
              </li>
              <li>
                Improved delivery and coordination across teams by 25% by
                collaborating with remote developers using Git and Trello.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                PHP
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                Python
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                JavaScript
              </span>
              <span className="text-xs px-2 py-1 bg-[#2e2839] rounded text-slate-300">
                MySQL
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
