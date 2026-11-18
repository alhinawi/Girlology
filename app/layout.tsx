import React from 'react';
import './globals.css';
import { AppProvider } from '../components/Lang';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Girlology — فن التعامل المحترم',
  description: 'دليل الشاب المصري للتعامل مع البنات باحترام وذوق وثقة — نصائح عملية بالعامية المصرية من الصداقة للجواز.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="dark">
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
