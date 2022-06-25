import React from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useStyles } from './scheduleStyles';
// import classes from '../classes/Landing.module.scss';
import classes from './schedule.module.scss';

export default function Schedule() {
  const scheduleData = [
    [ 
      {
        day: "TUE",
        date: 20,
        schedule: [
          {
            eventId: 1,
            startTime: "12:00 AM",
            endTime: "12:0 AM",
            title: "Puzzlebang (all week)",
            description: "PuzzleBang.com",
          },
          {
            eventId: 2,
            startTime: "12:00 AM",
            endTime: "12:0 AM",
            title: "Puzzlebang (all week)",
            description: "PuzzleBang.com",
          },
          {
            eventId: 3,
            startTime: "12:00 AM",
            endTime: "12:0 AM",
            title: "Puzzlebang (all week)",
            description: "PuzzleBang.com",
          },
        ]
      },
    ],
    [
      {
        day: "WED",
        date: 21,
        schedule: [
          {
            eventId: 3,
            startTime: "12:00 AM",
            endTime: "12:0 AM",
            title: "Puzzlebang (all week)",
            description: "PuzzleBang.com",
          },
          {
            eventId: 4,
            startTime: "12:00 AM",
            endTime: "12:0 AM",
            title: "Puzzlebang (all week)",
            description: "PuzzleBang.com",
          },
        ]
      },
    ]
  ];

  const events = scheduleData.map((eventDay) => <ScheduleCard key={eventDay.date} data={eventDay} />);

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
            {events}
          </div>
        </div>
      </div>
    </>
  )
}
