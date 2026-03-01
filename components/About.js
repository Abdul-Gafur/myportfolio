"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#141118]" id="about">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bio &amp; Expertise
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed"
            >
              Full-Stack Developer and DevOps Engineer with 5+ years of
              professional experience designing, deploying, and maintaining
              scalable, data-driven web platforms and enterprise systems across
              Africa. Specialist in interactive dashboard development, system
              integration, UX/UI design, and technical documentation.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed"
            >
              Proven ability to debug and modernise legacy systems, eliminate
              data silos, pilot automation and AI use cases, and
              institutionalise digital capacity through capacity-building
              workshops.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-4">
              <h3 className="text-white font-bold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cloud Infrastructure",
                  "CI/CD Pipelines",
                  "API Middleware Architecture",
                  "ERP Integration",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Frontend */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.5)",
              }}
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl transition-all group"
            >
              <div className="text-primary mb-4 p-2 bg-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">
                HTML5, CSS3, JavaScript (ES6+), React, Vue, Angular, UI/UX
                Design
              </p>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.5)",
              }}
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl transition-all group"
            >
              <div className="text-accent-cyan mb-4 p-2 bg-accent-cyan/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                Backend & APIs
              </h3>
              <p className="text-slate-400 text-sm">
                PHP (Laravel), Python (Django, Flask), Node.js, RESTful API
                Design, Middleware
              </p>
            </motion.div>

            {/* DevOps */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.5)",
              }}
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl transition-all group"
            >
              <div className="text-orange-400 mb-4 p-2 bg-orange-400/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                DevOps &amp; Cloud
              </h3>
              <p className="text-slate-400 text-sm">
                AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD
              </p>
            </motion.div>

            {/* Databases & Tools */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                borderColor: "rgba(var(--primary-rgb), 0.5)",
              }}
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl transition-all group"
            >
              <div className="text-green-400 mb-4 p-2 bg-green-400/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                Databases & Tools
              </h3>
              <p className="text-slate-400 text-sm">
                MySQL, PostgreSQL, Power BI, Git, GitHub, GitLab, SOP Drafting
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
