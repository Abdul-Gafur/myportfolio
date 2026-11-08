import Link from "next/link";
import { Label, ArrowUpRight } from "./ui";
import { CERTIFICATIONS, AWARDS, EDUCATION, LANGUAGES } from "@/content/site";

function Block({ title, children }) {
  return (
    <div className="border border-line bg-card p-6">
      <Label as="h3">{title}</Label>
      <ul className="mt-4 space-y-4">{children}</ul>
    </div>
  );
}

function Item({ name, by, href, external }) {
  const inner = (
    <>
      <p className="text-[15px] font-medium leading-snug">{name}</p>
      <p className="text-sm text-muted">{by}</p>
    </>
  );
  if (!href) return <li>{inner}</li>;
  const cls = "group block rounded-md transition-colors";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className={cls}>
          {inner}
          <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent">
            Verify credential <ArrowUpRight className="size-3" />
          </span>
        </a>
      ) : (
        <Link href={href} className={cls}>
          <p className="text-[15px] font-medium leading-snug underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
            {name}
          </p>
          <p className="text-sm text-muted">{by}</p>
        </Link>
      )}
    </li>
  );
}

/** Certifications and recognition; `full` adds education and languages. */
export default function Credentials({ full = false }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Block title="Certifications">
        {CERTIFICATIONS.map((c) => (
          <Item key={c.name} name={c.name} by={c.issuer} href={c.verify} external />
        ))}
      </Block>
      <Block title="Recognition">
        {AWARDS.map((a) => (
          <Item key={a.name} name={a.name} by={a.issuer} href={a.href} />
        ))}
      </Block>
      {full ? (
        <>
          <Block title="Education">
            {EDUCATION.map((e) => (
              <li key={e.degree}>
                <p className="text-[15px] font-medium leading-snug">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="text-sm text-subtle">{e.dates}</p>
                {e.note ? <p className="mt-1 text-sm leading-relaxed text-muted">{e.note}</p> : null}
              </li>
            ))}
          </Block>
          <Block title="Languages">
            {LANGUAGES.map(([l, level]) => (
              <li key={l} className="flex items-baseline justify-between gap-4">
                <p className="text-[15px] font-medium">{l}</p>
                <p className="text-sm text-muted">{level}</p>
              </li>
            ))}
          </Block>
        </>
      ) : null}
    </div>
  );
}
