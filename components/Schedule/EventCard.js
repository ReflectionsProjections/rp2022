import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from './EventCardStyles.js';

const getFontSize = (textLength) => {
    var w = window.innerWidth;
    const baseSize = 32
    if (textLength >= 30) {
        baseSize = 24
    } else if (textLength >= 40) {
        baseSize = w > 900 ? 24 : 16
    }
    const fontSize = baseSize
    return `${fontSize}px`
}

export default function EventCard({ startTime, endTime, title, description, location }) {
    const classes = useStyles();
    startTime = startTime === "00:00 AM" && endTime !== "00:00 AM" ? "Midnight" : startTime;
    endTime = endTime === "00:00 AM" && startTime !== "00:00 AM" ? "Midnight" : endTime;

    return (
        <>
            <Box className={classes.card}>
                <Box className={classes.headerBox}>
                    <div className={classes.dot}></div>
                    {(startTime === "00:00 AM" && endTime === "00:00 AM") ? (
                        <Typography className={classes.time}>All Day</Typography>) :
                        (<Typography className={classes.time}>
                            {location.length === 0 ? `${startTime} - ${endTime}` : `${startTime} - ${endTime} | ${location}`}
                        </Typography>)
                    }
                </Box>

                <Box className={classes.textBox}>
                    <Typography className={classes.title} sx={{fontSize: (getFontSize(title.length))}}>{title}</Typography>
                    <Typography className={classes.description}>{description}</Typography>
                </Box>
            </Box>
        </>
    )
}
