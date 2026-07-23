import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JIANE — A Seasonal Table at Home',
  description: 'A summer dinner menu and kitchen runbook for JIANE.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
