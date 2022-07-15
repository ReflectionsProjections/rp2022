import { makeStyles } from '@mui/styles';

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
        paddingTop: '10vw',
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
        marginLeft: '30px',
        
        borderRadius: '30px',
        
        width: '126px',
        height: '60px',
        
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    
    container: {
        justifyContent: 'flex-start',
        flexFlow: 'row',
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
    subheadingBold: {
        fontSize: 'x-large',
        color: 'white',
        width: '30vw',
        fontWeight: 'bold',
        marginBottom: '2vw',
        [`@media (max-width: 600px)`]: {
            width: "60vw",
        },
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
