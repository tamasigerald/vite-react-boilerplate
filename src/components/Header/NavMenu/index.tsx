import { GlobalContext } from 'contexts/GlobalContext';
import { FC, useContext } from 'react';
import { styled } from 'styles/stitches.config';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { DroppableListMenu } from '../DroppableListMenu';
import { Link } from 'react-router-dom';

const NavMenu: FC = () => {
    const { menuVisible, toggleMenuVisibility } = useContext(GlobalContext);

    return (
        <NavList>
            <NavListItems position={menuVisible ? 'active' : 'default'}>
                <NavLink to="/home">Live</NavLink>
                <NavLink to="/home">Push</NavLink>
                <NavLink to="/home">List</NavLink>
                <NavLink to="/home">Shop</NavLink>
                <NavLink to="/home">Packs</NavLink>
                <NavLink to="/home">Help</NavLink>
                <NavListItems>
                    <NavLink to="/home">Packs</NavLink>
                    <NavLink to="/home">Help</NavLink>
                </NavListItems>
            </NavListItems>
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

const NavListItems = styled(NavListMenu, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '$sm',
    paddingTop: 'calc($xl + .8rem)',

    position: 'absolute',
    // top: '-100vh',
    left: '0',
    height: '100vh',
    width: '100vw',
    backgroundColor: '$dark_blue',
    zIndex: -1,
    transition: 'top 0.3s',

    color: 'white',
    fontSize: '1.3rem',

    variants: {
        position: {
            active: {
                top: '0',
            },
            inactive: {
                top: '-100vh',
            },
            default: {
                position: 'static',
            },
        },
    },

    '@lg': {
        display: 'flex',
    },
});

const NavLink = styled(Link, {
    color: '$white',
    marginBottom: 'calc($sm + 5px)',
});
