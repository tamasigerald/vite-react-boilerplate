import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            body: '#FFFFFF',
            text: '#000000',
            orange: '#FFD7B2',
            light_blue: '#D9E3F3',
            mid_blue: '#E1F1FF',
            dark_blue: '#83ADFF',
            green: '#A5FFC5',
            yellow: '#F1FFC9',
            purple: '#CB88FF',
            red: '#FF7979',
        },
        fonts: {
            heading_xl: "'ProspectusXL', serif",
            heading_m: "'ProspectusM', serif",
            body: "'Simplon Norm', sans-serif",
            mono: "'Simplon Mono', sans-serif",
        },
        fontSizes: {
            unit: '1.25rem', // base size for calculus
            xs: 'calc(0.667 * $unit)',
            sm: 'calc(0.8 * $unit)',
            base: '$unit',
            md: 'calc(1.333 * $unit)',
            lg: 'calc(1.778 * $unit)',
            xl: 'calc(2.361 * $unit)',
            xxl: 'calc(2.667 * $unit)',
            xxxl: 'calc(3.5 * $unit)',
            huge: 'calc(4.167 * $unit)',
            xhuge: 'calc(5.3 * $unit)',
        },
        fontWeights: {},
        lineHeights: {
            base: 1.6,
        },
        radii: {
            global: '4px',
        },
        space: {
            unit: '1.25rem', // base size for calculus
            xxxxs: 'calc(0.125 * $unit)',
            xxxs: 'calc(0.25 * $unit)',
            xxs: 'calc(0.375 * $unit)',
            xs: 'calc(0.5 * $unit)',
            sm: 'calc(0.75 * $unit)',
            md: 'calc(1.25 * $unit)',
            lg: 'calc(2 * $unit)',
            xl: 'calc(3.25 * $unit)',
            xxl: 'calc(5.25 * $unit)',
            xxxl: 'calc(8.5 * $unit)',
            xxxxl: 'calc(13.75 * $unit)',
        },
    },
    media: {
        xs: `(min-width: 480px)`,
        sm: `(min-width: 640px)`,
        md: `(min-width: 768px)`,
        lg: `(min-width: 1024px)`,
        xl: `(min-width: 1280px)`,
    },
    utils: {
        marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    },
});

export const darkTheme = createTheme({
    colors: {
        body: '#000000',
        text: '#FFFFFF',
        orange: '#FFD7B2',
        light_blue: '#D9E3F3',
        mid_blue: '#E1F1FF',
        dark_blue: '#83ADFF',
        green: '#A5FFC5',
        yellow: '#F1FFC9',
        purple: '#CB88FF',
        red: '#FF7979',
    },
});
