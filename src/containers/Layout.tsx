import { styled } from 'styles/stitches.config';

const Layout = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '$red',
    margin: '0 auto',
    marginTop: '$lg',
    maxWidth: '1600px',
    padding: '$md $lg',
});

export default Layout;
