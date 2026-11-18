'use client';
import React from 'react';
import { Quote } from 'lucide-react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { stories } from '@/lib/extras';
import ExtraHero from './ExtraHero';

export default function StoriesPage() {
  const { t, lang } = useApp();
  const extra = extras.find((e) => e.slug === 'stories')!;
  return (
    <div className="mx-auto w-full max-w-[860px] px-[22px] pb-16">
      <ExtraHero extra={extra} />
      <div className="mt-8 flex flex-col gap-6">
        {stories.map((st, i) => (
          <article key={i} className="rounded-[24px] border border-border bg-card p-6 md:p-8">
            <h2 className="mb-3 font-head text-2xl font-extrabold text-primary">{lang === 'ar' ? st.titleAr : st.titleEn}</h2>
            <p className="text-[1.08rem] leading-9">{lang === 'ar' ? st.ar : st.en}</p>
            <div className="mt-5 flex items-start gap-3 rounded-[16px] bg-primary/8 p-4">
              <Quote size={18} className="mt-1 shrink-0 text-gold" />
              <p className="font-head font-bold text-gold">{t.moral}: <span className="font-normal text-foreground">{lang === 'ar' ? st.moralAr : st.moralEn}</span></p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
