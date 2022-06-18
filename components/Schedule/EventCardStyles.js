import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        position: 'relative',

        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        // padding: "40px 0px",
        // gap: "48px",

        width: "502px",
        height: "195px",
        width: "26vw",
        height: "195px",

        background:"#FFFFFF",

        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 1,
        gap: '100px',
    },

    headerBox: {
        position: 'absolute',
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "flex-start",
        width: '100%',
        gap: '22px',
        top: '30px',
        left: '22px',
    },

    time: {
        // position: "absolute",
        width: "227px",
        height: "28px",
        left: "180px",
        top: "30px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "28px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.2px",
        textTransform: "capitalize",

        color: "#000000",
        zIndex: 2
    },

    dot: {
        // position: "absolute",
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

        // position: "absolute",
        width: "320px",
        height: "70px",
        left: "75px",
        top: "99px",
        zIndex: 2
    },

    title: {
        width: "320px",
        height: "32px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "32px",
        /* identical to box height, or 100% */

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
        width: "152px",
        height: "32px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "32px",
        /* identical to box height, or 160% */

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
