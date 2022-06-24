import React from 'react';

import Container from 'react-bootstrap/Container';
import Section from '../Section';

import AvatarCard from '../ui/AvatarCard';
import SpeakerCard from './components/SpeakerCard';

import Grid from "@mui/material/Grid";
import styles from './Speaker.module.scss';

const Speaker = ({ speakers }) => {
  return (
    <div className={styles.speakerSection}>
      <Section>
        <Section.Header>
          <Section.Title>Speakers</Section.Title>
        </Section.Header>
        <Section.Body>
          <Container>
          <Grid container>
            {speakers.length === 0 ? (
              <h4>Coming Soon...</h4>
            ) : (
              <>
                {speakers.map((speaker) => {
                  const { name, tagline, badge, bio, image } = speaker;
                  const imageURL = `${image}`;
                  return (
                    <div className={styles.speakerCardContainer} sm={12} md={6}>
                      <Grid item m={4}>
                      <AvatarCard 
                      img = {imageURL}
                      title = {name}
                      description = {bio} />
                      </Grid>
                      {/* <SpeakerCard
                        name={name}
                        cardImage={imageURL}
                        tagline={tagline}
                        badge={badge}
                        key={speaker.name}
                        bio={bio}
                      /> */}
                    </div>
                  );
                })}
              </>
            )}
            </Grid>
          </Container>
        </Section.Body>
      </Section>
    </div>
  );
};

export default Speaker;
