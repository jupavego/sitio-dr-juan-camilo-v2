"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getLayoutContent } from "@/lib/data/layout-content";
import {
  handleSectionNavigation,
  resolveSectionHref,
} from "@/lib/navigation/section-links";

export default function Footer() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const content = getLayoutContent(locale).footer;

  const navLinkClass = "transition hover:text-white";
  const socialLinkClass =
    "rounded-full border border-white/20 px-4 py-2 text-sm text-white/85 transition hover:border-white hover:text-white";
  const legalLinkClass = "transition hover:text-white";

  return (
    <footer className="border-t border-white/10 bg-[#24323D]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9FE1FF]">
            {content.doctorName}
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white">
            {content.specialty}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
            {content.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#9FE1FF]">
            {content.navTitle}
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <Link
                href={resolveSectionHref(pathname, "#inicio")}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, "#inicio")
                }
                className={navLinkClass}
              >
                {content.nav.home}
              </Link>
            </li>

            <li>
              <Link
                href={resolveSectionHref(pathname, "#especialidades")}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, "#especialidades")
                }
                className={navLinkClass}
              >
                {content.nav.specialties}
              </Link>
            </li>

            <li>
              <Link
                href={resolveSectionHref(pathname, "#investigacion")}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, "#investigacion")
                }
                className={navLinkClass}
              >
                {content.nav.background}
              </Link>
            </li>

            <li>
              <Link
                href={resolveSectionHref(pathname, "#doctor")}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, "#doctor")
                }
                className={navLinkClass}
              >
                {content.nav.doctor}
              </Link>
            </li>

            <li>
              <Link
                href={resolveSectionHref(pathname, "#contacto")}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, "#contacto")
                }
                className={navLinkClass}
              >
                {content.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#9FE1FF]">
            {content.contactTitle}
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>{content.location}</li>
            <li>{content.whatsapp}</li>
            <li>{content.phone}</li>
            <li>{content.email}</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className={socialLinkClass}>
              {content.social.instagram}
            </a>

            <a href="#" className={socialLinkClass}>
              {content.social.linkedin}
            </a>

            <a
              href="https://www.doctoralia.co/juan-camilo-cadavid-usuga-3/oftalmologo/medellin"
              target="_blank"
              rel="noreferrer"
              className={socialLinkClass}
            >
              {content.social.doctoralia}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>{content.rights}</p>

          <div className="flex gap-4">
            <a href="#" className={legalLinkClass}>
              {content.privacy}
            </a>

            <a href="#" className={legalLinkClass}>
              {content.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}