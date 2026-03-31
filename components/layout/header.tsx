"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { useLanguage } from "@/components/providers/language-provider";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { getLayoutContent } from "@/lib/data/layout-content";
import {
  handleSectionNavigation,
  resolveSectionHref,
} from "@/lib/navigation/section-links";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const desktopLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-[#2F3A43] transition hover:bg-[#EEF3F2] hover:text-[#2F3A43]";

const mobileLinkClass =
  "block border-b border-[#EEF2F2] py-3.5 text-sm font-medium text-[#2F3A43] transition hover:text-[#2F3A43]";

export default function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = getLayoutContent(locale).header;
  const navItems = content.nav;

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#D9E1E2] bg-[#FDFDFC]/92 backdrop-blur-xl"
          : "bg-[#FDFDFC]/78 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Link href="/" className={`brand-block ${montserrat.className}`}>
          <div className="brand-block__symbol">
            <Image
              src="/logos/isotipo-dr.png"
              alt="Isotipo Dr. Juan Camilo Cadavid"
              fill
              sizes="60px"
              className="object-contain"
              priority
            />
          </div>

          <div className="brand-block__text min-w-0">
            <div className="brand-block__name">
              <span className="brand-block__line text-[#2F3A43]">
                JUAN{" "}
                <span className="brand-block__highlight text-[#9FB2B5]">
                  CAMILO
                </span>
              </span>
              <span className="brand-block__line text-[#2F3A43]">
                CADAVID USUGA
              </span>
            </div>

            <span className="brand-block__subtitle text-[#5F6F76]">
              {content.doctorSubtitle}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) =>
            item.children?.length ? (
              <div key={item.label} className="group relative">
                <Link
                  href={resolveSectionHref(pathname, item.href)}
                  onClick={(event) =>
                    handleSectionNavigation(event, pathname, item.href, closeMenu)
                  }
                  className="flex items-center rounded-full px-4 py-2 text-sm font-medium leading-none text-[#2F3A43] transition hover:bg-[#EEF3F2] hover:text-[#2F3A43]"
                >
                  <span className="leading-none">{item.label}</span>
                  <span className="ml-1 text-[8px] leading-none text-[#9FB2B5] transition-transform duration-200 group-hover:rotate-180">
                    ▾
                  </span>
                </Link>

                <div className="pointer-events-none absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="min-w-[240px] rounded-[1.2rem] border border-[#D9E1E2] bg-[#FDFDFC] p-3 shadow-[0_18px_50px_rgba(47,58,67,0.10)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={resolveSectionHref(pathname, child.href)}
                        onClick={(event) =>
                          handleSectionNavigation(
                            event,
                            pathname,
                            child.href,
                            closeMenu
                          )
                        }
                        className="block rounded-[1rem] px-4 py-3 text-sm text-[#44535B] transition hover:bg-[#F3F7F6] hover:text-[#2F3A43]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={resolveSectionHref(pathname, item.href)}
                onClick={(event) =>
                  handleSectionNavigation(event, pathname, item.href, closeMenu)
                }
                className={desktopLinkClass}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <Link
            href={resolveSectionHref(pathname, "#contacto")}
            onClick={(event) =>
              handleSectionNavigation(event, pathname, "#contacto", closeMenu)
            }
            className="rounded-full bg-[#D7CCAE] px-5 py-2.5 text-sm font-medium text-[#2F3A43] transition hover:bg-[#CBBE98]"
          >
            {content.cta}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            aria-label={
              menuOpen
                ? content.mobileMenuCloseLabel
                : content.mobileMenuOpenLabel
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9D5D7] text-[#2F3A43] transition hover:border-[#9FB2B5]"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full w-full border-t border-[#D9E1E2] bg-[#FDFDFC]/96 shadow-[0_18px_50px_rgba(47,58,67,0.10)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-4 opacity-0"
        }`}
      >
        <div className="max-h-[70vh] overflow-y-auto">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                }}
              >
                {item.children?.length ? (
                  <div className="border-b border-[#EEF2F2] py-3.5">
                    <Link
                      href={resolveSectionHref(pathname, item.href)}
                      onClick={(event) =>
                        handleSectionNavigation(
                          event,
                          pathname,
                          item.href,
                          closeMenu
                        )
                      }
                      className="block text-sm font-medium text-[#2F3A43] transition hover:text-[#2F3A43]"
                    >
                      {item.label}
                    </Link>

                    <div className="mt-2 flex flex-col gap-2 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={resolveSectionHref(pathname, child.href)}
                          onClick={(event) =>
                            handleSectionNavigation(
                              event,
                              pathname,
                              child.href,
                              closeMenu
                            )
                          }
                          className="text-sm text-[#5F6F76] transition hover:text-[#2F3A43]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={resolveSectionHref(pathname, item.href)}
                    onClick={(event) =>
                      handleSectionNavigation(
                        event,
                        pathname,
                        item.href,
                        closeMenu
                      )
                    }
                    className={mobileLinkClass}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href={resolveSectionHref(pathname, "#contacto")}
              onClick={(event) =>
                handleSectionNavigation(event, pathname, "#contacto", closeMenu)
              }
              className={`mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#D7CCAE] px-5 py-3 text-sm font-medium text-[#2F3A43] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#CBBE98] ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen ? `${navItems.length * 45}ms` : "0ms",
              }}
            >
              {content.cta}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}