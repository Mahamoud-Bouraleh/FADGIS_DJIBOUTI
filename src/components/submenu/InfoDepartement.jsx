import React, { useState } from "react";
import "./InfoDepartement.css";

const InfoDepartement = ({ employeeData = [] }) => {
  const [departments, setDepartments] = useState(() =>
    employeeData.reduce((acc, employee) => {
      const { departement } = employee;
      if (!acc[departement]) {
        acc[departement] = [];
      }
      acc[departement].push(employee);
      return acc;
    }, {})
  );

  const [newDepartment, setNewDepartment] = useState("");

  // Handle department creation
  const handleCreateDepartment = () => {
    if (newDepartment && !departments[newDepartment]) {
      setDepartments((prev) => ({ ...prev, [newDepartment]: [] }));
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

      {/* Employee details per department */}

    </div>
  );
};

export default InfoDepartement;
