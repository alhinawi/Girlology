'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { useApp } from './Lang';
import { Article } from '../lib/content';

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
      <div className="read-progress" style={{ width: `${progress}%` }} />
      <div className="container">
        <div className="article-hero">
          <img src={article.img} alt={title} />
        </div>
        <div className="article-head">
          <span className="card-tag"><Icon name={article.icon} size={13} /> {t.sectionsKicker}</span>
          <h1>{title}</h1>
          <div className="article-meta">
            <span>{article.minutes} {t.minute}</span>
            {isRead ? <span><Icon name="check" size={14} /> {t.alreadyRead}</span> : null}
          </div>
          <div className="article-actions">
            <button className={`action-chip ${playing ? 'active' : ''}`} onClick={toggleListen}>
              <Icon name={playing ? 'stop' : 'play'} size={15} /> {playing ? t.stopListen : t.listen}
            </button>
            <button
              className={`action-chip ${isFav ? 'active' : ''}`}
              onClick={() => { toggleFav(article.slug); toast(isFav ? t.favRemoveToast : t.favAddToast); }}
            >
              <Icon name="heart" size={15} /> {isFav ? t.favorited : t.favorite}
            </button>
            {!isRead ? (
              <button className="action-chip" onClick={() => { markRead(article.slug); toast(t.readToast); }}>
                <Icon name="check" size={15} /> {t.markRead}
              </button>
            ) : null}
          </div>
        </div>
        <div className="article-body">
          {blocks.map((b, i) => (
            <React.Fragment key={i}>
              <h2>{b.h}</h2>
              <p>{b.p}</p>
            </React.Fragment>
          ))}
        </div>
        <Link href={`/article/${next.slug}/`} className="next-card">
          <span>{t.nextArticle}</span>
          <h3>{lang === 'ar' ? next.titleAr : next.titleEn}</h3>
        </Link>
      </div>
    </>
  );
}
