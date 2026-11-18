'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Heart, Home, Settings, X } from 'lucide-react';
import { useApp } from './Lang';
import { articles } from '@/lib/articles';
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
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/article/${a.slug}/`}
                  onClick={() => setSideOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-foreground transition-colors hover:bg-card hover:text-primary"
                >
                  <TopicIcon name={a.icon} size={18} className="shrink-0 text-primary" />
                  <span>{lang === 'ar' ? a.titleAr : a.titleEn}</span>
                </Link>
              ))}
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
