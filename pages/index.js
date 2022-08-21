import Head from 'next/head';
import About from '../components/About';

import styles from '../styles/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import { Button, Typography } from '@mui/material';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer'


export default function Index() {
  const { rpData } = useGetStaticData();
  console.log(rpData)
  const { sponsors } = rpData;

  return (
    <>
      <div className={styles.backgroundRed} >
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

        <Header isHero={true} />

        <div className={styles.landingContainer}>
          <About name="about" />



          <div className={styles.aboutContainer}>
            <Typography className={styles.aboutHeader}>
              What is Reflections | Projections?
            </Typography>

            <div className={styles.aboutContent}>
              <Typography className={styles.aboutText}>
                Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign.
                <br></br>
                <br></br>
                We draw students, speakers, and companies from around the world. Join us to listen to tech talks from across the industry, to participate in an Artificial Intelligence programming competition in Mechmania, to solve puzzles throughout the conference during PuzzleBang!, and to attend our job and startup fairs.
                <br></br>
                <br></br>
                The conference is free and open to anyone regardless of age, major, job, or affiliation with the University of Illinois. So come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
              </Typography>

              <Button variant='contained'
                className={styles.navButton}
                href=''
                style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
                Learn More
              </Button>
            </div>
          </div>



          <div className={styles.scheduleContainer}>
            <div className={styles.scheduleContent}>
              <div className={styles.scheduleLeft}>
                <Typography className={styles.scheduleHeader}>
                  Prepare for 5 days full of events and tech!
                </Typography>
                <Button variant='contained'
                  className={styles.navButton}
                  href='/schedule'
                  style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
                  View Schedule
                </Button>
              </div>
              <img className={styles.scheduleLine} src={"/resources/vertical_line.svg"} alt="line" />
              <div className={styles.scheduleRight}>
                <Typography className={styles.scheduleText}>
                  We bring industry and academia into one conference to incite the spread of novel ideas, connect students with professional opportunities, and host a one of a kind AI hackathon. This year’s conference marks the 28th edition of Reflections | Projections, and will be held from September 26-30.
                </Typography>
              </div>
            </div>
          </div>



          <div className={styles.speakersContainer}>
            <div className={styles.speakersSection}>
              <Typography className={styles.speakersTitle}>Speakers</Typography>
              <div className={styles.speakersContent}>
                <Typography className={styles.speakersText}>
                  Each year, we host a variety of speakers from leading roles in tech and innovations and cutting-edge minds in research. We also host tech talks from companies at the forefront of emerging technologies. Check out our speaker schedule to find out more.
                </Typography>
                <Button variant='contained'
                  className={styles.navButton}
                  href='/speakers'
                  style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
                  View Speakers
                </Button>
              </div>
            </div>

            <img className={styles.speakersImg} src={"/resources/speaker.png"} alt="Speaker" />
          </div>
        </div>


        <SponsorSection sponsors={sponsors} />


        <Footer />
      </div>
      <div className={styles.bgFixed}>
        <img className="bg-img" src="/resources/Blue Curve.svg" alt="Blue Wavy Background" />
      </div>

    </>
  );
}