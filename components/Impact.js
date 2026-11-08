import Link from "next/link";
import { Container, SectionHeader, TextLink, ArrowRight } from "./ui";
import { INTRO, METRICS } from "@/content/site";

export function MetricsGrid({ className = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" }) {
  // 1px gaps over a line-coloured ground draw the dividers at any column count.
  return (
    <dl className={`grid gap-px border-y border-line bg-line ${className}`}>
      {METRICS.map((m) => (
        <div key={m.label} className="bg-paper">
          <Link href={m.href} className="group block h-full py-7 transition-colors duration-150 hover:bg-card sm:px-6 sm:py-8">
            <dt className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-subtle">
              {m.label}
              <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </dt>
            <dd className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] [font-stretch:90%] sm:text-5xl">
              {m.value}
            </dd>
            <dd className="mt-3 max-w-[30ch] text-sm leading-snug text-muted">{m.detail}</dd>
          </Link>
        </div>
      ))}
    </dl>
  );
}

export default function Impact() {
  return (
    <section className="pt-28 sm:pt-36" aria-labelledby="intro-title">
      <Container>
        <SectionHeader
          label="Introduction"
          id="intro-title"
          title={INTRO.title}
          action={<TextLink href="/about">More about me</TextLink>}
        >
          {INTRO.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </SectionHeader>

        <div className="mt-16 md:grid md:grid-cols-12 md:gap-8">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.08em] text-ink md:col-span-3 md:mb-0 md:pt-7">
            Impact at a glance
          </p>
          <div className="md:col-span-9">
            <MetricsGrid className="grid-cols-1 sm:grid-cols-2" />
          </div>
        </div>
      </Container>
    </section>
  );
}
