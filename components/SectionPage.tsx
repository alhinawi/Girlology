'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useApp } from './Lang';
import { articles } from '@/lib/articles';
import { Section } from '@/lib/content';
import TopicIcon from './topic-icon';
import { Badge } from '@/components/ui/badge';

export default function SectionPage({ section }: { section: Section }) {
  const { t, lang, read } = useApp();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const topics = section.topics
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  return (
    <div className="mx-auto w-full max-w-[1180px] px-[22px]">
      <div className="relative mt-8 overflow-hidden rounded-[28px] border border-border">
        <img src={topics[topics.length - 1].img} alt={lang === 'ar' ? section.titleAr : section.titleEn} className="h-[240px] w-full object-cover md:h-[320px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute bottom-0 start-0 p-6 md:p-8">
          <Badge variant="secondary" className="mb-2 gap-1.5 rounded-full bg-primary/15 font-head text-xs font-bold text-primary hover:bg-primary/15">
            <TopicIcon name={section.icon} size={13} /> {t.sectionOf}
          </Badge>
          <h1 className="font-head text-[clamp(1.7rem,3.4vw,2.6rem)] font-black">{lang === 'ar' ? section.titleAr : section.titleEn}</h1>
          <p className="mt-1 max-w-[60ch] text-muted-foreground">{lang === 'ar' ? section.descAr : section.descEn}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-[22px] pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((a) => {
          const done = read.includes(a.slug);
          return (
            <Link
              key={a.slug}
              href={`/article/${a.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
            >
              <div className="overflow-hidden">
                <img
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  src={a.img}
                  alt={lang === 'ar' ? a.titleAr : a.titleEn}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <Badge variant="secondary" className="gap-1.5 self-start rounded-full bg-primary/10 font-head text-xs font-bold text-primary hover:bg-primary/10">
                  <TopicIcon name={a.icon} size={13} /> {lang === 'ar' ? section.titleAr : section.titleEn}
                </Badge>
                <h3 className="font-head text-xl font-extrabold">{lang === 'ar' ? a.titleAr : a.titleEn}</h3>
                <p className="flex-1 text-[0.98rem] text-muted-foreground">{lang === 'ar' ? a.excerptAr : a.excerptEn}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-head font-extrabold text-primary">
                    {t.readMore} <Arrow size={15} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    {done ? <><Check size={14} /> {t.alreadyRead}</> : <>{a.minutes} {t.minute}</>}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
