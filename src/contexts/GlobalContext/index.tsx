import { createContext, FC, useState } from 'react';
import LoginProvider from 'contexts/LoginContext';
import ThemeProvider from 'contexts/ThemeContext';
import { GlobalContextType } from './types';
import Header from 'components/Header';
import { Outlet } from 'react-router';

const initialState: GlobalContextType = {
    menuVisible: false,
    toggleMenuVisibility: () => null,
};

export const GlobalContext = createContext<GlobalContextType>(initialState);

const GlobalProvider: FC = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(initialState.menuVisible);

    const toggleMenuVisibility = (visibility: boolean) => {
        setMenuVisible(visibility);
        return null;
    };

    return (
        <GlobalContext.Provider value={{ menuVisible, toggleMenuVisibility }}>
            <ThemeProvider>
                <LoginProvider>
                    <Header />
                    <Outlet />
                </LoginProvider>
            </ThemeProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
