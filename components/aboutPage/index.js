import { Grid, Box, Typography } from '@mui/material';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

import AvatarCard from '../ui/AvatarCard';
// import SpeakerCard from './components/SpeakerCard';

const About = () => {
  return (
    <Box>

        {/* Section 1 */}
        
        <Box>
            <Typography variant="h4">What is Reflections | Projections?</Typography>
        </Box>
        <Box>
            <Typography variant="body1">
                Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign.

                We draw students, speakers, and companies from around the world. Join us to listen to tech talks from across the industry, to participate in an Artificial Intelligence programming competition in Mechmania, to solve puzzles throughout the conference during PuzzleBang!, and to attend our job and startup fairs.

                The conference is free and open to anyone regardless of age, major, job, or affiliation with the University of Illinois. So come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
            </Typography>
        </Box>

        {/* Section 2 */}

        <Box>
            <Typography variant="h4">Our Team</Typography>
        </Box>
        <Box>
            <Typography variant="body1">We are students passionate about technology who embody the diversity and excellence inherent at the University of Illinois at Urbana-Champaign. We bring industry and academia into one conference to incite the spread of novel ideas. We connect students with professional opportunities. We host a one of a kind AI hackathon. And, we can't wait for you to come to R|P 2022!</Typography>
        </Box>

        {/* Section 3 */}

        <Box>
            <Typography variant="h4">Special Events</Typography>
        </Box>
        <Grid container>
            <Grid item xs={6}> 
                <AvatarCard></AvatarCard>
            </Grid>
            <Grid item xs={6}>
                <AvatarCard></AvatarCard>
            </Grid>
                <AvatarCard></AvatarCard>
            <Grid item xs={6}>
                <AvatarCard></AvatarCard>
            </Grid>
        </Grid>

        {/* Section 4 */}
        <Box>
            <Typography variant="h4">FAQ</Typography>
        </Box>

        {/* Four buttons in a row */}
        <Grid container>
            <Grid item xs={6}>
                <Button variant="contained" color="primary">General</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary">Conference Format</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary">MechMania</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary">PuzzleBang</Button>
            </Grid>
        </Grid>

        {/* Section 5 - Four FAQ Sections*/}
        <Box>
            <div class="outer">
                <div class="inner">1</div>
                <div class="inner">2</div>
                <div class="inner">3</div>
                <div class="inner">4</div>
            </div>
        </Box>

    </Box>
  );
};

export default About;