import React, { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";
import "./EmployeDetail.css";

const EmployeDetail = () => {
  const { selectedEmployee } = useContext(EmployeeContext);

  if (!selectedEmployee) {
    return <div className="no-employee">Aucun employé sélectionné</div>;
  }

  return (
    <div className="employee-detail-page">
      <header className="page-header">
        <h1>Détails de l'Employé</h1>
      </header>
      <div className="employee-details">
        <img
          src={selectedEmployee.photo || "https://via.placeholder.com/150"}
          alt={selectedEmployee.nom}
          className="employee-photo"
        />
        <div className="details">
          <p><strong>Nom :</strong> {selectedEmployee.nom}</p>
          <p><strong>Sexe :</strong> {selectedEmployee.sexe}</p>
          <p><strong>Date de Naissance :</strong> {selectedEmployee.dateNaissance}</p>
          <p><strong>Lieu de Naissance :</strong> {selectedEmployee.lieuNaissance}</p>
          <p><strong>Département :</strong> {selectedEmployee.departement}</p>
          <p><strong>Téléphone :</strong> {selectedEmployee.telephone}</p>
          <p><strong>Email :</strong> {selectedEmployee.email}</p>
          <p><strong>Statut :</strong> {selectedEmployee.status}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeDetail;
