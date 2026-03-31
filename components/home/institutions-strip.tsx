"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function InstitutionsStrip() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).institutions;

  const track = useMemo(
    () => [...content.items, ...content.items],
    [content.items]
  );

  return (
    <section
      id="trayectoria"
      className="overflow-hidden border-y border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="mb-4">
          <p className="text-[18px] font-semibold uppercase tracking-[0.28em] text-[#849B9D]">
            {content.intro}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="institutions-track flex w-max gap-4">
            {track.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .institutions-track {
          animation: marquee-left 55s linear infinite;
        }

        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}