import Link from "next/link";
import { Container, Label } from "./ui";
import { NAV, PROFILE } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line sm:mt-36">
      <Container className="grid gap-10 py-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="font-display text-lg font-semibold tracking-tight">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-muted">{PROFILE.title}</p>
          <p className="mt-1 text-sm text-muted">
            {PROFILE.location} · {PROFILE.reach}
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <Label>Pages</Label>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <Label>Elsewhere</Label>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="break-all text-muted transition-colors hover:text-ink">
                {PROFILE.email}
              </a>
            </li>
            <li className="flex gap-6">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-ink">
                LinkedIn
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-ink">
                GitHub
              </a>
              <a href={PROFILE.cv} download={PROFILE.cvFileName} className="text-muted transition-colors hover:text-ink">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-subtle sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
