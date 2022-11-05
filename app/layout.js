import 'styles/globals.css';
import { inter, newsreader } from 'lib/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Cedric Amaya - Fullstack Software Engineer</title>
        <meta
          name='description'
          content='Passionate about creating memorable and intuitive experiences for the web.'
        />
        <link rel='icon' href='/favicon.ico' />

        <style jsx global>{`
          :root {
            --font-sans: ${inter.style.fontFamily}, -apple-system,
              BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
              Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

            --font-accent: ${newsreader.style.fontFamily}, 'Hoefler Text',
              Utopia, Times, 'Times New Roman', serif;
          }
        `}</style>
      </head>

      <body>{children}</body>
    </html>
  );
}
