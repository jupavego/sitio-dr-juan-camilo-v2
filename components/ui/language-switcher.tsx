"use client";

import { useLanguage } from "@/components/providers/language-provider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full p-1"
      style={{ border: "1px solid #9FB2B5", background: "#FFFFFF" }}
    >
      <button
        type="button"
        onClick={() => setLocale("es")}
        style={
          locale === "es"
            ? { background: "#9FB2B5", color: "#FFFFFF", fontWeight: 700 }
            : { background: "transparent", color: "#5F6F76", fontWeight: 700 }
        }
        className="appearance-none border-0 rounded-full px-3 py-1.5 text-xs leading-none shadow-none outline-none cursor-pointer transition"
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLocale("en")}
        style={
          locale === "en"
            ? { background: "#9FB2B5", color: "#FFFFFF", fontWeight: 700 }
            : { background: "transparent", color: "#5F6F76", fontWeight: 700 }
        }
        className="appearance-none border-0 rounded-full px-3 py-1.5 text-xs leading-none shadow-none outline-none cursor-pointer transition"
      >
        EN
      </button>
    </div>
  );
}