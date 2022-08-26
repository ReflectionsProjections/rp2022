import { Button, Link, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './AboutStyles.js';

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

          {/* <Link key="register_description" href={"https://docs.google.com/forms/d/e/1FAIpQLScwJ8LUYJEkTLZSNS7uGVm63E-hrQH2Snqocp2zUcWuS8dF2w/viewform"} passHref>
            <a rel="noreferrer" style={{
                textDecoration: 'none',
                color: '#fff'
            }}> */}
              <Button variant='contained'
                href="https://forms.gle/58NF85zHMjhj3nGR6" target="_blank"
                className={classes.button}
                style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', disabled: true }}>
                Register
              </Button>
            {/* </a> */}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
