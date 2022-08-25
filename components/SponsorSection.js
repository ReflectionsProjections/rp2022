import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './SponsorSection.module.scss';
import { useStyles } from './SponsorSectionStyles.js'
import SponsorCard from './Sponsor/SponsorCard';

const SponsorSection = ({ sponsors }) => {
  const classes = useStyles();

  if (!sponsors) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <>
      <div className={styles.bg}>
        <div className={classes.container}>
          <div className={classes.headerBox}>
            <Typography className={classes.header}>Sponsors</Typography>
            <Typography className={classes.text}>Over 40+ sponsors support Reflections | Projections</Typography>
          </div>
          <div className={classes.content}>
            <div className={classes.sponsors}>
              {sponsors.map(({ key, name, img, website }) =>
                <SponsorCard key={key} name={name} img={img} website={website} />
              )}
            </div>
            <Button variant='contained'
              className={classes.button}
              href='/sponsor'
              style={{ fontSize: '16px', backgroundColor: '#41798C', disabled: true }}>
              View All Sponsors
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorSection;