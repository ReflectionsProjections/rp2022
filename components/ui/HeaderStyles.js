import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    hero: {
        position: 'static',
        width: '100%',
        zIndex: 999,

        display: 'flex',
        padding: '2rem',
        background: 'transparent',
        boxShadow: 'none',
        top: 0,
        left: 0,
    },
    
    header: {
        position: 'fixed',
        width: '100%',
        zIndex: 999,

        display: 'flex',
        padding: '2rem',
        background: 'transparent',
        boxShadow: '0px 16px 60px rgba(0, 0, 0, 0.15)',
        top: 0,
        left: 0,
    },
    
    logoBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

        position: 'static',
        height: '78px',
        left: '0px',
        top: '0px',

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 0px',
    },
    
    logo: {
        position: 'static',
        width: '77px',
        height: '78px',
        left: '0px',
        top: '0px',

        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '0px 10px',
    },
    
    pages: {
        display: 'flex',

        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '10rem',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
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
    
    navButtons: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 0,

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },
    
    navButton: {
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 70,
        fontSize: '16px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        margin: '0px 20px',
        padding: '12px 30px',
        borderRadius: '30px',

        width: '126px',
        height: '60px',

        whiteSpace: 'nowrap',
        textAlign: 'center',

        ['@media (max-width: 1000px)']: {
            display: 'none',
        }
    },
    
    menuBox: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            flexGrow: 1,
            right: 0,
        }
    },
    
    menu: {
        display: 'none',
        ['@media (max-width: 1000px)']: {
            display: 'flex',
            position: 'absolute',
            right: 0,
        }
    }
}, { index: 1 });

export { useStyles };