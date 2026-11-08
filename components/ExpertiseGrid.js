import Link from "next/link";
import { ArrowRight } from "./ui";
import { EXPERTISE, PROJECTS } from "@/content/site";

const nameOf = (slug) => PROJECTS.find((p) => p.slug === slug)?.name ?? slug;

/** The four areas of expertise. `detailed` adds the longer pitch, proof points and related work. */
export default function ExpertiseGrid({ detailed = false }) {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
      {EXPERTISE.map((d) => (
        <article key={d.id} id={detailed ? d.id : undefined} className="flex scroll-mt-24 flex-col bg-card p-7 sm:p-9">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] [font-stretch:92%] sm:text-[1.65rem]">
            {d.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{detailed ? d.detail : d.short}</p>

          {detailed ? (
            <>
              <ul className="mt-6 space-y-2.5">
                {d.proof.map((p) => (
                  <li key={p} className="relative pl-5 text-[15px] leading-relaxed text-ink-2">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8 text-sm">
                <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">Related work</span>
                {d.work.map((slug) => (
                  <Link
                    key={slug}
                    href={`/work/${slug}`}
                    className="group inline-flex items-center gap-1 font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {nameOf(slug)}
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              href={`/expertise#${d.id}`}
              className="group mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-ink"
              aria-label={`More on ${d.title}`}
            >
              <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
                How I work here
              </span>
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
