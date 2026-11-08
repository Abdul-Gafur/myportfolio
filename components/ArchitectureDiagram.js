/**
 * Solution architecture as a top-to-bottom pipeline of stages, with cross-cutting concerns beside it.
 * Drawn in HTML so it reads at any width: a connector line runs through numbered nodes.
 */
export default function ArchitectureDiagram({ stages, crosscut = [], label }) {
  return (
    <div role="group" aria-label={label} className="rounded-[24px] border border-line bg-card p-5 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <ol className="relative lg:col-span-8">
          <span className="absolute bottom-6 left-[15px] top-6 w-px bg-line" aria-hidden="true" />
          {stages.map((s, i) => {
            const last = i === stages.length - 1;
            return (
              <li key={s.title} className={`relative grid grid-cols-[32px_1fr] gap-4 ${last ? "" : "pb-5"}`}>
                <span
                  className={`relative z-10 mt-4 grid size-8 place-items-center rounded-full border ${
                    last ? "border-accent bg-accent" : "border-line bg-card"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`size-2 rounded-full ${last ? "bg-white" : "bg-subtle"}`} />
                </span>
                <div className={`rounded-2xl border p-4 ${last ? "border-accent/40 bg-accent-soft/40" : "border-line bg-paper"}`}>
                  <p className="text-[15px] font-semibold leading-snug text-ink">{s.title}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="rounded-md border border-line bg-card px-2 py-1 text-[13px] leading-snug text-ink-2">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
        {crosscut.length ? (
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-dashed border-subtle/40 p-4 lg:sticky lg:top-24">
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">Across every stage</p>
              <ul className="mt-3 space-y-2">
                {crosscut.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[14px] leading-snug text-ink-2">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
