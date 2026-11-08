import {
  SiKong,
  SiApachekafka,
  SiKeycloak,
  SiMermaid,
  SiDotnet,
  SiSpring,
  SiFastapi,
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiLanggraph,
  SiLangchain,
  SiQwen,
  SiTensorflow,
  SiOpencv,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { Container, Label, SectionHeader } from "./ui";

const DISCIPLINES = [
  {
    title: "Solution architecture",
    pitch:
      "Directorates come to me with a problem, not a spec. I run the workshops, weigh the options on cost, privacy and hosting, and write the architecture and decision records a team can build from.",
    proof: [
      "AskAU model choice: compared Microsoft 365 Copilot, Azure OpenAI and self-hosted models on privacy, CPU-only hosting, running cost and vendor lock-in. I recommended a phased path that starts with an in-house retrieval pipeline.",
      "Security standard: tiered 130 OWASP ASVS requirements by risk, so a small internal tool and a public portal aren't held to the same bar.",
      "Calls portal: per-directorate tenant isolation, so evaluators only ever see their own applicants.",
    ],
    tools: [["Kong", SiKong], ["Kafka", SiApachekafka], ["Keycloak", SiKeycloak], ["Entra ID", VscAzure], ["Mermaid", SiMermaid]],
  },
  {
    title: "Full-stack development",
    pitch:
      "I write production code in .NET, Java, Python and PHP. I spend most care on the joins: sign-in, permissions and the integrations where data usually goes wrong.",
    proof: [
      "Ndiara: one REST middleware layer for SAP S/4HANA, six platforms and 7+ payment gateways, instead of a separate integration for every partner.",
      "Pension uploads: validation, a preview and a single-transaction commit, so a bad file can never leave half a pension record.",
      "Namibra: automated an ERP workflow from 14 steps to 4 through API integrations.",
    ],
    tools: [[".NET", SiDotnet], ["Java", FaJava], ["Spring", SiSpring], ["FastAPI", SiFastapi], ["Laravel", SiLaravel], ["Next.js", SiNextdotjs], ["PostgreSQL", SiPostgresql]],
  },
  {
    title: "Applied AI",
    pitch:
      "An institution can't run on a chatbot that guesses. My AI shows where each answer came from, is measured before it ships, and can run on hardware the institution controls.",
    proof: [
      "AskAU: measured on 50+ validated questions across 5 AU treaties before the pilot, reaching 88% recall@5 and 94% citation accuracy.",
      "SmartSakuu: personal data is scrubbed before any prompt, and a teacher approves every generated question before a student sees it.",
      "ECG model: 3.8× smaller through pruning, tested on patients it had never seen so the accuracy isn't inflated.",
    ],
    tools: [["LangGraph", SiLanggraph], ["LangChain", SiLangchain], ["Azure OpenAI", VscAzure], ["Qwen", SiQwen], ["TensorFlow", SiTensorflow], ["OpenCV", SiOpencv]],
  },
  {
    title: "Cloud, DevOps & security",
    pitch:
      "Manual releases are where outages start. I automate the path from commit to production and control who can touch it.",
    proof: [
      "Deployment lead time cut from hours to under 15 minutes across 20+ GitHub Actions and Jenkins pipelines.",
      "Recovery time objectives cut 40% with CloudSnap's cross-cloud backup across 15+ microservices.",
      "Zero-trust access across 50+ IAM roles and 100+ production secrets, with 99.9% uptime.",
    ],
    tools: [["Azure", VscAzure], ["AWS", FaAws], ["Docker", SiDocker], ["Kubernetes", SiKubernetes], ["Terraform", SiTerraform], ["GitHub Actions", SiGithubactions], ["Jenkins", SiJenkins]],
  },
];

export default function About() {
  return (
    <section id="about" className="pt-28 sm:pt-36">
      <Container>
        <SectionHeader label="About me" title="From the first requirements workshop to the production release.">
          <p>
            I started in Ghana in 2020, building an online voting system and a logistics tracker. Since then I have been
            CTO of a startup serving women-led businesses, a DevOps engineer for a London cloud company, and a Java and
            .NET developer for business clients. Today I design systems for the African Union Commission in Addis Ababa.
          </p>
          <p>
            That mix is what I bring. I can sit with a directorate to pin down the real problem, write the architecture,
            build the parts that are hardest to get right, and set up the pipeline that ships them.
          </p>
        </SectionHeader>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-2">
          {DISCIPLINES.map((d) => (
            <article key={d.title} className="flex flex-col bg-card p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] [font-stretch:92%] sm:text-[1.75rem]">
                {d.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{d.pitch}</p>
              <ul className="mt-6 space-y-2.5">
                {d.proof.map((p) => (
                  <li key={p} className="relative pl-5 text-[15px] leading-relaxed text-muted">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-8" aria-label={`${d.title} tools`}>
                {d.tools.map(([name, Icon]) => (
                  <li key={name} className="flex items-center gap-1.5 text-sm text-muted">
                    <Icon className="size-4 text-ink" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-8 rounded-[24px] border border-line bg-card p-7 sm:p-9 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Label>And around the code</Label>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] [font-stretch:92%]">
              Leadership, teaching and handover
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              As CTO I led a 5-person team across product, frontend, backend, QA and cloud. At the AUC I wrote 3 practical
              AI playbooks and trained 60+ staff across 3 directorates, both technical and non-technical. Every system I hand over
              comes with runbooks and user training, so it keeps working after I leave.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-6 md:col-span-5">
            {[
              ["5", "person team led as CTO"],
              ["60+", "AUC staff trained in AI"],
              ["3", "AI playbooks written"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{v}</dd>
                <dd className="mt-1 text-sm text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
