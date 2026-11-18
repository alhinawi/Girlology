'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Play, Square, Heart, Check } from 'lucide-react';
import { useApp } from './Lang';
import { Article } from '@/lib/content';
import TopicIcon from './topic-icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ArticleClient({ article, next }: { article: Article; next: Article }) {
  const { t, lang, favs, toggleFav, read, markRead, toast } = useApp();
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const isFav = favs.includes(article.slug);
  const isRead = read.includes(article.slug);
  const blocks = lang === 'ar' ? article.ar : article.en;
  const title = lang === 'ar' ? article.titleAr : article.titleEn;

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
      if (max > 0 && h.scrollTop / max > 0.9) markRead(article.slug);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [article.slug, markRead]);

  useEffect(() => () => { try { window.speechSynthesis?.cancel(); } catch {} }, []);

  const toggleListen = useCallback(() => {
    try {
      const ss = window.speechSynthesis;
      if (!ss) return;
      if (playing) {
        ss.cancel();
        setPlaying(false);
        return;
      }
      const text = [title, ...blocks.map((b) => `${b.h}. ${b.p}`)].join('. ');
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === 'ar' ? 'ar-EG' : 'en-US';
      u.rate = 0.95;
      const voices = ss.getVoices();
      const v = voices.find((x) => x.lang.startsWith(lang === 'ar' ? 'ar' : 'en'));
      if (v) u.voice = v;
      u.onend = () => setPlaying(false);
      u.onerror = () => setPlaying(false);
      ss.cancel();
      ss.speak(u);
      setPlaying(true);
    } catch {}
  }, [playing, title, blocks, lang]);

  return (
    <>
      <div
        className="fixed start-0 top-0 z-[90] h-1 bg-gradient-to-l from-primary to-gold transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
      <div className="mx-auto w-full max-w-[1180px] px-[22px]">
        <div className="mt-8 overflow-hidden rounded-[28px] border border-border shadow-2xl">
          <img src={article.img} alt={title} className="max-h-[460px] w-full object-cover" />
        </div>

        <div className="pb-2 pt-7">
          <Badge variant="secondary" className="gap-1.5 rounded-full bg-primary/10 font-head text-xs font-bold text-primary hover:bg-primary/10">
            <TopicIcon name={article.icon} size={13} /> {t.sectionsKicker}
          </Badge>
          <h1 className="my-3.5 font-head text-[clamp(1.7rem,3.4vw,2.6rem)] font-black">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{article.minutes} {t.minute}</span>
            {isRead ? <span className="inline-flex items-center gap-1.5"><Check size={14} /> {t.alreadyRead}</span> : null}
          </div>
          <div className="my-5 flex flex-wrap gap-3">
            <Button
              variant={playing ? 'default' : 'outline'}
              className="h-11 gap-2.5 rounded-[14px] font-head font-bold"
              onClick={toggleListen}
            >
              {playing ? <Square size={15} /> : <Play size={15} />} {playing ? t.stopListen : t.listen}
            </Button>
            <Button
              variant={isFav ? 'default' : 'outline'}
              className="h-11 gap-2.5 rounded-[14px] font-head font-bold"
              onClick={() => { toggleFav(article.slug); toast(isFav ? t.favRemoveToast : t.favAddToast); }}
            >
              <Heart size={15} /> {isFav ? t.favorited : t.favorite}
            </Button>
            {!isRead ? (
              <Button
                variant="outline"
                className="h-11 gap-2.5 rounded-[14px] font-head font-bold"
                onClick={() => { markRead(article.slug); toast(t.readToast); }}
              >
                <Check size={15} /> {t.markRead}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mb-10 max-w-[800px]">
          {blocks.map((b, i) => (
            <React.Fragment key={i}>
              <h2 className="mb-3 mt-9 font-head text-2xl font-extrabold text-gold">{b.h}</h2>
              <p className="text-[1.12rem]">{b.p}</p>
            </React.Fragment>
          ))}
        </div>

        <Link
          href={`/article/${next.slug}/`}
          className="mb-16 block rounded-[20px] border border-border bg-card p-6 transition-colors hover:bg-accent"
        >
          <span className="font-head text-sm font-extrabold text-primary">{t.nextArticle}</span>
          <h3 className="mt-1.5 font-head text-xl font-bold">{lang === 'ar' ? next.titleAr : next.titleEn}</h3>
        </Link>
      </div>
    </>
  );
}
