"use client";

import { useLocale } from "@/context/LocaleContext";

export function LocaleText({ en, zh }: { en: string; zh: string }) {
  const { locale } = useLocale();
  return <>{locale === "zh" && zh ? zh : en}</>;
}

export function LocaleHtml({
  en,
  zh,
  className,
}: {
  en: string;
  zh: string;
  className?: string;
}) {
  const { locale } = useLocale();
  const html = locale === "zh" && zh ? zh : en;
  return (
    <article
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
