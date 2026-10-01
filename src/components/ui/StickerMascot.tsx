"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StickerMascotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Position presets for common placements */
  position?:
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "top"
    | "top-center"
    | "bottom-center";
  /** Float translation distance in pixels (defaults to 12) */
  floatDistance?: number;
  /** Rotation angle in degrees when tilting up on its own (defaults to 6) */
  rotateAngle?: number;
  /** Animation duration in seconds for one full floating loop (defaults to 3.5) */
  duration?: number;
}

const positionStyles: Record<string, string> = {
  "bottom-right": "absolute bottom-0 right-0 translate-y-[20%] translate-x-[-10%]",
  "bottom-left": "absolute bottom-0 left-0 translate-y-[20%] translate-x-[10%]",
  "top-right": "absolute top-0 right-0 -translate-y-[20%] translate-x-[-10%]",
  "top-left": "absolute top-0 left-0 -translate-y-[20%] translate-x-[10%]",
  "top": "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-center": "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-center": "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
};

export function StickerMascot({
  src,
  alt,
  width,
  height,
  className = "",
  position = "bottom-right",
  floatDistance = 12,
  rotateAngle = 6,
  duration = 3.5,
}: StickerMascotProps) {
  const resolvedPosition = positionStyles[position] || positionStyles["bottom-right"];

  return (
    <div
      className={`${resolvedPosition} z-30 pointer-events-none max-md:scale-[0.6] max-sm:hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -floatDistance, 0],
          rotate: [0, -rotateAngle, rotateAngle * 0.35, 0],
        }}
        transition={{
          opacity: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.5, ease: "easeOut" },
          y: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="inline-block"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="select-none drop-shadow-md"
        />
      </motion.div>
    </div>
  );
}

