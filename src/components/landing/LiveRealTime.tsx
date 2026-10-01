import { Eyebrow } from "@/components/ui/Eyebrow";
import { LimeChip } from "@/components/ui/LimeChip";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageWithFallback } from "@/components/landing/ImagePlaceholder3D";

export function LiveRealTime() {
  return (
    <SectionWrapper id="live" className="border-b border-hairline-violet/50">
      <div className="relative rounded-[var(--rounded-xxl)] bg-accent-violet-deep p-8 md:p-14 overflow-hidden border border-hairline-violet shadow-2xl">
        {/* Subtle radial glow inside card */}
        <div
          className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full pointer-events-none blur-[100px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent-lime) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-[var(--rounded-xs)] bg-surface-night/80 border border-accent-pink/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-pink" />
              </span>
              <span className="text-micro-cap text-accent-pink font-bold font-mono tracking-wider">
                WEBSOCKET LIVE FEED
              </span>
            </div>

            <h2 className="text-display-large text-on-primary">
              Stay Connected in <LimeChip>Real Time</LimeChip>
            </h2>

            <p className="text-body-lg text-on-primary/80 max-w-xl">
              No refreshing, no stale tickets. Instant attendee broadcast updates,
              live check-in milestones, and immediate hall switch alerts pushed
              straight to your device.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-on-primary">
              <div className="p-4 rounded-[var(--rounded-lg)] bg-surface-night/40 border border-hairline-violet/60">
                <div className="text-xs text-accent-lime font-mono font-bold">
                  PUBSUB READY
                </div>
                <div className="text-sm font-medium mt-1">Redis Backbone</div>
              </div>
              <div className="p-4 rounded-[var(--rounded-lg)] bg-surface-night/40 border border-hairline-violet/60">
                <div className="text-xs text-accent-pink font-mono font-bold">
                  ZERO DELAY
                </div>
                <div className="text-sm font-medium mt-1">Direct Socket</div>
              </div>
              <div className="p-4 rounded-[var(--rounded-lg)] bg-surface-night/40 border border-hairline-violet/60">
                <div className="text-xs text-on-primary font-mono font-bold">
                  100% RELIABLE
                </div>
                <div className="text-sm font-medium mt-1">Audit Logged</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Notification Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-[var(--rounded-xl)] overflow-hidden shadow-2xl border border-hairline-violet">
              <ImageWithFallback
                src="/images/live/notification-stack.png"
                alt="3D Live Event Notification Stream and Instant Announcements"
                fill
                fallbackType="notification"
                className="w-full h-72 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
