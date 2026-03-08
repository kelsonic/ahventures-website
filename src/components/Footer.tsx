export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-card/50"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Adams Hallie
            </span>
            <span className="text-lg font-light tracking-tight text-muted">
              {" "}
              Ventures
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A family-led holding company dedicated to acquiring and scaling
              community-centric experiences. Based in Lakeway, Texas.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                Portfolio
              </h4>
              <ul className="mt-3 space-y-2" role="list">
                <li>
                  <a
                    href="https://www.pikopyestown.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    Pikopye&rsquo;s Town
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                Contact
              </h4>
              <ul className="mt-3 space-y-2" role="list">
                <li>
                  <a
                    href="mailto:team@adamshallieventures.com"
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted">
            &copy; {currentYear} Adams Hallie Ventures LLC. All rights reserved.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted/70">
            Adams Hallie Ventures LLC operates Pikopye&rsquo;s Town under a
            registered Assumed Name in Travis County, TX.
          </p>
        </div>
      </div>
    </footer>
  );
}
