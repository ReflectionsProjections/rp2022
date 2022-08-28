import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, ClickAwayListener, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { useStyles } from './HeaderStyles.js';

export default function Header({ isHero }) {
    const classes = useStyles();
    const small_logo = '/rp_logo_2022_sm.png';
    const red_curve = '/resources/red_curve.svg'

    const pagesData = [
        {
            label: 'About',
            href: '/about'
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
            href: '/#sponsors'
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
            <AppBar className={isHero ? classes.hero : classes.header}>
                {!isHero && (<img src={red_curve} className={classes.curve} />)}
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Link href="/" passHref>
                                <a rel="noreferrer">
                                    <img src={small_logo} alt='2022 R|P Logo' className={classes.logo} />
                                </a>
                            </Link>
                        </Box>

                        <Box className={classes.pages}>
                            {pagesData.map(({ label, href }) => (
                                <Link key={label} href={href} passHref>
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
                            <Link key="register_header" href={"https://docs.google.com/forms/d/e/1FAIpQLScwJ8LUYJEkTLZSNS7uGVm63E-hrQH2Snqocp2zUcWuS8dF2w/viewform"} target="_blank" passHref>
                                <a rel="noreferrer" style={{
                                    textDecoration: 'none',
                                    color: '#fff'
                                }}>
                                    <Button
                                        variant='contained'
                                        className={classes.navButton}
                                        style={{ backgroundColor: '#41798C' }}
                                        disableElevation>
                                        <Typography>
                                            Register
                                        </Typography>

                                    </Button>
                                </a>
                            </Link>
                            <Link key="contact_us" href={"mailto:reflectionsprojections@gmail.com"} passHref>
                                <a rel="noreferrer" style={{
                                    textDecoration: 'none',
                                    color: '#fff'
                                }}>
                                    <Button
                                        variant='contained'
                                        className={classes.navButton}
                                        style={{ backgroundColor: 'transparent', border: '2px solid #FFFFFF', marginLeft: '10px' }}
                                        disableElevation>
                                        <Typography>
                                            Contact Us
                                        </Typography>
                                    </Button>
                                </a>
                            </Link>
                        </Box>

                        <ClickAwayListener onClickAway={handleCloseMenu}>
                            <Box className={classes.menuBox}>
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
                                    className={classes.menu}
                                >
                                    {pagesData.map(({ label, href }) => (
                                        <MenuItem>
                                            <Link key={label} href={href} passHref>
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

                                    <MenuItem>
                                        <Link key="register" href={"https://docs.google.com/forms/d/e/1FAIpQLScwJ8LUYJEkTLZSNS7uGVm63E-hrQH2Snqocp2zUcWuS8dF2w/viewform"} target="_blank" passHref>
                                            <a rel="noreferrer" style={{
                                                textDecoration: 'none',
                                                color: '#000'
                                            }}>
                                                <Typography>Register</Typography>
                                            </a>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link key="contact_us" href={"mailto:reflectionsprojections@gmail.com"} passHref>
                                            <a rel="noreferrer" style={{
                                                textDecoration: 'none',
                                                color: '#000'
                                            }}>
                                                <Typography>Contact Us</Typography>
                                            </a>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </ClickAwayListener>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}