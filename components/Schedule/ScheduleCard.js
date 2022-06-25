import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventCard from './EventCard.js';
import { useStyles } from './ScheduleCardStyles.js';

export default function ScheduleCard({ data }) {
    const classes = useStyles();

    return(
        <>
            {data.length > 0 &&
                (data.map(({ day, date, schedule }) => (
                <Box className={classes.container}>
                    <Box className={classes.dateBox}>
                            <Typography className={classes.day}>{day}</Typography>
                            <Typography className={classes.date}>{date}</Typography>
                    </Box>

                    <Box className={classes.card}>
                        {schedule.length > 0 
                            ? (schedule.map(({ eventId, startTime, endTime, title, description }) => (
                            <EventCard 
                                key={eventId} 
                                startTime={startTime} 
                                endTime={endTime}
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
                )))
            }
        </>
    )
}
