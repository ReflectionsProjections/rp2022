import React from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useStyles } from './scheduleStyles';
import useGetStaticData from '../services/useGetStaticData';

export default function Schedule() {
  const { isLoaded, rpData } = useGetStaticData();
  const { events } = rpData;
  // const scheduleData = [
  //   {
  //     "key": 1,
  //     "date": "09-24-2022",
  //     "events": [
  //       {
  //         "eventID": "event1",
  //         "title": "Event 1",
  //         "description": "Description for event 1",
  //         "startDate": "09-24-2022 8:00",
  //         "endDate": "09-24-2022 9:00"
  //       },
  //       {
  //         "eventID": "event2",
  //         "title": "Event 2",
  //         "description": "Description for event 2",
  //         "startDate": "09-24-2022 9:00",
  //         "endDate": "09-24-2022 10:00"
  //       }
  //     ]
  //   },
  //   {
  //     "key": 2,
  //     "date": "09-25-2022",
  //     "events": [
  //       {
  //         "eventID": "event3",
  //         "title": "Event 3",
  //         "description": "Description for event 3",
  //         "startDate": "09-25-2022 8:00",
  //         "endDate": "09-25-2022 9:00"
  //       },
  //       {
  //         "eventID": "event4",
  //         "title": "Event 4",
  //         "description": "Description for event 4",
  //         "startDate": "09-25-2022 9:00",
  //         "endDate": "09-25-2022 10:00"
  //       }
  //     ]
  //   }
  // ]

  // console.log(scheduleData[0]);
  // console.log(scheduleData[0].length);

  // const events = scheduleData.map((eventDay) => <ScheduleCard key={eventDay.date} data={eventDay} />);
  
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
        {/* <div className={classes.pageContainer}> */}
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
