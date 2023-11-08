import '~/styles/globals.css';

import { Mulish } from 'next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = {
  title: 'Hello, Software',
  description:
    'A free guide to software engineering fundamentals for every experience level.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${mulish.variable}`}>{children}</body>
    </html>
  );
}
