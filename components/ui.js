// Shared building blocks: one container, one header scale, one label style, one button pair.
import Link from "next/link";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Label({ className = "", as: Tag = "span", children }) {
  return (
    <Tag className={`font-mono text-[12px] uppercase tracking-[0.08em] text-subtle ${className}`}>{children}</Tag>
  );
}

const DISPLAY = "font-display font-semibold tracking-[-0.03em] [font-stretch:92%]";

/** Section header used on every page: label in the left rail, heading on the right. */
export function SectionHeader({ label, title, id, children, action }) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <Label className="text-ink">{label}</Label>
      </div>
      <div className="md:col-span-9">
        <h2 id={id} className={`${DISPLAY} text-[2rem] leading-[1.05] text-ink sm:text-5xl`}>
          {title}
        </h2>
        {children ? <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">{children}</div> : null}
        {action ? <div className="mt-6">{action}</div> : null}
      </div>
    </div>
  );
}

/** Top of every inner page: label, h1 and an optional lede. */
export function PageHeader({ label, title, children }) {
  return (
    <header className="pt-32 sm:pt-40">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Label className="text-ink">{label}</Label>
          </div>
          <div className="md:col-span-9">
            <h1 className={`${DISPLAY} text-[2.5rem] leading-[1] tracking-[-0.035em] text-ink [font-stretch:88%] sm:text-6xl`}>
              {title}
            </h1>
            {children ? <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted sm:text-xl">{children}</div> : null}
          </div>
        </div>
      </Container>
    </header>
  );
}

export function H3({ className = "", children }) {
  return (
    <h3 className={`font-display text-2xl font-semibold leading-tight tracking-[-0.02em] [font-stretch:92%] ${className}`}>
      {children}
    </h3>
  );
}

const BTN =
  "group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium transition-[background-color,border-color,transform] duration-150 active:scale-[0.98]";

/** Primary (filled) or secondary (outlined) action. External and download links stay <a>. */
export function Button({ href, variant = "primary", download, external, className = "", children }) {
  const cls = `${BTN} ${
    variant === "primary"
      ? "bg-ink text-paper hover:bg-ink-2"
      : variant === "light"
        ? "bg-white text-ink hover:bg-wash"
        : variant === "ghost-dark"
          ? "border border-white/20 text-white hover:border-white/60"
          : "border border-line bg-card text-ink hover:border-ink"
  } ${className}`;
  if (download || external) {
    return (
      <a
        href={href}
        className={cls}
        {...(download ? { download } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Inline text link with an arrow that nudges on hover. */
export function TextLink({ href, external, className = "", children }) {
  const cls = `group inline-flex items-center gap-1.5 text-[15px] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink ${className}`;
  const arrow = (
    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Tags({ items, label = "Technologies", className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label={label}>
      {items.map((t) => (
        <li key={t} className="rounded-md bg-wash px-2.5 py-1 text-xs text-ink-2">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function ArrowUpRight({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDown({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
