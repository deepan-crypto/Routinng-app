import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/addplant">Add Plant</NavLink>
                    <NavLink to="/plantdetails">Plant Details</NavLink>
                    <NavLink to="/edithplant">Edit Plant</NavLink>
                    <NavLink to="/history">Activity History</NavLink>
                    <NavLink to="/reminders">Reminders</NavLink>
                    <NavLink to="/userprofile">User Profile</NavLink>
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default Header;
