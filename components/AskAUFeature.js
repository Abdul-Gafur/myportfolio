"use client";

import { useEffect, useRef, useState } from "react";
import { Label } from "./ui";

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}

function Line({ width, name }) {
  return (
    <div className={`relative h-2 rounded bg-white/[0.07] ${width}`}>
      <div className="lp absolute inset-0 rounded bg-white/25" style={{ "--lp": name }} />
    </div>
  );
}

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
      className="mt-16 rounded-[28px] bg-ink p-7 text-white sm:p-10 lg:p-14"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <Label className="text-zinc-400">African Union Commission · 2026</Label>
            <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
              Architect &amp; developer
            </span>
          </div>
          <h3 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.025em] [font-stretch:90%] sm:text-[2.5rem]">
            AskAU, a policy assistant that cites its sources
          </h3>
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Problem</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-300">
              AUC staff dig through 200+ policy documents spread across SharePoint. A public chatbot is not an option:
              every answer must be traceable to a source, and the data must stay on AU infrastructure.
            </p>
          </div>
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">What I did</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-300">
              Wrote the requirements and architecture, and compared Microsoft 365 Copilot, Azure OpenAI and self-hosted
              models on privacy, CPU-only hosting and cost. Then built hybrid retrieval (pgvector and full-text search)
              behind a gateway that runs Azure OpenAI or Qwen 8B on AU servers, with Entra ID sign-in and answers
              filtered to what each user is allowed to read.
            </p>
          </div>
          <div className="mt-8 lg:mt-auto lg:pt-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Result · 50+ validated questions across 5 AU treaties, piloted with 20 analysts
            </p>
            <div className="mt-4 grid grid-cols-3 gap-6">
              <Stat value="88%" label="Recall@5" />
              <Stat value="82%" label="Context precision" />
              <Stat value="94%" label="Citation accuracy" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play animation" : "Pause animation"}
              className="lp-ctl absolute right-3 top-3 size-11 place-items-center rounded-full text-zinc-400 transition-colors duration-150 hover:bg-white/10 hover:text-white"
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
                <span className="size-2 rounded-full bg-zinc-500" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Query</span>
              </div>
              <p className="mt-2 pr-10 text-[15px] text-white">Which policy sets the approval steps for official missions?</p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="grid">
                  <span className="lp lp-swap-a flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "ask-a" }}>
                    <span className="lp-spin size-3 rounded-full border-[1.5px] border-zinc-500 border-t-transparent" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Searching 200+ policies</span>
                  </span>
                  <span className="lp flex items-center gap-2 [grid-area:1/1]" style={{ "--lp": "ask-b" }}>
                    <span className="size-2 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Answer · grounded</span>
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
                      className="lp rounded-md border border-white/15 px-2 py-1 font-mono text-[11px] text-zinc-300"
                      style={{ "--lp": k }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            Python · LangGraph · FastAPI · pgvector · Entra ID · SharePoint
          </p>
        </div>
      </div>
    </article>
  );
}
