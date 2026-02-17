export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 lg:px-8"
      aria-label="About section"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            Who We Are
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Mission Card */}
          <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 md:p-12">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Our Mission
            </span>
            <p className="mt-6 text-xl leading-relaxed text-foreground sm:text-2xl">
              Led by Sandra Hallie and Kelson Adams, our mission is to blend
              engineering precision with hospitality to create spaces where
              local communities thrive.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Engineering-Led
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We bring a builder&rsquo;s mindset to hospitality&mdash;systems
                thinking, data-driven decisions, and scalable operations.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Community-First
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Every venture we pursue centers on enriching local communities
                and creating shared experiences families love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
