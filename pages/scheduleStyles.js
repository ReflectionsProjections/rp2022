import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    background: {
        height: "500vh",
        backgroundImage: "url('../public/resources/Grain.png')",
        background: "white",
    },
    
    eventsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "80px",
    
        position: "absolute",
        width: "618px",
        height: "4295px",

        left:"50%",
        top: "45%",
        transform: "translate(-57%, 0)",

        [`@media (max-width: ${mobile})`]: {
            width: '95%',
            transform: "translate(-50%, 0)",
        },
    },
    
    headerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "48px",

        [`@media (max-width: ${mobile})`]: {
            width: '95%',
            gap: "10px",
        },
    
        width: "868px",
        height: "140px",
        position: "absolute",
        top: "30%",
        left: "50%",
        "-webkit-transform": "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
    },
    
    scheduleTitle: {
        width: "203px",
        height: "56px",
    
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "48px",
        lineHeight: "56px",
        letterSpacing: "0.3px",

        [`@media (max-width: ${mobile})`]: {
            width: '35vw',
            fontSize: "36px",
            lineHeight: "100%",
        },
    
        color: "#EE6350",
        
        flex: "none",
        order: 0,
        flexGrow: 0,
    },
    
    scheduleDescription: {
        width: "868px",
        height: "36px",
    
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "36px",

        [`@media (max-width: ${mobile})`]: {
            width: '100%',
            fontSize: "24px",
        },

        textAlign: "center",
        letterSpacing: "0.3px",
    
        color: "#000000",
        
        flex: "none",
        order: 1,
        flexGrow: 0,
    }
}, { index: 1 });

export { useStyles };
