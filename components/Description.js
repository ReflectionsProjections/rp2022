import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from './Section';
import { Button } from '@mui/material';
import { useStyles } from './DescriptionStyles.js'

/* Description Section Styling */
// const AboutSection = ({ children }) => <div className="pb-4">{children}</div>;

// AboutSection.Title = ({ children }) => (
//   <h3 className={classes.title}>{children}</h3>
// );

// AboutSection.Body = ({ children }) => <p className={classes.body}>{children}</p>;

export default function Description() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerBox}>
          <img src="/rp22-logo.png" alt="Reflections Projections Logo" className={classes.logo} />
          <Typography className={classes.header}>September 20 - 25, 2022</Typography>
        </div>
        <div className={classes.content}>
          <Typography className={classes.text}>
            Reflections | Projections is the largest student run technology conference in the midwest, held annually at
            the University of Illinois at Urbana-Champaign.
            <br></br>
            <br></br>
            Register for the event!
          </Typography>


          <Button variant='contained'
            className={classes.button}
            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', disabled: true }}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
