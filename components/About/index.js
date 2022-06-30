import { Button, Grid, Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails  } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

import AvatarCard from '../ui/AvatarCard';
import FAQAccordion from './components/FAQAccordion'

// import SpeakerCard from './components/SpeakerCard';
import styles from './about.module.scss';

const AboutPage = () => {

    const ml = "6.3%";
    const textWidth = "57.4%";

    const FAQdata = [
        {question:'Question 1',answer:'Answer 1'},
        {question:'Question 2',answer:'Answer 2'}
    ];

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

        <Box ml={'42.5vw'} mt={'100px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>Special Events</Typography>
        </Box>
        <Box ml={ml} mr={ml}>
          <Box>
            <Grid container spacing={1} columns={24}>
              {/* First Row */}
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 1"}
                    description={"Card 1 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 2"}
                    description={"Card 2 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 3"}
                    description={"Card 3 description"}
                  />
                </Paper>
              </Grid>

              {/* Second Row */}
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 1"}
                    description={"Card 1 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 2"}
                    description={"Card 2 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 3"}
                    description={"Card 3 description"}
                  />
                </Paper>
              </Grid>

              {/* Third Row */}
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 1"}
                    description={"Card 1 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 2"}
                    description={"Card 2 description"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://i.imgur.com/XqQZQZJ.jpg"}
                    title={"Card 3"}
                    description={"Card 3 description"}
                  />
                </Paper>
              </Grid>

              {/* {speakerSection.list.map((speaker) => {
                const { name, tagline, badge, bio, image } = speaker;
                const imageURL = `${image}`;
                return (
                  <Grid item md={8}>
                    <Paper>
                      <AvatarCard
                        img={imageURL}
                        title={name}
                        description={bio} />
                    </Paper>
                  </Grid>
                );
              })} */}
            </Grid>
          </Box>
        </Box>

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

        {/* Section 5 - Four FAQ Sections */}
        {/* TODO pass FAQ props in accordion */}
        <Box>
            <div class="outer">s
                <div class="inner">1</div>
                    <FAQAccordion FAQ={FAQdata}x/>
                <div class="inner">2</div>
                <div class="inner">3</div>
                <div class="inner">4</div>
            </div>
        </Box>

    </Box>
  );
};

export default AboutPage;