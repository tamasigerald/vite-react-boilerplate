import { render } from 'react-dom';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import App from './App';
import HomePage from 'pages/HomePage';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<HomePage />}></Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement,
);
