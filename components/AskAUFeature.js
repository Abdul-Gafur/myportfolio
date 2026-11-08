"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Label, ArrowRight } from "./ui";
import { getProject } from "@/content/site";

const P = getProject("askau");

function Line({ width, name }) {
  return (
    <div className={`relative h-2 rounded bg-white/[0.07] ${width}`}>
      <div className="lp absolute inset-0 rounded bg-white/25" style={{ "--lp": name }} />
    </div>
  );
}

/** Featured AskAU card: the first selected project, with a short query → grounded answer loop. */
export default function AskAUFeature() {
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const last = useRef(0);

  useEffect(() => {
    last.current = performance.now();
  }, []);

  // Pointer or focus entering the card replays the story from the top (not within 800ms of the last start).
  function restart() {
    if (paused) return;
    const now = performance.now();
    if (now - last.current < 800) return;
    last.current = now;
    setRun((r) => r + 1);
  }

  return (
    <article
      data-loop="auto"
      data-paused={paused ? "" : undefined}
      onPointerEnter={restart}
      onFocus={restart}
      style={{ "--cycle": "4s" }}
      className="bg-ink p-7 text-white sm:p-10 lg:p-14"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <Label className="text-night-muted">
            {P.org} · {P.period}
          </Label>
          <h3 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.025em] [font-stretch:90%] sm:text-[2.5rem]">
            {P.name} — {P.kind}
          </h3>
          <p className="mt-5 text-[15px] leading-relaxed text-night-muted">{P.summary}</p>
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-night-subtle">My contribution</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-white/90">{P.contribution}</p>
          </div>
          <div className="mt-8 lg:mt-auto lg:pt-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-night-subtle">
              Measured on 50+ validated questions across 5 AU treaties
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-6">
              {P.results.map((r) => (
                <div key={r.label}>
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{r.value}</dd>
                  <dd className="mt-1 text-sm text-night-muted">{r.label}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={`/work/${P.slug}`}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-ink transition-[background-color,transform] duration-150 hover:bg-wash active:scale-[0.98]"
            >
              View case study
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play animation" : "Pause animation"}
              className="lp-ctl absolute right-3 top-3 size-11 place-items-center rounded-full text-night-muted transition-colors duration-150 hover:bg-white/10 hover:text-white"
            >
              {paused ? (
                <svg className="size-3.5" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <path d="M3.5 2.2v9.6a.5.5 0 0 0 .76.43l7.7-4.8a.5.5 0 0 0 0-.86l-7.7-4.8a.5.5 0 0 0-.76.43Z" />
                </svg>
              ) : (
                <svg className="size-3.5" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="2" width="2.6" height="10" rx="0.8" />
                  <rect x="8.4" y="2" width="2.6" height="10" rx="0.8" />
                </svg>
              )}
            </button>

            <div key={run} aria-hidden="true">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-night-subtle" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-night-muted">Query</span>
              </div>
              <p className="mt-2 pr-10 text-[15px] text-white">Which policy sets the approval steps for official missions?</p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="grid">
                  <span className="lp lp-swap-a flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "ask-a" }}>
                    <span className="lp-spin size-3 rounded-full border-[1.5px] border-night-subtle border-t-transparent" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-night-muted">Searching 200+ policies</span>
                  </span>
                  <span className="lp flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "ask-b" }}>
                    <span className="size-2 rounded-full bg-[#7aa2ff]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-night-muted">
                      Answer · grounded in sources
                    </span>
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <Line width="w-[92%]" name="ask-l1" />
                  <Line width="w-[78%]" name="ask-l2" />
                  <Line width="w-[60%]" name="ask-l3" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    ["Source 1 · p. 14", "ask-s1"],
                    ["Source 2 · §3.2", "ask-s2"],
                  ].map(([s, k]) => (
                    <span
                      key={s}
                      className="lp rounded-md border border-white/15 px-2 py-1 font-mono text-[11px] text-night-muted"
                      style={{ "--lp": k }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-night-subtle">
            {P.stack.slice(0, 7).join(" · ")}
          </p>
        </div>
      </div>
    </article>
  );
}
