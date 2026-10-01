
interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  color?: "muted" | "lime" | "violet" | "dark";
}

const colorMap = {
  muted: "text-on-dark-muted",
  lime: "text-accent-lime",
  violet: "text-accent-violet",
  dark: "text-ink-deep",
};

export function Eyebrow({ children, className = "", color = "muted" }: EyebrowProps) {
  return (
    <p className={`text-eyebrow ${colorMap[color]} ${className}`}>
      {children}
    </p>
  );
}
