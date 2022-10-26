// import { Inter, Newsreader } from '@next/font/google';

import '../styles/globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// const newsreader = Newsreader({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-accent',
// });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>Cedric Amaya - Fullstack Software Engineer</title>
      <meta
        name='description'
        content='Passionate about creating memorable and intuitive experiences for the web.'
      />
      <link rel='icon' href='/favicon.ico' />

      <body>{children}</body>
    </html>
  );
}
