'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Heart, Home, Settings, X, ChevronDown } from 'lucide-react';
import { useApp } from './Lang';
import { articles } from '@/lib/articles';
import { sections, extras } from '@/lib/content';
import TopicIcon from './topic-icon';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const { t, lang, setLang, theme, setTheme } = useApp();
  const [setOpen, setSetOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1180px] items-center gap-3.5 px-[22px] py-3">
        <Sheet open={sideOpen} onOpenChange={setSideOpen}>
          <SheetTrigger render={<Button variant="outline" size="icon" aria-label="menu" className="size-11 rounded-xl" />}>
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side={lang === 'ar' ? 'right' : 'left'} className="w-[300px] bg-popover font-body">
            <SheetHeader>
              <SheetTitle className="font-head text-primary">{t.sidebarTitle}</SheetTitle>
            </SheetHeader>
            <nav className="mt-2 flex flex-col gap-1.5 px-4 pb-6">
              <Link
                href="/"
                onClick={() => setSideOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-foreground transition-colors hover:bg-card hover:text-primary"
              >
                <Home size={18} className="shrink-0 text-primary" /> {t.backHome}
              </Link>

              {sections.map((sec) => (
                <details key={sec.slug} className="group rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3.5 py-3 font-head font-bold transition-colors hover:bg-card [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <TopicIcon name={sec.icon} size={18} className="shrink-0 text-primary" />
                      {lang === 'ar' ? sec.titleAr : sec.titleEn}
                    </span>
                    <ChevronDown size={16} className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ms-4 flex flex-col gap-0.5 border-s border-border ps-3 pb-1">
                    {sec.topics.map((slug) => {
                      const a = articles.find((x) => x.slug === slug)!;
                      return (
                        <Link
                          key={slug}
                          href={`/article/${slug}/`}
                          onClick={() => setSideOpen(false)}
                          className="rounded-lg px-3 py-2 text-[0.95rem] text-muted-foreground transition-colors hover:bg-card hover:text-primary"
                        >
                          {lang === 'ar' ? a.titleAr : a.titleEn}
                        </Link>
                      );
                    })}
                    <Link
                      href={`/section/${sec.slug}/`}
                      onClick={() => setSideOpen(false)}
                      className="rounded-lg px-3 py-2 font-head text-[0.9rem] font-bold text-primary transition-colors hover:bg-card"
                    >
                      {t.openSection} ←
                    </Link>
                  </div>
                </details>
              ))}

              <div className="mt-3 border-t border-border pt-3">
                <div className="mb-1 px-3.5 font-head text-sm font-extrabold text-primary">{t.toolsTitle}</div>
                {extras.map((ex) => (
                  <Link
                    key={ex.slug}
                    href={`/${ex.slug}/`}
                    onClick={() => setSideOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-foreground transition-colors hover:bg-card hover:text-primary"
                  >
                    <TopicIcon name={ex.icon} size={17} className="shrink-0 text-primary" />
                    <span>{lang === 'ar' ? ex.titleAr : ex.titleEn}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2.5 font-head text-xl font-extrabold">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-purple-500 text-white shadow-[0_0_22px_rgba(244,114,160,0.55)]">
            <Heart size={20} />
          </span>
          <span>{t.brand}</span>
        </Link>

        <div className="flex-1" />

        <div className="relative">
          <Button
            variant="outline" size="icon" aria-label="settings"
            className="size-11 rounded-xl"
            onClick={() => setSetOpen((v) => !v)}
          >
            <Settings size={20} />
          </Button>
          {setOpen ? (
            <div className="absolute end-0 top-[54px] z-[80] w-[300px] rounded-[20px] border border-border bg-popover p-5 shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-head text-lg font-bold">{t.settings}</h3>
                <Button variant="ghost" size="icon" aria-label="close" onClick={() => setSetOpen(false)} className="size-8">
                  <X size={16} />
                </Button>
              </div>
              <div className="flex items-center justify-between border-t border-border py-3">
                <span className="font-head font-bold">{t.language}</span>
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <span className={lang === 'ar' ? 'text-primary' : ''}>العربية</span>
                  <Switch
                    checked={lang === 'en'}
                    onCheckedChange={(v) => setLang(v ? 'en' : 'ar')}
                    aria-label="language"
                  />
                  <span className={lang === 'en' ? 'text-primary' : ''}>English</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border py-3">
                <span className="font-head font-bold">{t.theme}</span>
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <span className={theme === 'dark' ? 'text-primary' : ''}>{t.dark}</span>
                  <Switch
                    checked={theme === 'light'}
                    onCheckedChange={(v) => setTheme(v ? 'light' : 'dark')}
                    aria-label="theme"
                  />
                  <span className={theme === 'light' ? 'text-primary' : ''}>{t.light}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
