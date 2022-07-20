import React from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useStyles } from './scheduleStyles';
import useGetStaticData from '../services/useGetStaticData';

export default function Schedule() {
  const { isLoaded, rpData } = useGetStaticData();
  const { events } = rpData;
  
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
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
        <Header isHero={false} />
        <div>
          <div className={classes.headerBox}>
            <Typography className={classes.scheduleTitle}>Schedule</Typography>
            <Typography className={classes.scheduleDescription}>5 days full of events and tech!</Typography>
          </div>

          <div className={classes.eventsContainer}>
            {isLoaded && (
              events.map((eventDay) => <ScheduleCard key={eventDay.date} data={Object.values(eventDay)} />)
            )}
          </div>
        </div>
      </div>
    </>
  )
}
