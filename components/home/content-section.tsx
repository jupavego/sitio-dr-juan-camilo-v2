"use client";

import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function ContentSection() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).content;

  return (
    <section
      id="investigacion"
      className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:scroll-mt-24"
    >
      <Reveal duration={760} distance={22}>
        <div className="max-w-3xl">
          <p className="text-[18px] font-semibold uppercase tracking-[0.28em] text-[#849B9D]">
            {content.intro}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#445057] md:text-4xl">
            {content.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {content.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal duration={780} distance={20}>
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-xl font-semibold text-slate-950">
              {content.leftTitle}
            </h3>

            <div className="mt-6 space-y-4">
              {content.publications.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.2rem] border border-slate-200 p-4 transition hover:border-slate-300"
                >
                  <p className="text-sm leading-6 text-slate-800">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal duration={780} delay={70} distance={20}>
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <h3 className="text-xl font-semibold text-slate-950">
              {content.rightTitle}
            </h3>

            <div className="mt-6 space-y-4">
              {content.recognitions.map((item) => (
                <article
                  key={item}
                  className="rounded-[1.2rem] border border-slate-200 p-4 transition hover:border-slate-300"
                >
                  <p className="text-sm leading-6 text-slate-800">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal duration={800} delay={90} distance={20}>
        <div
          id="contenido"
          className="mt-8 scroll-mt-28 rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] lg:scroll-mt-24"
        >
          <div className="max-w-2xl">
            <h3 className="text-[25px] font-semibold text-[#445057]">
              {content.videosTitle}
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {content.videosDescription}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.videos.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-50"
              >
                <div className="aspect-[8/9] w-full bg-slate-200">
                  <iframe
                    className="h-full w-full"
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href={content.videosCtaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:border-slate-950"
          >
            {content.videosCta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}