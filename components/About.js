export default function About() {
  return (
    <section className="py-20 px-4 bg-[#141118]" id="about">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Bio */}
          <div className="md:col-span-5 flex flex-col gap-6 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bio &amp; Expertise
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Full-Stack Developer and DevOps Engineer with 5+ years of
              professional experience designing, deploying, and maintaining
              scalable, data-driven web platforms and enterprise systems across
              Africa. Specialist in interactive dashboard development, system
              integration, UX/UI design, and technical documentation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Proven ability to debug and modernise legacy systems, eliminate
              data silos, pilot automation and AI use cases, and
              institutionalise digital capacity through capacity-building
              workshops.
            </p>
            <div className="mt-4">
              <h3 className="text-white font-bold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  Cloud Infrastructure
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  CI/CD Pipelines
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  API Middleware Architecture
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  ERP Integration
                </span>
              </div>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Frontend */}
            <div
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl hover:-translate-y-1 hover:border-primary/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-primary mb-4 p-2 bg-primary/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">
                HTML5, CSS3, JavaScript (ES6+), React, Vue, Angular, UI/UX
                Design
              </p>
            </div>

            {/* Backend */}
            <div
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl hover:-translate-y-1 hover:border-primary/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
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
            </div>

            {/* DevOps */}
            <div
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl hover:-translate-y-1 hover:border-primary/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
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
            </div>

            {/* Databases & Tools */}
            <div
              className="bg-background-card border border-[#2e2839] p-6 rounded-xl hover:-translate-y-1 hover:border-primary/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
