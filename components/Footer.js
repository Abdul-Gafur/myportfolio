import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Abdul-Gafur Saeed</p>
        <div className="flex items-center gap-6">
          <a href="/Abdul-Gafur_CV.pdf" download="Abdul-Gafur_Saeed_CV.pdf" className="transition-colors hover:text-ink">
            Download CV
          </a>
          <a href="#top" className="transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
