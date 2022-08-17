import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import styles from './SponsorSection.module.scss';
import SponsorCard from './Sponsor/SponsorCard';

const SponsorSection = ({ sponsors }) => {
  if (!sponsors) {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.headerBox}>
            <Typography className={styles.header}>Sponsors</Typography>
            <Typography className={styles.text}>Over 40+ sponsors support Reflections | Projections</Typography>
          </div>
          <div className={styles.content}>
            <div className={styles.sponsors}>
              {sponsors.map(({ key, name, img, website }) =>
                <SponsorCard key={key} name={name} img={img} website={website} />
              )}
            </div>
            <Button variant='contained'
              className={styles.button}
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
