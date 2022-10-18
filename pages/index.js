import Head from 'next/head';

import Heading from '../components/Heading';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Elsewhere from '../components/Elsewhere';
import Colophon from '../components/Colophon';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cedric Amaya - Fullstack Software Engineer</title>
        <meta
          name='description'
          content='Passionate about creating memorable and intuitive experiences for the web.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Heading />
        <Experience />
        <Education />
        <Elsewhere />
        <Colophon />
      </main>

      <footer className={styles.footer}>
        <em title='No reward without effort'>palma non sine pulvere</em>
      </footer>
    </>
  );
}
