import styles from 'styles/DescriptionList.module.css';

const DescriptionList = ({ title, items }) => (
  <section className='animated fadeIn delay-3u'>
    <p>
      <strong>{title}</strong>
    </p>

    <dl className={styles.dl}>
      {items.map(({ key, dt, dd }) => (
        <div key={key}>
          <dt>{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default DescriptionList;
