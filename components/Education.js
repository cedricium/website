import DescriptionList from 'components/DescriptionList';

const EDUCATION = [
  {
    key: 'lambda',
    dt: '2019—2020',
    dd: (
      <>
        <p>
          <strong>Full-Stack Web Development, Lambda School</strong>
        </p>
        <p>
          YC-backed coding bootcamp that provides an immersive hands-on
          curriculum with a focus on computer science, software engineering, and
          web development.
        </p>
      </>
    ),
  },
];

const Education = () => <DescriptionList title='Education' items={EDUCATION} />;

export default Education;
