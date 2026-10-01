
interface LimeChipProps {
  children: React.ReactNode;
  className?: string;
}

export function LimeChip({ children, className = "" }: LimeChipProps) {
  return (
    <span
      className={`inline-block bg-accent-lime text-ink-deep rounded-[var(--rounded-xs)] px-[var(--spacing-md)] py-0 ${className}`}
    >
      {children}
    </span>
  );
}
