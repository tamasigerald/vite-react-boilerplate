import { styled } from 'styles/stitches.config';

export const DroppableListMenu = styled('div', {
    position: 'absolute',
    top: '-100vh',
    left: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: '$dark_blue',
    zIndex: -1,
    transition: 'top 0.3s',

    variants: {
        position: {
            active: {
                top: '0',
            },
            default: {
                top: '-100vh',
            },
        },
    },
});
