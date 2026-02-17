export default function PortfolioCard() {
  return (
    <section
      id="portfolio"
      className="px-6 py-16 lg:px-8"
      aria-label="Portfolio section"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            Active Ventures
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Main Portfolio Card - spans 2 cols and 2 rows */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:col-span-2 md:row-span-2 md:p-12">
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green-500"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold text-accent">
                Operating
              </span>
            </div>

            <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Pikopye&rsquo;s Town
            </h3>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              A reimagined indoor play experience for the modern family.
              Currently operating in Lakeway and South Austin.
            </p>

            <a
              href="https://www.pikopyestown.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Visit Pikopye's Town website (opens in new tab)"
            >
              Visit pikopyestown.com
              <svg
                className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>

            {/* Decorative accent */}
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/[0.04] transition-all duration-500 group-hover:bg-accent/[0.08]"
              aria-hidden="true"
            />
          </div>

          {/* Stats Card - Location */}
          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30">
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Locations
            </span>
            <p className="mt-4 text-5xl font-bold tracking-tight text-foreground">
              1
            </p>
            <p className="mt-2 text-sm text-muted">Lakeway, TX</p>
          </div>

          {/* Stats Card - Focus */}
          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30">
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Focus
            </span>
            <p className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              Community Experiences
            </p>
            <p className="mt-2 text-sm text-muted">
              Indoor play &amp; family entertainment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
