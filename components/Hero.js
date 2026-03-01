import Link from "next/link";
import Image from "next/image";

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
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-2 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for work
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Software &amp; <br />{" "}
            <span className="text-primary text-glow">DevOps</span> Engineer
          </h1>
          <p
            className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Building scalable systems and driving digital transformation across
            Africa. 5+ years of experience designing, deploying, and maintaining
            scalable web platforms and enterprise systems across Africa.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
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
          </div>
          <div className="flex items-center gap-8 mt-12 text-slate-500 w-full justify-center lg:justify-start">
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
          </div>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-accent-glow/50 shadow-cyan-glow animate-pulse"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background-dark bg-[#2e2839] z-10">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 relative">
                {/* 
                  Note: Place the image provided into the 'public' folder and name it 'profile.jpg'.
                  The Image component will automatically load it. 
                */}
                <Image
                  src="/profile.jpg"
                  alt="Abdul-Gafur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 bg-background-card p-3 rounded-xl border border-[#2e2839] shadow-lg z-20 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <span className="material-symbols-outlined text-accent-cyan text-3xl">
                cloud
              </span>
            </div>
            <div
              className="absolute -bottom-2 -left-4 bg-background-card p-3 rounded-xl border border-[#2e2839] shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "3s" }}
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
