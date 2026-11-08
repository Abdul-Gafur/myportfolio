"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Container, ArrowUpRight } from "./ui";

// Web3Forms access key: public by design, it can only deliver to the owner's inbox.
const ACCESS_KEY = "1e9db658-3b72-418e-9195-cd32e2a1cb0e";
const EMAIL = "abdulgafurshaattir@gmail.com";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-gafur-saeed-b26434246/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/Abdul-Gafur", Icon: FaGithub },
  { label: "WhatsApp", href: "https://wa.me/233547322637", Icon: FaWhatsapp },
];

function Field({ label, name, type = "text", required, autoComplete, textarea }) {
  const cls =
    "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 text-[15px] text-white placeholder:text-zinc-500 transition-colors duration-150 focus:border-white/50 focus:outline-none";
  return (
    <label className="block">
      <span className="text-sm text-zinc-300">
        {label}
        {required ? null : <span className="text-zinc-500"> (optional)</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={`${cls} resize-y py-3`} />
      ) : (
        <input name={name} type={type} required={required} autoComplete={autoComplete} className={`${cls} h-12`} />
      )}
    </label>
  );
}

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from ghaf.dev");
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus({ state: "sent", message: "Thanks, your message is on its way. I'll reply by email." });
      } else {
        setStatus({ state: "error", message: json.message || "Something went wrong. Please email me directly." });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Please email me directly." });
    }
  }

  return (
    <section id="contact" className="pt-28 sm:pt-36">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-ink text-white">
          <div className="grid gap-12 p-7 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-6">
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-zinc-400">Contact</span>
              <h2 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.035em] [font-stretch:88%] sm:text-6xl">
                Let&rsquo;s work on something that matters.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
                Open to solution architecture, full-stack and AI engineering roles, and to consulting on public-sector systems. Based in Addis Ababa with a
                work permit, no sponsorship needed.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex max-w-full items-center gap-2 break-all border-b border-white/25 pb-1 font-display text-xl font-medium tracking-tight transition-colors hover:border-white sm:text-2xl"
              >
                {EMAIL}
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <ul className="mt-8 flex flex-wrap gap-2">
                {LINKS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-zinc-200 transition-colors duration-150 hover:border-white/50 hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="space-y-5 lg:col-span-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
              </div>
              <Field label="Organisation" name="organisation" autoComplete="organization" />
              <Field label="Message" name="message" required textarea />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-zinc-200 disabled:cursor-wait disabled:opacity-70"
                >
                  {status.state === "sending" ? "Sending…" : "Send message"}
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${status.state === "error" ? "text-red-300" : "text-zinc-300"}`}
                >
                  {status.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
