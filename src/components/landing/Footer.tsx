import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-surface-canvas-light text-ink-deep">
      {/* Lime squiggly divider SVG per DESIGN.md specs */}
      <div className="w-full overflow-hidden leading-none -translate-y-1/2">
        <svg
          className="w-full h-6 text-accent-lime stroke-current"
          viewBox="0 0 1440 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12C60 4 120 20 180 12C240 4 300 20 360 12C420 4 480 20 540 12C600 4 660 20 720 12C780 4 840 20 900 12C960 4 1020 20 1080 12C1140 4 1200 20 1260 12C1320 4 1380 20 1440 12"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1152px] px-6 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[var(--rounded-sm)] bg-primary text-accent-lime flex items-center justify-center font-mono font-bold text-sm">
                G•
              </div>
              <span className="text-heading-sm font-display tracking-tight text-ink-deep">
                Gather
              </span>
            </Link>

            <p className="text-caption text-ink-deep/70 max-w-xs leading-relaxed">
              The modern, production-grade event platform for discovering,
              booking, and operating live gatherings. Zero overselling,
              100% verified check-ins.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <div className="text-body-strong text-ink-deep text-sm">
              {FOOTER_LINKS.product.title}
            </div>
            <ul className="space-y-2 text-caption text-ink-deep/75">
              {FOOTER_LINKS.product.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-ink-deep hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <div className="text-body-strong text-ink-deep text-sm">
              {FOOTER_LINKS.company.title}
            </div>
            <ul className="space-y-2 text-caption text-ink-deep/75">
              {FOOTER_LINKS.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-ink-deep hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-3">
            <div className="text-body-strong text-ink-deep text-sm">
              {FOOTER_LINKS.connect.title}
            </div>
            <ul className="space-y-2 text-caption text-ink-deep/75">
              {FOOTER_LINKS.connect.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink-deep hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="pt-8 border-t border-hairline-cloud flex flex-col md:flex-row items-center justify-between text-caption text-ink-deep/60 gap-4">
          <p>© 2026 Gather Platform Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:underline">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
