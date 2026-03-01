import { FaAws, FaTrophy, FaRobot } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

export default function Certifications() {
  return (
    <section className="py-20 px-4 bg-background-dark border-t border-[#2e2839]">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              Certifications & Awards
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff9900]/50 hover:-translate-y-1 transition-all">
                <div className="bg-[#ff9900]/10 p-3 rounded text-[#ff9900] text-2xl">
                  <FaAws />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    AWS Certified Developer
                  </h4>
                  <p className="text-slate-500 text-xs">Associate Level</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff9900]/50 hover:-translate-y-1 transition-all">
                <div className="bg-[#ff9900]/10 p-3 rounded text-[#ff9900] text-2xl">
                  <FaAws />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    AWS Certified Cloud Practitioner
                  </h4>
                  <p className="text-slate-500 text-xs">Foundational</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#0089d6]/50 hover:-translate-y-1 transition-all">
                <div className="bg-[#0089d6]/10 p-3 rounded text-[#0089d6] text-2xl">
                  <VscAzure />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Microsoft Certified: Azure Developer
                  </h4>
                  <p className="text-slate-500 text-xs">Associate Level</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-[#ff6c37]/50 hover:-translate-y-1 transition-all">
                <div className="bg-[#ff6c37]/10 p-3 rounded text-[#ff6c37] text-2xl">
                  <SiPostman />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Postman API Student Expert
                  </h4>
                  <p className="text-slate-500 text-xs">API Fundamentals</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-yellow-500/50 hover:-translate-y-1 transition-all">
                <div className="bg-yellow-500/10 p-3 rounded text-yellow-500 text-2xl">
                  <FaTrophy />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Finalist – MTN Ayoba Hackathon 2021
                  </h4>
                  <p className="text-slate-500 text-xs">Award</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201b27] border border-[#2e2839] hover:border-purple-500/50 hover:-translate-y-1 transition-all">
                <div className="bg-purple-500/10 p-3 rounded text-purple-500 text-2xl">
                  <FaRobot />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    NoniHub Award – AI Innovation
                  </h4>
                  <p className="text-slate-500 text-xs">Award</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                favorite
              </span>
              Community &amp; Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                  female
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  Gender Equality in Tech
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                  science
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  STEAM Education
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                  public
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  Africa's Digital Transformation
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[#201b27] border border-[#2e2839] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                  cloud
                </span>
                <span className="text-slate-200 text-sm font-medium">
                  AI & Open-Source
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
