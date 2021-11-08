import { globalCss, theme } from './stitches.config';

const GlobalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Futura PT Book',
            src: `url("./src/assets/fonts/Futura/FuturaPT-Book.woff") format('woff'), url("./src/assets/fonts/Futura/FuturaPT-Book.ttf") format('ttf'), url("./src/assets/fonts/Futura/FuturaPT-Book.eot") format('eot')`,
        },
        {
            fontFamily: 'Futura PT Medium',
            src: `url("./src/assets/fonts/Futura/FuturaPT-Medium.woff") format('woff'), url("./src/assets/fonts/Futura/FuturaPT-Medium.ttf") format('ttf'), url("./src/assets/fonts/Futura/FuturaPT-Medium.eot") format('eot')`,
        },
    ],

    html: {
        fontSize: '16px',
    },
    body: {
        backgroundColor: theme.colors.gray,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes.base,
        fontWeight: 400,
        lineHeight: theme.lineHeights.base,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        transition: 'all 0.2s',
        transitionProperty: 'color, background-color',
    },
    a: {
        textDecoration: 'none',
        color: theme.colors.text,
    },
    h1: {
        fontFamily: theme.fonts.heading,
    },
    h2: {
        fontFamily: theme.fonts.heading,
    },
    h3: {
        fontFamily: theme.fonts.heading,
    },
    h4: {
        fontFamily: theme.fonts.heading,
    },
    img: {
        maxWidth: '100%',
        width: '100%',
        height: 'auto',
    },
    button: {
        border: 'none',
        color: '$text',
        fontFamily: theme.fonts.body,
    },
    '*': {
        boxSizing: 'border-box',
    },
});

export default GlobalStyles;
