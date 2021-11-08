import { FC } from 'react';
import { Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const Routes: FC = () => {
    return (
        <>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="*" element={<HomePage />}></Route>
        </>
    );
};

export default Routes;
