import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AjoutArme.css";
import { EmployeeContext } from "../EmployeeContext";

const ModifierEmploye = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const employeeToEdit = location.state?.employee;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: employeeToEdit?.nom || "",
    sexe: employeeToEdit?.sexe || "",
    dateNaissance: employeeToEdit?.dateNaissance || "",
    lieuNaissance: employeeToEdit?.lieuNaissance || "",
    departement: employeeToEdit?.departement || "",
    telephone: employeeToEdit?.telephone || "",
    email: employeeToEdit?.email || "",
    status: employeeToEdit?.status || "",
    dernierDiplome: employeeToEdit?.dernierDiplome || "",
    anneeTerminee: employeeToEdit?.anneeTerminee || "",
    tuteurNom1: employeeToEdit?.tuteurNom1 || "",
    tuteurTelephone1: employeeToEdit?.tuteurTelephone1 || "",
    tuteurNom2: employeeToEdit?.tuteurNom2 || "",
    tuteurTelephone2: employeeToEdit?.tuteurTelephone2 || "",
    sante: employeeToEdit?.sante || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mise à jour de l'employé dans le contexte
    const updatedEmployees = employees.map((emp) =>
      emp.nom === employeeToEdit.nom ? { ...emp, ...formData } : emp
    );
    setEmployees(updatedEmployees);

    alert("Employé modifié avec succès !");
    navigate("/gestion-employes"); // Retour à la liste des employés
  };

  return (
    <div className="ajout-arme-page">
      <header className="page-header">
        <h1>Modifier l'Employé</h1>
      </header>

      <form className="info-form" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-row">
            <div className="form-group">
              <label>Nom*</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Sexe*</label>
              <select
                name="sexe"
                value={formData.sexe}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date de naissance*</label>
              <input
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="button" className="next-button" onClick={handleNextStep}>
              Suivant
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-row">
            <div className="form-group">
              <label>Lieu de naissance*</label>
              <input
                type="text"
                name="lieuNaissance"
                value={formData.lieuNaissance}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Département*</label>
              <input
                type="text"
                name="departement"
                value={formData.departement}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Téléphone*</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-navigation">
              <button type="button" className="previous-button" onClick={handlePreviousStep}>
                Retour
              </button>
              <button type="button" className="next-button" onClick={handleNextStep}>
                Suivant
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-row">
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Status*</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionner...</option>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </div>
            <div className="form-navigation">
              <button type="button" className="previous-button" onClick={handlePreviousStep}>
                Retour
              </button>
              <button type="submit" className="save-button">
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ModifierEmploye;
