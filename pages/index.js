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
                disableElevation disabled>
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
                    disableElevation disabled>
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
                    We bring industry and academia into one conference to incite the spread of novel ideas, connect students with professional opportunities, and host a one of a kind AI hackathon. This year’s conference marks the 28th edition of Reflections | Projections, and will be held from September 26-30.                   </Typography>
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
            Each year, we host a variety of speakers from leading roles in tech and <br></br>cutting-edge minds in research. We also host tech talks from companies at the <br></br> forefront of emerging technologies. <br></br>Check out our speaker schedule to find out more.
          </p>
          <div className={styles.bg}>
            <img className="bg-img"
              // style={{height: 560, width: 560, marginTop: 570,marginLeft: 760}}
              style={{ height: 560, width: 560, float: 'right', marginLeft: '50vw', marginRight: '20vw' }}
              src={"/resources/speaker.png"} alt="Speaker" />
          </div>
          <Container className={styles.container}>
            <Button variant='contained'
              className={styles.navButton2}
              disableElevation disabled>
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
