"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SiteSettings } from "@/lib/types";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.27h.909A1.636 1.636 0 0 1 24 5.457z" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  envelope: EmailIcon,
};

interface HeroProps {
  settings: SiteSettings;
}

export default function Hero({ settings }: HeroProps) {
  const { locale } = useLocale();
  const t = translations[locale].hero;

  const introTitle =
    locale === "zh" && settings.intro_title_zh
      ? settings.intro_title_zh
      : settings.intro_title;

  const introText =
    locale === "zh" && settings.intro_text_zh
      ? settings.intro_text_zh
      : settings.intro_text;

  const paragraphs = introText
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10 sm:gap-16">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight"
              {...fadeUp(0)}
            >
              {locale === "zh" ? "卢璟琦" : "Jingqi Lu"}
            </motion.h1>

            <motion.p
              className="mt-3 text-xl sm:text-2xl font-medium text-brand"
              {...fadeUp(0.1)}
            >
              {introTitle}
            </motion.p>

            <motion.div
              className="mt-6 max-w-2xl space-y-3 text-slate-600 leading-relaxed"
              {...fadeUp(0.2)}
            >
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              {...fadeUp(0.3)}
            >
              <a
                href="/files/CV_Jingqi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-brand text-white text-sm font-medium hover:bg-brand/90 transition-colors"
              >
                {t.downloadCv}
              </a>

              <div className="flex items-center gap-3">
                {settings.social.map((item) => {
                  const Icon = iconMap[item.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={item.icon}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.icon}
                      className="text-slate-500 hover:text-brand transition-colors"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-4 ring-brand/20 shadow-lg">
              <Image
                src="/images/Jingqi_Lu.png"
                alt="Jingqi Lu"
                width={208}
                height={208}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
