import { createContext, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import LoginProvider from 'contexts/LoginContext';
import ThemeProvider from 'contexts/ThemeContext';
import { GlobalContextType } from './types';

export const GlobalContext = createContext<GlobalContextType>({});

const GlobalProvider: FC = () => {
    return (
        <GlobalContext.Provider value={{}}>
            <ThemeProvider>
                <LoginProvider>
                    <Router>
                        <Routes />
                    </Router>
                </LoginProvider>
            </ThemeProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
