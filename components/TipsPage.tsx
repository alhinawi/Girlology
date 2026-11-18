'use client';
import React from 'react';
import { Check } from 'lucide-react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { tips } from '@/lib/extras';
import ExtraHero from './ExtraHero';

export default function TipsPage() {
  const { lang } = useApp();
  const extra = extras.find((e) => e.slug === 'tips')!;
  return (
    <div className="mx-auto w-full max-w-[1180px] px-[22px] pb-16">
      <ExtraHero extra={extra} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, i) => (
          <div key={i} className="flex items-start gap-3 rounded-[20px] border border-border bg-card p-5 transition-colors hover:bg-accent">
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-primary/12 font-head text-sm font-extrabold text-primary">{i + 1}</span>
            <p className="text-[1.02rem] leading-8">{lang === 'ar' ? tip.ar : tip.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
