import type { ReactNode } from "react";

type ActionButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide transition duration-200";

const variantStyles: Record<NonNullable<ActionButtonProps["variant"]>, string> =
  {
    primary:
      "bg-[#48c295] text-[#0f1f18] shadow-[0_12px_30px_rgba(72,194,149,0.35)] hover:bg-[#5bd9a8]",
    secondary:
      "border border-[#3cb88c] text-[#66d1a7] hover:bg-[#2a2f2d] hover:text-[#d9fff2]",
  };

export default function ActionButton({
  href,
  variant = "primary",
  icon,
  iconPosition = "left",
  children,
}: ActionButtonProps) {
  return (
    <a className={`${baseStyles} ${variantStyles[variant]}`} href={href}>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </a>
  );
}
