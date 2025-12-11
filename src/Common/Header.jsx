import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
        <img className="logo" src="/plant.png" alt="Plant" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/addplant">Add Plant</NavLink>
          <NavLink to="/plantdetails">Plant Details</NavLink>
          <NavLink to="/editplant">Edit Plant</NavLink>
          <NavLink to="/history">Activity History</NavLink>
          <NavLink to="/reminders">Reminders</NavLink>
          <NavLink to="/userprofile">User Profile</NavLink>
        </nav>
      
    </header>
  );
};

export default Header;
