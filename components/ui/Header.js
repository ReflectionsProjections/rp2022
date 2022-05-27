import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { AppBar, Toolbar, Typography, Button, Grid, Box, Container, Menu, MenuItem, IconButton, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
            href: '/sponsors.pdf'
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
            <AppBar className={isHero ? styles.hero : styles.header}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Link href="#" passHref>
                                <a rel="noreferrer">
                                    <img src={small_logo} alt='2022 R|P Logo' className={styles.logo} />
                                </a>
                            </Link>
                        </Box>

                        <Box className={styles.pages}>
                            {pagesData.map(({ label, href }) => (
                                <Link href={href} passHref>
                                    <a rel="noreferrer" className={styles.page}>
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
                            className={styles.navButtons}>
                            <Button
                                variant='contained'
                                className={styles.navButton}
                                style={{ backgroundColor: '#41798C' }}
                                disableElevation>
                                Register
                            </Button>

                            <Button
                                variant='contained'
                                className={styles.navButton}
                                style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', marginLeft: '10px' }}
                                disableElevation>
                                Contact Us
                            </Button>
                        </Box>

                        <ClickAwayListener onClickAway={handleCloseMenu}>
                            <Box className={styles.menuBox}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    onClick={handleOpenMenu}
                                    color="inherit"

                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={needsMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(needsMenu)}
                                    onClose={handleCloseMenu}
                                    className={styles.menu}
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
