import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';

export default function Header() {
    const small_logo = '/rp_logo_2022_sm.png';
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
            <AppBar className={styles.header}>
                <Toolbar>
                <Grid container spacing={3} alignItems="center" justifyContent="space-between" display="flex">
                    <Grid item md={4} zeroMinWidth justifySelf="flex-start">
                    {/* <div className={styles.frame4}> */}
                        <div className={styles.logoBox}>
                            <img src={small_logo} alt='2022 R|P Logo' className={styles.logo} />
                        </div>
                    </Grid>

                    <Grid item md={4}>
                        <div className={styles.pages}>
                            {pagesData.map(({ label, href }) => (
                                <Link href={href} passHref>
                                    <a rel="noreferrer" className={styles.page}>
                                        <Typography>
                                            {label}
                                        </Typography>
                                    </a>
                                </Link> 
                            ))}
                        </div>
                    </Grid>
                    {/* </div> */}
                    
                    <Grid item md={4} zeroMinWidth>
                        <div className={styles.navButtons}>
                            <Button variant='contained' className={styles.navButton} style={{ backgroundColor: '#41798C'}}>
                                Register
                            </Button>

                            <Button variant='contained' 
                                    className={styles.navButton} 
                                    style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF'}}>
                                Contact Us
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}