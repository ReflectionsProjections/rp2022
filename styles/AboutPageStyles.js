import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    mobileButtonContainer: {
        display: "none",

        [`@media (max-width: ${tablet})`]: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px",
            gap: "5px",
            fontSize: "30px",
            textAlign: "center"
        },

        [`@media (max-width: ${mobile})`]: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px",
            gap: "5px",
            fontSize: "16px",
            textAlign: "center"
        },
    }
});

export { useStyles };