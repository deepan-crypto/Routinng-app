import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { CreateBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.js';
import App from './App.jsx';
import Search from './pages/Search.js';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import './index.css';




const routerVariables=CreateBrowserRouter([
    {       
        path:"/",
        element:<App/>,
        children:[
    
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
    {
        path:"/cart",
        element:<Cart/>

    },
],
},
],
);


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={routerVariables}/>
    </React.StrictMode>
);
