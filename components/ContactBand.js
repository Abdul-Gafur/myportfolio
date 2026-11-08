import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Button, ArrowUpRight, ArrowRight, ArrowDown } from "./ui";
import { CONTACT, PROFILE } from "@/content/site";

/** Closing call to action on the home page and at the end of case studies. */
export default function ContactBand() {
  return (
    <section className="pt-28 sm:pt-36" aria-labelledby="contact-title">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-ink text-white">
          <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-7">
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-night-muted">Contact</span>
              <h2
                id="contact-title"
                className="mt-6 font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.035em] [font-stretch:88%] sm:text-6xl"
              >
                {CONTACT.title}
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-night-muted">
                {CONTACT.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end gap-6 lg:col-span-5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex max-w-full items-center gap-2 break-all border-b border-white/25 pb-1 font-display text-lg font-medium tracking-tight transition-colors hover:border-white sm:text-xl"
              >
                {PROFILE.email}
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="light">
                  Send a message
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
                <Button href={PROFILE.cv} download={PROFILE.cvFileName} variant="ghost-dark">
                  Download CV
                  <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </Button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {[
                  ["LinkedIn", PROFILE.linkedin, FaLinkedin],
                  ["GitHub", PROFILE.github, FaGithub],
                ].map(([label, href, Icon]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-night-muted transition-colors hover:text-white"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
