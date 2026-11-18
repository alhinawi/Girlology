'use client';
import React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useApp } from './Lang';
import { articles } from '@/lib/articles';
import { totalArticles, sections, extras } from '@/lib/content';
import { tips } from '@/lib/extras';
import TopicIcon from './topic-icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const { t, lang, read } = useApp();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="relative overflow-hidden py-14 pb-10 md:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 px-[22px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="outline" className="mb-4 gap-2 rounded-full border-border bg-card px-4 py-2 font-head text-sm font-bold text-primary">
              <Heart size={15} /> {t.badge}
            </Badge>
            <h1 className="mb-4 font-head text-[2rem] font-black leading-[1.4] md:text-[3rem]">
              {t.heroTitleA}{' '}
              <span className="bg-gradient-to-l from-primary to-gold bg-clip-text text-transparent">{t.heroTitleB}</span>
            </h1>
            <p className="mb-7 max-w-[56ch] text-lg text-muted-foreground">{t.heroLead}</p>
            <div className="flex flex-wrap gap-3.5">
              <Button
                size="lg"
                render={<Link href={`/article/${articles[0].slug}/`} />}
                className="h-[52px] gap-2.5 rounded-2xl bg-gradient-to-br from-primary to-purple-500 px-7 font-head text-base font-extrabold text-white shadow-[0_10px_30px_rgba(244,114,160,0.35)] transition-transform hover:-translate-y-0.5 hover:from-primary hover:to-purple-500"
              >
                {t.ctaStart} <Arrow size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<a href="#about" />}
                className="h-[52px] rounded-2xl border-border bg-card px-6 font-head text-base font-bold"
              >
                {t.ctaAbout}
              </Button>
            </div>
          </div>
          <div className="relative before:absolute before:-inset-[8%] before:-z-10 before:rounded-[40px] before:bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,160,0.35),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(168,85,247,0.3),transparent_55%)] before:blur-[30px]">
            <img className="w-full rounded-[28px] border border-border shadow-2xl" src="/images/hero.png" alt="Girlology" />
          </div>
        </div>

        <div className="mx-auto mt-11 grid w-full max-w-[1180px] grid-cols-2 gap-4 px-[22px] md:grid-cols-4">
          {[
            { n: String(totalArticles), l: t.stat1 },
            { n: String(tips.length) + '+', l: t.stat2 },
            { n: '100%', l: t.stat3 },
            { n: '0$', l: t.stat4 },
          ].map((s, i) => (
            <div key={i} className="rounded-[20px] border border-border bg-card p-5 text-center">
              <b className="block font-head text-3xl text-primary">{s.n}</b>
              <span className="text-sm text-muted-foreground">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-[22px]">
        <div className="mb-7 mt-10">
          <div className="font-head font-extrabold tracking-wide text-primary">{t.sectionsKicker}</div>
          <h2 className="font-head text-[clamp(1.6rem,3vw,2.3rem)] font-black">{t.sectionsTitle}</h2>
          <p className="max-w-[70ch] text-muted-foreground">{t.sectionsLead}</p>
        </div>

        {sections.map((sec) => {
          const topics = sec.topics
            .map((slug) => articles.find((a) => a.slug === slug))
            .filter((a): a is (typeof articles)[number] => Boolean(a));
          return (
            <div key={sec.slug} className="mb-12">
              <Link href={`/section/${sec.slug}/`} className="group mb-5 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5 font-head text-sm font-extrabold text-primary">
                    <TopicIcon name={sec.icon} size={16} /> {t.sectionOf} — {topics.length} {t.topicsCount}
                  </div>
                  <h3 className="mt-1 font-head text-2xl font-black transition-colors group-hover:text-primary md:text-[1.7rem]">
                    {lang === 'ar' ? sec.titleAr : sec.titleEn}
                  </h3>
                  <p className="mt-1 max-w-[65ch] text-muted-foreground">{lang === 'ar' ? sec.descAr : sec.descEn}</p>
                </div>
                <span className="hidden shrink-0 items-center gap-2 font-head font-extrabold text-primary sm:inline-flex">
                  {t.openSection} <Arrow size={16} />
                </span>
              </Link>
              <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
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
                          <TopicIcon name={a.icon} size={13} /> {lang === 'ar' ? sec.titleAr : sec.titleEn}
                        </Badge>
                        <h4 className="font-head text-xl font-extrabold">{lang === 'ar' ? a.titleAr : a.titleEn}</h4>
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
        })}
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-[22px]">
        <div className="mb-7 mt-4">
          <div className="font-head font-extrabold tracking-wide text-primary">{t.extrasKicker}</div>
          <h2 className="font-head text-[clamp(1.6rem,3vw,2.3rem)] font-black">{t.extrasTitle}</h2>
          <p className="max-w-[70ch] text-muted-foreground">{t.extrasLead}</p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {extras.map((ex) => (
            <Link
              key={ex.slug}
              href={`/${ex.slug}/`}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
            >
              <div className="overflow-hidden">
                <img
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  src={ex.img}
                  alt={lang === 'ar' ? ex.titleAr : ex.titleEn}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <Badge variant="secondary" className="gap-1.5 self-start rounded-full bg-primary/10 font-head text-xs font-bold text-primary hover:bg-primary/10">
                  <TopicIcon name={ex.icon} size={13} /> {t.extrasKicker}
                </Badge>
                <h4 className="font-head text-xl font-extrabold">{lang === 'ar' ? ex.titleAr : ex.titleEn}</h4>
                <p className="flex-1 text-[0.98rem] text-muted-foreground">{lang === 'ar' ? ex.descAr : ex.descEn}</p>
                <span className="mt-1.5 inline-flex items-center gap-2 font-head font-extrabold text-primary">
                  {t.openSection} <Arrow size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-[22px]" id="about">
        <div className="my-14 grid grid-cols-1 items-center gap-8 rounded-[28px] border border-border bg-muted/60 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="mb-3 font-head text-2xl font-black md:text-[1.7rem]">{t.aboutTitle}</h2>
            <p className="text-muted-foreground">{t.aboutBody}</p>
          </div>
          <img src="/images/about.png" alt="Cairo" className="rounded-[20px] shadow-2xl" />
        </div>
      </section>
    </>
  );
}
