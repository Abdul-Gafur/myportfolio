import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-[#141118]" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Featured Projects
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center text-primary hover:text-white transition-colors font-medium"
          >
            View Github{" "}
            <span className="material-symbols-outlined ml-1 text-sm">
              arrow_outward
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
            className="bg-background-card rounded-xl overflow-hidden border border-[#2e2839] group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="h-48 overflow-hidden relative">
              <div
                className="w-full h-full bg-slate-800 relative"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #2d2638, #1a1620)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                  <span className="material-symbols-outlined text-6xl">
                    public
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="https://ndiara.vercel.app"
                  target="_blank"
                  className="bg-white text-background-dark font-bold py-2 px-4 rounded-lg transform scale-90 group-hover:scale-100 transition-transform"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Ndiara Ecosystem
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                Full-stack digital ecosystem for African women entrepreneurs
                supporting E-Commerce, POS, HRM, and more, serving 2,000+ active
                users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Laravel
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Figma
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="bg-background-card rounded-xl overflow-hidden border border-[#2e2839] group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="h-48 overflow-hidden relative">
              <div
                className="w-full h-full bg-slate-800 relative"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #263145, #121826)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                  <span className="material-symbols-outlined text-6xl">
                    school
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="#"
                  className="bg-white text-background-dark font-bold py-2 px-4 rounded-lg transform scale-90 group-hover:scale-100 transition-transform"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">SmartSakuu</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                Full-stack institutional management platform digitising school
                operations into a unified dashboard for non-technical staff.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Full-stack
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  MySQL
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Data Dashboards
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="bg-background-card rounded-xl overflow-hidden border border-[#2e2839] group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="h-48 overflow-hidden relative">
              <div
                className="w-full h-full bg-slate-800 relative"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #2d2638, #4a1d8a)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                  <span className="material-symbols-outlined text-6xl">
                    payments
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href="#"
                  className="bg-white text-background-dark font-bold py-2 px-4 rounded-lg transform scale-90 group-hover:scale-100 transition-transform"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                PayFast Gift Card Trading
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                Full-stack gift card trading platform featuring secure payment
                flows, real-time transaction processing, and multi-currency
                support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Payment APIs
                </span>
                <span className="text-xs px-2 py-1 bg-[#2e2839] text-primary rounded">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
