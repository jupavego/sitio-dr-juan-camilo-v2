"use client";

import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function Hero() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).hero;

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-0 pb-20 lg:grid-cols-2 lg:px-10 lg:pt-5 lg:pb-20">
        <div className="flex flex-col justify-center">
          <Reveal immediate duration={820} distance={24} direction="left">
            <div>
              <p className="text-[20px] font-semibold uppercase tracking-[0.28em] text-[#9FB2B5]">
                {content.eyebrow}
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#2F3A43] md:text-5xl lg:text-6xl">
                {content.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#51616A] md:text-lg">
                {content.description}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#708289] md:text-base">
                {content.secondaryDescription}
              </p>
            </div>
          </Reveal>

          <Reveal
            immediate
            delay={120}
            duration={780}
            distance={20}
            direction="left"
          >
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-[#D7CCAE] px-6 py-3 text-sm font-medium text-[#2F3A43] transition hover:bg-[#CBBE98]"
              >
                {content.primaryCta}
              </a>
              <a
                href="#especialidades"
                className="rounded-full border border-[#9FB2B5] px-6 py-3 text-sm font-medium text-[#2F3A43] transition hover:border-[#2F3A43] hover:bg-[#F4F6F5]"
              >
                {content.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={140} duration={900} distance={24}>
          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(236,241,239,0.92),_rgba(159,178,181,0.26))] lg:min-h-[580px]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,58,67,0.06),rgba(255,255,255,0.18))]" />

            <div className="absolute inset-x-10 bottom-10 rounded-[1.5rem] border border-white/50 bg-white/55 p-6 backdrop-blur-md">
              <p className="text-[20px] font-semibold uppercase tracking-[0.22em] text-[#9FB2B5]">
                {content.badgeTitle}
              </p>
              <p className="mt-3 max-w-sm text-lg font-medium text-[#2F3A43]">
                {content.badgeText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}