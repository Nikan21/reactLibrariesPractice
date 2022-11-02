import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandlerRouteError from './handlerRouteError'
import Home from './Routes/home'
import Squares from './Routes/squares'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <HandlerRouteError />
  },
  {
    path: '/squares',
    element: <Squares />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

