import { ORGANIZER_FEATURES } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";

export function ForOrganizers() {
  return (
    <SectionWrapper
      id="organizers"
      bg="bg-surface-canvas-light"
      className="text-ink-deep border-b border-hairline-cloud"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
        <div>
          <Eyebrow color="violet" className="mb-3">
            FOR ORGANIZERS
          </Eyebrow>
          <h2 className="text-display-large text-ink-deep">
            Everything You Need to <LimeChip>Run</LimeChip> Your Event
          </h2>
        </div>
        <p className="text-body-lg text-ink-deep/80 max-w-md mt-4 lg:mt-0 font-normal">
          From first draft to final check-in. Monitor sales curves, prevent
          ticket scalping, and broadcast schedule changes in real-time.
        </p>
      </div>

      {/* 3D Dashboard Mockup Presentation */}
      <div className="mb-16 relative flex justify-center">
        <div className="w-full max-w-4xl p-2 md:p-4 rounded-[var(--rounded-xxl)] bg-surface-night shadow-2xl border border-hairline-cool transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
          <ImageWithFallback
            src="/images/organizer/dashboard-mockup.png"
            alt="Gather Organizer Studio Live Analytics and Check-in Dashboard"
            fill
            fallbackType="dashboard"
            className="w-full h-80 md:h-[420px] rounded-[var(--rounded-xl)]"
          />
        </div>
      </div>

      {/* 3 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {ORGANIZER_FEATURES.map((feat) => (
          <div
            key={feat.title}
            className="p-8 rounded-[var(--rounded-xl)] bg-surface-canvas-light border border-hairline-cloud shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-[var(--rounded-lg)] bg-surface-press-light mb-6 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={feat.image}
                  alt={feat.title}
                  width={56}
                  height={56}
                  fallbackType="category"
                  label={feat.title}
                />
              </div>
              <h3 className="text-heading-md text-ink-deep font-display font-medium mb-2">
                {feat.title}
              </h3>
              <p className="text-body-md text-ink-deep/70 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Central CTA on Light Surface */}
      <div className="text-center pt-4">
        <Button variant="primary" href="/organizer">
          START ORGANIZING ON GATHER
        </Button>
      </div>
    </SectionWrapper>
  );
}
