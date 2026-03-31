"use client";

import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function AboutSection() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).about;

  return (
    <section id="doctor" className="bg-[#24323d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <Reveal duration={420} distance={18}>
            <div>
              <p className="font-semibold uppercase tracking-[0.28em] text-[#9FE1FF]">
                {content.intro}
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                {content.title}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={40} duration={460} distance={20}>
            <div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                {content.paragraph1}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                {content.paragraph2}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {content.bullets.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#especialidades"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-slate-950"
                >
                  {content.primaryCta}
                </a>

                <a
                  href="#contacto"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                >
                  {content.secondaryCta}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={70} duration={480} distance={22}>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(148,163,184,0.08))] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_58%)]" />

            <div className="relative flex h-full flex-col justify-end rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[20px] uppercase tracking-[0.24em] text-[#9FE1FF]">
                {content.cardTitle}
              </p>

              <p className="mt-4 text-lg font-medium leading-8 text-white">
                {content.cardText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}