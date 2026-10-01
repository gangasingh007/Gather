import { TESTIMONIALS } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";

export function Testimonials() {
  return (
    <SectionWrapper className="border-b border-hairline-violet/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <Eyebrow color="muted" className="mb-3">
            WHAT PEOPLE SAY
          </Eyebrow>
          <h2 className="text-display-large text-on-primary">
            Loved by <LimeChip>Thousands</LimeChip>
          </h2>
        </div>
        <p className="text-body-md text-on-dark-muted max-w-sm mt-4 md:mt-0">
          Genuine feedback from attendees discovering culture and organizers
          scaling ticket sales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="p-8 rounded-[var(--rounded-xl)] bg-surface-night border border-hairline-violet hover:border-hairline-violet/90 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-6 text-accent-lime">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < t.rating ? "text-accent-lime" : "text-on-dark-faint"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-lg text-on-primary/90 text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-hairline-violet/50">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  fallbackType="avatar"
                  label={t.name}
                />
              </div>
              <div>
                <div className="text-body-strong text-on-primary text-sm">
                  {t.name}
                </div>
                <div className="text-caption text-on-dark-muted text-xs">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
