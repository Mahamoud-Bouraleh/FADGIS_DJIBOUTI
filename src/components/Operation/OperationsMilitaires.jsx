import React, { useState } from "react";
import "./OperationsMilitaires.css";
import PlanificationOp from "./submenu/PlanificationOp";
import GestionTroupes from "./submenu/GestionTroupes";
import LogistiqueArmee from "./submenu/LogistiqueArmee";
import SuiviMissions from "./submenu/SuiviMissions";

const OperationsMilitaires = () => {
  const [activeTab, setActiveTab] = useState("PlanificationOp");

  const renderContent = () => {
    switch (activeTab) {
      case "PlanificationOp":
        return <PlanificationOp />;
      case "GestionTroupes":
        return <GestionTroupes />;
      case "LogistiqueArmee":
        return <LogistiqueArmee />;
      case "SuiviMissions":
        return <SuiviMissions />;
      default:
        return <PlanificationOp />;
    }
  };

  return (
    <div className="operations-militaires-page">
      <header className="page-header">
        <h1>Opérations Militaires</h1>
      </header>

      {/* Sous-menu horizontal */}
      <nav className="submenu-horizontal">
        <ul>
          <li
            className={activeTab === "PlanificationOp" ? "active" : ""}
            onClick={() => setActiveTab("PlanificationOp")}
          >
            Planification des Opérations
          </li>
          <li
            className={activeTab === "GestionTroupes" ? "active" : ""}
            onClick={() => setActiveTab("GestionTroupes")}
          >
            Gestion des Troupes
          </li>
          <li
            className={activeTab === "LogistiqueArmee" ? "active" : ""}
            onClick={() => setActiveTab("LogistiqueArmee")}
          >
            Logistique Militaire
          </li>
          <li
            className={activeTab === "SuiviMissions" ? "active" : ""}
            onClick={() => setActiveTab("SuiviMissions")}
          >
            Suivi des Missions
          </li>
        </ul>
      </nav>

      {/* Contenu dynamique */}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default OperationsMilitaires;
