import Link from "next/link";
import { cn } from "@/lib/utils"; // if you have a utility, or just classnames

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-mono text-sm tracking-wide transition";
  const variants = {
    primary: "bg-purple text-white px-6 py-3 hover:bg-purple-dim",
    secondary:
      "border border-border text-text-dim px-6 py-3 hover:border-border-bright hover:text-text",
    ghost: "text-purple hover:underline px-2 py-1",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}