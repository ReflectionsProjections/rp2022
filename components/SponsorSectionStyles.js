import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';
const laptop = '1000px';

const useStyles = makeStyles({
    "bg": {
        "margin": "30px 0px",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "width": "100%",
        "height": "850px",
        "overflow": "visible",
        "backgroundImage": "url('../public/resources/Pink Curve.svg')",
        "position": "relative",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
    },

    "container": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "0px",
        "gap": "48px",
        "position": "relative",
        "width": "100%",
        "height": "688px",

        [`@media screen and (max-width: ${tablet})`]: {
            "flex-direction": "column",
            "gap": "0px"
        },

        [`@media screen and (max-width: ${mobile})`]: {
            "flex-direction": "column",
            "gap": "0px"
        }
    },

    "headerBox": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "padding": "0px",
        "gap": "48px",
        "width": "55%",
        "height": "auto",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${tablet})`]: {
            "top": "0",
            "width": "100%",
            "gap": "40px",
            "margin-bottom": "10%",
        },

        [`@media screen and (max-width: ${mobile})`]: {
            "gap": "24px",
        }
    },

    "header": {
        "width": "100%",
        "height": "auto",
        "textAlign": "center",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "48px",
        "lineHeight": "56px",
        "letterSpacing": "0.3px",
        "color": "#EE6350",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "font-size": "36px"
        }
    },

    "text": {
        "width": "100%",
        "height": "auto",
        "textAlign": "center",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "24px",
        "lineHeight": "36px",
        "letterSpacing": "0.3px",
        "color": "#000000",
        "flex": "none",
        "order": "1",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "font-size": "18px",
            "line-height": "150%",
        }
    },

    "content": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "padding": "0px",
        "gap": "72px",
        "width": "80%",
        "height": "auto",
        "flex": "none",
        "order": "1",
        "flexGrow": "0",

        [`@media screen and (max-width: ${tablet})`]: {
            "width": "100%",
            "gap": "40px"
        }
    },

    "sponsors": {
        "display": "flex",
        "flexWrap": "wrap",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "padding": "0px",
        "gap": "64px",
        "width": "100%",
        "height": "auto",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${tablet})`]: {
            "gap": "40px"
        }
    },

    "button": {
        "boxShadow": "none",
        "textTransform": "none",
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "70",
        "fontSize": "16px",
        "borderRadius": "30px",
        "width": "187px",
        "height": "60px",
        "whiteSpace": "nowrap",
        "textAlign": "center"
    }
}, { index: 1 });

export { useStyles }
