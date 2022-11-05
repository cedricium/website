import DescriptionList from 'components/DescriptionList';

const ExternalLink = ({ href, label }) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {label}
  </a>
);

const SOCIALS = [
  {
    key: 'twitter',
    dt: 'Twitter',
    dd: (
      <ExternalLink
        href='https://www.twitter.com/cedricamaya'
        label='@cedricamaya'
      />
    ),
  },
  {
    key: 'linkedin',
    dt: 'LinkedIn',
    dd: (
      <ExternalLink
        href='https://www.linkedin.com/cedricamaya'
        label='@cedricamaya'
      />
    ),
  },
  {
    key: 'github',
    dt: 'GitHub',
    dd: <ExternalLink href='https://github.com/cedricium' label='@cedricium' />,
  },
];

const Elsewhere = () => (
  <DescriptionList title='Around the Web' items={SOCIALS} />
);

export default Elsewhere;
