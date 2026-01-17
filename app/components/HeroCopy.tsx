import type { ReactNode } from "react";

type HeroCopyProps = {
  children: ReactNode;
};

export default function HeroCopy({ children }: HeroCopyProps) {
  return (
    <p className="max-w-2xl text-center text-sm leading-relaxed text-white/70 sm:text-base">
      {children}
    </p>
  );
}
