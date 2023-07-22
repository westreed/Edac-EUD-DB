import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EUDDB from './pages/euddb';
import './style/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function Index() {
    const router = createBrowserRouter([
        {
            path: "/", element: <App />,
            children: [
                {path: "/", element: <EUDDB />},
            ],
        },
    ], {basename: process.env.PUBLIC_URL});

      return(
          <div>
              <RouterProvider router={router}/>
          </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);