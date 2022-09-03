import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useStyles } from './SponsorsCardStyles.js';
import { IconButton } from '@mui/material';

export default function SponsorCard({ img, title, description, website }) {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.card}>
                <div className={classes.content}>
                    <div className={classes.imgContainer}>
                        <a href={website} target="_blank">
                            <img src={img} alt={name} className={classes.sponsorImg} />
                        </a>
                    </div>

                    <div className={classes.textContainer}>
                        <Typography className={classes.title}>
                            {title}
                        </Typography>

                        <Typography className={classes.description}>
                            {description}
                        </Typography>
                    </div>
                </div>
            </Box>
        </>
    )
}
