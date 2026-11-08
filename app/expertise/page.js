import { Container, PageHeader, SectionHeader } from "@/components/ui";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import ContactBand from "@/components/ContactBand";
import { CAPABILITIES, SELECTION_PRINCIPLE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Expertise",
  description:
    "Enterprise architecture, AI engineering, cloud infrastructure, DevSecOps and digital transformation: capabilities, technologies and how I select them.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <PageHeader label="Expertise" title="Architecture, AI, cloud and digital transformation.">
        <p>
          Four areas I work across, each backed by work you can inspect. I think of them as one discipline: understanding a
          problem well enough to design, build and run the system that solves it.
        </p>
      </PageHeader>

      <section className="pt-16 sm:pt-20" aria-label="Areas of expertise">
        <Container>
          <ExpertiseGrid detailed />
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="capabilities-title">
        <Container>
          <SectionHeader label="Capabilities" id="capabilities-title" title="Technology and engineering capabilities." />
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <dl className="divide-y divide-line border-y border-line">
                {CAPABILITIES.map(([area, tech]) => (
                  <div key={area} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-6">
                    <dt className="text-[15px] font-semibold text-ink sm:col-span-4">{area}</dt>
                    <dd className="text-[15px] leading-relaxed text-muted sm:col-span-8">{tech}</dd>
                  </div>
                ))}
              </dl>
              <blockquote className="mt-10 border-l-2 border-accent pl-6 font-display text-xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-2xl">
                {SELECTION_PRINCIPLE}
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
