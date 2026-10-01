import { TRUSTED_BY_LOGOS } from "@/lib/constants";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

export function TrustedBy() {
  return (
    <section className="relative bg-surface-canvas-dark py-12 border-b border-hairline-violet/50">
      <SquigglyDivider />
      <div className="mx-auto max-w-[1152px] px-6 md:px-8 text-center">
        <p className="text-eyebrow text-on-dark-muted mb-8 tracking-widest">
          TRUSTED BY 2,000+ EVENT PRODUCERS & COMMUNITY BUILDERS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {TRUSTED_BY_LOGOS.map((org) => (
            <div
              key={org.name}
              className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity duration-200 select-none group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-accent-violet-mid group-hover:bg-accent-lime transition-colors" />
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-on-primary">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
