// Shared building blocks: one container, one section header, one label style.

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Label({ className = "", children }) {
  return (
    <span className={`font-mono text-[12px] uppercase tracking-[0.08em] text-subtle ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({ label, title, children }) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <Label className="text-ink">{label}</Label>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl [font-stretch:92%]">
          {title}
        </h2>
        {children ? <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">{children}</div> : null}
      </div>
    </div>
  );
}

export function ArrowUpRight({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
