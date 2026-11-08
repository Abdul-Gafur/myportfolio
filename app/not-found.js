import { PageHeader, Container, Button, ArrowRight } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <PageHeader label="404" title="This page doesn’t exist.">
        <p>The link may be out of date. The work, experience and contact pages are a good place to continue.</p>
      </PageHeader>
      <Container className="pt-10">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-9 md:col-start-4">
            <Button href="/">
              Go to the home page
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button href="/work" variant="secondary">
              See selected work
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
