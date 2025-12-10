import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { CreateBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.js';

const routerVariables=CreateBrowserRouter([
    {       
        path:"/",
        element:<App/>,
    },
    {
        path:"/home",
        element:<Home/>,
    },
    {
        path:"/search",
        element:<Search/>,
    },
    {
        path:"/about",
        element:<About/>
    },
    