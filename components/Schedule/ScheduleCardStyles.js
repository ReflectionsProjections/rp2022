import { makeStyles } from '@mui/styles';
import { lineHeight } from '@mui/system';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "40px",

        // width: "auto",
        // height: "auto",

        // [`@media (max-width: ${mobile})`]: {
        //     width: '95%',
        // },

        flex: "none",
        order: 0,
        flexGrow: 0,

        // border: 'solid',
        // borderColor: "blue",
        transform: "translate(-8%, 0)",

        [`@media (max-width: ${tablet})`]: {
            // width: 'auto',
            // transform: "translate(0, 0)",
        },
    },

    dateBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        padding: "0px",
        gap: "4px",
        textAlign: 'center',

        width: "76px",
        height: "78px",

        [`@media (max-width: ${mobile})`]: {
            width: "38px",
            height: "38px",
        },

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    day: {
        width: "76px",
        height: "42px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "42px",

        [`@media (max-width: ${mobile})`]: {
            width: "38px",
            height: "21px",
            fontSize: "20px"
        },

        // display: "flex",
        // alignItems: "center",
        // textAlign: "center",
        letterSpacing: "0.2px",
        textTransform: "capitalize",

        color: "#000000",

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    date: {
        width: "76px",
        height: "42px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "32px",
        [`@media (max-width: ${mobile})`]: {
            width: "14px",
            height: "16px",
            fontSize: "14px",
            lineHeight: "133%"
        },

        letterSpacing: "0.2px",
        textTransform: "capitalize",

        color: "#000000",

        flex: "none",
        order: 1,
        flexGrow: 0,
    },

    card: {
        width: '502px',
        height: 'auto',

        [`@media (max-width: ${mobile})`]: {
            width: "80%",
        },

        filter: "drop-shadow(0px 12px 60px rgba(0, 0, 0, 0.1))",

        borderStyle: 'solid',
        borderWidth: '8px 0px 0px 0px',
        borderColor: '#F7A399',
        borderRadius: "4px 4px 0px 0px",

        // gap: '10px',

        flex: "none",
        order: 1,
        flexGrow: 0
    }
}, { index: 1 });

export { useStyles };
