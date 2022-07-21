import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    aboutSection: {
        minHeight: 0,
    },
    
    title: {
        fontSize: '1.75rem',
        fontSize: '30px',
        fontFamily: 'var(--alt-font)',
    },
    
    mainCol: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: '7vw',
        paddingTop: '18vw',
        width: "100%",

        [`@media (max-width: ${tablet})`]: {
            // transform: "scale(1.25)"
        },

        [`@media (max-width: ${mobile})`]: {
            paddingTop: '20vh',
            paddingLeft: 0,
        },
    },
    
    logo: {
        width: '42vw',
        marginBottom: '50px',
        [`@media (max-width: 600px)`]: {
            width: "90%",
        },
    },
    
    mainText: {
        color: 'white',
        width: '30vw',
        marginBottom: '4vw',
        [`@media (max-width: 600px)`]: {
            width: "60vw",
        },
    },

    navButton: {
        boxShadow: 'none',
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 70,
        fontSize: '16px',
        // marginLeft: '30px',
        
        borderRadius: '30px',
        
        width: '126px',
        height: '60px',
        
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    
    container: {
        justifyContent: 'flex-start',
        flexFlow: 'row',

        [`@media (max-width: ${mobile})`]: {
            justifyContent: 'center',
            paddingTop: '20vh',
            paddingLeft: 0,
            width: "auto",
            alignItems: "center",
        },
    },

    buttons: {
        left: 0
    },
    
    body: {
        fontSize: '18px',
        fontFamily: 'var(--font-family)',
    },
    
    socialMediaIcons: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    },
    
    // socialMediaIcons i: {
    //     padding-right: '2em',
    //     font-size: 2em,
    //     color: #0cbabb,
    // },
    
    // socialMediaIcons i:hover: {
    //     color: #f9bfcb,
    // }
}, {index: 1});

export { useStyles };
