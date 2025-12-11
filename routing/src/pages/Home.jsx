import React from "react";  
import "../Styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-top">
        <h2>Welcome</h2>
        <p>Quick view of your plants and tasks.</p>
      </header>

      <div className="columns">
      
        <aside className="left-col">
          <h3>Plants</h3>
          <a className="btn" href="/addplant">+ Add Plant</a>
          <p>No plants yet.</p>
        </aside>

        <main className="center-col">
          <h3>Dashboard</h3>

          <div className="stats">
            <div className="stat">Next waterings: —</div>
            <div className="stat">Fertilize: —</div>
            <div className="stat">Missed: —</div>
          </div>

          <h4>Recent activity</h4>
          <ul className="activity">
            <li>No activity yet</li>
          </ul>

          <a className="btn" href="/history">View all history</a>
        </main>

        
        <aside className="right-col">
          <h3>Reminders</h3>
          <p>
            Push notifications <input type="checkbox" />
          </p>
          <a className="btn" href="/reminders">Manage reminders</a>

          <h4>Calendar</h4>
          <div className="calendar">Calendar here</div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
