import { Button } from "@/components/ui/Button";
import { LimeChip } from "@/components/ui/LimeChip";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";
import { StickerMascot } from "@/components/ui/StickerMascot";
import RotatingText from "../ui/RotatingText";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-surface-canvas-dark pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-hairline-violet/40">
      {/* Starfield pinprick texture generated via SVG background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric violet ambient gradient */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none blur-[120px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-violet-deep) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1152px] px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <h1 className="text-display-hero text-on-primary">
            Find Your Next{" "}
            <span className="block mt-1">
              <RotatingText
                texts={['Events', 'Hackathons', 'Concerts', 'Meetups']}
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
            </span>
            <span className="block mt-1">Experience</span>
          </h1>

          <p className="text-body-lg text-on-dark-muted max-w-xl">
            Gather connects attendees with authentic live events, hackathons,
            indie concerts, and creator meetups. Built with transactional
            booking correctness, zero overselling, and instant verified QR tickets.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="shadow-[0_0_16px_4px_rgba(21,15,35,0.9)] rounded-[var(--rounded-md)]">
              <Button variant="inverted" href="#events">
                EXPLORE EVENTS
              </Button>
            </div>
            <Button variant="ghost" href="#organizers">
              FOR ORGANIZERS
            </Button>
          </div>

          {/* Real-time stats micro-strip */}
          <div className="pt-6 border-t border-hairline-violet/60 flex items-center gap-8 text-on-dark-muted">
            <div>
              <div className="text-heading-sm text-on-primary font-display font-bold">
                100%
              </div>
              <div className="text-micro-cap text-on-dark-muted">
                CONCURRENCY SAFE
              </div>
            </div>
            <div className="w-[1px] h-8 bg-hairline-violet" />
            <div>
              <div className="text-heading-sm text-accent-lime font-display font-bold">
                &lt; 500ms
              </div>
              <div className="text-micro-cap text-on-dark-muted">
                QR CHECK-IN
              </div>
            </div>
            <div className="w-[1px] h-8 bg-hairline-violet" />
            <div>
              <div className="text-heading-sm text-on-primary font-display font-bold">
                0 AI NOISE
              </div>
              <div className="text-micro-cap text-on-dark-muted">
                REAL EVENTS ONLY
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Visual Mockup */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[var(--rounded-xxl)] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl border border-hairline-violet">
            <ImageWithFallback
              src="/images/hero/hero-3d.png"
              alt="3D isometric event pass and concert stage visualization"
              fill
              fallbackType="hero"
              label="3D Event Scene & Live QR Ticket"
              priority
            />
          </div>

          {/* Floating Live Indicator Badge */}
          <div className="absolute -bottom-4 -left-4 bg-surface-night/95 border border-accent-lime/40 px-4 py-2.5 rounded-[var(--rounded-xl)] shadow-xl flex items-center gap-3 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-lime" />
            </span>
            <div>
              <div className="text-micro-cap text-accent-lime font-bold">
                LIVE CAPACITY SYNC
              </div>
              <div className="text-[11px] text-on-dark-muted font-medium">
                842 / 1,000 booked
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Mascot at section boundary */}
      <StickerMascot
        src="/images/stickers/mascot-astronaut.png"
        alt="Gather Astronaut Sticker Mascot"
        width={230}
        height={230}
        position="bottom-right"
        className="bottom-10"
      />
    </section>
  );
}
