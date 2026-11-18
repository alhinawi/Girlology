'use client';
import React from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { useApp } from './Lang';
import { articles } from '../lib/articles';
import { totalArticles } from '../lib/content';

export default function Home() {
  const { t, lang, read } = useApp();
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-badge"><Icon name="heart" size={15} /> {t.badge}</span>
            <h1>{t.heroTitleA} <span className="grad">{t.heroTitleB}</span></h1>
            <p className="lead">{t.heroLead}</p>
            <div className="hero-actions">
              <Link href={`/article/${articles[0].slug}/`} className="btn-primary">
                {t.ctaStart} <Icon name="arrow" size={18} />
              </Link>
              <a href="#about" className="btn-ghost">{t.ctaAbout}</a>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img className="hero-img" src="/images/hero.png" alt="Girlology" />
          </div>
        </div>
        <div className="container stats">
          <div className="stat"><b>{totalArticles}</b><span>{t.stat1}</span></div>
          <div className="stat"><b>50+</b><span>{t.stat2}</span></div>
          <div className="stat"><b>100%</b><span>{t.stat3}</span></div>
          <div className="stat"><b>0$</b><span>{t.stat4}</span></div>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <div className="kicker">{t.sectionsKicker}</div>
          <h2>{t.sectionsTitle}</h2>
          <p>{t.sectionsLead}</p>
        </div>
        <div className="cards">
          {articles.map((a, i) => {
            const done = read.includes(a.slug);
            return (
              <Link key={a.slug} href={`/article/${a.slug}/`} className="card">
                <img className="card-img" src={a.img} alt={lang === 'ar' ? a.titleAr : a.titleEn} loading={i > 2 ? 'lazy' : undefined} />
                <div className="card-body">
                  <span className="card-tag"><Icon name={a.icon} size={13} /> {t.sectionsKicker} {i + 1}</span>
                  <h3>{lang === 'ar' ? a.titleAr : a.titleEn}</h3>
                  <p>{lang === 'ar' ? a.excerptAr : a.excerptEn}</p>
                  <div className="card-foot">
                    <span className="read-link">{t.readMore} <Icon name="arrow" size={15} /></span>
                    <span className="mini-state">
                      {done ? <><Icon name="check" size={14} /> {t.alreadyRead}</> : <>{a.minutes} {t.minute}</>}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container" id="about">
        <div className="about-strip">
          <div>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutBody}</p>
          </div>
          <img src="/images/about.png" alt="Cairo" />
        </div>
      </section>
    </>
  );
}
