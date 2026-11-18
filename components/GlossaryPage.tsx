'use client';
import React from 'react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { glossary } from '@/lib/extras';
import ExtraHero from './ExtraHero';

export default function GlossaryPage() {
  const { lang } = useApp();
  const extra = extras.find((e) => e.slug === 'glossary')!;
  return (
    <div className="mx-auto w-full max-w-[1180px] px-[22px] pb-16">
      <ExtraHero extra={extra} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.map((term, i) => (
          <div key={i} className="rounded-[20px] border border-border bg-card p-5 transition-colors hover:bg-accent">
            <h3 className="font-head text-xl font-extrabold text-primary">{lang === 'ar' ? term.termAr : term.termEn}</h3>
            <p className="mt-2 text-[0.98rem] text-muted-foreground">{lang === 'ar' ? term.defAr : term.defEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
