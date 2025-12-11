import { useParams } from "react-router-dom";
import React from "react";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-page">

      <h2 className="title">Dashboard</h2>

      <div className="dash-layout">

        <aside className="left-box">
          <h3>Plants</h3>

          <button className="btn">Add Plant</button>

          <div className="plant-list">
            <p>No plants added yet.</p>
          </div>
        </aside>


        <main className="center-box">

          <h3>Full Profile</h3>
          <div className="card">
            <p>Plant name, type, image, dates etc will appear here.</p>
          </div>

          <h3>Watering History</h3>
          <div className="card">
            <p>No watering history yet.</p>
          </div>

          <h3>Fertilizing History</h3>
          <div className="card">
            <p>No fertilizing history yet.</p>
          </div>

          <h3>Growth Image Timeline</h3>
          <div className="card">
            <p>No growth images uploaded.</p>
          </div>

        </main>


        <aside className="right-box">

          <h3>List of all activities</h3>
          <div className="card">
            <p>No activities yet.</p>
          </div>

          <h3>Filters</h3>
          <div className="card">
            <p>Filter by Date / Plant / Type</p>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Dashboard;
