'use client';
import React, { useState } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import { useApp } from './Lang';
import { extras } from '@/lib/content';
import { quiz } from '@/lib/extras';
import ExtraHero from './ExtraHero';
import { Button } from '@/components/ui/button';

export default function QuizPage() {
  const { t, lang } = useApp();
  const extra = extras.find((e) => e.slug === 'quiz')!;
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[idx];
  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.correct) setScore((s) => s + 1);
  };
  const next = () => {
    if (idx + 1 >= quiz.length) setDone(true);
    else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  };
  const retry = () => {
    setIdx(0); setPicked(null); setScore(0); setDone(false); setStarted(true);
  };

  return (
    <div className="mx-auto w-full max-w-[860px] px-[22px] pb-16">
      <ExtraHero extra={extra}>
        {!started ? (
          <Button
            size="lg"
            onClick={() => setStarted(true)}
            className="mt-4 h-[50px] rounded-2xl bg-gradient-to-br from-primary to-purple-500 px-7 font-head text-base font-extrabold text-white shadow-[0_10px_30px_rgba(244,114,160,0.35)] hover:from-primary hover:to-purple-500"
          >
            {t.quizStart}
          </Button>
        ) : null}
      </ExtraHero>

      {started && !done ? (
        <div className="mt-8 rounded-[24px] border border-border bg-card p-6 md:p-8">
          <div className="mb-1 flex items-center justify-between text-sm font-bold text-muted-foreground">
            <span>{t.quizQuestion} {idx + 1} {t.quizOf} {quiz.length}</span>
            <span>{t.quizResult}: {score}</span>
          </div>
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-l from-primary to-gold transition-all" style={{ width: `${((idx + (picked !== null ? 1 : 0)) / quiz.length) * 100}%` }} />
          </div>
          <h2 className="mb-5 font-head text-xl font-extrabold md:text-2xl">{lang === 'ar' ? q.qAr : q.qEn}</h2>
          <div className="flex flex-col gap-3">
            {q.optionsAr.map((_, i) => {
              const label = lang === 'ar' ? q.optionsAr[i] : q.optionsEn[i];
              let cls = 'border-border bg-background hover:bg-accent';
              if (picked !== null) {
                if (i === q.correct) cls = 'border-green-500 bg-green-500/12 text-green-600 dark:text-green-400';
                else if (i === picked) cls = 'border-red-500 bg-red-500/12 text-red-600 dark:text-red-400';
                else cls = 'border-border bg-background opacity-60';
              }
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  className={`flex items-center justify-between gap-3 rounded-[16px] border p-4 text-start font-head font-bold transition-colors ${cls}`}
                >
                  <span>{label}</span>
                  {picked !== null && i === q.correct ? <Check size={18} className="shrink-0" /> : null}
                  {picked !== null && i === picked && i !== q.correct ? <X size={18} className="shrink-0" /> : null}
                </button>
              );
            })}
          </div>
          {picked !== null ? (
            <div className="mt-5">
              <p className={`font-head font-extrabold ${picked === q.correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {picked === q.correct ? t.quizCorrect : t.quizWrong}
              </p>
              <p className="mt-1 text-muted-foreground">{lang === 'ar' ? q.whyAr : q.whyEn}</p>
              <Button onClick={next} className="mt-4 h-11 rounded-[14px] px-6 font-head font-bold">
                {t.quizNext}
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      {done ? (
        <div className="mt-8 rounded-[24px] border border-border bg-card p-8 text-center">
          <div className="font-head text-5xl font-black text-primary">{score}/{quiz.length}</div>
          <p className="mt-2 text-lg text-muted-foreground">
            {score >= 7 ? t.quizGreat : score >= 4 ? t.quizGood : t.quizBad}
          </p>
          <Button onClick={retry} variant="outline" className="mt-5 h-11 gap-2 rounded-[14px] px-6 font-head font-bold">
            <RotateCcw size={16} /> {t.quizRetry}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
