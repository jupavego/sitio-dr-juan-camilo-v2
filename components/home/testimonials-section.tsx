"use client";

import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function TestimonialsSection() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).testimonials;

  return (
    <section id="testimonios" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal duration={820} distance={28}>
          <div className="max-w-3xl">
            <p className="text-[18px] font-medium uppercase tracking-[0.28em] text-[#849B9D]">
              {content.intro}
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#414A4F] md:text-4xl">
              {content.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {content.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.stats.map((item, index) => (
            <Reveal
              key={item}
              duration={840}
              delay={index * 40}
              distance={30}
            >
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              duration={860}
              delay={index * 50}
              distance={32}
            >
              <article className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                <p className="text-4xl leading-none text-slate-300">“</p>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {item.text}
                </p>

                <p className="mt-6 text-sm font-medium text-slate-500">
                  {item.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}