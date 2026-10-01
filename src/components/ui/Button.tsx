import Link from "next/link";

/**
 * Button variants matching DESIGN.md component specs:
 * - primary: dark bg (#150f23) on light surfaces
 * - inverted: white bg on dark surfaces
 * - ghost: translucent fill on dark surfaces
 * - violet-token: pill-shaped tag/category button
 */

type ButtonVariant = "primary" | "inverted" | "ghost" | "violet-token";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-primary text-on-primary",
    "rounded-[var(--rounded-md)]",
    "px-[var(--spacing-lg)] py-[var(--spacing-md)]",
    "hover:opacity-90 active:bg-surface-press-stronger active:text-ink-press",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-focus",
  ].join(" "),

  inverted: [
    "bg-on-primary text-ink-deep",
    "rounded-[var(--rounded-md)]",
    "px-[var(--spacing-lg)] py-[var(--spacing-md)]",
    "hover:opacity-90 active:bg-surface-press-light active:text-ink-press",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-focus",
  ].join(" "),

  ghost: [
    "bg-on-dark-faint text-on-primary",
    "rounded-[var(--rounded-xl)]",
    "px-[var(--spacing-lg)] py-[var(--spacing-sm)]",
    "hover:bg-[rgba(255,255,255,0.24)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-focus",
  ].join(" "),

  "violet-token": [
    "bg-accent-violet-mid text-on-primary",
    "border border-[rgba(255,255,255,0.1)]",
    "rounded-[var(--rounded-xl)]",
    "px-[var(--spacing-lg)] py-[var(--spacing-sm)]",
    "hover:opacity-90",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-focus",
  ].join(" "),
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = "text-button-cap inline-flex items-center justify-center transition-all duration-200 cursor-pointer";
  const disabledStyles = disabled
    ? "bg-hairline-cloud text-on-dark-muted cursor-not-allowed pointer-events-none"
    : "";

  const combinedClassName = `${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
