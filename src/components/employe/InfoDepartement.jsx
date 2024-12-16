import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InfoDepartement.css";

const InfoDepartement = () => {
  const [departments, setDepartments] = useState([]); // État pour stocker les départements
  const [newDepartment, setNewDepartment] = useState(""); // Nouvel input pour ajouter un département
  const [successMessage, setSuccessMessage] = useState(""); // État pour afficher le message de succès

  // Charger les départements depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:5000/departements") // Assurez-vous que l'API renvoie des objets {id, nom}
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  // Ajouter un département
  const handleCreateDepartment = () => {
    if (newDepartment) {
      axios
        .post("http://localhost:5000/departements", { nom: newDepartment }) // Envoie seulement { nom }
        .then((response) => {
          setDepartments([...departments, response.data]); // Ajouter la réponse du serveur (id, nom)
          setNewDepartment(""); // Réinitialise le champ
          setSuccessMessage("Département ajouté avec succès!"); // Afficher le message de succès
          
          // Masquer le message après 3 secondes
          setTimeout(() => setSuccessMessage(""), 3000);
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout :", error);
          setSuccessMessage("Erreur lors de l'ajout du département.");
          setTimeout(() => setSuccessMessage(""), 3000);
        });
    }
  };

  // Supprimer un département
  const handleDeleteDepartment = (id) => {
    axios
      .delete(`http://localhost:5000/departements/${id}`) // Envoie l'ID à supprimer
      .then(() => {
        setDepartments(departments.filter((dept) => dept.id !== id)); // Met à jour la liste
      })
      .catch((error) => console.error("Erreur lors de la suppression :", error));
  };

  return (
    <div className="info-department-page">
      <header className="page-header">
        <h2>Gestion des Départements</h2>
      </header>

      {/* Formulaire pour ajouter un département */}
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

      {/* Affichage du message de succès */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Liste des départements */}
      <div className="department-list">
        <h3>Liste des Départements</h3>
        <table className="department-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du Département</th>
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
