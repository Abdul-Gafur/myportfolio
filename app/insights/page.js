import { Container, PageHeader, SectionHeader, Label } from "@/components/ui";
import { Interests, Themes } from "@/components/Research";
import ContactBand from "@/components/ContactBand";
import { RESEARCH } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Research & Insights",
  description:
    "Research interests in AI for education, enterprise and sovereign AI, digital public infrastructure, applied machine learning and technology governance in Africa.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHeader label="Research & insights" title={RESEARCH.title}>
        <p>{RESEARCH.intro}</p>
      </PageHeader>

      <section className="pt-16 sm:pt-20" aria-labelledby="interests-title">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <h2 id="interests-title" className="mb-4 font-mono text-[12px] uppercase tracking-[0.08em] text-ink md:col-span-3 md:mb-0">
              Research interests
            </h2>
            <div className="md:col-span-9">
              <Interests />
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="themes-title">
        <Container>
          <SectionHeader label="Ongoing exploration" id="themes-title" title="Themes I am working on.">
            <p>
              These are areas of active exploration grounded in projects I have built, not formal publications. Each links
              to the work where it happens.
            </p>
          </SectionHeader>
          <div className="mt-12">
            <Themes />
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="research-title">
        <Container>
          <SectionHeader label="Research" id="research-title" title="Completed research." />
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <ul className="md:col-span-9 md:col-start-4">
              {RESEARCH.published.map((r) => (
                <li key={r.title} className="border-y border-line py-7">
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.015em]">{r.title}</h3>
                  <Label as="p" className="mt-2 normal-case tracking-normal">
                    {r.venue}
                  </Label>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
