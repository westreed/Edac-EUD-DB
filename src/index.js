import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EUDDB from './pages/euddb';
import About from "./pages/about";
import CUnit from "./pages/cunit";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RecoilRoot} from "recoil";

import './language/i18n';
import './style/index.css';
import './style/responsive-font.css';

export default function Index() {
    const router = createBrowserRouter([
        {
            path: "/", element: <App />,
            children: [
                {path: "/", element: <EUDDB />},
                {path: "/about", element: <About />},
                {path: "/cunit", element: <CUnit />},
            ],
        },
    ], {basename: process.env.PUBLIC_URL});

    return(
        <div>
            <RecoilRoot>
                <RouterProvider router={router}/>
            </RecoilRoot>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);