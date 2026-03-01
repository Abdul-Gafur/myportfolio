"use client";

import { FaAws, FaTrophy, FaRobot } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 bg-background-dark border-t border-[#2e2839]">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              Certifications & Awards
            </motion.h3>

            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff9900]/50 transition-all"
              >
                <div className="bg-[#ff9900]/10 p-3 rounded text-[#ff9900] text-2xl">
                  <FaAws />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    AWS Certified Developer
                  </h4>
                  <p className="text-slate-500 text-xs">Associate Level</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff9900]/50 transition-all"
              >
                <div className="bg-[#ff9900]/10 p-3 rounded text-[#ff9900] text-2xl">
                  <FaAws />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    AWS Certified Cloud Practitioner
                  </h4>
                  <p className="text-slate-500 text-xs">Foundational</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#0089d6]/50 transition-all"
              >
                <div className="bg-[#0089d6]/10 p-3 rounded text-[#0089d6] text-2xl">
                  <VscAzure />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Microsoft Certified: Azure Developer
                  </h4>
                  <p className="text-slate-500 text-xs">Associate Level</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff6c37]/50 transition-all"
              >
                <div className="bg-[#ff6c37]/10 p-3 rounded text-[#ff6c37] text-2xl">
                  <SiPostman />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Postman API Expert
                  </h4>
                  <p className="text-slate-500 text-xs">API Fundamentals</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary">
                favorite
              </span>
              Community &amp; Interests
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default group"
              >
                <span className="material-symbols-outlined text-primary mb-2 text-3xl group-hover:scale-110 transition-transform">
                  female
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  Gender Equality in Tech
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default group"
              >
                <span className="material-symbols-outlined text-primary mb-2 text-3xl group-hover:scale-110 transition-transform">
                  science
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  STEAM Education
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default group"
              >
                <span className="material-symbols-outlined text-primary mb-2 text-3xl group-hover:scale-110 transition-transform">
                  public
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  Africa's Digital Transformation
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default group"
              >
                <span className="material-symbols-outlined text-primary mb-2 text-3xl group-hover:scale-110 transition-transform">
                  cloud
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  AI & Open-Source
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
