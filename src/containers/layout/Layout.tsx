import { styled } from 'styles/stitches.config';

const Layout = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '$body',
    margin: '0 auto',
    marginTop: '$lg',
    maxWidth: '1600px',
    padding: '$md $lg',
});

export const HorizontalSeparator = styled('div', {
    height: 0,
    border: '1px solid $gray2',
});

export default Layout;
