import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "48px",

        position: "relative",
        width: "85%",
        height: "100vh",

        left: "5%",
    },

    logo: {
        width: '42vw',
        marginBottom: '50px',
        [`@media (max-width: ${tablet})`]: {
            width: "90%",
        },
    },

    headerBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "19px",
        
        width: "100%",
        height: "auto",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    header: {
        width: "100%",
        height: "auto",
        
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "17px",
        /* identical to box height, or 71% */

        [`@media (max-width: ${mobile})`]: {
            fontSize: "18px",
            lineHeight: "71%",
        },
        
        letterSpacing: "0.3px",
        
        color: "#FFFFFF",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: 1,
        flexGrow: 0,
    },

    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "36px",
        width: "80%",
        height: "auto",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: 1,
        flexGrow: 0,
    },

    text: {
        width: "100%",
        height: "auto",
        
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "22px",
        /* or 138% */

        [`@media (max-width: ${mobile})`]: {
            fontSize: "12px",
            lineHeight: "138%",
        },
        
        letterSpacing: "0.3px",
        
        color: "#FFFFFF",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: 0,
        flexGrow: 0,
    },

    button: {
        boxShadow: "none",
        textTransform: "none",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 70,
        fontSize: "16px",

        [`@media (max-width: ${mobile})`]: {
            fontSize: "12px",
            width: "100px",
            height: "40px",
        },

        borderRadius: "30px",

        width: "153px",
        height: "60px",

        whiteSpace: "nowrap",
        textAlign: "center",
    }

}, {index: 1});

export { useStyles };
