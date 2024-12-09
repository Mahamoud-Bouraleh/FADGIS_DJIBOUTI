import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="breadcrumbs">Dashboard</div>
        <div className="search-container">
          <input type="text" placeholder="Search here" className="search-bar" />
          <div className="icons">
            <span className="icon">🔔</span>
            <span className="icon">⚙️</span>
            <span className="icon">👤</span>
          </div>
        </div>
      </header>

      <section className="stats-cards">
        <div className="card">
          <h3>Bookings</h3>
          <p>281</p>
          <span className="growth">+55% than last week</span>
        </div>
        <div className="card">
          <h3>Today's Users</h3>
          <p>2,300</p>
          <span className="growth">+3% than last month</span>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>34k</p>
          <span className="growth">+1% than yesterday</span>
        </div>
        <div className="card">
          <h3>Followers</h3>
          <p>+91</p>
          <span className="growth">Just updated</span>
        </div>
      </section>

      <section className="charts-section">
        <div className="chart-card">
          <h3>Website Views</h3>
          <canvas></canvas>
          <p>Last Campaign Performance</p>
        </div>
        <div className="chart-card">
          <h3>Daily Sales</h3>
          <canvas></canvas>
          <p>Last updated 4 minutes ago</p>
        </div>
        <div className="chart-card">
          <h3>Completed Tasks</h3>
          <canvas></canvas>
          <p>Just updated</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
