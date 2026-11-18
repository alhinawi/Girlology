'use client';
import React from 'react';
import Link from 'next/link';
import { useApp } from './Lang';
import { articles } from '@/lib/articles';
import { Separator } from '@/components/ui/separator';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.8 8.6c.3-.7 1.3-.7 1.6 0l.6 1.4c.1.3 0 .7-.2.9l-.6.6c.7 1.4 1.7 2.4 3.1 3.1l.6-.6c.2-.2.6-.3.9-.2l1.4.6c.7.3.7 1.3 0 1.6-.6.3-1.3.5-2 .3-2.5-.6-5-3.1-5.6-5.6-.2-.7 0-1.4.2-2.1z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { t, lang } = useApp();
  return (
    <footer className="mt-10 border-t border-border bg-muted/60 pb-8 pt-10">
      <div className="mx-auto w-full max-w-[1180px] px-[22px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h4 className="mb-3 font-head font-bold text-primary">{t.footerAbout}</h4>
            <p className="text-muted-foreground">{t.footerAboutText}</p>
            <a
              className="mt-3.5 inline-flex items-center gap-2.5 rounded-[14px] bg-[#1faa55] px-5 py-3 font-head font-extrabold text-white transition-transform hover:-translate-y-0.5"
              href="https://wa.me/201028928248" target="_blank" rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} /> {t.whatsapp}
            </a>
          </div>
          <div>
            <h4 className="mb-3 font-head font-bold text-primary">{t.footerTopics}</h4>
            <div className="flex flex-col gap-2">
              {articles.slice(0, 5).map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}/`} className="text-muted-foreground transition-colors hover:text-primary">
                  {lang === 'ar' ? a.titleAr : a.titleEn}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-head font-bold text-primary">{t.footerTopics}</h4>
            <div className="flex flex-col gap-2">
              {articles.slice(5).map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}/`} className="text-muted-foreground transition-colors hover:text-primary">
                  {lang === 'ar' ? a.titleAr : a.titleEn}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-6 bg-border" />
        <div className="flex flex-wrap justify-between gap-2.5 text-sm text-muted-foreground">
          <span>Girlology © 2026 — {t.rights}</span>
          <span>{t.madeBy}</span>
        </div>
      </div>
    </footer>
  );
}
