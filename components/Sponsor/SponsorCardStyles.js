import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        "position": 'relative',

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

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

        filter: "drop-shadow(0px 12px 60px rgba(0, 0, 0, 0.1))",

        borderStyle: 'solid',
        borderWidth: '8px 0px 0px 0px',
        "borderColor": '#F7A399',
        borderRadius: "4px 4px 0px 0px",

        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 1,
        // gap: '100px',
        // marginBottom: '2.61px',
    },

    sponsorImg: {
        width: "90%",
        height: "142px",
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
    }

}, { index: 1 });

export { useStyles };
