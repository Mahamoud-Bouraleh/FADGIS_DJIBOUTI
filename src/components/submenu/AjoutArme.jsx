import React, { useState, useContext } from 'react';
import './AjoutArme.css';
import { DataContext } from '../../context/DataContext';

const AjoutArme = () => {
  const { setArmeData } = useContext(DataContext);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    dateNaissance: '',
    sexe: '',
    tel: ''
  });
  const [tuteurs, setTuteurs] = useState([{ id: 1, photo: null }, { id: 2, photo: null }]);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedTuteurs = [...tuteurs];
      updatedTuteurs[index].photo = URL.createObjectURL(file);
      setTuteurs(updatedTuteurs);
    }
  };

  const handleAddTuteur = () => {
    setTuteurs([...tuteurs, { id: tuteurs.length + 1, photo: null }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArmeData(formData);
    alert("Arme data saved!");
  };

  return (
    <div className="ajout-arme-page">
      <header className="page-header">
        <h1>Enregistrement de l'Arme</h1>
      </header>

      <div className="content">
        <aside className="steps">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`step ${activeStep === step ? 'active' : ''}`}
              onClick={() => handleStepClick(step)}
            >
              <span>Step {step}</span>
              {step === 1 ? "Info l'arm" : step === 2 ? "Info nouveaux etudier" : step === 3 ? "Tuteur" : step === 4 ? "Parents" : "Santé"}
            </div>
          ))}
        </aside>

        <div className="form-section">
          {activeStep === 1 && (
            <div>
              <h2>Info l'arm</h2>
              <p>Remplir toutes les informations</p>
              <form className="info-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom*</label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom de l'élève"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sexe*</label>
                    <select name="sexe" required onChange={handleInputChange}>
                      <option value="">Sélectionner...</option>
                      <option value="male">Masculin</option>
                      <option value="female">Féminin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date de naissance*</label>
                    <input
                      type="date"
                      name="dateNaissance"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Aller suite
                </button>
              </form>
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <h2>Info nouveaux etudier</h2>
              <p>Remplir toutes les informations ci-dessous</p>
              <form className="info-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Année terminer etudier *</label>
                    <select required>
                      <option value="">Sélectionner...</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2023-2024">2023-2024</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Aller suite
                </button>
              </form>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <h2>Tuteur</h2>
              <p>Remplir toutes les informations ci-dessous</p>
              <form className="tuteur-form">
                {tuteurs.map((tuteur, index) => (
                  <div key={tuteur.id} className="tuteur-row">
                    <div className="form-group">
                      <label>Nom*</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>E-mail</label>
                      <input type="email" />
                    </div>
                    <div className="form-group">
                      <label>Téléphone</label>
                      <input type="tel" />
                    </div>
                    <div className="form-group">
                      <label>Relation*</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Photo*</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => handlePhotoChange(index, event)}
                      />
                      {tuteur.photo && (
                        <img
                          src={tuteur.photo}
                          alt={`Tuteur ${index + 1}`}
                          className="photo-preview"
                        />
                      )}
                    </div>
                  </div>
                ))}
                <button type="button" className="add-tuteur-button" onClick={handleAddTuteur}>
                  Ajouter un parent +
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Aller suite
                </button>
              </form>
            </div>
          )}

          {activeStep === 4 && (
            <div>
              <h2>Parents</h2>
              <p>Remplir toutes les informations</p>
              <form className="parents-form">
                {/* Add necessary form fields here */}
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Aller à la santé
                </button>
              </form>
            </div>
          )}

          {activeStep === 5 && (
            <div>
              <h2>Santé</h2>
              <form className="sante-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Info santé</label>
                  <textarea placeholder="Entrez les informations de santé ici..." rows="5"></textarea>
                </div>
                <div className="form-navigation">
                  <button type="button" className="back-button" onClick={() => setActiveStep(4)}>
                    Retour à l'information sur les parents
                  </button>
                  <button type="submit" className="save-button">
                    Sauvegarder
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AjoutArme;

