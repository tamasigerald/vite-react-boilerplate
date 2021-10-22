import { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from 'contexts/LoginContext';
import { RouteType } from './types';

const PublicRoute: FC<RouteType> = ({ children, ...rest }) => {
    const { isLogged } = useContext(LoginContext);
    return <Route {...rest}>{isLogged ? children : <Redirect to="/login" />}</Route>;
};

export default PublicRoute;
