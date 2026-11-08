import Link from "next/link";
import { Label, ArrowRight } from "./ui";
import { RESEARCH, PROJECTS } from "@/content/site";

const nameOf = (slug) => PROJECTS.find((p) => p.slug === slug)?.name ?? slug;

export function Interests() {
  return (
    <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {RESEARCH.interests.map((t) => (
        <li key={t} className="bg-card p-5 text-[15px] leading-snug text-ink-2">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Ongoing exploration themes, each tied to the project where the work happens. */
export function Themes() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {RESEARCH.themes.map((t) => (
        <article
          key={t.title}
          className="group relative flex flex-col border border-line bg-card p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-subtle/60"
        >
          <Label>Ongoing exploration</Label>
          <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.015em]">{t.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.text}</p>
          <Link
            href={`/work/${t.project}`}
            className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-ink after:absolute after:inset-0"
          >
            <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
              In practice: {nameOf(t.project)}
            </span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </article>
      ))}
    </div>
  );
}
