'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { qa } from '@/lib/extras';
import ExtraHero from './ExtraHero';

export default function QaPage() {
  const { lang } = useApp();
  const extra = extras.find((e) => e.slug === 'qa')!;
  return (
    <div className="mx-auto w-full max-w-[860px] px-[22px] pb-16">
      <ExtraHero extra={extra} />
      <div className="mt-8 flex flex-col gap-4">
        {qa.map((item, i) => (
          <details key={i} className="group rounded-[20px] border border-border bg-card transition-colors open:bg-accent">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-head text-lg font-extrabold [&::-webkit-details-marker]:hidden">
              <span>{lang === 'ar' ? item.qAr : item.qEn}</span>
              <ChevronDown size={18} className="shrink-0 text-primary transition-transform group-open:rotate-180" />
            </summary>
            <p className="border-t border-border px-5 py-4 text-muted-foreground">{lang === 'ar' ? item.aAr : item.aEn}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
