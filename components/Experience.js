export default function Experience() {
  return (
    <section
      className="py-20 px-4 bg-background-dark relative overflow-hidden"
      id="experience"
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Professional Experience
          </h2>
        </div>

        <div className="relative pl-8 border-l border-[#2e2839] space-y-12">
          {/* Item 1 */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
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
          </div>

          {/* Item 2 */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
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
          </div>

          {/* Item 3 */}
          <div
            className="relative group animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
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
          </div>
        </div>
      </div>
    </section>
  );
}
