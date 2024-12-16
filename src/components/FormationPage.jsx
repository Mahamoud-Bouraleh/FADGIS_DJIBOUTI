import React, { useState } from "react";
import GestionFormations from "./formations/GestionFormations";
import InscriptionsFormations from "./formations/InscriptionsFormations";
import "./FormationPage.css";
import GenerationCertificat from "./formations/GenerationCertificat";

const FormationPage = () => { // Renommé pour correspondre à l'export
  const [currentPage, setCurrentPage] = useState("default");

  // Détermine le contenu à afficher en fonction de la page sélectionnée
  const renderContent = () => {
    switch (currentPage) {
      case "gestion":
        return <GestionFormations />;
      case "inscriptions":
        return <InscriptionsFormations />;
      case "certificats":
        return <GenerationCertificat/>;
      case "recherche":
        return <p>Recherche et filtres disponibles ici...</p>;
      case "ajout":
        return <p>Ajout d'une nouvelle formation ici...</p>;
      default:
        return <p>Choisissez une option dans le menu pour continuer.</p>;
    }
  };

  return (
    <div className="formations-page">
      <header className="header">
        <h1>Gestion des Formations</h1>
      </header>
      {/* Sous-menu horizontal */}
      <nav className="submenu">
        <button
          onClick={() => setCurrentPage("gestion")}
          className={currentPage === "gestion" ? "active" : ""}
        >
          Gestion des formations
        </button>
        <button
          onClick={() => setCurrentPage("inscriptions")}
          className={currentPage === "inscriptions" ? "active" : ""}
        >
          Inscriptions aux formations
        </button>
        <button
          onClick={() => setCurrentPage("certificats")}
          className={currentPage === "certificats" ? "active" : ""}
        >
          Génération de certificats
        </button>
        <button
          onClick={() => setCurrentPage("recherche")}
          className={currentPage === "recherche" ? "active" : ""}
        >
          Recherche et filtres
        </button>
        <button
          onClick={() => setCurrentPage("ajout")}
          className={currentPage === "ajout" ? "active" : ""}
        >
          Ajout d'une nouvelle formation
        </button>
      </nav>
      {/* Section de contenu */}
      <main className="content">{renderContent()}</main>
    </div>
  );
};

export default FormationPage; // L'export correspond maintenant au nom du composant
