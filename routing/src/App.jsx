import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [val, setVal] = useState(0); 
  
   let [data, setData]=useState([]);
   let handleIncrement=()=>
   {
    setVal(val+1);

   }
   let handleDecrement=()=>{
    setVal(val-1);
   }

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

  useEffect(() => {
    const FetchApi=async()=>{
      try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
      
        const fetchData=await response.json();
        setData(fetchData);
        
      }catch(err)
      {
        console.log("Error:", err);
      }
    }
    FetchApi();
  }, []); // Added missing dependency array

  useEffect(()=>{
    const FetchApi=async()=>{
      try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
      }
    }
  });
  //CleanUP Function 
  return () => {
    clearTimeout(timer);
  }


  return (
    <div className="App">
      <h1>Learning react</h1>
      {/* Uncomment or define the Counter component if needed */}
      <Counter 
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement} 
      /> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>

            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td> 
          </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default App;

