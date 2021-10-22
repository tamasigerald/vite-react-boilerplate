import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const Routes: FC = () => {
    return (
        <Switch>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="*">
                <Redirect to="/home"></Redirect>
            </Route>
        </Switch>
    );
};

export default Routes;
