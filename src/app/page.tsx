import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { FeaturedEvents } from "@/components/landing/FeaturedEvents";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForOrganizers } from "@/components/landing/ForOrganizers";
import { EventCategories } from "@/components/landing/EventCategories";
import { LiveRealTime } from "@/components/landing/LiveRealTime";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTABand } from "@/components/landing/CTABand";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-surface-canvas-dark text-on-primary">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero with Starfield & 3D Stage */}
        <Hero />

        {/* 3. Trusted By Strip */}
        <TrustedBy />

        {/* 4. Featured Events */}
        <FeaturedEvents />

        {/* 5. How It Works (4-Step Flow) */}
        <HowItWorks />

        {/* 6. For Organizers (Polarity-flipped White Canvas) */}
        <ForOrganizers />

        {/* 7. Event Categories Grid */}
        <EventCategories />

        {/* 8. Live & Real-Time Spotlight */}
        <LiveRealTime />

        {/* 9. Verified Testimonials */}
        <Testimonials />

        {/* 10. CTA Band */}
        <CTABand />
      </main>

      {/* 11. Footer with Squiggly Divider */}
      <Footer />
    </div>
  );
}
