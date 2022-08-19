import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from './SponsorCardStyles.js';

export default function SponsorCard({ name, img, website }) {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.card}>
                <a href={website} target="_blank">
                    <img className={classes.sponsorImg} src={img} alt={name} />
                </a>
            </Box>
        </>
    )
}
