import React from 'react';
import { sections } from '@/lib/content';
import SectionPage from '@/components/SectionPage';

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = sections.find((s) => s.slug === slug) ?? sections[0];
  return <SectionPage section={section} />;
}
