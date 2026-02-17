export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <main className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            Coming Soon
          </span>
        </div>

        {/* Wordmark */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Adams Hallie
          <span className="font-light text-muted"> Ventures</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
          A family-led holding company investing in the future of play.
          <br className="hidden sm:block" />
          Something exciting is on the way.
        </p>

        {/* Location */}
        <p className="mt-4 text-sm text-muted/60">
          Spicewood, Texas
        </p>

        {/* Divider */}
        <div className="my-10 h-px w-16 bg-border" aria-hidden="true" />

        {/* Contact CTA */}
        <a
          href="mailto:kelson@adamshallieventures.com"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
        >
          Get in touch
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center">
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Adams Hallie Ventures LLC
        </p>
      </footer>
    </div>
  );
}
