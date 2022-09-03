import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        boxSizing: "border-box",
        position: "relative",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0px",
        gap: "48px",

        width: '80%',
        height: 'auto',

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
        zIndex: 5,
    },

    imgContainer: {
        padding: "10px",
        left: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto",

        width: "303px",
        height: "150px",
        
        [`@media (max-width: ${tablet})`]: {
            width: "200px",
            height: "100px",
        },

        [`@media (max-width: ${mobile})`]: {
            width: "150px",
            height: "75px",
        },

        background:"#FFFFFF",

        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 1,
    },

    sponsorImg: {
        width: "300px",
        height: "120px",
        objectFit: "contain",
        display: "block",
        margin: "auto",

        [`@media (max-width: ${tablet})`]: {
            width: "200px",
            height: "90px",
            paddingRight: "10px",
            paddingLeft: "10px",
        },

        [`@media (max-width: ${mobile})`]: {
            width: "150px",
            height: "65px",
            paddingRight: "5px",
            paddingLeft: "5px",
        },
    },

    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "18px",
        margin: "0 auto",
        textAlign: "center",

        width: "auto",
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
        fontSize: "24px",

        [`@media (max-width: ${tablet})`]: {
            fontSize: "20px",
        },

        lineHeight: "38px",

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
        fontSize: "16px",
        lineHeight: "32px",

        [`@media (max-width: ${tablet})`]: {
            fontSize: "12px"
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
