import { makeStyles } from '@mui/styles';

const laptop = '1000px';
const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "70vw",

        position: "static",
        width: "90%",
        height: "25.72px",
        left: "50%",
        bottom: "0px",
        // transform: "translate(-50%, -50%)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",

        [`@media (max-width: ${laptop})`]: {
            gap: "60%",
        },

        [`@media (max-width: ${tablet})`]: {
            gap: "45%",
        },

        [`@media (max-width: ${mobile})`]: {
            gap: "20%",
        },
    },

    organizer: {
        width: "188px",
        height: "19px",

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "19px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "0.2px",

        color: "#41798C",

        flex: "none",
        order: 0,
        flexGrow: 0,

        [`@media (max-width: ${mobile})`]: {
            width: "90px",
            fontSize: "13px"
        },
    },

    socialMedia: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "20px",

        width: "199px",
        height: "25.72px",

        flex: "none",
        order: 1,
        flexGrow: 0,

        [`@media (max-width: ${mobile})`]: {
            gap: "5px",
        },
    }
}, { index: 1 });

export { useStyles };
