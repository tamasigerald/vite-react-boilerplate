import { GlobalContext } from 'contexts/GlobalContext';
import { FC, useContext } from 'react';
import { styled } from 'styles/stitches.config';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const NavMenu: FC = () => {
    const { menuVisible, toggleMenuVisibility } = useContext(GlobalContext);

    return (
        <NavList>
            <NavListMenu color={menuVisible ? 'white' : 'default'} onClick={() => toggleMenuVisibility(!menuVisible)}>
                Menu {menuVisible ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </NavListMenu>
        </NavList>
    );
};

export default NavMenu;

const NavList = styled('div', {
    display: 'flex',
    alignItems: 'flex-end',
});

const NavListMenu = styled('span', {
    display: 'flex',
    alignItems: 'center',
    fontFamily: '$heading',
    lineHeight: '1.25',

    svg: {
        fontSize: '0.78rem',
        marginLeft: '$xxs',
        marginTop: '$xxxxs',
    },

    variants: {
        color: {
            white: {
                color: '$white',
            },
            default: {
                color: '$text',
            },
        },
    },

    '@lg': {
        display: 'none',
    },
});

const NavListItem = styled(NavListMenu, {
    display: 'none',

    '@lg': {
        display: 'flex',
    },
});
