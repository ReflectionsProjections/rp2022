import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    schedulePageContainer: {
        paddingTop: "20%",

        [`@media (max-width: ${tablet})`]: {
            paddingTop: "15vh"
        },

        [`@media (max-width: ${mobile})`]: {
            paddingTop: "20vh"
        },
    },

    background: {
        height: "auto",
        // background: radial-gradient(101.76% 173.53% at 51.92% 63.09%, #EE6350 0%, #F9E3E0 100%)
        backgroundImage: "url('../public/resources/Grain.png')",
        background: "white",
        paddingBottom: "100px"
    },

    eventsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "80px",
        width: "100%",
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

    scheduleTitle: {
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

    scheduleDescription: {
        width: "auto",
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
    },

    buttons: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",

        [`@media (max-width: ${tablet})`]: {
            width: "50%"
        },
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px",
        gap: "48px",

        [`@media (max-width: ${tablet})`]: {
            display: "none"
        },

        [`@media (max-width: ${mobile})`]: {
            display: "none"
        },
    },

    mobileButtonContainer: {
        display: "none",

        [`@media (max-width: ${tablet})`]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",

            [`@media (max-width: ${tablet})`]: {
                width: "50%"
            },
        },
    },

    tabletFont: {
        textDecoration: "none",
        color: "#EE6350",

        [`@media (max-width: ${tablet})`]: {
            fontSize: "30px",
            textAlign: "center",
        },

        [`@media (max-width: ${mobile})`]: {
            fontSize: "16px",
            textAlign: "center",
        },
    },

    dayButton: {
        boxSizing: "border-box",

        /* Auto layout */

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px",
        gap: "10px",

        width: "165px",
        height: "60px",

        border: "2px solid #ED8A88",
        borderRadius: "30px",
        backgroundColor: 'transparent!important',
        minWidth: "max-content",
        whiteSpace: "nowrap",
        color: "#ED8A88",

        /* Inside auto layout */

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    dayButtonFilled: {
        boxSizing: "border-box",

        /* Auto layout */

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px",
        gap: "10px",

        width: "165px",
        height: "60px",

        border: "2px solid #ED8A88",
        borderRadius: "30px",
        backgroundColor: '#ED8A88!important',
        minWidth: "max-content",
        whiteSpace: "nowrap",
        color: "white",

        /* Inside auto layout */

        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    dayFont: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "32px",
        /* identical to box height, or 200% */

        display: "flex",
        alignItems: "center",
        letterSpacing: "0.2px",
        textTransform: "capitalize",

        color: "inherit",
    },

    anchor: {
        position: "absolute",
        transform: "translateY(-3vh)",
    },

    page: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'white',
        marginLeft: '38px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        },

        '&:hover, &:visited, &:focus, &:active': {
            textDecoration: 'none',
            borderBottom: "3px solid",
            cursor: 'pointer',
            color: 'white',
            marginLeft: '38px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '16px',

            ['@media (max-width: 1000px)']: {
                display: 'none',
            }
        }
    },

    ev: {
        width: "100%"
    }
}, { index: 1 });

export { useStyles };
