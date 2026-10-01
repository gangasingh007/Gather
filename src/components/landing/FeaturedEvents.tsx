import { FEATURED_EVENTS } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";
import { StickerMascot } from "@/components/ui/StickerMascot";

export function FeaturedEvents() {
  return (
    <SectionWrapper id="events" className="relative border-b border-hairline-violet/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <Eyebrow color="lime" className="mb-3">
            HAPPENING SOON
          </Eyebrow>
          <h2 className="text-display-large text-on-primary">
            Events Worth <LimeChip>Showing Up</LimeChip> For
          </h2>
        </div>
        <p className="text-body-md text-on-dark-muted max-w-sm mt-4 md:mt-0">
          Hand-curated experiences with real community, high production value,
          and transparent ticketing.
        </p>
      </div>

      {/* 3-Column Event Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_EVENTS.map((event) => (
          <div
            key={event.id}
            className="group flex flex-col bg-surface-night rounded-[var(--rounded-xl)] border border-hairline-violet hover:border-accent-violet-mid transition-all duration-300 overflow-hidden shadow-xl"
          >
            {/* Card Image Area */}
            <div className="relative w-full h-56 bg-ink-deep overflow-hidden">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                fill
                fallbackType="event"
                label={event.title}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-surface-night/90 backdrop-blur-md px-3 py-1 rounded-[var(--rounded-xs)] border border-hairline-violet text-micro-cap font-mono text-accent-lime font-bold">
                {event.price}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
              <div>
                <h3 className="text-heading-lg text-on-primary font-display font-medium group-hover:text-accent-lime transition-colors">
                  {event.title}
                </h3>
                <p className="text-body-md text-on-dark-muted mt-1 text-sm line-clamp-1">
                  {event.subtitle}
                </p>
              </div>

              {/* Event Metadata */}
              <div className="pt-2 border-t border-hairline-violet/50 space-y-2 text-caption text-on-dark-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                  <span>📍 {event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                  <span>📅 {event.date}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="inverted"
                href={`/events/${event.id}`}
                className="w-full text-center"
              >
                {event.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Sticker Mascot at boundary */}
      <StickerMascot
        src="/images/stickers/mascot-monster.png"
        alt="Monster Mascot"
        width={210}
        height={210}
        position="bottom-left"
      />
    </SectionWrapper>
  );
}
