import React from 'react';
import { Button, Typography } from '@mui/material';
import { useStyles } from './AboutStyles.js'
import { StylesContext } from '@mui/styles';

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerBox}>
          <img src="/rp22-logo.png" alt="Reflections Projections Logo" className={classes.logo} />
          <Typography className={classes.header}>September 26 - 30, 2022</Typography>
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
