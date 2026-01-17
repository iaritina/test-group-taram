import type { ReactNode } from "react";

type HeroLayoutProps = {
  children: ReactNode;
};

export default function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1f1f1f] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,255,201,0.16),_transparent_60%)]" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10">
        {children}
      </div>
    </section>
  );
}
