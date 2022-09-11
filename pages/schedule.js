import { React, useState, useEffect } from 'react';
import Header from '../components/ui/Header';
import ScheduleCard from '../components/Schedule/ScheduleCard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Head from 'next/head';
import useGetStaticData from '../services/useGetStaticData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useStyles } from '../styles/scheduleStyles';



function getDayOfWeek(calendarDate) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var dt = new Date(calendarDate);
  return days[dt.getDay()];
}

const filterEvents = (events, day, type) => {
  if (!Array.isArray(events)) {
    return [];
  }

  if (day === '') { return events };
  if (type === 'all') { type = '' };

  var daysOfWeek = events
    .filter((eventDay) => (day !== '' ? getDayOfWeek(eventDay.date) === day : true))[0];

  var eventTypes = daysOfWeek.events
    .filter((event) => (type !== '' ? event.type === type : true))

  var filteredEvents = [{
    key: daysOfWeek.key,
    date: daysOfWeek.date,
    events: eventTypes
  }];

  return filteredEvents
};



export default function Schedule() {
  const { isLoaded, rpData } = useGetStaticData();
  const { events } = rpData;

  const [selectedType, setSelectedType] = useState('all');
  const handleSelectType = value => {
    typeof (value) != "string" ? setSelectedType(value.target.value) : setSelectedType(value);
  };

  const [selectedDay, setSelectedDay] = useState('');
  const handleSelectDay = value => {
    if (typeof (value) != "string") {
      var day = value.target.value;
      value === selectedDay ? setSelectedDay('') : setSelectedDay(day);
    } else {
      value === selectedDay ? setSelectedDay('') : setSelectedDay(value);
    }
  };

  function clearFilters() {
    setSelectedDay('');
    setSelectedType('all');
  }

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

          <div className={classes.schedulePageContainer}>
            <div className={classes.headerBox}>
              <Typography className={classes.scheduleTitle}>Schedule</Typography>


              <div className={classes.buttons}>
                <div className={classes.buttonContainer}>
                  <Button className={selectedDay === 'Monday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Monday')}>
                    <Typography className={classes.dayFont}>Monday</Typography>
                  </Button>
                  <Button className={selectedDay === 'Tuesday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Tuesday')}>
                    <Typography className={classes.dayFont}>Tuesday</Typography>
                  </Button>
                  <Button className={selectedDay === 'Wednesday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Wednesday')}>
                    <Typography className={classes.dayFont}>Wednesday</Typography>
                  </Button>
                  <Button className={selectedDay === 'Thursday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Thursday')}>
                    <Typography className={classes.dayFont}>Thursday</Typography>
                  </Button>
                  <Button className={selectedDay === 'Friday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Friday')}>
                    <Typography className={classes.dayFont}>Friday</Typography>
                  </Button>
                  <Button className={selectedDay === 'Saturday' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectDay('Saturday')}>
                    <Typography className={classes.dayFont}>Saturday</Typography>
                  </Button>
                </div>

                <div className={classes.buttonContainer}>
                  <Button className={selectedType === 'conference' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectType('conference')}>
                    <Typography className={classes.dayFont}>Conference</Typography>
                  </Button>
                  <Button className={selectedType === 'all' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectType('all')}>
                    <Typography className={classes.dayFont}>All Events</Typography>
                  </Button>
                  <Button className={selectedType === 'corporate' ? classes.dayButtonFilled : classes.dayButton} disableRipple onClick={() => handleSelectType('corporate')}>
                    <Typography className={classes.dayFont}>Corporate</Typography>
                  </Button>
                </div>
              </div>

              <div className={classes.mobileButtonContainer} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="select-day">Day</InputLabel>
                  <Select
                    labelId="select-day"
                    id="day"
                    value={selectedDay}
                    label="Day"
                    onChange={handleSelectDay}
                  >
                    <MenuItem key={0} value={'Monday'}>Monday</MenuItem>
                    <MenuItem key={1} value={'Tuesday'}>Tuesday</MenuItem>
                    <MenuItem key={2} value={'Wednesday'}>Wednesday</MenuItem>
                    <MenuItem key={3} value={'Thursday'}>Thursday</MenuItem>
                    <MenuItem key={4} value={'Friday'}>Friday</MenuItem>
                    <MenuItem key={5} value={'Saturday'}>Saturday</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="select-type">Event Type</InputLabel>
                  <Select
                    labelId="select-type"
                    id="type"
                    value={selectedType}
                    label="Type"
                    onChange={handleSelectType}
                  >
                    <MenuItem key={6} value={'all'}>All Events</MenuItem>
                    <MenuItem key={7} value={'conference'}>Conference Events</MenuItem>
                    <MenuItem key={8} value={'corporate'}>Corporate Events</MenuItem>
                  </Select>
                </FormControl>
                <Button onClick={clearFilters} className={classes.dayButton}>Clear Filters</Button>
              </div>
            </div>

            <div className={classes.eventsContainer}>
              {isLoaded && (
                filterEvents(events, selectedDay, selectedType).map((eventDay) =>
                  <div className={classes.ev}>
                    <ScheduleCard key={eventDay.eventID} data={eventDay} />
                  </div>
                ))}
            </div>
          </div>
      </div>
    </>
  )
}
