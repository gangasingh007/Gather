import { LimeChip } from "@/components/ui/LimeChip";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StickerMascot } from "@/components/ui/StickerMascot";

export function CTABand() {
  return (
    <SectionWrapper
      bg="bg-accent-violet-deep"
      className="relative text-center overflow-hidden border-b border-hairline-violet/40 py-20 md:py-28"
    >
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 className="text-display-large text-on-primary">
          Ready to <LimeChip>Gather</LimeChip>?
        </h2>

        <p className="text-body-lg text-on-primary/80 max-w-xl mx-auto">
          Whether you&apos;re discovering underground gigs or producing a 5,000-person
          tech conference — experience ticketing without overselling.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="inverted" href="#events">
            EXPLORE EVENTS
          </Button>
          <Button variant="ghost" href="#organizers">
            START ORGANIZING
          </Button>
        </div>
      </div>

      {/* Mascot at left boundary */}
      <StickerMascot
        src="/images/stickers/mascot-cone.png"
        alt="Gather Traffic Cone Mascot"
        width={130}
        height={130}
        position="bottom-left"
        className="bottom-10 left-10"
      />

      {/* Mascot at right boundary */}
      <StickerMascot
        src="/images/stickers/mascot-astronaut-v2.png"
        alt="Gather Astronaut Mascot v2"
        width={200}
        height={200}
        position="top-right"
        className="top-10"
      />
    </SectionWrapper>
  );
}
