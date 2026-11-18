'use client';
import React from 'react';
import { useApp } from './Lang';
import { Extra } from '@/lib/content';
import TopicIcon from './topic-icon';
import { Badge } from '@/components/ui/badge';

export default function ExtraHero({ extra, children }: { extra: Extra; children?: React.ReactNode }) {
  const { t, lang } = useApp();
  return (
    <div className="relative mt-8 overflow-hidden rounded-[28px] border border-border">
      <img src={extra.img} alt={lang === 'ar' ? extra.titleAr : extra.titleEn} className="h-[220px] w-full object-cover md:h-[300px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
      <div className="absolute bottom-0 start-0 p-6 md:p-8">
        <Badge variant="secondary" className="mb-2 gap-1.5 rounded-full bg-primary/15 font-head text-xs font-bold text-primary hover:bg-primary/15">
          <TopicIcon name={extra.icon} size={13} /> {t.extrasKicker}
        </Badge>
        <h1 className="font-head text-[clamp(1.7rem,3.4vw,2.6rem)] font-black">{lang === 'ar' ? extra.titleAr : extra.titleEn}</h1>
        <p className="mt-1 max-w-[60ch] text-muted-foreground">{lang === 'ar' ? extra.descAr : extra.descEn}</p>
        {children}
      </div>
    </div>
  );
}
