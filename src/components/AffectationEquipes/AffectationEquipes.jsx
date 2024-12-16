import React, { useState } from "react";
import "./AffectationEquipes.css";
import EquipeStrategique from "./submenu/EquipeStrategique";
import EquipeLogistique from "./submenu/EquipeLogistique";
import EquipeSurveillance from "./submenu/EquipeSurveillance";
import EquipeMaintenance from "./submenu/EquipeMaintenance";

const AffectationEquipes = () => {
  const [activeTab, setActiveTab] = useState("EquipeStrategique");

  // Rendu dynamique en fonction de l'onglet actif
  const renderContent = () => {
    switch (activeTab) {
      case "EquipeStrategique":
        return <EquipeStrategique />;
      case "EquipeLogistique":
        return <EquipeLogistique />;
      case "EquipeSurveillance":
        return <EquipeSurveillance />;
      case "EquipeMaintenance":
        return <EquipeMaintenance />;
      default:
        return <EquipeStrategique />;
    }
  };

  return (
    <div className="affectation-equipes-page">
      <header className="page-header">
        <h1>Affectation des Équipes</h1>
      </header>

      {/* Sous-menu horizontal */}
      <nav className="submenu-horizontal">
        <ul>
          <li
            className={activeTab === "EquipeStrategique" ? "active" : ""}
            onClick={() => setActiveTab("EquipeStrategique")}
          >
            Équipe Stratégique
          </li>
          <li
            className={activeTab === "EquipeLogistique" ? "active" : ""}
            onClick={() => setActiveTab("EquipeLogistique")}
          >
            Équipe Logistique
          </li>
          <li
            className={activeTab === "EquipeSurveillance" ? "active" : ""}
            onClick={() => setActiveTab("EquipeSurveillance")}
          >
            Équipe Surveillance
          </li>
          <li
            className={activeTab === "EquipeMaintenance" ? "active" : ""}
            onClick={() => setActiveTab("EquipeMaintenance")}
          >
            Équipe Maintenance
          </li>
        </ul>
      </nav>

      {/* Contenu dynamique */}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AffectationEquipes;
