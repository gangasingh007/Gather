import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Background color class — defaults to dark canvas */
  bg?: string;
  /** HTML element to render */
  as?: "section" | "div" | "footer";
  /** Optional aria-label for accessibility */
  label?: string;
  /** Optional ID for anchor links */
  id?: string;
  /** Whether to render the signature lime squiggly divider at the top boundary */
  showDivider?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  bg = "bg-surface-canvas-dark",
  as: Tag = "section",
  label,
  id,
  showDivider = true,
}: SectionWrapperProps) {
  return (
    <Tag
      className={`relative ${bg} py-[var(--spacing-section)] max-md:py-12 max-sm:py-8 ${className}`}
      aria-label={label}
      id={id}
    >
      {showDivider && <SquigglyDivider />}
      <div className="mx-auto max-w-[1152px] px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </Tag>
  );
}
