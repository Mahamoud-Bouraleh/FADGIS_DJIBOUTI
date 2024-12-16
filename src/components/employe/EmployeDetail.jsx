import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EmployeDetail.css";

const EmployeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {};

  if (!employee) {
    return <p className="error-message">Aucune donnée d'employé disponible.</p>;
  }

  return (
    <div className="employe-detail-page">
      {/* Bouton Retour */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Retour
      </button>

      {/* Header de la page */}
      <header className="page-header">
        <h1>{employee.nom}</h1>
        <p className="header-info">
          <span>ID : <strong>{employee.id}</strong></span> | 
          <span> Genre : <strong>{employee.sexe}</strong></span> | 
          <span> Date de naissance : <strong>{employee.dateNaissance}</strong></span>
        </p>
      </header>

      {/* Section principale */}
      <div className="employee-details">
        {/* Carte principale des informations */}
        <div className="info-card">
          <h2>Informations Principales</h2>
          <ul className="info-list">
            <li><strong>Lieu de naissance :</strong> {employee.lieuNaissance}</li>
            <li><strong>Email :</strong> {employee.email}</li>
            <li><strong>Téléphone :</strong> {employee.telephone}</li>
            <li><strong>Département :</strong> {employee.departement}</li>
            <li><strong>Status :</strong> {employee.status}</li>
          </ul>
        </div>

        {/* Carte des informations des tuteurs */}
        <div className="guardian-info">
          <h2>Tuteurs</h2>
          <div className="guardian-container">
            <div className="guardian-card">
              <h3>Guardian One</h3>
              <p><strong>Nom :</strong> {employee.tuteurNom1 || "N/A"}</p>
              <p><strong>Téléphone :</strong> {employee.tuteurTelephone1 || "N/A"}</p>
            </div>
            <div className="guardian-card">
              <h3>Guardian Two</h3>
              <p><strong>Nom :</strong> {employee.tuteurNom2 || "N/A"}</p>
              <p><strong>Téléphone :</strong> {employee.tuteurTelephone2 || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Carte de santé */}
        <div className="health-status">
          <h2>Statut de Santé</h2>
          <p>{employee.sante || "Aucune information sur la santé disponible."}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeDetail;
