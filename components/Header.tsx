'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from './Icons';
import { useApp } from './Lang';
import { articles } from '../lib/articles';

export default function Header() {
  const { t, lang, setLang, theme, setTheme } = useApp();
  const [sideOpen, setSideOpen] = useState(false);
  const [setOpen, setSetOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <button className="burger" aria-label="menu" onClick={() => setSideOpen(true)}>
            <Icon name="menu" size={22} />
          </button>
          <Link href="/" className="logo">
            <span className="logo-mark"><Icon name="heart" size={20} /></span>
            <span>{t.brand}</span>
          </Link>
          <div className="header-spacer" />
          <button className="icon-btn" aria-label="settings" onClick={() => setSetOpen((v) => !v)}>
            <Icon name="gear" size={20} />
          </button>
        </div>
      </header>

      <div className={`sidebar-backdrop ${sideOpen ? 'open' : ''}`} onClick={() => setSideOpen(false)} />
      <aside className={`sidebar ${sideOpen ? 'open' : ''}`} aria-hidden={!sideOpen}>
        <button className="icon-btn side-close" aria-label="close" onClick={() => setSideOpen(false)}>
          <Icon name="close" size={18} />
        </button>
        <h3>{t.sidebarTitle}</h3>
        <Link href="/" className="side-link" onClick={() => setSideOpen(false)}>
          <Icon name="home" size={18} /> {t.backHome}
        </Link>
        {articles.map((a) => (
          <Link key={a.slug} href={`/article/${a.slug}/`} className="side-link" onClick={() => setSideOpen(false)}>
            <Icon name={a.icon} size={18} />
            <span>{lang === 'ar' ? a.titleAr : a.titleEn}</span>
          </Link>
        ))}
      </aside>

      {setOpen ? (
        <div className="settings-panel">
          <h3>{t.settings}</h3>
          <div className="set-row">
            <span className="set-label">{t.language}</span>
            <span className="seg">
              <button className={lang === 'ar' ? 'on' : ''} onClick={() => setLang('ar')}>العربية</button>
              <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>English</button>
            </span>
          </div>
          <div className="set-row">
            <span className="set-label">{t.theme}</span>
            <span className="seg">
              <button className={theme === 'dark' ? 'on' : ''} onClick={() => setTheme('dark')}><Icon name="moon" size={14} /> {t.dark}</button>
              <button className={theme === 'light' ? 'on' : ''} onClick={() => setTheme('light')}><Icon name="sun" size={14} /> {t.light}</button>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
