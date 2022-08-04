import React from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

        <Header />

        <div className={classes.schedulePageContainer}>
          <div className={classes.headerBox}>
            <Typography className={classes.scheduleTitle}>Schedule</Typography>
            <div className={classes.buttonContainer}>
              <Button className={classes.dayButton} href='#09-26-2022' disableRipple>
                <Typography className={classes.dayFont}>Monday</Typography>
              </Button>
              <Button className={classes.dayButton} href='#09-27-2022' disableRipple>
                <Typography className={classes.dayFont}>Tuesday</Typography>
              </Button>
              <Button className={classes.dayButton} href='#09-28-2022' disableRipple>
                <Typography className={classes.dayFont}>Wednesday</Typography>
              </Button>
              <Button className={classes.dayButton} href='#09-29-2022' disableRipple>
                <Typography className={classes.dayFont}>Thursday</Typography>
              </Button>
              <Button className={classes.dayButton} href='#09-30-2022' disableRipple>
                <Typography className={classes.dayFont}>Friday</Typography>
              </Button>
            </div>
          </div>

          <div className={classes.eventsContainer}>
            {isLoaded && (
              events.map((eventDay) =>
                <div>
                  <span className={classes.anchor} id={eventDay.date}></span>
                  <div >
                    <ScheduleCard key={eventDay.key} data={Object.values(eventDay)} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
