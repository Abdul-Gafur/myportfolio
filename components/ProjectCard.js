import Link from "next/link";
import { Tags, ArrowRight } from "./ui";

export default function ProjectCard({ project, className = "" }) {
  const p = project;
  const headline = p.results[0];
  return (
    <article className={`group relative flex flex-col border border-line bg-card p-7 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-subtle/60 sm:p-9 ${className}`}>
      <span className="font-mono text-[12px] tracking-[0.08em] text-subtle">
        {p.org} · {p.period}
      </span>

      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] [font-stretch:92%] sm:text-[1.75rem]">
        <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
          {p.name}
        </Link>
      </h3>
      <p className="mt-1 text-[15px] font-medium text-accent">{p.kind}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.summary}</p>

      <div className="mt-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">My contribution</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{p.contribution}</p>
      </div>

      <div className="mt-auto pt-8">
        <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
          {headline ? (
            <p>
              <span className="font-display text-3xl font-semibold tracking-[-0.03em]">{headline.value}</span>
              <span className="ml-2 text-sm text-muted">{headline.label}</span>
            </p>
          ) : (
            <span />
          )}
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink">
            <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
              View case study
            </span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
        <Tags items={p.stack.slice(0, 5)} className="mt-5" />
      </div>
    </article>
  );
}
