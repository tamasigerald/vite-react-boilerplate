import { FC } from 'react';
import { BrowserRouter, Navigate, Routes as RouteWrapper, Route } from 'react-router-dom';

import App from '../App';
import HomePage from 'pages/HomePage';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <RouteWrapper>
                <Route path="/" element={<App />}>
                    <Route path="home" element={<HomePage />}></Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </RouteWrapper>
        </BrowserRouter>
    );
};

export default Routes;
