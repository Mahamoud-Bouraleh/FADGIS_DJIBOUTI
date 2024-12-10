import React from "react";
import "./Dashboard.css";
import { FaUsers, FaBuilding, FaMoneyBill, FaShieldAlt } from "react-icons/fa"; // Import des icônes

const Dashboard = () => {
  return (
    <div className="dashboard">


      <section className="stats-cards">
        <div id="card1">
          <div className="icon-container">
            <FaUsers size={40} className="icon" />
          </div>
          <h3>Nombre des employés</h3>
          <p>281</p>
          <span className="growth">+55% par rapport à la semaine dernière</span>
        </div>
        <div  id="card2">
          <div className="icon-container">
            <FaBuilding size={40} className="icon" />
          </div>
          <h3>Nombre des départements</h3>
          <p>2,300</p>
          <span className="growth">+3% par rapport au mois dernier</span>
        </div>
        <div  id="card3">
          <div className="icon-container">
            <FaMoneyBill size={40} className="icon" />
          </div>
          <h3>Nombre total des salaires</h3>
          <p>34k</p>
          <span className="growth">+1% par rapport à hier</span>
        </div>
        <div  id="card4">
          <div className="icon-container">
            <FaShieldAlt size={40} className="icon" />
          </div>
          <h3>Nombre de contrôles</h3>
          <p>+91</p>
          <span className="growth">Mis à jour récemment</span>
        </div>
      </section>

      <section className="charts-section">
        <div className="chart-card">
          <h3>Activités statistiques</h3>
          <canvas></canvas>
          <p>Dernière campagne</p>
        </div>
        <div className="chart-card">
          <h3>Statistiques par date</h3>
          <canvas></canvas>
          <p>Mise à jour il y a 4 minutes</p>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
