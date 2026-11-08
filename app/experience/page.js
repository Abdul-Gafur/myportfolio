import { Container, PageHeader, SectionHeader, Button, ArrowDown } from "@/components/ui";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Credentials from "@/components/Credentials";
import ContactBand from "@/components/ContactBand";
import { PROFILE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Experience",
  description:
    "Professional experience of Abdul-Gafur Saeed: Digital & Innovation Expert at the African Union Commission, DevSecOps engineer, CTO and founder.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader label="Experience" title="Experience & professional journey.">
        <p>
          Building technology, leading implementation and contributing to digital transformation across institutions,
          start-ups and enterprise clients. Most recent role first.
        </p>
      </PageHeader>

      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="mb-10 md:col-span-3 md:mb-0">
              <div className="md:sticky md:top-24">
                <Button href={PROFILE.cv} download={PROFILE.cvFileName} variant="secondary">
                  Download CV
                  <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </Button>
              </div>
            </div>
            <div className="md:col-span-9">
              <ExperienceTimeline full />
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="credentials-title">
        <Container>
          <SectionHeader label="Credentials" id="credentials-title" title="Education, certifications and recognition." />
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
