import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0); 

  useEffect(() => {
    console.log("UseEffect-Run Once after initial Render");
  }, []);

  useEffect(() => {
    console.log("UseEffect-with Array of Dependencies");
  }, [val]);

  useEffect(() => {
    console.log("UseEffect-Run on every Render");
  });

  useEffect(() => {
    if (val < 0) {
      setTimeout(() => {
        setVal(0);
      }, 2000);
    }
  }, [val]); 

  //CleanUP Function 
  return () => {
    clearTimeout(timer);
  }

  return (
    <div className="App">
      <h1>Learning react</h1>
      
    </div>
  );
}

export default App
