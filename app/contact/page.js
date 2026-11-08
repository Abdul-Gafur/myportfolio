import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Container, PageHeader, Label, ArrowUpRight, ArrowDown } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { CONTACT, PROFILE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Abdul-Gafur Saeed about enterprise architecture, AI innovation, digital transformation, roles, fellowships or collaboration.",
  path: "/contact",
});

const LINKS = [
  { label: "LinkedIn", href: PROFILE.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: PROFILE.github, Icon: FaGithub },
  { label: "WhatsApp", href: PROFILE.whatsapp, Icon: FaWhatsapp },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title={CONTACT.title}>
        {CONTACT.text.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </PageHeader>

      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="space-y-8 md:col-span-4 lg:col-span-3">
              <div>
                <Label as="h2">Email</Label>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group mt-3 inline-flex max-w-full items-center gap-1.5 break-all text-[15px] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {PROFILE.email}
                  <ArrowUpRight className="size-4 shrink-0" />
                </a>
              </div>
              <div>
                <Label as="h2">Profiles</Label>
                <ul className="mt-3 space-y-2">
                  {LINKS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors hover:text-ink"
                      >
                        <Icon className="size-4 text-ink" aria-hidden="true" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label as="h2">CV</Label>
                <a
                  href={PROFILE.cv}
                  download={PROFILE.cvFileName}
                  className="group mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Download CV (PDF)
                  <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </div>
              <div>
                <Label as="h2">Location</Label>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {PROFILE.location}
                  <br />
                  {CONTACT.availability}
                </p>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
