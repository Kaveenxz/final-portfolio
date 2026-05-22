export default function Badge({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <span
        className={`border border-border rounded-md px-3 py-1 font-mono text-xs text-muted ${className}`}
      >
        {children}
      </span>
    );
  }