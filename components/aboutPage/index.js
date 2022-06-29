import { Button, Grid, Box, Typography } from '@mui/material';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

import AvatarCard from '../ui/AvatarCard';
// import SpeakerCard from './components/SpeakerCard';
import styles from './aboutPage.module.scss';

const aboutpage = () => {

    const ml = "6.3%";
    const textWidth = "57.4%";

  return (

    <Box>

        {/* Section 1 */}
        
        <Box ml={ml} mt={5} width={textWidth}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>What is Reflections | Projections?</Typography>
        </Box>
        <Box ml={ml} mt={5} width={textWidth}>
            <p className={styles.bodyText}>
                Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign.
                <br></br><br></br>
                We draw students, speakers, and companies from around the world. Join us to listen to tech talks from across the industry, to participate in an Artificial Intelligence programming competition in Mechmania, to solve puzzles throughout the conference during PuzzleBang!, and to attend our job and startup fairs.
                <br></br><br></br>
                The conference is free and open to anyone regardless of age, major, job, or affiliation with the University of Illinois. So come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
            </p>
        </Box>

        {/* Section 2 */}

        <Box ml={ml} mt={'100px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>Our Team</Typography>
        </Box>
        <Box ml={ml} mt={5} width={textWidth}>
            <p className={styles.bodyText}>
                We are students passionate about technology who embody the diversity and excellence inherent at the University of Illinois at Urbana-Champaign. We bring industry and academia into one conference to incite the spread of novel ideas. We connect students with professional opportunities. We host a one of a kind AI hackathon. And, we can't wait for you to come to R|P 2022!
            </p>
        </Box>

        {/* Section 3 */}

        <Box mt={10}>
            <Typography variant="h4">Special Events</Typography>
        </Box>
        <Grid container>
            <Grid item xs={6}> 
                <AvatarCard></AvatarCard>
            </Grid>
            <Grid item xs={6}>
                <AvatarCard></AvatarCard>
            </Grid>
            <Grid item xs={6}>
                <AvatarCard></AvatarCard>
            </Grid>
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

export default aboutpage;