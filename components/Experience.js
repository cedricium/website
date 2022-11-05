import DescriptionList from 'components/DescriptionList';

const EXPERIENCE = [
  {
    key: 'hellosaurus',
    dt: '2020—2022',
    dd: (
      <>
        <p>
          <strong>Fullstack Software Engineer, Hellosaurus</strong>
        </p>
        <p>
          Worked on a variety of projects, from the marketing site powered by
          Next.js to the CMS and Creator Studio, a React-powered web app for
          creating interactive videos.
        </p>
      </>
    ),
  },
  {
    key: 'moogsoft',
    dt: '2020—2020',
    dd: (
      <>
        <p>
          <strong>Software Engineering Intern, Moogsoft</strong>
        </p>
        <p>
          Wrangled JavaScript charting libraries and helped optimize web app
          bundling and build performance for the new cloud-based AIOps platform.
        </p>
      </>
    ),
  },
  {
    key: 'menlo',
    dt: '2019—2020',
    dd: (
      <>
        <p>
          <strong>Software Engineer in Test Intern, Menlo Security</strong>
        </p>
        <p>
          Developed an automated script to parse nightly test logs and update a
          spreadsheet for engineers to identity and fix flaky tests.
        </p>
      </>
    ),
  },
];

const Experience = () => (
  <DescriptionList title='Experience' items={EXPERIENCE} />
);

export default Experience;
