'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ui, Lang } from '../lib/content';

type UIStrings = { [K in keyof (typeof ui)['ar']]: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  t: UIStrings;
  favs: string[];
  toggleFav: (slug: string) => void;
  read: string[];
  markRead: (slug: string) => void;
  toast: (msg: string) => void;
};

const C = createContext<Ctx | null>(null);

export function useApp() {
  const v = useContext(C);
  if (!v) throw new Error('useApp outside provider');
  return v;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ar');
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');
  const [favs, setFavs] = useState<string[]>([]);
  const [read, setRead] = useState<string[]>([]);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    try {
      const l = localStorage.getItem('girlology-lang');
      if (l === 'en' || l === 'ar') setLangState(l);
      const th = localStorage.getItem('girlology-theme');
      if (th === 'light' || th === 'dark') setThemeState(th);
      setFavs(JSON.parse(localStorage.getItem('girlology-favs') || '[]'));
      setRead(JSON.parse(localStorage.getItem('girlology-read') || '[]'));
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('girlology-lang', lang); } catch {}
  }, [lang]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    try { localStorage.setItem('girlology-theme', theme); } catch {}
  }, [theme]);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    window.setTimeout(() => setToastMsg(''), 2400);
  }, []);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setTheme = useCallback((t: 'dark' | 'light') => setThemeState(t), []);

  const toggleFav = useCallback((slug: string) => {
    setFavs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try { localStorage.setItem('girlology-favs', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const markRead = useCallback((slug: string) => {
    setRead((prev) => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      try { localStorage.setItem('girlology-read', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  return (
    <C.Provider value={{ lang, setLang, theme, setTheme, t: ui[lang] as UIStrings, favs, toggleFav, read, markRead, toast }}>
      {children}
      {toastMsg ? (
        <div
          role="status"
          className="fixed bottom-6 start-1/2 z-[100] -translate-x-1/2 rounded-[14px] border border-primary bg-card px-6 py-3 font-head font-bold text-foreground shadow-2xl rtl:translate-x-1/2"
        >
          {toastMsg}
        </div>
      ) : null}
    </C.Provider>
  );
}
