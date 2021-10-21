import { defaultThemeMap } from '@stitches/react';
import { createContext, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';
import LoginProvider from '../LoginContext';
import { GlobalContextType } from './types';

export const GlobalContext = createContext<GlobalContextType>({});

const GlobalProvider: FC = () => {
    return (
        <GlobalContext.Provider value={{}}>
            <LoginProvider>
                <Router>
                    <Routes />
                </Router>
            </LoginProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
