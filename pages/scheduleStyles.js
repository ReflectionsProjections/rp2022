import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    background: {
        height: "500vh",
        // background: radial-gradient(101.76% 173.53% at 51.92% 63.09%, #EE6350 0%, #F9E3E0 100%)
        backgroundImage: "url('../public/resources/Grain.png')",
        background: "grey",
    },

    pageContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    
    eventsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "80px",
        width: "100%",

        // [`@media (max-width: ${mobile})`]: {
        //     width: '95%',
        // }
        // border: 'solid',
        // borderColor: "red",
    },
    
    headerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "48px",

        top: "30%",
        left: "50%",
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
        /* identical to box height, or 150% */
    
        textAlign: "center",
        letterSpacing: "0.3px",
    
        color: "#000000",
        
        flex: "none",
        order: 1,
        flexGrow: 0,
    }
}, { index: 1 });

export { useStyles };
