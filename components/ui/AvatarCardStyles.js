import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        boxSizing: "border-box",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 0px",
        gap: "48px",

        width: '310px',
        height: '1800px',

        [`@media (max-width: ${tablet})`]: {
            width: "45%",
            height: "auto",
            gap: "20px",
        },

        [`@media (max-width: ${mobile})`]: {
            width: "100%",
            height: "auto",
            gap: "20px",
        },

        background: "#FFFFFF",
        border: "2px solid #F7A399",
        boxShadow: "0px 16px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",

        flex: "none",
        order: 0,
        flexGrow: 0,
        zIndex: 5
    },

    avatar: {
        width: "226px",
        height: "226px",

        [`@media (max-width: ${tablet})`]: {
            width: "20vw",
            height: "20vw",
        },

        [`@media (max-width: ${mobile})`]: {
            width: "25vw",
            height: "25vw",
        },

        background: "#D9D9D9",

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "18px",
        position: 'relative',

        width: "80%",
        height: "auto",

        flex: "none",
        order: 1,
        flexGrow: 0,
    },

    title: {
        width: "auto",
        height: "auto",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "32px",

        [`@media (max-width: ${tablet})`]: {
            fontSize: "28px",
        },

        lineHeight: "38px",

        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",

        color: "#000000",

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    description: {
        width: "auto",
        height: "auto",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "32px",

        [`@media (max-width: ${tablet})`]: {
            fontSize: "15px"
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
