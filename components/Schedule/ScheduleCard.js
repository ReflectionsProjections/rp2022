import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventCard from './EventCard.js';
import { useStyles } from './ScheduleCardStyles.js';

function getTime(timestamp) {
    var mTime = timestamp.split(" ")[1];
    var [hours, mins] = mTime.split(":");
    var timeOfDay = hours <= 12 ? "AM" : "PM";
    return `${hours <= 12 ? hours : hours - 12}:${mins} ${timeOfDay}`
}

export default function ScheduleCard({ data }) {
    const classes = useStyles();
    const key = data.key;

    var d = new Date(data.date);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = days[d.getDay()];
    const day = data.date.split("-")[1]

    const events = data.events;

    return (
        <>
            {data && events.length > 0 &&
                <Box className={classes.container}>
                    <Box className={classes.dateBox}>
                        <Typography className={classes.day}>{date}</Typography>
                        <Typography className={classes.date}>{day}</Typography>
                    </Box>

                    <Box className={classes.card}>
                        {events.length > 0
                            && (events.map(({ eventId, title, description, startDate, endDate, location }) => (
                                <EventCard
                                    key={eventId}
                                    startTime={getTime(startDate)}
                                    endTime={getTime(endDate)}
                                    title={title}
                                    description={description}
                                    location={location}
                                />
                            )))
                        }

                    </Box>
                </Box>
            }
            {events.length === 0 &&
                <h3 style={{textAlign: "center"}}>
                    No events found. Try changing the filters!
                </h3>
            }
        </>
    )
}
