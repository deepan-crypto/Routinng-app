import { Outlet } from 'react-router-dom';
 
 <header>
        <img src=""></img>
        <div>
          <NavLink to={"/"}>Home </NavLink>
          <NavLink to={"/about"}>About </NavLink>
                    <NavLink to={"/cart"}>Cart</NavLink>
                    <NavLink to={"/search"}>Search</NavLink> 
        </div>
      </header>

exort default Header;