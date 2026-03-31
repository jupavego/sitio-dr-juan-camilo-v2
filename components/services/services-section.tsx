"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getHomeContent } from "@/lib/data/home-content";
import { getServices } from "@/lib/data/services";

export default function ServicesSection() {
  const { locale } = useLanguage();

  const sectionContent = getHomeContent(locale).servicesSection;
  const services = getServices(locale);

  return (
    <section
      id="especialidades"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10"
    >
      <Reveal duration={420} distance={18}>
        <div className="max-w-3xl">
          <p className="text-[18px] font-semibold uppercase tracking-[0.28em] text-[#849B9D]">
            {sectionContent.intro}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#445057] md:text-4xl">
            {sectionContent.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {sectionContent.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            key={service.slug}
            duration={450}
            delay={index * 40}
            distance={20}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group relative block min-h-[235px] overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,28,34,0.84),rgba(20,28,34,0.34),rgba(20,28,34,0.08))] transition duration-500 group-hover:bg-[linear-gradient(to_top,rgba(20,28,34,0.94),rgba(20,28,34,0.48),rgba(20,28,34,0.14))]" />

              <div className="relative flex min-h-[235px] flex-col justify-end p-6">
                <div className="max-w-[92%] overflow-hidden">
                  <div className="translate-y-30 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[84px] max-w-md text-sm leading-7 text-white/0 opacity-0 transition-all duration-500 group-hover:text-white/90 group-hover:opacity-100">
  {service.shortDescription}
</p>

                    <span className="mt-4 inline-flex text-sm font-medium text-white/0 opacity-0 transition-all duration-500 delay-75 group-hover:text-white group-hover:opacity-100">
                      {sectionContent.cta}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}