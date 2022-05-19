import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';

export default function Header({ isHero }) {
    const small_logo = '/rp_logo_2022_sm.png';
    const small_logo_no_bg = '/rp_logo_2022_no_bg.png';
    const pagesData = [
        {
            label: 'About',
            href: '/'
        },
        {
            label: 'Schedule',
            href: '/schedule'
        },
        {
            label: 'Speakers',
            href: '/speakers'
        },
        {
            label: 'Sponsors',
            href: '/sponsors'
        },
    ];


    return (
        <>
            {/* <Box className={styles.headerBox}> */}
                <AppBar className={!isHero ? styles.hero : styles.header}>
                    
                    {/* <Toolbar className={styles.toolbar}> */}
                        <Grid container spacing={12} alignItems="center" display="flex">
                            <Grid item md={4} zeroMinWidth justifySelf="flex-start">
                                <div className={styles.logoBox}>
                                    <img src={small_logo} alt='2022 R|P Logo' className={styles.logo} />
                                </div>
                            </Grid>

                            <Grid item md={4}>
                                <div className={styles.pages}>
                                    {pagesData.map(({ label, href }, idx) => (
                                        <Link href={href} passHref>
                                            <a rel="noreferrer" className={styles.page} style={{order: {idx}}}>
                                                <Typography>
                                                    {label}
                                                </Typography>
                                            </a>
                                        </Link> 
                                    ))}
                                </div>
                            </Grid>
                            
                            <Grid item md={4}>
                                <div className={styles.navButtons}>
                                    <Button variant='contained' className={styles.navButton} style={{ backgroundColor: '#41798C', order: '0'}} disableElevation>
                                        Register
                                    </Button>

                                    <Button variant='contained' 
                                            className={styles.navButton} 
                                            style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', order: '1'}} disableElevation>
                                        Contact Us
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    {/* </Toolbar> */}
                </AppBar>
            {/* </Box> */}
        </>
    )
}
