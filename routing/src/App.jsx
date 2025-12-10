import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header>
        <img src=""></img>
        <div>
          <NavLink to={"/"}>Home </NavLink>
          <NavLink to={"/about"}>About </NavLink>
                    <NavLink to={"/cart"}>Cart</NavLink>
                    <NavLink to={"/search"}>Search</NavLink> 
        </div>
      </header>
      <Outlet/>
    </div>

  );
}

export default App;

