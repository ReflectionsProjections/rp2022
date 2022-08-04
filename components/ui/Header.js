import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Grid, Box, Container, Menu, MenuItem, IconButton, ClickAwayListener } from '@mui/material';
import { useStyles } from './HeaderStyles.js';
import { Squash as Hamburger } from 'hamburger-react';

export default function Header() {
    const classes = useStyles();
    const small_logo = '/rp_logo_2022_sm.png';
    const small_logo_no_bg = '/rp_logo_2022_no_bg.png';
    const red_curve = '/resources/red_curve.svg'
    const pagesData = [
        {
            label: 'About',
            href: '/'
        },
        {
            label: 'Schedule',
            // href: '/schedule'
            href: '/'
        },
        {
            label: 'Speakers',
            href: '/speakers'
            // href: '/'
        },
        {
            label: 'Sponsors',
            href: '/sponsor.pdf'
        },
    ];

    const [needsMenu, setNeedsMenu] = useState(null);

    const handleOpenMenu = (event) => {
        setNeedsMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setNeedsMenu(null);
    };

    return (
        <>
            <AppBar className={classes.header}>
                <img src={red_curve} className={classes.curve}/>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Link href="#" passHref>
                                <a rel="noreferrer">
                                    <img src={small_logo} alt='2022 R|P Logo' className={classes.logo} />
                                </a>
                            </Link>
                        </Box>

                        <Box className={classes.pages}>
                            {pagesData.map(({ label, href }) => (
                                <Link href={href} passHref>
                                    <a rel="noreferrer" className={classes.page}>
                                        <Typography>
                                            {label}
                                        </Typography>
                                    </a>
                                </Link>
                            ))}
                        </Box>

                        <Box component="span" m={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            className={classes.navButtons}>
                            <Button
                                variant='contained'
                                className={classes.navButton}
                                style={{ backgroundColor: '#41798C' }}
                                disableElevation>
                                Register
                            </Button>

                            <Button
                                variant='contained'
                                className={classes.navButton}
                                style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', marginLeft: '10px' }}
                                disableElevation>
                                Contact Us
                            </Button>
                        </Box>

                        <ClickAwayListener onClickAway={handleCloseMenu}>
                            <Box className={classes.menuBox}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    onClick={handleOpenMenu}
                                    color="inherit"
                                    disableRipple="true"
                                >
                                    <Hamburger  toggled={needsMenu} toggle={setNeedsMenu} size={24}/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={needsMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={Boolean(needsMenu)}
                                    onClose={handleCloseMenu}
                                    className={classes.menu}
                                >
                                    {pagesData.map(({ label, href }) => (
                                        <MenuItem>
                                            <Link href={href} passHref>
                                                <a rel="noreferrer" style={{
                                                    textDecoration: 'none',
                                                    color: '#000'
                                                }}>
                                                    <Typography>
                                                        {label}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                    <MenuItem>Register</MenuItem>
                                    <MenuItem>Contact Us</MenuItem>
                                </Menu>
                            </Box>
                        </ClickAwayListener>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
