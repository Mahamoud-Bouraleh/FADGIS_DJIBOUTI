import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InfoDepartement.css";

const InfoDepartement = () => {
  const [departments, setDepartments] = useState([]); // Stocker les départements
  const [newDepartment, setNewDepartment] = useState(""); // Input pour ajouter un département
  const [successMessage, setSuccessMessage] = useState(""); // Message de succès

  // Charger les départements depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:5000/departements")
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  // Ajouter un département
  const handleCreateDepartment = () => {
    if (newDepartment.trim()) {
      axios
        .post("http://localhost:5000/departements", { nom: newDepartment })
        .then((response) => {
          setDepartments([...departments, response.data]); // Ajouter à la liste
          setNewDepartment(""); // Réinitialiser l'input
          setSuccessMessage("Département ajouté avec succès!");
          setTimeout(() => setSuccessMessage(""), 3000); // Masquer après 3 sec
        })
        .catch((error) => console.error("Erreur d'ajout :", error));
    }
  };

  // Supprimer un département
  const handleDeleteDepartment = (id) => {
    axios
      .delete(`http://localhost:5000/departements/${id}`)
      .then(() => {
        setDepartments(departments.filter((dept) => dept.id !== id));
      })
      .catch((error) => console.error("Erreur de suppression :", error));
  };

  return (
    <div className="info-department-page">
      <header className="page-header">
        <h2>Gestion des Départements</h2>
      </header>

      {/* Formulaire d'ajout */}
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
            Ajouter
          </button>
        </div>
      </div>

      {/* Message de succès */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Liste des départements */}
      <div className="department-list department-section">
        <h3 className="department-title">Liste des Départements</h3>
        <table className="department-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.nom}</td>
                <td>
                  <button
                    onClick={() => handleDeleteDepartment(dept.id)}
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
