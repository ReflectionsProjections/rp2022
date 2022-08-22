import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from './EventCardStyles.js';

export default function EventCard({ startTime, endTime, title, description, location }) {
    const classes = useStyles();
    return(
        <>
            <Box className={classes.card}>
                <Box className={classes.headerBox}>
                    <div className={classes.dot}></div>
                    <Typography className={classes.time}>{location.length === 0 ? `${startTime} - ${endTime}` : `${startTime} - ${endTime} | ${location}`}</Typography>
                </Box>

                <Box className={classes.textBox}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.description}>{description}</Typography>
                </Box>
            </Box>
        </>
    )
}
