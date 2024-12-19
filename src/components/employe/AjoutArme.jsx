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
    tuteurNom1: "",
    tuteurTelephone1: "",
    tuteurNom2: "",
    tuteurTelephone2: "",
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

    // Vérification des champs obligatoires
    const requiredFields = [
      "nom", "sexe", "dateNaissance", "lieuNaissance", "departement", "telephone",
      "email", "status", "dernierDiplome", "anneeTerminee", "tuteurNom1",
      "tuteurTelephone1", "tuteurNom2", "tuteurTelephone2", "sante"
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Le champ ${field} est obligatoire.`);
        return;
      }
    }

    fetch("http://localhost:5000/ajouter-employe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Employé ajouté avec succès !");
        // Réinitialiser les champs
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
          tuteurNom1: "",
          tuteurTelephone1: "",
          tuteurNom2: "",
          tuteurTelephone2: "",
          sante: "",
        });
        setCurrentStep(1);
      } else {
        alert("Erreur lors de l'ajout de l'employé : " + data.message);
      }
    })
    .catch((err) => {
      console.error("Erreur de réseau ou serveur : ", err);
      alert("Erreur lors de l'envoi des données au serveur.");
    });
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
              <label>Nom du Tuteur 1*</label>
              <input
                type="text"
                name="tuteurNom1"
                placeholder="Nom du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurNom1}
              />
            </div>
            <div className="form-group">
              <label>Téléphone du Tuteur 1*</label>
              <input
                type="tel"
                name="tuteurTelephone1"
                placeholder="Téléphone du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurTelephone1}
              />
            </div>
            <div className="form-group">
              <label>Nom du Tuteur 2*</label>
              <input
                type="text"
                name="tuteurNom2"
                placeholder="Nom du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurNom2}
              />
            </div>
            <div className="form-group">
              <label>Téléphone du Tuteur 2*</label>
              <input
                type="tel"
                name="tuteurTelephone2"
                placeholder="Téléphone du tuteur"
                required
                onChange={handleInputChange}
                value={formData.tuteurTelephone2}
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
                onChange={handleInputChange}
                value={formData.sante}
              />
            </div>
            <div className="form-navigation">
              <button type="button" className="previous-button" onClick={handlePreviousStep}>
                Retour
              </button>
              <button type="submit" className="submit-button">
                Ajouter l'employé
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AjoutArme;
