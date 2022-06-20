import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventCard from './EventCard.js';
import { useStyles } from './ScheduleCardStyles.js';

export default function ScheduleCard({ data }) {
    const classes = useStyles();
    return(
        <>
            <Box className={classes.card}>
                {data.length > 0 
                    ? (data.map(({ eventId, startTime, endTime, title, description }) => (
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
        </>
    )
}