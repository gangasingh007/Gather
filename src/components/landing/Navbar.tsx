"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-canvas-dark/90 backdrop-blur-md border-b border-hairline-violet py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1152px] px-6 md:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-[var(--rounded-sm)] bg-surface-night border border-hairline-violet flex items-center justify-center text-accent-lime font-mono font-bold text-sm tracking-tighter group-hover:border-accent-lime transition-colors">
            G•
          </div>
          <span className="text-heading-sm font-display tracking-tight text-on-primary">
            Gather
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="#events"
            className="text-body-md text-on-dark-muted hover:text-on-primary transition-colors"
          >
            Discover
          </Link>
          <Link
            href="#how-it-works"
            className="text-body-md text-on-dark-muted hover:text-on-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#organizers"
            className="text-body-md text-on-dark-muted hover:text-on-primary transition-colors"
          >
            For Organizers
          </Link>
          <Link
            href="#categories"
            className="text-body-md text-on-dark-muted hover:text-on-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            href="#live"
            className="text-body-md text-on-dark-muted hover:text-on-primary transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
            Live
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" href="/login">
            SIGN IN
          </Button>
          <Button variant="inverted" href="#events">
            EXPLORE EVENTS
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-[var(--rounded-md)] text-on-primary hover:bg-on-dark-faint focus:outline-none focus:ring-2 focus:ring-ring-focus"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-canvas-dark border-b border-hairline-violet px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-md text-on-primary py-2 border-b border-hairline-violet/50"
            >
              Discover
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-md text-on-primary py-2 border-b border-hairline-violet/50"
            >
              How it Works
            </Link>
            <Link
              href="#organizers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-md text-on-primary py-2 border-b border-hairline-violet/50"
            >
              For Organizers
            </Link>
            <Link
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-md text-on-primary py-2 border-b border-hairline-violet/50"
            >
              Categories
            </Link>
            <Link
              href="#live"
              onClick={() => setMobileMenuOpen(false)}
              className="text-body-md text-on-primary py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent-pink" />
              Live Operations
            </Link>
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <Button
              variant="ghost"
              href="/login"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              SIGN IN
            </Button>
            <Button
              variant="inverted"
              href="#events"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              EXPLORE EVENTS
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
