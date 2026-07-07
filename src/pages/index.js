import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
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
          Paperwork doesn't pause when someone in your family passes away.
          This is a non-commercial, operational resource to help Indian families navigate 
          death registration, succession, bank accounts, insurance claims, pensions, EPF, and property transfers. 
          The intention is to keep this in plain language and easily understandable.
        </p>
      </div>
    </header>
  );
}

const topics = [
  {
    title: 'The First 24 Hours Post-Death: What to do',
    description: 'Emotions can overpower critical decision-making during such an event. Here is everything you need to know and do in the first 24 hours.',
    link: '/docs/24-hours',
  },
  {
    title: 'Death Registration',
    description: 'How to register a death with municipal authorities and obtain a death certificate.',
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
    description: 'Steps to claim bank accounts, fixed deposits, SEBI-registered investments, and life insurance after a death.',
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
      description="Free step-by-step guides for what to do after a death: registration, succession, legal heir, bank & insurance claims, pension, EPF, property transfer.">
      <Head>
        <meta
          property="og:description"
          content="The paperwork nobody explains when you're grieving — laid out simply, one step at a time."
        />
      </Head>
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