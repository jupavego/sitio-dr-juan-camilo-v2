"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";

export default function ContactSection() {
  const { locale } = useLanguage();
  const content = getHomeContent(locale).contact;

  const mapRef = useRef<HTMLDivElement | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "220px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 pt-14 pb-16 lg:px-10"
    >
      <Reveal duration={830} distance={28}>
        <div>
          <p className="text-[18px] font-semibold uppercase tracking-[0.28em] text-[#849B9D]">
            {content.intro}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#445057] md:text-4xl">
            {content.title}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-start gap-4">
            <a
              href={content.ctaPrimaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#007C68] py-3 pl-2.5 pr-5 text-white transition hover:bg-[#006B59]"
            >
              <span className="flex items-start gap-3">
                <span className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border border-white/25">
                  <Image
                    src="/images/profile.jpg"
                    alt="Dr. Juan Camilo Cadavid"
                    fill
                    sizes="52px"
                    className="object-cover"
                  />
                </span>

                <span className="flex flex-col items-start justify-center pt-0.5">
                  <span className="inline-flex items-center gap-2 text-sm font-medium leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                    </svg>

                    <span>{content.ctaPrimary}</span>
                  </span>

                  <span className="mt-1.5 h-px w-full bg-white/30" />

                  <span className="flex items-center gap-1 pt-1.5 text-[12px] leading-none text-white/95">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </span>
                </span>
              </span>
            </a>

            <a
              href={content.ctaSecondaryHref}
              className="self-start rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-950"
            >
              {content.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5 sm:p-6 lg:p-7">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-950">
                {content.cardTitle}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {content.cardText}
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {content.infoItems.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className={`rounded-[1.15rem] border border-slate-200 bg-white p-4 ${
                      item.span ?? ""
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              
              <Reveal duration={870} delay={40} distance={30}>
                <div
                  ref={mapRef}
                  className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm"
                >
                  {showMap ? (
                    <iframe
                      src={content.mapEmbedUrl}
                      width="100%"
                      height="360"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={content.mapTitle}
                      className="block"
                      style={{ border: 0 }}
                    />
                  ) : (
                    <div className="flex h-[360px] items-center justify-center text-sm text-slate-500">
                      Cargando ubicación…
                    </div>
                  )}
                </div>
                <div className="flex justify-end">
                
              </div>

              </Reveal>
              <a
                  href={content.mapLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#445057] transition hover:text-[#2F3A43]"
                >
                  {content.mapCta}
                </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}