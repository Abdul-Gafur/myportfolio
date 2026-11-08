import { Container, Label, SectionHeader, ArrowUpRight } from "./ui";
import AskAUFeature from "./AskAUFeature";

/* ---------- small visuals, drawn in code ----------
   Each shows its finished picture by default; elements marked .lp replay a short
   loop while the pointer rests on the card (see "Card loops" in globals.css). */

function Bar({ label, value, loop }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm text-muted">
        <span>{label}</span>
        <span className="font-mono text-ink">{value}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-wash">
        <div className="lp h-full rounded-full bg-ink" style={{ width: `${value}%`, "--lp": loop }} />
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

const PIPELINE = [
  ["Collect", "DHIS2"],
  ["Stream", "Kafka · Airflow"],
  ["Store", "ClickHouse"],
  ["Report", "Power BI"],
];

function PipelineVisual() {
  return (
    <div aria-hidden="true">
      <div className="relative">
        <div className="absolute inset-x-6 top-1/2 hidden h-px overflow-hidden bg-line sm:block">
          <div className="lp absolute inset-0" style={{ "--lp": "pipe-run" }}>
            <span className="absolute right-0 top-1/2 h-[3px] w-10 -translate-y-1/2 rounded-full bg-accent" />
          </div>
        </div>
        <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PIPELINE.map(([step, tool]) => (
            <li key={step} className="rounded-xl border border-line bg-card px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">{step}</p>
              <p className="mt-1 text-[13px] font-medium leading-tight text-ink">{tool}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-3 rounded-xl bg-wash px-3 py-2.5 text-center font-mono text-[11px] text-muted">
        Kong gateway · Keycloak identity · Camunda approvals
      </p>
    </div>
  );
}

function SyncRow({ label, before, after }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 text-sm">
      <span className="text-muted">{label}</span>
      <span className="grid justify-items-end font-mono text-xs">
        <span className="lp lp-swap-a flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "emr-a" }}>
          {before}
        </span>
        <span className="lp flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "emr-b" }}>
          {after}
        </span>
      </span>
    </div>
  );
}

function EmrVisual() {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line" aria-hidden="true">
      <SyncRow
        label="Network"
        before={<><span className="size-1.5 rounded-full bg-zinc-400" /> Offline</>}
        after={<><span className="size-1.5 rounded-full bg-accent" /> Back online</>}
      />
      <SyncRow
        label="Patient records"
        before={<><span className="lp-spin size-3 rounded-full border-[1.5px] border-zinc-400 border-t-transparent" /> 3 saved on device</>}
        after={
          <>
            <svg className="size-3 text-accent" viewBox="0 0 12 12" fill="none">
              <path d="m2.5 6.2 2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            3 synced
          </>
        }
      />
    </div>
  );
}

/* ---------- building blocks ---------- */

function Part({ label, children }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{label}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function Card({ meta, badge, title, problem, did, result, visual, loop }) {
  return (
    <article
      data-loop={loop ? "hover" : undefined}
      className="flex flex-col rounded-[24px] border border-line bg-card p-7 transition-colors duration-200 hover:border-zinc-300 sm:p-9"
    >
      <div className="flex items-center justify-between gap-3">
        <Label>{meta}</Label>
        {badge ? (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] [font-stretch:92%] sm:text-[1.75rem]">
        {title}
      </h3>
      <Part label="Problem">{problem}</Part>
      <Part label="What I did">{did}</Part>
      <div className="mt-auto pt-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Result</p>
        <div className="mt-4">{visual}</div>
        {result ? <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{result}</p> : null}
      </div>
    </article>
  );
}

const MORE = [
  {
    title: "Gender Observatory Hub",
    role: "Technical advisor",
    text: "A continental platform for 30 statutory gender indicators had to meet the same delivery rules as every MISD system. I gave the delivery team technical advice and checked its design and delivery against the AUC SDLC SOP and development guidelines.",
    stack: ".NET · Next.js · Power BI",
    meta: "AUC · 2026",
  },
  {
    title: "MISD delivery & security standards",
    role: "Author",
    text: "MISD teams had no shared rules for building, securing and approving software. I drafted a 24-section SDLC SOP, a security standard mapping 130 OWASP ASVS 4.0.3 requirements across 14 domains and tiered by risk, and a technology selection guideline with sign-off for anything non-standard. All three are with the Director for approval.",
    stack: "SDLC · OWASP ASVS · CI/CD gates",
    meta: "AUC · 2026",
  },
  {
    title: "Pension Contribution Upload",
    role: "Architect",
    text: "A failed CSV import could leave pension contributions half-written. I designed a validate, preview, then commit-in-one-transaction flow in a React and FastAPI modular monolith, so an upload either lands completely or not at all.",
    stack: "React · FastAPI · PostgreSQL",
    meta: "AUC · 2026",
  },
  {
    title: "Calls-for-applications portal",
    role: "Architect",
    text: "Directorates run their calls separately, and evaluators must never see another directorate's applicants. I set tenant boundaries per directorate and role permissions across submission, evaluation and approval, documented for the delivery team.",
    stack: "Multi-tenant · RBAC",
    meta: "AUC · 2026",
  },
  {
    title: "Citizen Engagement Hub",
    role: "Developer",
    text: "The AUC needed a digital channel for citizens to take part in its work. I set up the Java application foundation the platform is built on.",
    stack: "Java",
    meta: "AUC · 2026",
  },
  {
    title: "CloudSnap",
    role: "Developer",
    text: "Recovering workloads between AWS and Azure was slow. I built CloudSnap's .NET integration services for automated cross-cloud backup and migration across 15+ microservices, cutting recovery time objectives by 40%.",
    stack: ".NET · Azure · AWS",
    meta: "CloudFruition · 2025",
  },
  {
    title: "ECG arrhythmia detection",
    role: "BSc thesis",
    text: "Accurate arrhythmia models are too big for wearables. Using first-order movement pruning, tested on patients the model had never seen, I made the CNN 3.8× smaller and kept 96.2% sensitivity for ventricular ectopic beats.",
    stack: "TensorFlow · Keras · MIT-BIH",
    meta: "Research · 2025",
  },
  {
    title: "SmartSakuu",
    role: "Founder",
    text: "Teachers preparing students for BECE and WASSCE can't diagnose every learner's gaps by hand. The AI tutor reads quiz results and writes practice questions aligned to GES and NaCCA standards; personal data is scrubbed and a teacher approves every question. Piloted in 8 schools with 600+ students and teachers.",
    stack: "LLMs · PII scrubbing · Multi-tenant SaaS",
    meta: "Founder",
  },
  {
    title: "Smart power bank rental",
    role: "Technical lead",
    text: "The client's rental cabinets used a proprietary vendor protocol. I analysed the protocol and designed a Node.js, Laravel and Flutter platform around an EMQX MQTT broker to bring the devices online.",
    stack: "Node.js · Laravel · Flutter · MQTT",
    meta: "Client · 2026",
  },
];

/* ---------- the section ---------- */

export default function Projects() {
  return (
    <section id="work" className="pt-28 sm:pt-36">
      <Container>
        <SectionHeader label="Selected work" title="Real problems, what I did about them, and what changed." />

        <AskAUFeature />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card
            loop
            meta="AU Commission · Architecture · 2026"
            title="Blue Economy reporting platform"
            problem="Member States report blue-economy data in different tools and formats, so the AUC can't compare them, and under the Malabo Convention the data can't sit on foreign clouds."
            did="Compared KoboToolbox and DHIS2 for collection, then designed a target architecture on AU infrastructure. I co-designed the 30 KPIs and the AUBEI scoring framework it reports against."
            visual={<PipelineVisual />}
            result="One route from national submissions to verified, comparable indicators, with restricted reporting kept apart from the public knowledge hub."
          />

          <Card
            loop
            meta="GIZ Data Lab · 2026"
            badge="Winner"
            title="ScrapTrace"
            problem="E-waste changes hands between collectors and recyclers with no record anyone can trust, so recovered material can't be traced."
            did="Built the FastAPI, Next.js and PostgreSQL backend with QR handoffs and records that can't be altered. Defined 21 JSON Schema contracts between the web, backend and vision services, and tested 3,648 permission combinations."
            visual={
              <div className="space-y-5">
                <Bar label="Image classifier accuracy" value={87.1} loop="bar-1" />
                <Bar label="Macro F1" value={81.35} loop="bar-2" />
              </div>
            }
            result="Winning team entry at the GIZ Data Lab E-Waste Hackathon 2026."
          />

          <Card
            meta="Paahibu Space · CTO · 2022–2026"
            title="Ndiara"
            problem="Women-led businesses ran sales, stock, staff and payments in separate tools, and programme reports took days to put together."
            did="Led a 5-person team building one multi-tenant platform (POS, HR, e-commerce, accounting, wallet), with a single REST middleware layer for SAP S/4HANA, six platforms and 7+ payment gateways."
            visual={
              <div className="grid grid-cols-2 gap-6">
                <Stat value="2,000+" label="users on one platform" />
                <Stat value="<10 min" label="per report, down from 3–5 days" />
              </div>
            }
          />

          <Card
            loop
            meta="Health informatics · 2024–2025"
            title="Offline-first clinic records"
            problem="Rural clinics in Wa lose connectivity mid-consultation, and nobody sees a stockout or an expiring batch coming."
            did="Built an EMR prototype that keeps working offline and syncs in the background. Its stock engine uses average monthly consumption and first-expired-first-out tracking to estimate how many days of stock are left."
            visual={<EmrVisual />}
            result="Checked against the clinics' past dispensing logs, it flags stockout risk and suggests moving stock to another facility before it expires."
          />
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Label>More projects</Label>
          </div>
          <ul className="md:col-span-9">
            {MORE.map((p) => (
              <li key={p.title} className="grid gap-2 border-t border-line py-7 last:border-b sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-accent">{p.role}</p>
                  <p className="text-sm text-subtle">{p.meta}</p>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-subtle">{p.stack}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="https://github.com/Abdul-Gafur"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
          >
            More on GitHub
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
