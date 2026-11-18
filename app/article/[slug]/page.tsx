import React from 'react';
import { articles } from '../../../lib/articles';
import ArticleClient from '../../../components/ArticleClient';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = articles.findIndex((a) => a.slug === slug);
  const article = articles[idx];
  const next = articles[(idx + 1) % articles.length];
  return <ArticleClient article={article} next={next} />;
}
