import Link from "next/link";
import {
  Container,
  PageHeader,
  SectionHeader,
  Label,
  Tags,
  ArrowRight,
  TextLink,
} from "@/components/ui";
import AskAUFeature from "@/components/AskAUFeature";
import { MiniFlow } from "@/components/ProjectCard";
import ContactBand from "@/components/ContactBand";
import { PROJECTS, MORE_WORK, PROFILE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Selected Work",
  description:
    "Case studies in enterprise AI, institutional workflow platforms, education technology, health informatics, digital business platforms, cloud disaster recovery and computer vision.",
  path: "/work",
});

function ProjectRow({ p }) {
  return (
    <li className="group relative grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <p className="font-mono text-[12px] tracking-[0.08em] text-subtle">
          {p.org} · {p.period}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] [font-stretch:92%]">
          <Link
            href={`/work/${p.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {p.name}
          </Link>
        </h3>
        <p className="mt-1 text-[15px] font-medium text-accent">{p.kind}</p>
      </div>
      <div className="md:col-span-8">
        <p className="text-lg leading-relaxed text-ink-2">{p.summary}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            My contribution ·{" "}
          </span>
          {p.contribution}
        </p>
        <div className="mt-6">
          <MiniFlow stages={p.architecture.stages} />
        </div>
        {p.results.length ? (
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {p.results.map((r) => (
              <div key={r.label}>
                <dt className="sr-only">{r.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-[-0.03em]">
                  {r.value}
                </dd>
                <dd className="text-sm text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <Tags items={p.stack.slice(0, 6)} />
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
            <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
              View case study
            </span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </li>
  );
}

export default function WorkPage() {
  const [featured, ...rest] = PROJECTS;
  return (
    <>
      <PageHeader
        label="Selected work"
        title="Evidence of the problems I solve."
      >
        <p>
          Seven projects across enterprise AI, institutional workflows,
          education, health informatics, digital business, cloud resilience and
          computer vision. Each case study explains the challenge, my role, the
          architecture, the decisions and the measured results.
        </p>
      </PageHeader>

      <section className="pt-16 sm:pt-20" aria-label="Featured project">
        <Container>
          <AskAUFeature />
        </Container>
      </section>

      <section className="pt-16" aria-label="Projects">
        <Container>
          <ol className="border-b border-line">
            {rest.map((p) => (
              <ProjectRow key={p.slug} p={p} />
            ))}
          </ol>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="more-title">
        <Container>
          <SectionHeader
            label="More work"
            id="more-title"
            title="Technical advisory, standards and research."
          />
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <ul className="md:col-span-9 md:col-start-4">
              {MORE_WORK.map((p) => (
                <li
                  key={p.title}
                  className="grid gap-2 border-t border-line py-7 last:border-b sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{p.role}</p>
                    <p className="text-sm text-subtle">{p.meta}</p>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-[15px] leading-relaxed text-muted">
                      {p.text}
                    </p>
                    <Label as="p" className="mt-2 text-[11px]">
                      {p.stack}
                    </Label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex justify-end">
            <TextLink href={PROFILE.github} external>
              More on GitHub
            </TextLink>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
