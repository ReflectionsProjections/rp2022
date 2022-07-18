import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import { Button } from '@mui/material';
import { useStyles } from './AboutStyles.js'

/* About Section Styling */
// const AboutSection = ({ children }) => <div className="pb-4">{children}</div>;

// AboutSection.Title = ({ children }) => (
//   <h3 className={classes.title}>{children}</h3>
// );

// AboutSection.Body = ({ children }) => <p className={classes.body}>{children}</p>;

export default function About() {
  const classes = useStyles();
  // <Container className={classes.aboutSection}>

  return (
    
    <>
    
      <Col className={classes.mainCol}>
        <img src="/rp22-logo.png" alt="Reflections Projections Logo" className={classes.logo} />
        <p className={classes.subheadingBold}>
        September 20 - 25, 2022
        </p>
        <p className={classes.mainText}>
          Reflections | Projections is the largest student run technology conference in the midwest, held annually at
          the University of Illinois at Urbana-Champaign.
          <br></br>
          <br></br>
          Register for the event!
        </p>
        <Container className={classes.container}>
          
          <Button variant='contained'
            className={classes.navButton}
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF' }}>
            Register
          </Button>
          {/*  
          <Button variant='contained'
            className={classes.navButton}
            href='sponsor.pdf'
            target="_blank"
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF' }}>
            Sponsors
          </Button>
          */}
        </Container>
      </Col>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      
      
      <Col className={classes.mainCol}>

        <p className={classes.subheading2}>
        What is Reflections | Projections?
        </p>
        <p className={classes.diffBody}>
        Reflections | Projections is a tech conference organized and run by students at  
        <br></br>the University of Illinois at Urbana-Champaign. 

        <br></br>
          <br></br>
       
        We draw students, speakers, and companies from around the world. Join us to <br></br> listen to tech talks from across the industry, to participate in an Artificial <br></br> Intelligence programming competition in Mechmania, to solve puzzles <br></br>throughout the conference during PuzzleBang!, and to attend our job and <br></br>startup fairs. 
          <br></br>
          <br></br>
          The conference is free and open to anyone regardless of age, major, job, or <br></br> affiliation with the University of Illinois. So come join a discussion led by some <br></br>of the brightest minds in the business about the bleeding edge of the tech <br></br> industry!
        </p>
        <Container className={classes.container}>
          
          <Button variant='contained'
            className={classes.navButton2}
            style={{ backgroundColor: '#41798C' }}>
            Learn more
          </Button>
        </Container>
        
      </Col>

      <Col className={classes.mainCol}>

        <p className={classes.subheadingBold2}>
        Prepare for 5 days full of events and tech!
        </p>
        <p className={classes.diffBody}>
        Reflections | Projections is a tech conference organized and run by students at  
        <br></br>the University of Illinois at Urbana-Champaign. 

        <br></br>
          <br></br>
       
        We draw students, speakers, and companies from around the world. Join us to <br></br> listen to tech talks from across the industry, to participate in an Artificial <br></br> Intelligence programming competition in Mechmania, to solve puzzles <br></br>throughout the conference during PuzzleBang!, and to attend our job and <br></br>startup fairs. 
          <br></br>
          <br></br>
          The conference is free and open to anyone regardless of age, major, job, or <br></br> affiliation with the University of Illinois. So come join a discussion led by some <br></br>of the brightest minds in the business about the bleeding edge of the tech <br></br> industry!
        </p>
        <Container className={classes.container}>
          
          <Button variant='contained'
            className={classes.navButton2}
            style={{ backgroundColor: '#41798C' }}>
            View schedule
          </Button>
        </Container>

       
        
      </Col>
      
      

      <Col className={classes.mainCol}>

<p className={classes.subheading2}>
Speakers
</p>
<p className={classes.diffBody}>
Reflections | Projections is a tech conference organized and run by students at  
<br></br>the University of Illinois at Urbana-Champaign. 

<br></br>
  <br></br>

We draw students, speakers, and companies from around the world. Join us to <br></br> listen to tech talks from across the industry, to participate in an Artificial <br></br> Intelligence programming competition in Mechmania, to solve puzzles <br></br>throughout the conference during PuzzleBang!, and to attend our job and <br></br>startup fairs. 
  <br></br>
  <br></br>
  The conference is free and open to anyone regardless of age, major, job, or <br></br> affiliation with the University of Illinois. So come join a discussion led by some <br></br>of the brightest minds in the business about the bleeding edge of the tech <br></br> industry!
</p>
<Container className={classes.container}>
  
  <Button variant='contained'
    className={classes.navButton2}
    style={{ backgroundColor: '#41798C' }}>
    Learn more
  </Button>
</Container>

</Col>
    </>
    // </Container>
  );
}
