import { SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { Container, Label, SectionHeader } from "./ui";

const ROLES = [
  {
    role: "Senior Solution Architect",
    dates: "Apr 2026 – Present",
    org: "African Union Commission",
    place: "Addis Ababa, Ethiopia",
    note: "MIS Application Unit · AU Digital & Innovation Fellowship",
    summary:
      "Directorates bring MISD a growing list of requests, and projects had no common rules for delivery. I turn those requests into requirements and architectures for four enterprise applications: pension management, Blue Economy reporting, the AskAU assistant and a multi-tenant calls portal. I drafted the SDLC, technology selection and OWASP ASVS standards that projects are checked against, advise the Gender Observatory Hub team on meeting them, and set up the Java foundation of the Citizen Engagement Hub. I also trained 60+ staff across 3 directorates to use generative AI safely.",
    tags: ["Solution architecture", "Java", "Python", "FastAPI", "DHIS2", "Entra ID", "SharePoint", "OWASP ASVS"],
  },
  {
    role: "Software Developer",
    dates: "Nov 2025 – Mar 2026",
    org: "PayFast",
    place: "Tamale, Ghana",
    summary:
      "A gift-card platform needed payment workflows that only the right people could touch. I took it from requirements to production support, added authentication and role-based access to every payment action, and built three admin dashboards (transactions, user activity, system performance) from shared components, so each new report reuses existing parts.",
    tags: ["Payments", "Authentication", "RBAC", "Dashboards"],
  },
  {
    role: "DevOps Engineer",
    dates: "Jul 2025 – Mar 2026",
    org: "CloudFruition",
    place: "London, UK (Remote)",
    summary:
      "Releases and environments were set up by hand, which slowed delivery and invited mistakes. I built 20+ GitHub Actions and Jenkins pipelines and provisioned AWS with Terraform and CloudFormation, cutting deployment lead time from hours to under 15 minutes. I built CloudSnap's .NET recovery services between AWS and Azure, cutting recovery time objectives by 40%, and enforced least-privilege access across 50+ IAM roles while keeping 99.9% uptime.",
    tags: ["AWS", "Azure", "Terraform", "GitHub Actions", "Jenkins", ".NET", "Grafana"],
  },
  {
    role: "Software Engineer",
    dates: "Jun 2023 – Dec 2024",
    org: "Namibra Inc",
    place: "Kumasi, Ghana",
    summary:
      "Clients needed slow, manual business processes turned into working software. I built Dreamchasers as a containerised Java application, working with the team in agile sprints on GitLab. I also automated an ERP workflow from 14 steps to 4 through API integrations, then tested and maintained it in production.",
    tags: ["Java", "Docker", "GitLab", "Laravel", "Python", "SQL"],
  },
  {
    role: "CTO & Technical Lead",
    dates: "Dec 2022 – Mar 2026",
    org: "Paahibu Space",
    place: "Wa, Ghana (Hybrid)",
    summary:
      "Women-led businesses were juggling separate tools for sales, staff and payments. I led a 5-person team to build Ndiara, one multi-tenant platform with 2,000+ users, joined to SAP S/4HANA, six platforms and 7+ payment gateways through a single REST middleware layer. That automation cut programme reporting from 3–5 days to under 10 minutes. I also shaped Digital Walansi, a multilingual fact-checking service that answers only from approved sources, with human review.",
    tags: ["Laravel", "Next.js", ".NET", "SAP S/4HANA", "REST middleware", "Team lead"],
  },
];

const EARLIER = [
  ["Software & Cloud Facilitator", "High Ranking Academy", "2021 – 2022", "Moved school operations into a custom management system and trained staff to use cloud storage every day."],
  ["Full-Stack Developer", "Nifty Global Systems", "2020 – 2021", "Built an online voting system (PHP/MySQL) and a logistics tracker (Django), and supported a university information system."],
  ["Tech Lead & Facilitator", "NoniHub", "2020 – 2021", "Led development teams and mentored entrepreneurs in web, mobile and cloud; NoniHub AI Innovation Award."],
];

const EDUCATION = [
  ["MSc Computer Science", "University of East London", "2025 – 2026"],
  ["BSc Computer Science", "University of Business and Integrated Development Studies, Wa", "2021 – 2025"],
];

const CERTS = [
  ["Azure Developer Associate", "Microsoft", VscAzure],
  ["Developer – Associate", "Amazon Web Services", FaAws],
  ["Cloud Practitioner", "Amazon Web Services", FaAws],
  ["API Student Expert", "Postman", SiPostman],
];

const AWARDS = [
  ["Winner, E-Waste Hackathon", "GIZ Data Lab · 2026"],
  ["AI Innovation Award", "NoniHub"],
  ["Finalist, Ayoba Hackathon", "MTN · 2021"],
];

const LANGUAGES = [
  ["Dagaare (Waale)", "Native"],
  ["English", "Full professional"],
  ["French", "Beginner"],
  ["Arabic", "Beginner"],
];

function Block({ title, children }) {
  return (
    <div className="rounded-[20px] border border-line bg-card p-6">
      <Label>{title}</Label>
      <ul className="mt-4 space-y-4">{children}</ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="pt-28 sm:pt-36">
      <Container>
        <SectionHeader label="Experience" title="Professional experience." />

        <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
          <ol className="relative space-y-12 md:col-span-9 md:col-start-4">
            <span className="absolute bottom-2 left-[9px] top-2 w-px bg-line" aria-hidden="true" />
            {ROLES.map((r, i) => (
              <li key={r.org} className="group relative pl-10 sm:pl-12">
                <span
                  className={`absolute left-0 top-1.5 size-5 rounded-full border-4 border-paper transition-colors duration-200 ${
                    i === 0 ? "bg-accent" : "bg-zinc-300 group-hover:bg-accent"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.015em] sm:text-2xl">{r.role}</h3>
                  <p className="shrink-0 text-sm font-medium text-subtle">{r.dates}</p>
                </div>
                <p className="mt-2 text-[15px] font-medium text-accent">
                  {r.org} <span aria-hidden="true">•</span> {r.place}
                </p>
                {r.note ? <p className="mt-1 text-sm text-subtle">{r.note}</p> : null}
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
                  {r.tags.map((t) => (
                    <li key={t} className="rounded-md bg-wash px-2.5 py-1 text-xs text-ink-2">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-1.5 size-5 rounded-full border-4 border-paper bg-zinc-300" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] sm:text-2xl">Earlier</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {EARLIER.map(([role, org, dates, text]) => (
                  <li key={org} className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                    <div className="sm:col-span-5">
                      <p className="text-[15px] font-medium text-ink">{role}</p>
                      <p className="text-sm text-accent">{org}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted sm:col-span-5">{text}</p>
                    <p className="text-sm text-subtle sm:col-span-2 sm:text-right">{dates}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </div>

        <div className="mt-20 grid gap-4 border-t border-line pt-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Label>Credentials</Label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-9">
            <Block title="Education">
              {EDUCATION.map(([t, org, d]) => (
                <li key={t}>
                  <p className="text-[15px] font-medium leading-snug">{t}</p>
                  <p className="text-sm text-muted">{org}</p>
                  <p className="text-sm text-subtle">{d}</p>
                </li>
              ))}
              <li className="text-sm leading-relaxed text-muted">
                BSc thesis: deep learning for arrhythmia detection with movement pruning.
              </li>
            </Block>
            <Block title="Certifications">
              {CERTS.map(([t, by, Icon]) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-wash">
                    <Icon className="size-4 text-ink" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium leading-snug">{t}</p>
                    <p className="text-sm text-muted">{by}</p>
                  </div>
                </li>
              ))}
            </Block>
            <Block title="Awards">
              {AWARDS.map(([t, by]) => (
                <li key={t}>
                  <p className="text-[15px] font-medium leading-snug">{t}</p>
                  <p className="text-sm text-muted">{by}</p>
                </li>
              ))}
            </Block>
            <Block title="Languages">
              {LANGUAGES.map(([l, level]) => (
                <li key={l} className="flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-medium">{l}</p>
                  <p className="text-sm text-muted">{level}</p>
                </li>
              ))}
            </Block>
          </div>
        </div>
      </Container>
    </section>
  );
}
