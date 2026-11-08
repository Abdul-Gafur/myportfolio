import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import WorkSection from "@/components/WorkSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { Interests, Themes } from "@/components/Research";
import Credentials from "@/components/Credentials";
import ContactBand from "@/components/ContactBand";
import { Container, SectionHeader, TextLink } from "@/components/ui";
import { RESEARCH } from "@/content/site";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />

      <section className="pt-28 sm:pt-36" aria-labelledby="expertise-title">
        <Container>
          <SectionHeader
            label="What I do"
            id="expertise-title"
            title="Areas of expertise."
            action={<TextLink href="/expertise">Capabilities and technologies</TextLink>}
          />
          <div className="mt-14">
            <ExpertiseGrid />
          </div>
        </Container>
      </section>

      <WorkSection />

      <section className="pt-28 sm:pt-36" aria-labelledby="experience-title">
        <Container>
          <SectionHeader
            label="Experience"
            id="experience-title"
            title="Experience & professional journey."
            action={<TextLink href="/experience">Full experience</TextLink>}
          >
            <p>Building technology, leading implementation and contributing to digital transformation across sectors.</p>
          </SectionHeader>
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <ExperienceTimeline />
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="research-title">
        <Container>
          <SectionHeader
            label="Research & insights"
            id="research-title"
            title={RESEARCH.title}
            action={<TextLink href="/insights">Research interests</TextLink>}
          >
            <p>{RESEARCH.intro}</p>
          </SectionHeader>
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <Interests />
            </div>
          </div>
          <div className="mt-6">
            <Themes />
          </div>
        </Container>
      </section>

      <section className="pt-28 sm:pt-36" aria-labelledby="credentials-title">
        <Container>
          <SectionHeader label="Credentials" id="credentials-title" title="Professional certifications and recognition." />
          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <Credentials />
            </div>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
