import React, { useState, useContext } from "react";
import "./AjoutArme.css";
import { EmployeeContext } from "../EmployeeContext";

const AjoutArme = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    sexe: "",
    dateNaissance: "",
    lieuNaissance: "",
    departement: "",
    telephone: "",
    email: "",
    status: "",
    dernierDiplome: "",
    anneeTerminee: "",
    tuteurNom: "",
    tuteurTelephone: "",
    sante: "",
  });

  const [departments] = useState([
    "Département Informatique",
    "Département RH",
    "Département Logistique",
    "Département Finance",
  ]);

  const [diplomes] = useState([
    "BEF",
    "BAC",
    "Licence",
    "Master",
    "Doctorat",
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    if (!formData.nom || !formData.sexe || !formData.dateNaissance || !formData.lieuNaissance || !formData.departement || !formData.telephone || !formData.email || !formData.status || !formData.dernierDiplome || !formData.anneeTerminee || !formData.tuteurNom || !formData.tuteurTelephone || !formData.sante) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }

    addEmployee(formData);
    alert("Employé ajouté avec succès !");

    // Reset the form
    setFormData({
      nom: "",
      sexe: "",
      dateNaissance: "",
      lieuNaissance: "",
      departement: "",
      telephone: "",
      email: "",
      status: "",
      dernierDiplome: "",
      anneeTerminee: "",
      tuteurNom: "",
      tuteurTelephone: "",
      sante: "",
    });
    setCurrentStep(1);
  };

  return (
    <div className="ajout-arme-page">
      <header className="page-header">
        <h1>Ajouter un Employé</h1>
      </header>

      <form className="info-form" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-row">
            <div className="form-group">
              <label>Nom*</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom de l'employé"
                required
                onChange={handleInputChange}
                value={formData.nom}
              />
            </div>
            <div className="form-group">
              <label>Sexe*</label>
              <select
                name="sexe"
                required
                value={formData.sexe}
                onChange={handleInputChange}
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
                required
                onChange={handleInputChange}
                value={formData.dateNaissance}
              />
            </div>
            <div className="form-group">
              <label>Lieu de naissance*</label>
              <input
                type="text"
                name="lieuNaissance"
                placeholder="Lieu de naissance"
                required
                onChange={handleInputChange}
                value={formData.lieuNaissance}
              />
            </div>
            <div className="form-group">
              <label>Téléphone*</label>
              <input
                type="tel"
                name="telephone"
                placeholder="Numéro de téléphone"
                required
                onChange={handleInputChange}
                value={formData.telephone}
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email de l'employé"
                required
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label>Département*</label>
              <select
                name="departement"
                required
                value={formData.departement}
                onChange={handleInputChange}
              >
                <option value="">Sélectionner...</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Status*</label>
              <select
                name="status"
                required
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="">Sélectionner...</option>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </div>
            <button type="button" className="next-button" onClick={handleNextStep}>
              Suivant
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-row">
            <div className="form-group">
              <label>Dernière année d'étude*</label>
              <input
                type="number"
                name="anneeTerminee"
                placeholder="Ex : 2023"
                required
                onChange={handleInputChange}
                value={formData.anneeTerminee}
              />
            </div>
            <div className="form-group">
              <label>Diplôme*</label>
              <select
                name="dernierDiplome"
                required
                value={formData.dernierDiplome}
                onChange={handleInputChange}
              >
                <option value="">Sélectionner...</option>
                {diplomes.map((diplome, index) => (
                  <option key={index} value={diplome}>
                    {diplome}
                  </option>
                ))}
              </select>
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
              <label>Nom du Tuteur 1</label>
              <input
                type="text"
                name="tuteurNom"
                placeholder="Nom du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurNom}
              />
            </div>
            <div className="form-group">
              <label>Téléphone du Tuteur*</label>
              <input
                type="tel"
                name="tuteurTelephone"
                placeholder="Téléphone du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurTelephone}
              />
            </div>


            <div className="form-group">
              <label>Nom du Tuteur 2 *</label>
              <input
                type="text"
                name="tuteurNom"
                placeholder="Nom du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurNom}
              />
            </div>
            <div className="form-group">
              <label>Téléphone du Tuteur*</label>
              <input
                type="tel"
                name="tuteurTelephone"
                placeholder="Téléphone du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurTelephone}
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

        {currentStep === 4 && (
          <div className="form-row">
            <div className="form-group">
              <label>Santé*</label>
              <textarea
                name="sante"
                placeholder="Décrivez l'état de santé de l'employé"
                required
                rows="4"
                onChange={handleInputChange}
                value={formData.sante}
              />
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

export default AjoutArme;
