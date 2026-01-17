import type { ReactNode } from "react";
import Image from "next/image";

type BadgePillProps = {
  iconSrc: string;
  children: ReactNode;
};

export default function BadgePill({ iconSrc, children }: BadgePillProps) {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#1f1f1f] shadow-[0_12px_30px_rgba(111,236,177,0.25)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9fff6] shadow-[0_8px_20px_rgba(72,194,149,0.35)]">
        <Image src={iconSrc} alt="" width={24} height={24} />
      </div>
      <span>{children}</span>
    </div>
  );
}
