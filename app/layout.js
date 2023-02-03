import 'styles/globals.css';
import { Inter, Newsreader } from '@next/font/google';

const inter = Inter({ variable: '--font-sans' });

const newsreader = Newsreader({
  weight: '400',
  style: 'italic',
  variable: '--font-accent',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
