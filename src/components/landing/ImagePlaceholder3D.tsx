"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  fallbackType?: "hero" | "event" | "how-it-works" | "dashboard" | "category" | "avatar" | "notification" | "mascot";
  label?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  fallbackType = "event",
  label,
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!hasError && src) {
    return (
      <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className={`${className} object-cover transition-opacity duration-300`}
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // 3D-styled fallback rendered strictly within DESIGN.md color palette
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden border border-hairline-violet select-none ${className} ${
        fill ? "w-full h-full" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #150f23 0%, #1f1633 50%, #291b45 100%)",
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
      }}
      aria-label={alt}
    >
      {/* 3D claymorphic depth accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(194, 239, 78, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(250, 127, 170, 0.12) 0%, transparent 45%)",
        }}
      />

      {/* Isometric 3D wireframe / stage graphic */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
        {fallbackType === "hero" && (
          <div className="relative w-48 h-40 flex items-center justify-center">
            <div className="absolute w-36 h-28 rounded-2xl bg-accent-violet-deep/60 border border-hairline-violet transform -rotate-6 shadow-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="w-16 h-10 rounded border border-accent-lime/40 bg-ink-deep/80 flex items-center justify-center">
                <span className="text-micro-cap text-accent-lime font-bold">QR TICKET</span>
              </div>
            </div>
            <div className="absolute w-36 h-28 rounded-2xl bg-surface-night/90 border border-accent-pink/30 transform rotate-6 shadow-2xl flex flex-col items-center justify-center p-2">
              <div className="w-8 h-8 rounded-full bg-accent-pink/20 border border-accent-pink/50 mb-1 flex items-center justify-center text-xs">
                ✦
              </div>
              <span className="text-[11px] font-semibold text-on-primary">TECHFEST 2026</span>
              <span className="text-[9px] text-accent-lime">LIVE CONCERT</span>
            </div>
          </div>
        )}

        {fallbackType === "dashboard" && (
          <div className="w-full max-w-md p-4 rounded-xl bg-surface-night/95 border border-hairline-cloud/20 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline-violet">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-pink/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-lime/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-violet/80" />
                <span className="text-xs font-semibold text-on-dark-muted ml-2">Gather / Organizer Studio</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-accent-violet-deep text-accent-lime font-mono">
                LIVE METRICS
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-ink-deep/60 p-2 rounded border border-hairline-violet">
                <div className="text-[10px] text-on-dark-muted">Total Sales</div>
                <div className="text-sm font-bold text-accent-lime">₹2,14,700</div>
              </div>
              <div className="bg-ink-deep/60 p-2 rounded border border-hairline-violet">
                <div className="text-[10px] text-on-dark-muted">Checked In</div>
                <div className="text-sm font-bold text-on-primary">74.6%</div>
              </div>
              <div className="bg-ink-deep/60 p-2 rounded border border-hairline-violet">
                <div className="text-[10px] text-on-dark-muted">Waitlist</div>
                <div className="text-sm font-bold text-accent-pink">42 waiting</div>
              </div>
            </div>
            <div className="h-14 w-full bg-ink-deep/40 rounded flex items-end gap-1.5 p-2 border border-hairline-violet">
              <div className="w-1/6 bg-accent-violet h-4 rounded-t-sm" />
              <div className="w-1/6 bg-accent-violet h-7 rounded-t-sm" />
              <div className="w-1/6 bg-accent-violet h-6 rounded-t-sm" />
              <div className="w-1/6 bg-accent-lime h-10 rounded-t-sm" />
              <div className="w-1/6 bg-accent-violet h-8 rounded-t-sm" />
              <div className="w-1/6 bg-accent-pink h-11 rounded-t-sm" />
            </div>
          </div>
        )}

        {fallbackType === "how-it-works" && (
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-accent-violet-deep/40 border border-hairline-violet rotate-12" />
            <div className="relative w-16 h-16 rounded-2xl bg-surface-night border border-accent-lime/40 flex items-center justify-center shadow-lg">
              <span className="text-accent-lime text-2xl font-bold font-mono">3D</span>
            </div>
          </div>
        )}

        {fallbackType === "category" && (
          <div className="relative w-14 h-14 rounded-xl bg-accent-violet-deep/50 border border-hairline-violet flex items-center justify-center mb-2 shadow-inner">
            <div className="w-8 h-8 rounded-lg bg-surface-night border border-accent-lime/50 flex items-center justify-center text-accent-lime text-xs font-mono font-bold">
              3D
            </div>
          </div>
        )}

        {fallbackType === "notification" && (
          <div className="w-full max-w-sm space-y-2 text-left">
            <div className="p-3 rounded-xl bg-surface-night border border-accent-lime/40 shadow-xl flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-on-primary">Workshop Hall Updated</div>
                <div className="text-[11px] text-on-dark-muted">Hall B moved to Main Auditorium C</div>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-lime/20 text-accent-lime font-mono">NOW</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-night/80 border border-hairline-violet shadow-lg flex items-center justify-between opacity-75">
              <div>
                <div className="text-xs font-bold text-on-primary">Live Check-in Milestone</div>
                <div className="text-[11px] text-on-dark-muted">500+ attendees registered at the gate</div>
              </div>
              <span className="text-[10px] text-on-dark-muted">2m ago</span>
            </div>
          </div>
        )}

        {fallbackType === "avatar" && (
          <div className="w-12 h-12 rounded-full bg-accent-violet-deep border-2 border-accent-lime/40 flex items-center justify-center text-sm font-bold text-on-primary">
            {label ? label.charAt(0) : "G"}
          </div>
        )}

        {fallbackType === "mascot" && (
          <div className="w-24 h-24 rounded-full bg-surface-night/90 border-2 border-accent-pink/60 flex flex-col items-center justify-center shadow-xl">
            <span className="text-2xl">⚡</span>
            <span className="text-[10px] font-bold text-accent-lime mt-1 font-mono">GATHER</span>
          </div>
        )}

        {label && fallbackType !== "avatar" && fallbackType !== "dashboard" && fallbackType !== "notification" && (
          <span className="text-caption text-on-dark-muted mt-2 font-medium tracking-wide">{label}</span>
        )}
      </div>

      <div className="absolute bottom-1 right-2 text-[9px] text-on-dark-muted/40 font-mono tracking-widest uppercase">
        3D Asset Ready
      </div>
    </div>
  );
}
