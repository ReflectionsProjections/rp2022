import { Button, Grid, Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

import AvatarCard from '../ui/AvatarCard';
import FAQAccordion from './components/FAQAccordion'

// import SpeakerCard from './components/SpeakerCard';
import styles from './about.module.scss';
import { pink } from '@mui/material/colors';

const AboutPage = () => {

    const ml = "6.3%";
    const textWidth = "57.4%";
    const pink = createTheme({
      palette: {
        primary: {
          main: "#DF6C57",
          light: "#FFC0CB",
          dark: "#B22222",
          contrastText: "#fff",
        },
      },
    });
    const [faqSection, setFaqSection] = useState("General");

    const FAQdataGeneral = [
        {question:'General Question 1',answer:'Answer 1'},
        {question:'General Question 2',answer:'Answer 2'}
    ];

    const FAQdataConference = [
      {question:'Conference Question 1',answer:'Answer 1'},
      {question:'Conference Question 2',answer:'Answer 2'}
    ];
    
    const FAQdataMechmania = [
      {question:'Mechmania Question 1',answer:'Answer 1'},
      {question:'Mechmania Question 2',answer:'Answer 2'}
    ];
    
    const FAQdataPuzzleBang = [
      {question:'Puzzle Bang Question 1',answer:'Answer 1'},
      {question:'Puzzle Bang Question 2',answer:'Answer 2'}
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

        
        {/* <Box ml={ml} mr={"18.9%"}>
          <Box ml={'29.5vw'} mt={'100px'}>
            <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>Special Events</Typography>
          </Box>
          <Box mt="30px">
            <Grid container spacing={1} columns={24}>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/370/370"}
                    title={"Career Fair"}
                    description={"Meet some of the best companies in the country"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/380/380"}
                    title={"Startup Fair"}
                    description={"Interact with hot new startups"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/390/390"}
                    title={"Speakers"}
                    description={"Come listen to some of the industry's best minds"}
                  />
                </Paper>
              </Grid>

              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/400/400"}
                    title={"Mech Mania"}
                    description={"Mechmania is our 24 hour AI hackathon that runs from Friday (9/21) - Saturday (9/22). Build your own AI bot to compete. The best part? No prior experience needed. This year’s Mechmania is sponsored by DeepScale!"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/410/410"}
                    title={"PuzzleBang"}
                    description={"Compete in a week-long puzzle contest hosted by two UIUC Alums to win exciting prizes. This year’s PuzzleBang is sponsored by IMO! Be sure to checkout our 2 pop-up escape rooms in Siebel on Saturday, 9/22!"}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/430/430"}
                    title={"ACM Symposium"}
                    description={"R|P 2018 is proud to introduce the first-ever installment of the ACM Symposium - a way for ACM chapters across the Midwest to network and interact by showcasing their project and research work."}
                  />
                </Paper>
              </Grid>

              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/440/440"}
                    title={"Alumni Social"}
                    description={"Head over to Murphy's after the ACM Symposium after the closing ceremony to interact and network with alumni, speakers and current students! It’s the perfect social to culminate the conference."}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/550/550"}
                    title={"Experiences"}
                    description={"Experiences are hybrid talks/workshops that not only help students learn the state of the art in fields ranging from distributed computing to machine learning but also make them approachable."}
                  />
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <AvatarCard
                    img={"https://loremflickr.com/480/480"}
                    title={"R|P Giveaway Contest"}
                    description={"Engage with R|P on our various social media platforms for a chance to win a Nintendo Switch, a Google Home Mini or an Amazon Echo Dot! Follow us on social media to learn more!"}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box> */}

        {/* Section 4 */}
        {/* <Box ml={'42.5vw'} mt={'100px'}>
          <Typography variant="h4" color={"#EE6350"} fontWeight={"700"}>FAQ</Typography>
        </Box> */}

        {/* Four buttons in a row */}
        {/* <Box ml={'20vw'} mt={'10px'}>
          <Grid container>
              <Grid item xs={1.55}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                  }}
                  onClick={() => {setFaqSection("General")}}
                  >General</Button>
              </Grid>
              <Grid item xs={2.5}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                  }}
                  onClick={() => {setFaqSection("Conference Format")}}
                  >Conference Format</Button>
              </Grid>
              <Grid item xs={1.7}>
                <Button 
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                  }}
                  onClick={() => {setFaqSection("Mechmania")}}
                  >MechMania</Button>
              </Grid>
              <Grid item xs={1.8}>
                <Button variant="outlined"
                  sx={{
                    borderRadius: "50px",
                  }}
                  onClick={() => {setFaqSection("PuzzleBang")}}
                  >PuzzleBang</Button>
              </Grid>
          </Grid>
        </Box> */}
        {/* Section 5 - Four FAQ Sections */}
        {/* TODO pass FAQ props in accordion */}
        {/* <Box ml={ml} mt={'30px'}>
          { faqSection == "General" && <FAQAccordion FAQ={FAQdataGeneral}/>}
          { faqSection == "Conference Format" && <FAQAccordion FAQ={FAQdataConference}/>}
          { faqSection == "Mechmania" && <FAQAccordion FAQ={FAQdataMechmania}/>}
          { faqSection == "PuzzleBang" && <FAQAccordion FAQ={FAQdataPuzzleBang}/>}
        </Box> */}

    </Box>
  );
};

export default AboutPage;