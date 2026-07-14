import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About"
      description="What Family Manual is, why it exists, and what it is not.">
      <main className={styles.aboutPage}>
        <div className="container">
          <div className={styles.aboutContent}>

            <Heading as="h1">About Family Manual</Heading>
            <p className={styles.intro}>
              Thank you for being curious about the mission behind this site.
            </p>

            <section className={styles.section}>
              <Heading as="h2">Full Disclosure</Heading>
              <p>
                Family Manual is a non-commercial, public-interest resource run by one person.
                This site must not be considered legal or financial advisory, or an official government resource,
                and nothing on this site constitutes legal or financial advice.
              </p>
              <p>
                All content is compiled from publicly available official sources. This
                includes government portals, circulars, and statutory documents. The
                intention is solely to help individuals understand administrative
                procedures in plain language. It does not substitute for professional
                legal, or financial counsel.
              </p>
              <p>
                Family Manual makes no representations or warranties regarding the
                accuracy, completeness, or timeliness of information on this site.
                Procedures, forms, and requirements change over time. While the site will remain as updated possible, always verify with the
                relevant authority before acting. Family Manual accepts no liability
                for outcomes arising from reliance on content published here.
              </p>
              <p>
                If you spot an error or outdated information, please write to us so
                we can correct it promptly.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Objective</Heading>
              <p>
                Family Manual was built from observing a very simple gap: the administrative
                and legal responsibilities that follow the death of a loved one are guaranteed to affect
                every person. Most people encounter them for the first time in the
                middle of grief with no preparation or adequate guidance.
              </p>
              <p>
                The goal is simple: one consolidated post-mortem resource where any Indian family can find
                step-by-step guidance on death registration, succession,
                bank and insurance claims, pension and EPF, and property transfer processes
                without having to immediately consult a lawyer, a CA, or a family connection who happens to
                know the system, or might exploit your lack of awareness for these services.
              </p>
              <p>
                Family Manual is not affiliated with any government body, legal firm,
                or commercial service. It exists purely in the public interest, and
                it always will be.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Who Built This</Heading>
              <p>
                Family Manual is an independent project built and maintained by one
                person. It is a free, self-funded effort, built solely to bridge a very
                real gap that every individual would face.
              </p>
              <p>
                To connect, flag an error, or contribute, reach out via the contact
                link in the footer.
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}