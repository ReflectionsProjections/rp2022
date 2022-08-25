import { makeStyles } from '@mui/styles';

const tablet = '850px';
const mobile = '420px';
const laptop = '1000px';

const useStyles = makeStyles({
    landingContainer: {
        "minHeight": "100vh",
        "padding": "0 0.5rem",
        "display": "flex",
        "flexDirection": "column",
        "width": "100%",
        "fontFamily": "var(--font-family)",
        "color": "black",
        "gap": "100px",
        "zIndex": -1
    },

    "landingContainer2": {
        "minHeight": "100vh",
        "padding": "0 0.5rem",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "100%",
        "fontFamily": "var(--font-family)",
        "color": "black"
    },

    "bg": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "-200px",
        'fixed-to-top': {
            "position": "fixed"
        }
    },

    "bgFixed": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": "-300px"
    },

    "bgimg": {
        "margin": "-1px"
    },
   
    "backgroundRed": {
        "height": "100vh",
        "backgroundImage": "url('../public/resources/Grain.png')"
    },

    "navButton": {
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
    },



    /* Speaker Section */


    "speakersContainer": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "padding": "0px",
        "gap": "7vw",
        "position": "relative",
        "width": "100%",
        "height": "auto",

        [`@media screen and (max-width: ${mobile})`]: {
            "flex-direction": "column"
        },
    },


    "speakersSection": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "0px",
        "gap": "48px",
        "width": "50%",
        "height": "auto",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "width": "100%",
            "align-items": "center",
        }
    },

    "speakersTitle": {
        "width": "204px",
        "height": "56px",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "48px",
        "lineHeight": "56px",
        "letterSpacing": "0.3px",
        "color": "#EE6350",
        "flex": "none",
        "order": "0",
        "flexGrow": "0"
    },


    "speakersContent": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "0px",
        "gap": "48px",
        "width": "100%",
        "height": "auto",
        "flex": "none",
        "order": "1",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "width": "100%",
            "align-items": "center",
            "gap": "24px",
        }
    },


    "speakersText": {
        "width": "90%",
        "height": "auto",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "24px",
        "lineHeight": "36px",
        "letterSpacing": "0.3px",
        "color": "#000000",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "text-align": "center",
            "font-size": "18px",
            "line-height": "150%",
        }
    },


    "speakersImg": {
        "width": "35%",
        "height": "auto",
        "borderRadius": "30px",
        "flex": "none",
        "order": "1",
        "flexGrow": "0",

        [`@media screen and (max-width: ${tablet})`]: {
            "width": "40%",
        },

        [`@media screen and (max-width: ${mobile})`]: {
            "width": "70%",
        }
    },


    /* Schedule Section */

    "scheduleContainer": {
        "margin": "30px 0px",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "width": "100%",
        "height": "651.6px",
        "overflow": "visible",
        "backgroundImage": "url('../public/resources/Blue CurvePink_curve.svg')",
       
        "position": "relative"
    },
    "scheduleContent": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "100%",
        "height": "100%",
        "position": "relative"
    },

    "scheduleLine": {
        "maxWidth": "100%",
        "maxHeight": "100%",

        [`@media screen and (max-width: ${mobile})`]: {
            "-webkit-transform": "rotate(90deg)",

            /* Chrome, Safari, Opera */
            "-moz-transform": "rotate(90deg)",
            "-ms-transform": "rotate(90deg)",
            "-o-transform": "rotate(90deg)",
            "transform": "rotate(90deg)",
        }
    },

    "scheduleLeft": {
        "position": "absolute",
        "width": "40%",
        "height": "auto",
        "left": "0",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "0px",
        "gap": "36px",
        "marginLeft": "5vw",

        [`@media screen and (max-width: ${mobile})`]: {
            "width": "100%",
            "top": "15%",
            "gap": "24px",
            "margin-left": 0,
            "align-items": "center",
            "text-align": "center",
        }
    },

    "scheduleRight": {
        "position": "absolute",
        "width": "45%",
        "height": "auto",
        "right": "0",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "0px",

        [`@media screen and (max-width: ${mobile})`]: {
            "width": "100%",
            "bottom": "15%",
            "margin-left": 0,
            "align-items": "center",
            "text-align": "center",
        }
    },

    "scheduleHeader": {
        "width": "100%",
        "height": "auto",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "48px",
        "lineHeight": "64px",
        "letterSpacing": "0.3px",
        "color": "#000000",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "font-weight": "700",
            "font-size": "36px",
            "line-height": "133%",
        }
    },

    "scheduleText": {
        "width": "100%",
        "height": "auto",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "24px",
        "lineHeight": "36px",
        "letterSpacing": "0.3px",
        "paddingRight": "90px",
        "color": "#000000",

        [`@media screen and (max-width: ${mobile})`]: {
            "font-weight": "400",
            "font-size": "20px",
            "line-height": "150%",
            "padding": "0 10px",
        }
    },


    /* About Section */

    "aboutContainer": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "20px",
        "marginTop": "15%",
        "gap": "48px",
        "width": "100%",
        "height": "auto",
        "position": "relative",

        [`@media screen and (max-width: ${tablet})`]: {
            "margin-top": 0,
        }
    },

    "aboutHeader": {
        "width": "100%",
        "height": "auto",
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
            "font-size": "36px",
            "text-align": "center",
        }
    },

    "aboutContent": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "padding": "0px",
        "gap": "48px",
        "width": "100%",
        "height": "auto",
        "flex": "none",
        "order": "1",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "padding-left": "10px",
            "padding-right": "10px",
            "gap": "24px"
        },

        [`@media screen and (max-width: ${tablet})`]: {
            "align-items": "center"
        }
    },

    "aboutText": {
        "width": "100%",
        "height": "auto",
        "fontFamily": "'Roboto'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "24px",
        "lineHeight": "36px",
        "letterSpacing": "0.3px",
        "color": "#000000",
        "flex": "none",
        "order": "0",
        "flexGrow": "0",

        [`@media screen and (max-width: ${mobile})`]: {
            "font-size": "18px",
            "line-height": "150%",
            "text-align": "center",
        }
    }

}, { index: 1 });

export { useStyles };

