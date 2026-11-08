"use client";

import { useState } from "react";

// Web3Forms access key: public by design, it can only deliver to the owner's inbox.
const ACCESS_KEY = "1e9db658-3b72-418e-9195-cd32e2a1cb0e";

const TOPICS = ["A role or opportunity", "Consulting or collaboration", "Research or fellowship", "Something else"];

function Field({ label, name, type = "text", required, autoComplete, textarea }) {
  const cls =
    "mt-2 w-full rounded-xl border border-line bg-card px-4 text-[15px] text-ink placeholder:text-subtle transition-colors duration-150 focus:border-ink focus:outline-none";
  return (
    <label className="block">
      <span className="text-sm text-ink-2">
        {label}
        {required ? null : <span className="text-subtle"> (optional)</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={6} className={`${cls} resize-y py-3`} />
      ) : (
        <input name={name} type={type} required={required} autoComplete={autoComplete} className={`${cls} h-12`} />
      )}
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `New message from ghaf.dev — ${data.get("topic") || "General"}`);
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus({ state: "sent", message: "Thank you — your message is on its way. I'll reply by email." });
      } else {
        setStatus({ state: "error", message: json.message || "Something went wrong. Please email me directly." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Please email me directly." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[24px] border border-line bg-card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <Field label="Organization" name="organization" autoComplete="organization" />
      <fieldset>
        <legend className="text-sm text-ink-2">What is this about?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {TOPICS.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="topic" value={t} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-ink-2 transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent hover:border-ink">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message" name="message" required textarea />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-ink-2 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
        >
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status.state === "error" ? "text-red-700" : "text-muted"}`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
