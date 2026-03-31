"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  immediate?: boolean;
  direction?: RevealDirection;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 760,
  distance = 22,
  once = true,
  immediate = false,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || immediate) {
      const id = window.setTimeout(() => setVisible(true), 20);
      return () => window.clearTimeout(id);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, immediate]);

  const hiddenTransform =
    direction === "left"
      ? `translate3d(-${distance}px, 0, 0)`
      : direction === "right"
        ? `translate3d(${distance}px, 0, 0)`
        : `translate3d(0, ${distance}px, 0)`;

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0)" : hiddenTransform,
    transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  };

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}