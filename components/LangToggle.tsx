"use client";

import { useLocale } from "@/context/LocaleContext";

export default function LangToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="text-xs px-3 py-1 rounded-full border border-slate-300 text-slate-600 hover:border-brand hover:text-brand transition-colors font-medium tracking-wide"
      aria-label={locale === "en" ? "切换到中文" : "Switch to English"}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
