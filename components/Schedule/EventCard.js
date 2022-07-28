import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from './EventCardStyles.js';

<<<<<<< HEAD
export default function EventCard({ startTime, endTime, title, description }) {
=======
export default function EventCard({startTime, endTime, title, description}) {
>>>>>>> e470039 (Created EventCard component)
    const classes = useStyles();
    return(
        <>
            <Box className={classes.card}>
                <Box className={classes.headerBox}>
                    <div className={classes.dot}></div>
                    <Typography className={classes.time}>{startTime} - {endTime}</Typography>
                </Box>

                <Box className={classes.textBox}>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography className={classes.description}>{description}</Typography>
                </Box>
            </Box>
        </>
    )
}
