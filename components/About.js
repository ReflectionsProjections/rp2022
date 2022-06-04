import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import styles from './about.module.scss';
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
        <p className={classes.mainText}>
          Reflections|Projections is the largest technology conference in the midwest, held annually at
          the University of Illinois at Urbana-Champaign.
          <br></br>
          <br></br>
          Coming soon.
        </p>
        <Container className={classes.container}>
          <Button variant='contained'
            className={classes.navButton}
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF' }}>
            Learn More
          </Button>
          <Button variant='contained'
            className={classes.navButton}
            href='sponsor.pdf'
            target="_blank"
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF' }}>
            Sponsors
          </Button>
        </Container>
      </Col>
    </>
    // </Container>
  );
}
