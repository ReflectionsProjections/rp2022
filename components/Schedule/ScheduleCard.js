import React, { useState, useEffect } from 'react';
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
    const key = data[0];

    var d = new Date(data[1]);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = days[d.getDay()];
    const day = data[1].split("-")[1]

    const events = data[2];

    return(
        <>
            {data && data.length > 0 &&
                <Box className={classes.container}>
                    <Box className={classes.dateBox}>
                            <Typography className={classes.day}>{day}</Typography>
                            <Typography className={classes.date}>{date}</Typography>
                    </Box>

                    <Box className={classes.card}>
                        {events.length > 0 
                            ? (events.map(({ eventId, title, description, startDate, endDate }) => (
                            <EventCard 
                                key={eventId} 
                                startTime={getTime(startDate)} 
                                endTime={getTime(endDate)}
                                title={title}
                                description={description}
                            />
                        )))
                        : (<EventCard 
                                key={0}
                                startTime="N/A" 
                                endTime="N/A" 
                                title="No Events Scheduled for Today..."
                                description=""
                            />
                        )
                        }
                        
                    </Box>
                </Box>
            }
        </>
    )
}
