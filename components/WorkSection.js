import { Container, SectionHeader, TextLink } from "./ui";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/content/site";

/** Home: the six selected projects as equal cards. */
export default function WorkSection() {
  return (
    <section id="work" className="pt-28 sm:pt-36" aria-labelledby="work-title">
      <Container>
        <SectionHeader
          label="Selected work"
          id="work-title"
          title="Selected projects & solutions."
          action={<TextLink href="/work">All work and case studies</TextLink>}
        >
          <p>Technology is best shown through the problems it solves and the systems it makes possible.</p>
        </SectionHeader>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              // An odd last card spans both columns so the grid never ends with a gap.
              className={PROJECTS.length % 2 === 1 && i === PROJECTS.length - 1 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
