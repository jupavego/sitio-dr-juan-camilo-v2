"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { getServiceBySlug } from "@/lib/data/services";

type ServiceDetailViewProps = {
  slug: string;
};

type SectionCardProps = {
  stepLabel: string;
  title: string;
  description: string;
  accent: string;
  backgroundImage?: string;
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  contentClassName?: string;
};

function SectionCard({
  stepLabel,
  title,
  description,
  accent,
  backgroundImage,
  children,
  delay = 40,
  distance = 20,
  contentClassName = "",
}: SectionCardProps) {
  return (
    <Reveal duration={800} delay={delay} distance={distance}>
      <section className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
        {backgroundImage ? (
          <>
            <div
              className="section-card-bg absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(255,255,255,0.95))]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,58,67,0.04),rgba(255,255,255,0.08))]" />
          </>
        ) : null}

        <div className={`relative z-10 p-6 md:p-8 ${contentClassName}`}>
          <div className="max-w-2xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ color: accent }}
            >
              {stepLabel}
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#445057]">
              {title}
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {description}
            </p>
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </section>
    </Reveal>
  );
}

export default function ServiceDetailView({
  slug,
}: ServiceDetailViewProps) {
  const { locale } = useLanguage();
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  const ui =
    locale === "es"
      ? {
          specialty: "Especialidad",
          backToSpecialties: "Volver a especialidades",
          defaultHeroKicker: "Especialidad",
          defaultHeroCta: "Agendar valoración",

          consultationReasonsLabel: "Motivos de consulta",
          consultationReasonsTitle:
            "¿Cuándo vale la pena una valoración en esta área?",
          consultationReasonsDescription:
            "Estos son algunos de los escenarios más frecuentes en los que una valoración especializada puede aportar claridad diagnóstica y una mejor orientación terapéutica.",

          proceduresLabel: "Procedimientos y abordaje",
          proceduresTitle: "Enfoque clínico y terapéutico",
          proceduresDescription:
            "Según el diagnóstico y el contexto del paciente, esta especialidad puede incluir valoración, seguimiento, orientación terapéutica y acompañamiento en procedimientos cuando están indicados.",

          relatedVideoLabel: "Video relacionado",
          relatedVideoTitle:
            "Apoyo visual para comprender mejor esta especialidad",
          relatedVideoDescription:
            "Un recurso audiovisual pensado para complementar la información clínica y ayudar al paciente a entender mejor el enfoque de valoración y manejo.",

          expectationsLabel: "Qué puede esperar el paciente",
          expectationsTitle: "Una ruta clara de valoración y acompañamiento",
          expectationsDescription:
            "La consulta no solo busca establecer un diagnóstico, sino también ofrecer al paciente una explicación clara, expectativas realistas y un plan de acción comprensible.",

          faqLabel: "Preguntas frecuentes",
          faqTitle: "Dudas comunes de los pacientes",
          faqDescription:
            "Algunas preguntas suelen repetirse en consulta. Aquí reunimos respuestas breves y claras para orientar mejor la toma de decisiones.",

          nextStepLabel: "Siguiente paso",
          nextStepTitle:
            "Agenda una valoración y revisemos tu caso con claridad",
          nextStepDescription:
            "Si tienes síntomas visuales, dudas sobre un diagnóstico previo o quieres orientación especializada sobre esta área, una consulta puede ayudarte a tomar decisiones con mayor tranquilidad.",

          viewOtherSpecialties: "Ver otras especialidades",
          browserNoVideo:
            "Tu navegador no soporta la reproducción de video.",
        }
      : {
          specialty: "Specialty",
          backToSpecialties: "Back to specialties",
          defaultHeroKicker: "Specialty",
          defaultHeroCta: "Book consultation",

          consultationReasonsLabel: "Reasons for consultation",
          consultationReasonsTitle:
            "When is it worth getting evaluated in this area?",
          consultationReasonsDescription:
            "These are some of the most common situations in which a specialized evaluation can provide diagnostic clarity and better therapeutic guidance.",

          proceduresLabel: "Procedures and approach",
          proceduresTitle: "Clinical and therapeutic approach",
          proceduresDescription:
            "Depending on the diagnosis and the patient's context, this specialty may include evaluation, follow-up, therapeutic guidance, and support for procedures when indicated.",

          relatedVideoLabel: "Related video",
          relatedVideoTitle:
            "Visual support to better understand this specialty",
          relatedVideoDescription:
            "An audiovisual resource designed to complement the clinical information and help the patient better understand the evaluation and management approach.",

          expectationsLabel: "What the patient can expect",
          expectationsTitle: "A clear path for evaluation and support",
          expectationsDescription:
            "The consultation aims not only to establish a diagnosis, but also to provide the patient with a clear explanation, realistic expectations, and an understandable action plan.",

          faqLabel: "Frequently asked questions",
          faqTitle: "Common patient questions",
          faqDescription:
            "Some questions often come up during consultation. Here we gather brief and clear answers to better support decision-making.",

          nextStepLabel: "Next step",
          nextStepTitle: "Book an evaluation and let’s review your case clearly",
          nextStepDescription:
            "If you have visual symptoms, doubts about a previous diagnosis, or want specialized guidance in this area, a consultation can help you make decisions with greater confidence.",

          viewOtherSpecialties: "View other specialties",
          browserNoVideo: "Your browser does not support video playback.",
        };

  const accent = service.theme?.accent ?? "#9FB2B5";
  const heroAlign =
    service.theme?.heroAlign === "center"
      ? "items-center text-center"
      : "items-start text-left";

  const expectationsStep = service.videos?.length ? "4" : "3";
  const faqStep = service.videos?.length ? "5" : "4";

  return (
    <main className="bg-[#FDFDFC]">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.78),rgba(15,23,42,0.48),rgba(15,23,42,0.18))]" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl px-6 py-16 lg:min-h-[640px] lg:px-10">
          <div
            className={`flex max-w-3xl flex-col justify-center ${heroAlign}`}
          >
            <Reveal immediate duration={860} distance={24} direction="left">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.28em]"
                  style={{ color: accent }}
                >
                  {service.heroKicker ?? ui.defaultHeroKicker}
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {service.heroTitle}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
                  {service.heroDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contacto"
                    className="inline-flex rounded-full px-6 py-3 text-sm font-medium text-[#2F3A43] transition hover:opacity-90"
                    style={{ backgroundColor: accent }}
                  >
                    {service.heroCtaLabel ?? ui.defaultHeroCta}
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {ui.backToSpecialties}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Reveal duration={780} distance={20}>
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.24em]"
                  style={{ color: accent }}
                >
                  {ui.specialty}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#445057] md:text-3xl">
                  {service.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <SectionCard
          stepLabel={`1. ${ui.consultationReasonsLabel}`}
          title={ui.consultationReasonsTitle}
          description={ui.consultationReasonsDescription}
          accent={accent}
          backgroundImage={service.sectionBackgrounds?.consultationReasons}
          delay={40}
          distance={20}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.consultationReasons.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-slate-200 bg-slate-50/90 p-5 backdrop-blur-[1px]"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          stepLabel={`2. ${ui.proceduresLabel}`}
          title={ui.proceduresTitle}
          description={ui.proceduresDescription}
          accent={accent}
          backgroundImage={service.sectionBackgrounds?.procedures}
          delay={60}
          distance={20}
        >
          <div className="space-y-4">
            {service.procedures.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-slate-200 bg-slate-50/90 p-5 backdrop-blur-[1px]"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[#2F3A43]"
                    style={{ backgroundColor: accent }}
                  >
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        {service.videos?.length ? (
          <SectionCard
            stepLabel={`3. ${ui.relatedVideoLabel}`}
            title={ui.relatedVideoTitle}
            description={ui.relatedVideoDescription}
            accent={accent}
            backgroundImage={service.sectionBackgrounds?.videos}
            delay={80}
            distance={20}
          >
            <div
              className={`grid gap-5 ${
                service.videos.length === 1
                  ? "max-w-3xl"
                  : "md:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {service.videos.map((video) => (
                <article
                  key={video.embedUrl ?? video.src ?? video.title}
                  className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-50"
                >
                  <div
                    className={`w-full overflow-hidden bg-slate-200 ${
                      video.src ? "aspect-video" : "aspect-[4/5]"
                    }`}
                  >
                    {video.embedUrl ? (
                      <iframe
                        className="h-full w-full"
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : video.src ? (
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                        {ui.browserNoVideo}
                      </video>
                    ) : null}
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-semibold text-slate-900">
                      {video.title}
                    </h3>
                    {video.description ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {video.description}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        ) : null}

        <SectionCard
          stepLabel={`${expectationsStep}. ${ui.expectationsLabel}`}
          title={ui.expectationsTitle}
          description={ui.expectationsDescription}
          accent={accent}
          backgroundImage={service.sectionBackgrounds?.patientExpectations}
          delay={100}
          distance={20}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {service.patientExpectations.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-slate-200 bg-slate-50/90 p-5 backdrop-blur-[1px]"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          stepLabel={`${faqStep}. ${ui.faqLabel}`}
          title={ui.faqTitle}
          description={ui.faqDescription}
          accent={accent}
          backgroundImage={service.sectionBackgrounds?.faq}
          delay={120}
          distance={20}
        >
          <div className="space-y-4">
            {service.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.35rem] border border-slate-200 bg-slate-50/90 p-5 backdrop-blur-[1px]"
              >
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <Reveal duration={820} delay={120} distance={22}>
          <section
            id="contacto"
            className="mt-8 rounded-[1.8rem] border border-slate-200 bg-[#EEF3F2] p-6 md:p-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.24em]"
                  style={{ color: accent }}
                >
                  {ui.nextStepLabel}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#445057]">
                  {ui.nextStepTitle}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {ui.nextStepDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex rounded-full px-6 py-3 text-sm font-medium text-[#2F3A43] transition hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  {service.heroCtaLabel ?? ui.defaultHeroCta}
                </a>

                <Link
                  href="/services"
                  className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900"
                >
                  {ui.viewOtherSpecialties}
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}