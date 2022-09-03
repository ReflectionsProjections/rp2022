import React from 'react';
import Header from '../components/ui/Header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Head from 'next/head';
import { useStyles } from '../styles/sponsorsStyles';
import useGetStaticData from '../services/useGetStaticData';
import SponsorsCard from '../components/Sponsors/SponsorsCard';
export default function Sponsors() {
    const { isLoaded, rpData } = useGetStaticData();
    const { sponsors } = rpData;

    const classes = useStyles();
    return (
        <>
            <div className={classes.background}>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>

                <Header isHero={false} />

                <div className={classes.pageContainer}>
                    <div className={classes.headerBox}>
                        <Typography className={classes.title}>Sponsors</Typography>
                    </div>

                    <div className={classes.sponsorsContainer}>
                        {isLoaded && (
                            sponsors.map(({ key, name, bio, img, website }) =>
                                <SponsorsCard key={key} img={img} title={name} description={bio} website={website}/>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
