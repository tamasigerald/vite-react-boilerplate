import { createContext, FC, useState } from 'react';
import { LoginContextType, User } from './types';

const initialUser: User = {
    name: '',
    username: '',
    email: '',
    permissions: [],
};

export const LoginContext = createContext<LoginContextType>({
    isLogged: false,
    loggedUser: initialUser,
});

const LoginProvider: FC = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [loggedUser, setLoggedUser] = useState<User>(initialUser);

    return <LoginContext.Provider value={{ isLogged, loggedUser }}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
