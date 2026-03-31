import type { MouseEvent } from "react";

export function resolveSectionHref(pathname: string, href?: string) {
  if (!href) return "/";
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}

export function handleSectionNavigation(
  event: MouseEvent<HTMLAnchorElement>,
  pathname: string,
  href?: string,
  onBeforeNavigate?: () => void
) {
  onBeforeNavigate?.();

  if (!href?.startsWith("#") || pathname !== "/") return;

  event.preventDefault();

  const element = document.getElementById(href.slice(1));
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", href);
}