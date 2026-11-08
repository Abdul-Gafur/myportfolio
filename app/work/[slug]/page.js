import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Label,
  Tags,
  TextLink,
  ArrowRight,
} from "@/components/ui";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ContactBand from "@/components/ContactBand";
import { PROJECTS, PROFILE, SITE_URL, getProject } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} — ${p.kind}`,
    description: `${p.summary} Case study by ${PROFILE.name}.`,
    path: `/work/${p.slug}`,
  });
}

const SECTIONS = [
  ["overview", "Overview"],
  ["challenge", "The challenge"],
  ["role", "My role"],
  ["architecture", "Architecture"],
  ["implementation", "Implementation"],
  ["decisions", "Technology decisions"],
  ["results", "Results"],
  ["evidence", "Evidence"],
];

function Block({ id, label, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className="scroll-mt-24 border-t border-line pt-6"
    >
      <h2
        id={`${id}-h`}
        className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink"
      >
        {label}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li
          key={t}
          className="relative pl-5 text-[17px] leading-relaxed text-ink-2"
        >
          <span
            className="absolute left-0 top-[0.75em] h-px w-2.5 bg-accent"
            aria-hidden="true"
          />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = PROJECTS.findIndex((x) => x.slug === slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.kind}`,
    abstract: p.summary,
    url: `${SITE_URL}/work/${p.slug}/`,
    author: { "@id": `${SITE_URL}/#person` },
    keywords: p.stack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <header className="pt-32 sm:pt-40">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-subtle">
              <li>
                <Link href="/work" className="transition-colors hover:text-ink">
                  Selected work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {p.name}
              </li>
            </ol>
          </nav>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <Label className="text-ink">
                Case study
              </Label>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.035em] [font-stretch:88%] sm:text-6xl">
                {p.name}
              </h1>
              <p className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-accent sm:text-3xl">
                {p.kind}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {p.summary}
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden border-y border-line bg-line sm:grid-cols-3">
            {[
              ["Organization", p.org],
              ["Period", p.period],
              ["My role", p.role],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper py-5 pr-4 sm:px-5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  {k}
                </dt>
                <dd className="mt-2 text-[15px] font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Container className="pt-16 sm:pt-20">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <aside className="hidden md:col-span-3 md:block">
            <nav aria-label="On this page" className="sticky top-24">
              <Label>On this page</Label>
              <ol className="mt-4 space-y-2 text-sm">
                {SECTIONS.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="space-y-16 md:col-span-9">
            <Block id="overview" label="Overview">
              <p className="text-xl leading-relaxed text-ink-2">{p.overview}</p>
            </Block>

            <Block id="challenge" label="The challenge">
              <div className="space-y-4 text-[17px] leading-relaxed text-muted">
                {p.challenge.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </Block>

            <Block id="role" label="My role">
              <Bullets items={p.myRole} />
            </Block>

            <Block id="architecture" label="Solution architecture">
              {p.architecture.note ? (
                <p className="mb-5 text-sm text-subtle">
                  {p.architecture.note}
                </p>
              ) : null}
              <ArchitectureDiagram
                stages={p.architecture.stages}
                crosscut={p.architecture.crosscut}
                label={`${p.name} solution architecture`}
              />
            </Block>

            <Block id="implementation" label="Implementation">
              <Bullets items={p.implementation} />
              <Tags items={p.stack} className="mt-6" />
            </Block>

            <Block id="decisions" label="Technology decisions">
              <dl className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2">
                {p.decisions.map((d) => (
                  <div key={d.choice} className="bg-card p-6">
                    <dt className="text-[17px] font-semibold leading-snug text-ink">
                      {d.choice}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-muted">
                      {d.why}
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block id="results" label="Results">
              {p.results.length ? (
                <dl className="mb-8 flex flex-wrap gap-x-12 gap-y-6">
                  {p.results.map((r) => (
                    <div key={r.label}>
                      <dt className="sr-only">{r.label}</dt>
                      <dd className="font-display text-5xl font-semibold tracking-[-0.03em] [font-stretch:90%]">
                        {r.value}
                      </dd>
                      <dd className="mt-1 text-sm text-muted">{r.label}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              <Bullets items={p.outcomes} />
            </Block>

            <Block id="evidence" label="Evidence">
              <Bullets items={p.evidence} />
              {p.links.length ? (
                <div className="mt-6 flex flex-wrap gap-6">
                  {p.links.map((l) => (
                    <TextLink key={l.href} href={l.href} external>
                      {l.label}
                    </TextLink>
                  ))}
                </div>
              ) : null}
            </Block>

            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between gap-6 rounded-[24px] border border-line bg-card p-7 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-subtle/60 sm:p-9"
            >
              <div>
                <Label>Next case study</Label>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  {next.name}
                </p>
                <p className="mt-1 text-[15px] text-muted">{next.kind}</p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </article>
        </div>
      </Container>

      <ContactBand />
    </>
  );
}
