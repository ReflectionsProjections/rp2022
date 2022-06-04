import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { AppBar, Toolbar, Typography, Button, Grid, Box, Container, Menu, MenuItem, IconButton, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles, StylesProvider } from '@mui/styles';
import { useStyles } from './HeaderStyles.js'

// const useStyles = makeStyles({
//     hero: {
//         position: 'static',
//         width: '100%',
//         zIndex: 999,

//         display: 'flex',
//         padding: '2rem',
//         background: 'transparent',
//         boxShadow: 'none',
//         top: 0,
//         left: 0,

//             // @media screen and (max-width: 1000px) {
//             //     display: none;
//             // }
//     },
    
//     header: {
//         position: 'fixed',
//         width: '100%',
//         zIndex: 999,

//         display: 'flex',
//         padding: '2rem',
//         background: 'transparent',
//         boxShadow: '0px 16px 60px rgba(0, 0, 0, 0.15)',
//         top: 0,
//         left: 0,

//         // @media screen and (max-width: 1000px) {
//         //     display: none,
//         // }
//     },
    
//     logoBox: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'flex-start',

//         position: 'static',
//         // width: 60%,
//         height: '78px',
//         left: '0px',
//         top: '0px',

//         flex: 'none',
//         order: 0,
//         flexGrow: 0,
//         margin: '0px 0px',
//     },
    
//     logo: {
//         position: 'static',
//         width: '77px',
//         height: '78px',
//         left: '0px',
//         top: '0px',

//         flex: 'none',
//         order: 0,
//         flexGrow: 0,
//         margin: '0px 10px',
//     },
    
//     pages: {
//         display: 'flex',

//         flexGrow: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingLeft: '10rem',

//         ['@media screen and(max - width: 1000px)']: {
//             display: 'none',
//         }
//     },
    
//     page: {
//         textDecoration: 'none',
//         cursor: 'pointer',
//         color: 'white',
//         marginLeft: '38px',
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 700,
//         fontSize: '16px',

//         ['@media screen and(max - width: 1000px)']: {
//             display: 'none',
//         },
        
//         '&:hover, &:visited, &:focus, &:active': {
//             textDecoration: 'none',
//             cursor: 'pointer',
//             color: 'white',
//             marginLeft: '38px',
//             fontFamily: 'Roboto',
//             fontStyle: 'normal',
//             fontWeight: 700,
//             fontSize: '16px',

//             ['@media screen and(max - width: 1000px)']: {
//                 display: 'none',
//             }
//         }
//     },
    
//     navButtons: {
//         display: 'flex',
//         alignItems: 'center',
//         flexGrow: 0,

//         ['@media screen and(max - width: 1000px)']: {
//             display: 'none',
//         }
//     },
    
//     navButton: {
//         textTransform: 'none',
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 70,
//         fontSize: '16px',

//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 'none',
//         order: 1,
//         flexGrow: 0,
//         margin: '0px 20px',
//         padding: '12px 30px',
//         borderRadius: '30px',

//         width: '126px',
//         height: '60px',

//         whiteSpace: 'nowrap',
//         textAlign: 'center',

//         ['@media screen and(max - width: 1000px)']: {
//             display: 'none',
//         }
//     },
    
//     menuBox: {
//         display: 'none',
//         ['@media screen and(max - width: 1000px)']: {
//             display: 'flex',
//             position: 'absolute',
//             flexGrow: 1,
//             right: 0,
//         }
//     },
    
//     menu: {
//         display: 'none',
//         ['@media screen and(max - width: 1000px)']: {
//             display: 'flex',
//             position: 'absolute',
//             right: 0,
//         }
//     }
// }, { index: 1 });



export default function Header({ isHero }) {
    const classes = useStyles();
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
            <AppBar className={isHero ? classes.hero : classes.header}>
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
