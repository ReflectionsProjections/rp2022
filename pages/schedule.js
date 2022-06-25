import React from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useStyles } from './scheduleStyles';

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
      <Box className={classes.background}>
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
        <Box>
          <Box className={classes.headerBox}>
            <Typography className={classes.scheduleTitle}>Schedule</Typography>
            <Typography className={classes.scheduleDescription}>5 days full of events and tech!</Typography>
          </Box>

          <Box className={classes.eventsContainer}>
            {events}
          </Box>
        </Box>
      </Box>
    </>
  )
}
