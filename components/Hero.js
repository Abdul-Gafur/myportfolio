import fs from "node:fs";
import path from "node:path";
import { Container, Label, ArrowDown } from "./ui";

const STATS = [
  { value: "6", unit: "years", text: "across software engineering, cloud and technical leadership" },
  { value: "4", unit: "apps", text: "enterprise applications I architect at the AU Commission" },
  { value: "13+", unit: "integrations", text: "SAP S/4HANA, six platforms and 7+ payment gateways on Ndiara" },
  { value: "88%", unit: "recall@5", text: "on AskAU, the AU Commission's policy assistant" },
];

const ROLES = ["Solution architecture", "Full-stack development", "Applied AI", "Cloud & DevOps"];

// Cut-out portrait on white (public/profile.png) replaces the older photo once it is added.
const CUTOUT = fs.existsSync(path.join(process.cwd(), "public", "profile.png"));

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="animate-rise flex flex-wrap items-center gap-x-3 gap-y-2">
              <Label className="text-ink">Abdul-Gafur Saeed</Label>
              <span className="hidden h-px w-6 bg-line sm:block" aria-hidden="true" />
              <Label>Addis Ababa, Ethiopia</Label>
            </div>

            <h1 className="animate-rise mt-6 font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] [animation-delay:60ms] [font-stretch:88%] sm:text-6xl lg:text-[5.25rem]">
              I design and build the software institutions run on.
            </h1>

            <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:120ms] sm:text-xl">
              At the African Union Commission I turn directorate problems into working systems: a policy assistant
              that cites its sources, a continental reporting platform hosted on AU servers, and the delivery and
              security standards MISD projects are built to. Before that, I was CTO of a platform with 2,000+ users
              and cut release times from hours to minutes as a DevOps engineer.
            </p>

            <ul className="animate-rise mt-6 flex flex-wrap gap-2 [animation-delay:150ms]" aria-label="Disciplines">
              {ROLES.map((r) => (
                <li key={r} className="rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink-2">
                  {r}
                </li>
              ))}
            </ul>

            <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row">
              <a
                href="#work"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-colors duration-150 hover:bg-ink-2"
              >
                See selected work
                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-card px-6 text-[15px] font-medium text-ink transition-colors duration-150 hover:border-ink"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms] lg:col-span-5">
            <figure className="relative overflow-hidden rounded-[28px] bg-wash">
              {CUTOUT ? (
                <img
                  src="/profile.png"
                  alt="Portrait of Abdul-Gafur Saeed"
                  width="434"
                  height="575"
                  className="aspect-[4/5] w-full object-cover object-[50%_10%] mix-blend-multiply sm:aspect-square lg:aspect-[4/5]"
                  fetchPriority="high"
                />
              ) : (
                <img
                  src="/profile.jpg"
                  alt="Portrait of Abdul-Gafur Saeed"
                  width="1024"
                  height="996"
                  className="aspect-[4/5] w-full object-cover object-[50%_18%] sm:aspect-square lg:aspect-[4/5]"
                  fetchPriority="high"
                />
              )}
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/60 bg-white/90 p-4 backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                <div className="flex items-center justify-between gap-3">
                  <Label>Currently</Label>
                  <Label>Since Apr 2026</Label>
                </div>
                <p className="mt-1.5 text-[15px] font-medium leading-snug text-ink">
                  Senior Solution Architect
                </p>
                <p className="text-sm text-muted">African Union Commission · AU Digital &amp; Innovation Fellowship</p>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-line sm:mt-20 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.unit}
              className={[
                "py-6 pr-4 sm:py-8",
                i % 2 === 1 ? "border-l border-line pl-4 sm:pl-6" : "",
                i === 2 ? "lg:border-l lg:pl-6" : "",
                i > 1 ? "border-t border-line lg:border-t-0" : "",
              ].join(" ")}
            >
              <dt className="sr-only">{s.unit}</dt>
              <dd>
                <span className="font-display text-4xl font-semibold tracking-[-0.03em] [font-stretch:90%] sm:text-5xl">
                  {s.value}
                </span>
                <span className="ml-1.5 font-mono text-xs uppercase tracking-wider text-subtle">{s.unit}</span>
                <p className="mt-2 max-w-[26ch] text-sm leading-snug text-muted">{s.text}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
