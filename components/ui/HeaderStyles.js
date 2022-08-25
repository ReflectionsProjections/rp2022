import { makeStyles } from '@mui/styles';
import redCurve from '../../public/resources/red_curve.svg';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    curve: {
        position: "absolute",
        width: "100%",
        height: 'auto',
        top: 0,
        left: 0,
        zIndex: 0,

        [`@media (max-width: ${tablet})`]: {
            transform: "scale(1.25)"
        },

        [`@media (max-width: ${mobile})`]: {
            display: "none"
        },
    },

    header: {
        position: 'absolute',
        width: '100%',
        zIndex: 5,

        display: 'flex',
        padding: '2rem',
        background: 'transparent',
        [`@media (max-width: ${mobile})`]: {
            background: "radial-gradient(101.76% 724.4% at 51.92% 208.23%, #EE6350 0%, #F9E3E0 100%)",
        },
        opacity: 0.9,
        boxShadow: 'none',
        top: 0,
        left: 0,
    },

    hero: {
        position: 'static',
        width: '100%',
        zIndex: 999,

        display: 'flex',
        padding: '2rem',
        background: 'transparent',
        boxShadow: 'none',
        top: 0,
        left: 0,
    },
    
    logoBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        position: 'static',
        height: '78px',
        left: '0px',
        top: '0px',

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 0px',
    },
    
    logo: {
        position: 'static',
        width: '77px',
        height: '78px',
        left: '0px',
        top: '0px',

        [`@media (max-width: ${mobile})`]: {
            width: '60px',
            height: '60px',
        },

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 10px',
    },
    
    pages: {
        display: 'flex',

        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '10rem',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },
    
    page: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'white',
        marginLeft: '38px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        },
        
        '&:hover, &:visited, &:focus, &:active': {
            textDecoration: 'none',
            borderBottom: "3px solid",
            cursor: 'pointer',
            color: 'white',
            marginLeft: '38px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '16px',

            ['@media (max-width: 1000px)']: {
                display: 'none',
            }
        }
    },
    
    navButtons: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 0,

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },
    
    navButton: {
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 70,
        fontSize: '16px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        margin: '0px 20px',
        padding: '12px 30px',
        borderRadius: '30px',

        width: '126px',
        height: '60px',

        whiteSpace: 'nowrap',
        textAlign: 'center',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },
    
    menuBox: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            flexGrow: 1,
            right: 0,
        }
    },
    
    menu: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            right: 0,
        }
    }
}, { index: 1 });

export { useStyles };