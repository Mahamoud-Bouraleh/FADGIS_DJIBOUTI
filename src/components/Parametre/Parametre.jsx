import React, { useState } from "react";
import UserRoles from "./UserRoles";
import MapSettings from "./MapSettings";
import AlertConfig from "./AlertConfig";
import GisConfig from "./GisConfig";

function Parametre() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const renderContent = () => {
    switch (activeSubMenu) {
      case "UserRoles":
        return <UserRoles />;
      case "MapSettings":
        return <MapSettings />;
      case "AlertConfig":
        return <AlertConfig />;
      case "GisConfig":
        return <GisConfig />;
      default:
        return <p>Sélectionnez un sous-menu pour afficher son contenu.</p>;
    }
  };

  return (
    <div>
      <h1>Paramètres</h1>
      <div className="submenu-container">
        <button onClick={() => setActiveSubMenu("UserRoles")}>
          Gestion des Rôles Utilisateur
        </button>
        <button onClick={() => setActiveSubMenu("MapSettings")}>
          Configuration de la Carte
        </button>
        <button onClick={() => setActiveSubMenu("AlertConfig")}>
          Configuration des Alertes
        </button>
        <button onClick={() => setActiveSubMenu("GisConfig")}>
          Configuration GIS
        </button>
      </div>
      <div className="submenu-content">{renderContent()}</div>
    </div>
  );
}

export default Parametre;
