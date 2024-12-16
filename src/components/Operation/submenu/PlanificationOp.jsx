import React, { useState } from "react";
import "./PlanificationOp.css";

const PlanificationOp = () => {
  const [activeTab, setActiveTab] = useState("Calendrier");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="planification-op-container">
      <header className="page-header">
        <h1>Planification des Opérations Militaires</h1>
      </header>

      {/* Sous-menu horizontal */}
      <nav className="submenu">
        <ul>
          <li
            className={activeTab === "Calendrier" ? "active" : ""}
            onClick={() => handleTabClick("Calendrier")}
          >
            Calendrier
          </li>
          <li
            className={activeTab === "Ordres de Mission" ? "active" : ""}
            onClick={() => handleTabClick("Ordres de Mission")}
          >
            Ordres de Mission
          </li>
          <li
            className={activeTab === "Tâches Affectées" ? "active" : ""}
            onClick={() => handleTabClick("Tâches Affectées")}
          >
            Tâches Affectées
          </li>
          <li
            className={activeTab === "Ressources Militaires" ? "active" : ""}
            onClick={() => handleTabClick("Ressources Militaires")}
          >
            Ressources Militaires
          </li>
        </ul>
      </nav>

      {/* Contenu dynamique basé sur l'onglet actif */}
      <div className="content">
        {activeTab === "Calendrier" && (
          <div>
            <h2>Calendrier des Opérations</h2>
            <p>Vue détaillée des opérations planifiées sur un calendrier interactif.</p>
          </div>
        )}
        {activeTab === "Ordres de Mission" && (
          <div>
            <h2>Ordres de Mission</h2>
            <p>
              Liste des ordres de mission assignés pour les différentes unités
              militaires.
            </p>
          </div>
        )}
        {activeTab === "Tâches Affectées" && (
          <div>
            <h2>Tâches Affectées</h2>
            <p>
              Suivi des tâches spécifiques assignées aux équipes sur le terrain.
            </p>
          </div>
        )}
        {activeTab === "Ressources Militaires" && (
          <div>
            <h2>Ressources Militaires</h2>
            <p>Disponibilité des ressources militaires pour les opérations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanificationOp;
