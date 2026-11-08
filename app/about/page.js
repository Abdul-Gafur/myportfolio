import { Container, PageHeader, SectionHeader, Label, Button, ArrowRight, ArrowDown } from "@/components/ui";
import Credentials from "@/components/Credentials";
import ContactBand from "@/components/ContactBand";
import { ABOUT, PROFILE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "About",
  description:
    "About Abdul-Gafur Saeed: software engineering, technical leadership, enterprise architecture and digital innovation, from Ghana to the African Union Commission.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title={ABOUT.title} />

      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <figure className="overflow-hidden rounded-[24px] bg-wash">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.photoAlt}
                  width={PROFILE.photoSize.width}
                  height={PROFILE.photoSize.height}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </figure>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Currently</dt>
                  <dd className="mt-1 font-medium text-ink">{PROFILE.current.role}</dd>
                  <dd className="text-muted">{PROFILE.current.org}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Based in</dt>
                  <dd className="mt-1 text-muted">
                    {PROFILE.location} · {PROFILE.reach}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-8 md:col-start-4">
              {ABOUT.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button href="/work">
                  See my work
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
                <Button href={PROFILE.cv} download={PROFILE.cvFileName} variant="secondary">
                  Download CV
                  <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="principles-title">
        <Container>
          <SectionHeader label="Approach" id="principles-title" title="How I approach technology work." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-2">
            {ABOUT.principles.map((p) => (
              <article key={p.title} className="bg-card p-7 sm:p-9">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] [font-stretch:92%]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="leadership-title">
        <Container>
          <SectionHeader label="Leadership" id="leadership-title" title="Leadership, teaching and handover.">
            <p>
              As CTO I led a multidisciplinary team across product, frontend, backend, QA and cloud. At the African Union
              Commission I wrote practical AI playbooks, trained technical and non-technical staff, and mentor engineering
              interns. Every system I hand over comes with documentation and training, so it keeps working after I leave.
            </p>
          </SectionHeader>
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <dl className="grid gap-px overflow-hidden border-y border-line bg-line sm:grid-cols-3 md:col-span-9 md:col-start-4">
              {ABOUT.leadership.map(([v, l]) => (
                <div key={l} className="bg-paper py-7 sm:px-6">
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{v}</dd>
                  <dd className="mt-2 text-sm text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="background-title">
        <Container>
          <SectionHeader label="Background" id="background-title" title="Education, credentials and languages." />
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <Credentials full />
            </div>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
