import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import styles from './about.module.scss';
import { Button } from '@mui/material';

/* About Section Styling */
// const AboutSection = ({ children }) => <div className="pb-4">{children}</div>;

// AboutSection.Title = ({ children }) => (
//   <h3 className={styles.title}>{children}</h3>
// );

// AboutSection.Body = ({ children }) => <p className={styles.body}>{children}</p>;

const About = () => (
  // <Container className={styles.aboutSection}>
  <>
    <Col className={styles.mainCol}>
      <img src="/rp22-logo.png" alt="Reflections Projections Logo" className={styles.logo}/>
      <p  className={styles.mainText}>
          Reflections|Projections is the largest technology conference in the midwest, held annually at
          the University of Illinois at Urbana-Champaign.
      <br></br>
      <br></br>
      Coming soon.
      </p>
      <Container className={styles.container}>
        <Button variant='contained' 
                className={styles.navButton} 
                style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF'}}>
            Learn More
        </Button>
        <Button variant='contained'
                className={styles.navButton}
                href = 'sponsor.pdf'
                target = "_blank"
                style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF'}}>
                  Sponsors
                </Button>
      </Container>
    </Col>
  </>
  // </Container>
);

export default About;
