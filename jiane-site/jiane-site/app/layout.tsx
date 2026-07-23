import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MAISON DE JIAHN — A Birthday Dinner for Her',
  description: 'A summer birthday dinner menu and kitchen runbook for a five-person table.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
