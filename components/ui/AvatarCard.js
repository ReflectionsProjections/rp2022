import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useStyles } from './AvatarCardStyles.js';

export default function AvatarCard({ img, title, description }) {
    const classes = useStyles();
    return(
        <>
            <Box className={classes.card}>
                {/* <Avatar
                    alt="image"
                    src={img}
                    className={classes.avatar}
                /> */}
                {img.length !== 0 && 
                <Avatar
                alt="image"
                src={img}
                className={classes.avatar}
                />}

                <Box className={classes.textContainer}>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>

                    <Typography className={classes.description}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
