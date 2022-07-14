import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "48px",

        position: "absolute",
        width: "1320px",
        height: "2045px",
        left: "96px",
        top: "448px",

        flexGrow: 1,
    },

    title: {
        width: "204px",
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
    }
}, { index: 1 });

export { useStyles };