import React from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { data } = useOutletContext();
  console.log(data);
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  );
};
export default Home;
