import { HorizontalSeparator } from 'containers/layout/Layout';
import { styled } from 'styles/stitches.config';

import AbletonLogo from 'assets/images/svg/logo.svg';
import { useContext } from 'react';
import { GlobalContext } from 'contexts/GlobalContext';
import NavMenu from './NavMenu';

const Header = () => {
    const { menuVisible } = useContext(GlobalContext);

    return (
        <HeaderWrapper>
            <Navbar>
                <Logo color={menuVisible ? 'white' : 'default'}>
                    <AbletonLogo />
                </Logo>
                <NavMenu />
            </Navbar>
            <HorizontalSeparator />
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled('header', {
    height: '130px',
    position: 'relative',

    backgroundColor: '$body',
});

const Navbar = styled('div', {
    display: 'flex',
    height: '70px',
    padding: '1.25rem',
    position: 'relative',
    zIndex: '1',
});

const Logo = styled('div', {
    height: '28px',
    width: '60px',
    marginRight: '2rem',

    svg: {
        height: '100%',
        width: '100%',
        transition: 'fill 0.2s',
    },

    variants: {
        color: {
            white: {
                svg: {
                    fill: 'white',
                },
                '@lg': {
                    svg: {
                        fill: 'black',
                    },
                },
            },
            default: {
                svg: {
                    // fill: 'white',
                },
            },
        },
    },
});
