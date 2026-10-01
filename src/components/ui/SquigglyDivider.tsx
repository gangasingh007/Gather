/**
 * SquigglyDivider — Signature electric lime wavy divider from DESIGN.md.
 *
 * A hand-drawn SVG wavy line in accent-lime (~3px stroke) spanning full width.
 * Replaces standard 1px hairline dividers with a personality-laden brand flourish.
 */

interface SquigglyDividerProps {
  className?: string;
  position?: "top" | "relative";
}

export function SquigglyDivider({
  className = "",
  position = "top",
}: SquigglyDividerProps) {
  const positionClass =
    position === "top"
      ? "absolute top-0 left-0 right-0 z-20"
      : "relative";

  return (
    <div
      className={`w-full overflow-hidden leading-none -translate-y-1/2 pointer-events-none select-none ${positionClass} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-6 text-accent-lime stroke-current"
        viewBox="0 0 1440 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 12C60 4 120 20 180 12C240 4 300 20 360 12C420 4 480 20 540 12C600 4 660 20 720 12C780 4 840 20 900 12C960 4 1020 20 1080 12C1140 4 1200 20 1260 12C1320 4 1380 20 1440 12"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
