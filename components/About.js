import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { View} from 'react-bootstrap';


import styles from '../styles/Landing.module.scss';
import Section from './Section';
import { Button } from '@mui/material';
import { useStyles } from './AboutStyles.js'
import { react } from '@babel/types';
import { padding } from '@mui/system';

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
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', disabled: true }}>
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
      
{/*       
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
            style={{ backgroundColor: '#41798C', disabled: true }}>
            Learn more
          </Button>
        </Container>
        
      </Col>
         
          
      <Col className={classes.mainCol}>

        <p className={classes.subheadingBold2}>
        Prepare for 5 days full of events and tech! 
        </p>
        
        
        <Container className={classes.container}>
          
          <Button variant='contained'
            className={classes.navButton2}
            style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
            View schedule
          </Button>
        </Container>

       
        
      </Col>
      
      
        
      <Col className={classes.mainCol}>

          <p className={classes.subheading2}>
            Speakers
          </p>
          <p className={classes.diffBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud <br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo <br></br>consequat.
          </p>
          <Container className={classes.container}>
            
            <Button variant='contained'
            
              className={classes.navButton2}
              style={{ backgroundColor: '#41798C', disabled: true }}>
              Learn more
            </Button>
          </Container>


      </Col> */}
      
    </>
    // </Container>
  );


}
