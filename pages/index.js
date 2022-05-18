import Head from 'next/head';
import FAQ from '../components/FAQ';
import About from '../components/About';

import styles from '../styles/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import Nav from '../components/ui/Nav';
import Button from 'react-bootstrap/Button';
import Header from '../components/ui/Header';

export default function Index() {
  const { rpData } = useGetStaticData();
  const { faqSection, sponsors } = rpData;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Nav /> */}
      <Header />
      <div className={styles.landingContainer}>
       {/* <main className={styles.main}>
          <img src="/rp22-logo.png" alt="Reflections Projections Logo" />

          <a href="https://airtable.com/shrTGIqGrMhlD32NC">
            <Button>Register Now!</Button>
          </a>
        </main> */}

        <About name="about" />
        {/* <FAQ faqData={faqSection ?? { sections: [] }} />
        {sponsors && <SponsorSection sponsors={sponsors} />}

        <footer className={styles.footer}>
          Questions? Interested in sponsoring?&nbsp;
          <a
            href="mailto:contact@reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            Email us at contact [at] reflectionsprojections.org
          </a>
        </footer>

        <footer className={styles.footer}>
          Visit our old website&nbsp;
          <a
            href="https://2020.reflectionsprojections.org"
            rel="noopener noreferrer"
          >
            here
          </a>
        </footer> */}
      </div>
      <div className={styles.bg}>
        {/* <img class = "fixed-to-top" src="/resources/MiddleWhiteStrokeBackground.png" alt="White Stroke" /> 
        # How can I make this white line not take up document flow (space) */}
        <img class = "bg-img" src="/resources/BlueWavyBackground.png" alt="Blue Wavy Background" />
      </div>
    </>
  );
}
