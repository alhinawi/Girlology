'use client';
import React from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { useApp } from './Lang';
import { articles } from '../lib/articles';

export default function Footer() {
  const { t, lang } = useApp();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{t.footerAbout}</h4>
            <p>{t.footerAboutText}</p>
            <a className="wa-btn" href="https://wa.me/201028928248" target="_blank" rel="noopener noreferrer">
              <Icon name="wa" size={18} /> {t.whatsapp}
            </a>
          </div>
          <div>
            <h4>{t.footerTopics}</h4>
            <div className="footer-links">
              {articles.slice(0, 5).map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}/`}>{lang === 'ar' ? a.titleAr : a.titleEn}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>{t.footerTopics}</h4>
            <div className="footer-links">
              {articles.slice(5).map((a) => (
                <Link key={a.slug} href={`/article/${a.slug}/`}>{lang === 'ar' ? a.titleAr : a.titleEn}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Girlology © 2026 — {t.rights}</span>
          <span>{t.madeBy}</span>
        </div>
      </div>
    </footer>
  );
}
