import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        position: 'relative',

        display: "flex",
        flexDirection: "column",
        alignItems: "left",

        width: "100%",
        height: "195px",

        [`@media (max-width: ${mobile})`]: {
            width: "100%",
            height: "185px",
            gap: "20px",
        },

        background:"#FFFFFF",

        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 1,
        gap: '100px',
        marginBottom: '2.61px',
    },

    headerBox: {
        position: 'absolute',
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "flex-start",
        width: 'auto',
        gap: '22px',
        top: '30px',
        left: '22px',
    },

    time: {
        width: "auto",
        height: "28px",
        left: "180px",
        top: "30px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "28px",

        [`@media (max-width: ${mobile})`]: {
            fontSize: "14px",
            lineHeight: "24px",
        },

        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.2px",
        textTransform: "capitalize",

        color: "#000000",
        zIndex: 2
    },

    dot: {
        width: "28px",
        height: "28px",
        borderRadius: '75%',
        left: "138px",
        top: "30px",

        background: "#FEEBE9",
        zIndex: 2
    },

    textBox: {
        position: 'absolute',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0px",
        gap: "6px",

        width: "auto",
        height: "70px",
        left: "75px",
        top: "99px",

        [`@media (max-width: ${mobile})`]: {
            top: "80px"
        },

        zIndex: 2
    },

    title: {
        width: "auto",
        height: "32px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "32px",
        /* identical to box height, or 100% */

        [`@media (max-width: ${mobile})`]: {
            fontSize: "18px",
            lineHeight: "100%",
        },

        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",

        color: "#000000",

        flex: "none",
        order: 0,
        flexGrow: 0,
        zIndex: 2
    },

    description: {
        width: "auto%",
        height: "32px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "32px",
        /* identical to box height, or 160% */
        [`@media (max-width: ${mobile})`]: {
            fontSize: "13px",
            lineHeight: "160%",
        },

        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",

        color: "#878787",

        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 2
    }
}, { index: 1 });

export { useStyles };
