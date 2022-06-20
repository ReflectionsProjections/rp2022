import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';

const useStyles = makeStyles({
    card: {
        width: '26vw',
        height: '195px',

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
