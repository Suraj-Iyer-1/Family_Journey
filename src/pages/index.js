import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          When someone in your family passes away, the paperwork doesn't wait.
          This is a free, non-commercial, operational guide to help Indian families navigate 
          death registration, succession, bank and insurance claims, pension and 
          EPF, and property transfer. The intention is to keep this in plain language and easily understandable.
        </p>
      </div>
    </header>
  );
}

const topics = [
  {
    title: 'Death Registration',
    description: 'How to register a death with municipal authorities and obtain the death certificate.',
    link: '/docs/death-registration',
  },
  {
    title: 'Wills & Succession',
    description: 'Understanding wills, intestate succession, and what happens to assets without a will.',
    link: '/docs/wills-succession',
  },
  {
    title: 'Legal Heir Process',
    description: 'How to obtain a legal heir certificate and establish succession rights.',
    link: '/docs/legal-heir-process',
  },
  {
    title: 'Bank & Insurance Claims',
    description: 'Steps to claim bank accounts, fixed deposits, and life insurance after a death.',
    link: '/docs/bank-insurance-claims',
  },
  {
    title: 'Pension & EPF',
    description: 'How to claim pension arrears, gratuity, and EPF death benefits.',
    link: '/docs/pension-epf',
  },
];

function TopicCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.topicCard)}>
      <Link to={link} className={styles.topicLink}>
        <div className={styles.topicCardInner}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A free guide to navigating administrative tasks after a death in India">
      <HomepageHeader />
      <main>
        <section className={styles.topicsSection}>
          <div className="container">
            <div className="row">
              {topics.map((topic) => (
                <TopicCard key={topic.title} {...topic} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}