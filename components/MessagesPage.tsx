'use client';
import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, Copy, Search, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { messageCategories, messageExamples, type MessageKind } from '@/lib/messages';
import ExtraHero from './ExtraHero';

export default function MessagesPage({ kind }: { kind: MessageKind }) {
  const { lang, toast } = useApp();
  const ar = lang === 'ar';
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState('');
  const [manual, setManual] = useState('');
  const manualRef = useRef<HTMLTextAreaElement>(null);
  const categories = messageCategories[kind];
  const all = messageExamples[kind];
  const extra = extras.find((x) => x.slug === kind)!;
  const activeCategory = categories.find((x) => x.id === category);
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return all.filter((x) => (category === 'all' || x.category === category) &&
      (!term || (ar ? x.ar : x.en).toLocaleLowerCase().includes(term)));
  }, [all, category, query, ar]);

  async function copy(id: string, text: string) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setManual('');
      toast(ar ? 'اتنسخت، عدلها بصوتك قبل ما تبعتها' : 'Copied. Make it sound like you before sending.');
      window.setTimeout(() => setCopied((current) => current === id ? '' : current), 2200);
    } catch {
      setManual(text);
      window.setTimeout(() => { manualRef.current?.focus(); manualRef.current?.select(); }, 0);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[1180px] px-[22px] pb-16">
      <ExtraHero extra={extra} />
      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_300px]">
        <section aria-label={ar ? 'قبل ما تبعت' : 'Before you send'} className="rounded-[22px] border border-primary/25 bg-primary/5 p-5 md:p-6">
          <h2 className="flex items-center gap-2 font-head text-lg font-extrabold text-primary"><ShieldCheck className="size-5 shrink-0" />{ar ? 'الكلام الحلو من غير ضغط' : 'Warm words, no pressure'}</h2>
          <p className="mt-2 leading-8 text-muted-foreground">{ar ? 'دي أفكار تستلهم منها، مش رسائل مضمونة ولا تعليمات تبعتها بالجملة. اختار اللي شبهك وشبه علاقتكم، وغير أي تفصيلة مش حقيقية. ابعت بس لو التواصل بينكم مرحب بيه. لو قالت لأ أو مش حابة تكمل، احترم ده ووقف. ولو مردتش، متكررّش الرسالة.' : 'These are ideas, not guaranteed scripts or a bulk-messaging plan. Choose what fits you and your relationship, and change any detail that is not true. Only message where contact is welcome. If she says no or wants to stop, respect that and stop. Do not repeat an unanswered message.'}</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{ar ? 'اختار جملة مناسبة لدرجة القرب بينكم، ومتقولش تفصيلة مش حقيقية. الهزار عن الإذن أو المزاج مجرد هزار بين ناس مرتاحة لبعض، مش تحكم في مشاعر حد. مفيش إرسال تلقائي هنا، النسخ بيحط النص عندك وبس.' : 'Choose a line that fits how well you know each other, and do not include details that are not true. Jokes about permission or moods are only playful between people who are comfortable with each other, never control over anyone\'s feelings. Nothing is sent automatically: copying only puts the text on your clipboard.'}</p>
        </section>
        <aside className="rounded-[22px] border border-border bg-card p-5">
          <span className="font-head text-4xl font-black text-primary">{all.length}</span>
          <p className="mt-1 font-head font-bold">{ar ? 'مثال بالمصري وبالإنجليزي' : 'examples in Arabic and English'}</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{ar ? `${categories.length} تصنيفات، اختار حسب الموقف ودرجة القرب، مش حسب أحلى جملة وخلاص.` : `${categories.length} categories. Choose for the situation and your relationship, not simply the sweetest line.`}</p>
          <nav aria-label={ar ? 'مكتبات الكلام' : 'Conversation libraries'} className="mt-3 flex flex-col gap-3">{(['pickup-lines', 'morning-texts', 'conversation-topics'] as MessageKind[]).filter((value) => value !== kind).map((value) => { const item = extras.find((entry) => entry.slug === value)!; return <Link key={value} className="inline-flex items-center gap-1 text-sm font-bold text-primary underline underline-offset-4" href={`/${value}/`}>{ar ? item.titleAr : item.titleEn}<ArrowUpRight size={15} /></Link>; })}</nav>
        </aside>
      </div>

      <section className="mt-8" aria-label={ar ? 'اختار الرسالة' : 'Find a message'}>
        <label htmlFor="message-search" className="mb-2 block font-head text-sm font-bold">{ar ? 'دور على كلمة في الرسالة' : 'Search the messages'}</label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 focus-within:border-primary">
          <Search size={18} className="shrink-0 text-muted-foreground" aria-hidden="true" />
          <input id="message-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ar ? 'مثلا: قهوة، امتحان، راحة' : 'Try: coffee, exam, rest'} className="min-h-12 min-w-0 flex-1 bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground" />
          {query && <button type="button" onClick={() => setQuery('')} className="min-h-11 text-sm font-bold text-primary">{ar ? 'مسح' : 'Clear'}</button>}
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={ar ? 'التصنيفات' : 'Categories'}>
          {[{ id: 'all', ar: 'الكل', en: 'All' }, ...categories].map((c) => <button type="button" key={c.id} aria-pressed={category === c.id} onClick={() => setCategory(c.id)} className={`min-h-11 rounded-full border px-4 py-2 font-head text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${category === c.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary'}`}>{ar ? c.ar : c.en}</button>)}
        </div>
        {activeCategory && <p className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-7" data-testid="category-tip">{ar ? activeCategory.tipAr : activeCategory.tipEn}</p>}
        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite" role="status">{ar ? `${visible.length} من ${all.length} مثال` : `${visible.length} of ${all.length} examples`}</p>
        {manual && <div className="mt-4 rounded-2xl border border-primary p-4" role="alert">
          <label htmlFor="manual-copy" className="mb-2 block font-head font-bold">{ar ? 'النسخ التلقائي مش متاح. حدد النص وانسخه يدوي:' : 'Clipboard access is unavailable. Select and copy the text manually:'}</label>
          <textarea id="manual-copy" ref={manualRef} readOnly value={manual} rows={4} className="w-full rounded-xl border border-border bg-background p-3 leading-8" />
          <button type="button" onClick={() => setManual('')} className="mt-2 min-h-11 text-primary">{ar ? 'قفل' : 'Close'}</button>
        </div>}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((x) => {
            const cat = categories.find((c) => c.id === x.category)!;
            return <article key={x.id} data-testid="message-card" className="flex flex-col rounded-[22px] border border-border bg-card p-5">
              <span className="font-head text-xs font-bold text-primary">{ar ? cat.ar : cat.en}</span>
              <p className="mb-4 mt-3 flex-1 text-xl leading-[1.9]" data-testid="message-text">{ar ? x.ar : x.en}</p>
              <details className="mb-4 text-sm text-muted-foreground">
                <summary className="cursor-pointer py-2 font-head font-bold hover:text-primary">{ar ? 'ينفع إمتى؟' : 'When does it fit?'}</summary>
                <p className="mt-1 leading-7">{ar ? cat.tipAr : cat.tipEn}</p>
              </details>
              <button type="button" onClick={() => copy(x.id, ar ? x.ar : x.en)} aria-label={ar ? `انسخ الرسالة ${x.id}` : `Copy message ${x.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-4 py-2 font-head text-sm font-bold text-primary hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{copied === x.id ? <Check size={16} /> : <Copy size={16} />}{copied === x.id ? (ar ? 'اتنسخت' : 'Copied') : (ar ? 'انسخ الرسالة' : 'Copy message')}</button>
            </article>;
          })}
        </div>
        {visible.length === 0 && <div className="mt-4 rounded-[22px] border border-border bg-card p-8 text-center"><h3 className="font-head text-lg font-bold">{ar ? 'مفيش نتيجة بالكلمة دي' : 'No messages match'}</h3><p className="mt-2 text-muted-foreground">{ar ? 'جرب كلمة أبسط، أو اعرض كل التصنيفات.' : 'Try a simpler word or show all categories.'}</p><button type="button" className="mt-4 min-h-11 rounded-xl bg-primary px-5 font-bold text-primary-foreground" onClick={() => { setQuery(''); setCategory('all'); }}>{ar ? 'اعرض الكل' : 'Show all'}</button></div>}
      </section>
    </div>
  );
}
