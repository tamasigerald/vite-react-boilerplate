import { globalCss, theme } from './stitches.config';

const GlobalStyles = globalCss({
    html: {
        fontSize: '16px',
    },
    body: {
        backgroundColor: theme.colors.body,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes.base,
        fontWeight: 400,
        lineHeight: theme.lineHeights.base,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },
    a: {
        textDecoration: 'none',
        color: theme.colors.text,
    },
    h1: {
        fontFamily: theme.fonts.heading_xl,
    },
    h2: {
        fontFamily: theme.fonts.heading_xl,
    },
    h3: {
        fontFamily: theme.fonts.heading_m,
    },
    h4: {
        fontFamily: theme.fonts.heading_m,
    },
    img: {
        maxWidth: '100%',
        width: '100%',
        height: 'auto',
    },
    '*': {
        boxSizing: 'border-box',
    },
});

export default GlobalStyles;
