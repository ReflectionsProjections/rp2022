import Head from 'next/head';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Section from '../components/Section';

import styles from '../styles/Landing.module.scss';
import useGetStaticData from '../services/useGetStaticData';
import SponsorSection from '../components/SponsorSection.js';
import Nav from '../components/ui/Nav';
import { Button, Typography } from '@mui/material';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer'
import { Google } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export default function Index() {
  const { rpData } = useGetStaticData();
  const { faqSection, sponsors } = rpData;

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
        {/* <Nav /> */}
        <Header isHero={true} />

        <div className={styles.landingContainer}>
          {/* <main className={styles.main}>
          <img src="/rp22-logo.png" alt="Reflections Projections Logo" />

          <a href="https://airtable.com/shrTGIqGrMhlD32NC">
            <Button>Register Now!</Button>
          </a>
        </main> */}

          <About name="about" />
        </div>


        {/* <div className={styles.backgroundBlue}></div>  */}
        <div className={styles.landingContainer}>
          <Col className={styles.mainCol}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <p className={styles.subheading2}>
              What is Reflections | Projections?
            </p>
            <p className={styles.diffBody}>
              Reflections | Projections is a tech conference organized and run by students at
              <br></br>the University of Illinois at Urbana-Champaign.

              <br></br>
              <br></br>

              We draw students, speakers, and companies from around the world. Join us to <br></br> listen to tech talks from across the industry, to participate in an Artificial <br></br> Intelligence programming competition in Mechmania, to solve puzzles <br></br>throughout the conference during PuzzleBang!, and to attend our job and <br></br>startup fairs.
              <br></br>
              <br></br>
              The conference is free and open to anyone regardless of age, major, job, or <br></br> affiliation with the University of Illinois. So come join a discussion led by some <br></br>of the brightest minds in the business about the bleeding edge of the tech <br></br> industry!
            </p>
            <Container className={styles.container}>

              <Button variant='contained'
                className={styles.navButton2}
                style={{ backgroundColor: '#41798C', disabled: true }} disableElevation>
                Learn more
              </Button>
              <br></br><br></br><br></br><br></br>
            </Container>

          </Col>



        </div>



        {/* <div className={styles.backgroundPinkBlock}> */}
        <div className={styles.backgroundPink}>
          {/* <Col className={styles.mainCol} style={{ display: 'flex' }}> */}
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.left}>
                {/* <div className={styles.scheduleContainer}> */}
                  <Typography className={styles.scheduleDesc1}>
                    Prepare for 5 days full of events and tech!
                  </Typography>
                  <Button variant='contained'
                    className={styles.navButton2}
                    style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
                    View schedule
                  </Button>
                {/* </div> */}
              </div>

              <div className={styles.middle}>
                {/* <div className={styles.lineContainer}> */}
                  <img className={styles.middleLine} src={"/resources/vertical_line.svg"} alt="line" />
                {/* </div> */}
              </div>

              <div className={styles.right}>
                {/* <div className={styles.scheduleContainer2}> */}
                  <Typography className={styles.scheduleDesc2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* </Col> */}
        </div>



        {/* <SponsorSection sponsors={sponsors}/> */}
        <Col className={styles.mainCol}>

          <p className={styles.subheading2}>
            Speakers
          </p>
          <p className={styles.diffBody}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud <br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo <br></br>consequat.
          </p>
          <div className={styles.bg}>
            <img className="bg-img"
              // style={{height: 560, width: 560, marginTop: 570,marginLeft: 760}}
              style={{ height: 560, width: 560, float: 'right', marginLeft: '50vw', marginRight: '20vw' }}
              src={"/resources/speaker.png"} alt="Speaker" />
          </div>
          <Container className={styles.container}>

            <Button variant='contained' disabled
              className={styles.navButton2}
              style={{ backgroundColor: '#41798C' }}>
              Learn more
            </Button>
          </Container>


        </Col>
        <Footer />
      </div>
      <div className={styles.bgFixed}>
        <img className="bg-img" src="/resources/Blue Curve.svg" alt="Blue Wavy Background" />
      </div>



      {/*  
    <div className={styles.bg}>

      <img className = "bg-img" 
      style={{ height: 893.94, width: 935, marginTop: 100, marginLeft: 745 }}
      
      src="/resources/Ripples.svg" alt="Radial circles" />
    </div> */}

      {/* <div>
      <div className={styles.bg}>
      <img className = "bg-img" 
        // style={{height: 560, width: 560, marginTop: 570,marginLeft: 760}}
        style={{height: 560, width: 560, marginTop: '100vw',marginLeft: 760}}
      src={"/resources/speaker.png"} alt="Speaker"/>
      </div>
      
    </div> */}

    </>
  );
}
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