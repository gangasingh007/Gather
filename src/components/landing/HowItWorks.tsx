import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="relative border-b border-hairline-violet/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow color="muted" className="mb-3">
          SIMPLE AS 1-2-3-4
        </Eyebrow>
        <h2 className="text-display-large text-on-primary">
          From <LimeChip>Discovery</LimeChip> to Check-in
        </h2>
        <p className="text-body-lg text-on-dark-muted mt-4">
          A seamless journey engineered without friction, hidden ticketing surcharges,
          or paper passes.
        </p>
      </div>

      {/* 4-Step Flow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {HOW_IT_WORKS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="flex flex-col bg-surface-night p-6 md:p-8 rounded-[var(--rounded-xxl)] border border-hairline-violet/80 hover:border-accent-violet transition-colors group shadow-lg"
          >
            {/* 3D Visual for Step */}
            <div className="w-full h-40 rounded-[var(--rounded-xl)] overflow-hidden mb-6 bg-ink-deep flex items-center justify-center">
              <ImageWithFallback
                src={step.image}
                alt={step.title}
                fill
                fallbackType="how-it-works"
                label={step.title}
              />
            </div>

            {/* Step badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-micro-cap font-mono text-accent-lime font-bold tracking-widest">
                STEP {step.step}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent-violet-mid group-hover:bg-accent-lime transition-colors" />
            </div>

            <h3 className="text-heading-md text-on-primary font-display font-medium mb-2">
              {step.title}
            </h3>

            <p className="text-body-md text-on-dark-muted text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
