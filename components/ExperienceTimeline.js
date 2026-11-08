import { Tags } from "./ui";
import { EXPERIENCE, EARLIER } from "@/content/site";

/** Most recent role first. `full` adds key contributions, tools and earlier roles. */
export default function ExperienceTimeline({ full = false }) {
  return (
    <ol className="relative space-y-12">
      <span className="absolute bottom-2 left-[9px] top-2 w-px bg-line" aria-hidden="true" />
      {EXPERIENCE.map((r, i) => (
        <li key={r.org} className="group relative pl-10 sm:pl-12">
          <span
            className={`absolute left-0 top-1.5 size-5 rounded-full border-4 border-paper transition-colors duration-200 ${
              i === 0 ? "bg-accent" : "bg-line group-hover:bg-accent"
            }`}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="font-display text-xl font-semibold tracking-[-0.015em] sm:text-2xl">{r.role}</h3>
            <p className="shrink-0 text-sm font-medium text-subtle">{r.dates}</p>
          </div>
          <p className="mt-2 text-[15px] font-medium text-accent">
            {r.org} <span aria-hidden="true">·</span> <span className="text-subtle">{r.place}</span>
          </p>
          {r.note ? <p className="mt-1 text-sm text-subtle">{r.note}</p> : null}
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.summary}</p>
          {full ? (
            <>
              <ul className="mt-4 space-y-2">
                {r.points.map((pt) => (
                  <li key={pt} className="relative pl-5 text-[15px] leading-relaxed text-ink-2">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
              <Tags items={r.tags} label="Tools and focus" className="mt-4" />
            </>
          ) : null}
        </li>
      ))}
      {full ? (
        <li className="relative pl-10 sm:pl-12">
          <span className="absolute left-0 top-1.5 size-5 rounded-full border-4 border-paper bg-line" aria-hidden="true" />
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
      ) : null}
    </ol>
  );
}
