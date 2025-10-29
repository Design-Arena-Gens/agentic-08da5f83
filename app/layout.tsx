import type { Metadata } from 'next';
import { Archivo, Jura } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });
const jura = Jura({ subsets: ['latin'], variable: '--font-jura' });

export const metadata: Metadata = {
  title: 'World Decay — Cooperative Isometric Survival',
  description:
    'Discover World Decay, a cooperative isometric survival experience that unfolds across Paris and the rest of a devastated globe.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
