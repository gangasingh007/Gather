import Link from "next/link";
import { EVENT_CATEGORIES } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";

export function EventCategories() {
  return (
    <SectionWrapper id="categories" className="border-b border-hairline-violet/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <Eyebrow color="muted" className="mb-3">
            EXPLORE BY INTEREST
          </Eyebrow>
          <h2 className="text-display-large text-on-primary">
            Find What <LimeChip>Moves</LimeChip> You
          </h2>
        </div>
        <p className="text-body-md text-on-dark-muted max-w-sm mt-4 md:mt-0">
          Browse verified gatherings across technology, underground music,
          competitive sports, and creative crafts.
        </p>
      </div>

      {/* 8-Tile Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {EVENT_CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group flex flex-col items-center text-center p-6 rounded-[var(--rounded-xxl)] bg-surface-night border border-hairline-violet hover:border-accent-lime/60 hover:scale-[1.02] transition-all duration-200 shadow-md"
          >
            <div className="w-16 h-16 rounded-[var(--rounded-xl)] bg-ink-deep flex items-center justify-center mb-4 group-hover:shadow-[0_0_12px_rgba(194,239,78,0.2)] transition-shadow">
              <ImageWithFallback
                src={cat.image}
                alt={cat.name}
                width={48}
                height={48}
                fallbackType="category"
                label={cat.name}
              />
            </div>

            <h3 className="text-heading-sm text-on-primary font-display font-medium group-hover:text-accent-lime transition-colors">
              {cat.name}
            </h3>

            <span className="text-caption text-on-dark-muted mt-1 font-mono">
              {cat.count} upcoming
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
