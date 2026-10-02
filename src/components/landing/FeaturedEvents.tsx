"use client";

import { useState } from "react";
import { FEATURED_EVENTS } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StickerMascot } from "@/components/ui/StickerMascot";
import FlexCarousel from "@/components/ui/FlexCarouselItem";
import RotatingText from "../ui/RotatingText";

export function FeaturedEvents() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = FEATURED_EVENTS[activeEventIndex] ?? FEATURED_EVENTS[0];
  const carouselItems = FEATURED_EVENTS.map((event) => ({
    src: event.image,
    alt: event.title,
    title: event.title,
    subtitle: event.subtitle,
  }));

  return (
    <SectionWrapper id="events" className="relative border-b border-hairline-violet/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <Eyebrow color="lime" className="mb-3">
            HAPPENING SOON
          </Eyebrow>
          <h2 className="text-display-large text-on-primary">
            Events Worth{" "}
            <RotatingText
              texts={['Attending', 'Experiencing', 'Exploring']}
              mainClassName="px-2 bg-accent-lime text-ink-deep py-0.5 justify-start rounded-lg w-max-content inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </h2>
        </div>
        <p className="text-body-md text-on-dark-muted max-w-sm mt-4 md:mt-0">
          Hand-curated experiences with real community, high production value,
          and transparent ticketing.
        </p>
      </div>

      <div className="overflow-hidden rounded-[var(--rounded-xl)] border border-hairline-violet bg-surface-night">
        <div className="relative h-[380px] sm:h-[460px] md:h-[560px]">
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.5}
            gap={12}
            squeeze={0.2}
            focusOnClick
            captions
            fit="natural"
            radius={0}
            lensWidth={0.74}
            lensHeight={1.18}
            tilt={62}
            roundness={1}
            bend={0.34}
            reach={0.38}
            curl="twist"
            dispersion={0.45}
            liquid={0}
            followCursor={false}
            autoplay={false}
            interval={4}
            captureWheel
            onChange={(index) => setActiveEventIndex(index)}
          />
        </div>

        <div className="flex flex-col gap-5 border-t border-hairline-violet/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-on-dark-muted">
            <span className="font-mono font-bold text-accent-lime">{activeEvent.price}</span>
            <span>{activeEvent.location}</span>
            <span>{activeEvent.date}</span>
          </div>
          <Button
            variant="inverted"
            href={`/events/${activeEvent.id}`}
            className="w-full sm:w-auto"
          >
            {activeEvent.cta}
          </Button>
        </div>
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
