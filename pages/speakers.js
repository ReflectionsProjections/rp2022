import Speaker from '../components/Speaker';
import { Element } from 'react-scroll';
// import Nav from '../components/ui/Nav';
import useGetStaticData from '../services/useGetStaticData';
import Head from 'next/head';
import Header from '../components/ui/Header';
import AvatarCard from '../components/ui/AvatarCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useStyles } from './speakerStyles.js';


export default function Speakers() {
  const { isLoaded, rpData } = useGetStaticData();
  const { speakerSection } = rpData;
  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/*<Nav />*/}
      {isLoaded && (
        <Box className={classes.container}>
          <Typography className={classes.title}>Speakers</Typography>
          <Box>
            <Grid container spacing={1} columns={24}>
              {speakerSection.list.map((speaker) => {
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
              })}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}
