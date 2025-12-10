import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Header></Header>
     <Outlet>
 
     </Outlet>
    </div>

  );
}

export default App;

