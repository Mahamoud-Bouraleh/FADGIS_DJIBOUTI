import React, { useState, useEffect } from "react";
import "./InfoDepartement.css";

const InfoDepartement = ({ employeeData = [] }) => {
  // Charger les départements depuis localStorage au démarrage
  const loadDepartmentsFromStorage = () => {
    const storedDepartments = localStorage.getItem("departments");
    if (storedDepartments) {
      return JSON.parse(storedDepartments);  // Charger les départements stockés
    }
    return employeeData.reduce((acc, employee) => {
      const { departement } = employee;
      if (!acc[departement]) {
        acc[departement] = [];
      }
      acc[departement].push(employee);
      return acc;
    }, {});
  };

  const [departments, setDepartments] = useState(loadDepartmentsFromStorage);
  const [newDepartment, setNewDepartment] = useState("");

  // Sauvegarder les départements dans localStorage chaque fois qu'ils changent
  useEffect(() => {
    localStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]); // Quand 'departments' change, on met à jour localStorage

  // Handle department creation
  const handleCreateDepartment = () => {
    if (newDepartment && !departments[newDepartment]) {
      setDepartments((prev) => {
        const updatedDepartments = { ...prev, [newDepartment]: [] };
        return updatedDepartments;
      });
      setNewDepartment("");
    }
  };

  return (
    <div className="info-department-page">
      <header className="page-header">
        <h2>Gestion des Départements</h2>
      </header>

      {/* Form to add a new department */}
      <div className="create-department-form">
        <h3>Créer un Nouveau Département</h3>
        <div className="form-group">
          <input
            type="text"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            placeholder="Nom du département"
            className="department-input"
          />
          <button onClick={handleCreateDepartment} className="create-button">
            Ajouter Département
          </button>
        </div>
      </div>

      {/* Department list */}
      <div className="department-list">
        <h3>Liste des Départements</h3>
        <table className="department-table">
          <thead>
            <tr>
              <th>Nom du Département</th>
              <th>Nombre d'Employés</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(departments).map((dept) => (
              <tr key={dept}>
                <td>{dept}</td>
                <td>{departments[dept].length}</td>
                <td>
                  <button
                    onClick={() => alert(`Voir détails: ${dept}`)}
                    className="view-button"
                  >
                    Voir
                  </button>
                  <button
                    onClick={() =>
                      setDepartments((prev) => {
                        const updated = { ...prev };
                        delete updated[dept];
                        return updated;
                      })
                    }
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoDepartement;
