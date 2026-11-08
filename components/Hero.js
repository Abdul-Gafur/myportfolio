import { Container, Label, Button, ArrowRight, ArrowDown } from "./ui";
import { HERO, PROFILE } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1
              id="hero-title"
              className="animate-rise font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.035em] [animation-delay:60ms] [font-stretch:88%] sm:text-6xl lg:text-[3.0rem]"
            >
              {HERO.headline}
            </h1>

            <div className="animate-rise mt-7 max-w-xl space-y-4 text-lg leading-relaxed text-muted [animation-delay:120ms]">
              {HERO.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="animate-rise mt-6 flex flex-wrap gap-2 [animation-delay:150ms]" aria-label="Disciplines">
              {PROFILE.disciplines.map((r) => (
                <li key={r} className="rounded-full border border-line bg-card px-3 py-1.5 text-sm text-ink-2">
                  {r}
                </li>
              ))}
            </ul>

            <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row">
              <Button href="/work">
                Explore my work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href={PROFILE.cv} download={PROFILE.cvFileName} variant="secondary">
                Download CV
                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms] lg:col-span-5">
            <figure className="overflow-hidden rounded-[28px] border border-line bg-card">
              <img
                src={PROFILE.photo}
                alt={PROFILE.photoAlt}
                width={PROFILE.photoSize.width}
                height={PROFILE.photoSize.height}
                className="aspect-[4/5] w-full object-cover object-[50%_60%] sm:aspect-[5/4] lg:aspect-[4/5]"
                fetchPriority="high"
              />
              <div className="flex items-end justify-between gap-4 border-t border-line px-5 py-4">
                <div>
                  <Label>Currently</Label>
                  <p className="mt-1.5 text-[15px] font-medium leading-snug text-ink">{PROFILE.current.role}</p>
                  <p className="text-sm text-muted">{PROFILE.current.org}</p>
                </div>
                <Label className="shrink-0 text-right">Since {PROFILE.current.since}</Label>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
