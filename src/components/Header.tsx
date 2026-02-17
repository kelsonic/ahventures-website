"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="flex items-center gap-2"
          aria-label="Adams Hallie Ventures home"
        >
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Adams Hallie
          </span>
          <span className="-ml-1 text-lg font-light tracking-tight text-muted">
            Ventures
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#holding"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Holding
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="mailto:kelson@adamshallieventures.com"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a
              href="#holding"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Holding
            </a>
            <a
              href="#portfolio"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card-hover hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="mailto:kelson@adamshallieventures.com"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
