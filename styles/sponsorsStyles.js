import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    pageContainer: {
        paddingTop: "30vh",

        [`@media (max-width: ${tablet})`]: {
            paddingTop: "15vh"
        },

        [`@media (max-width: ${mobile})`]: {
            paddingTop: "20vh"
        },
    },

    headerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "48px",
        marginBottom: "70px",

        [`@media (max-width: ${tablet})`]: {
            gap: "24px"
        },

        top: "30%",
        left: "50%",
    },

    title: {
        width: "auto",
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

    background: {
        height: "auto",
        // background: radial-gradient(101.76% 173.53% at 51.92% 63.09%, #EE6350 0%, #F9E3E0 100%)
        backgroundImage: "url('../public/resources/Grain.png')",
        background: "white",
        paddingBottom: "100px"
    },

    sponsorsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "80px",
        width: "100%",
    },

    
}, { index: 1 });

export { useStyles };