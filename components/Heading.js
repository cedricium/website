import styles from 'styles/Heading.module.css';

const Heading = () => (
  <h1 className={styles.title}>
    <span className='animated fadeIn delay-1u'>
      Hello, I&apos;m <em>Cedric</em> ⁂
    </span>

    <span className='animated fadeIn delay-2u'>
      I&apos;m a Fullstack Software Engineer based in San Jose, California.
      Passionate about creating{' '}
      <em>memorable and intuitive experiences for the web</em>.
    </span>
  </h1>
);

export default Heading;
