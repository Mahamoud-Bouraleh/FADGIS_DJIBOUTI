import React, { useState } from "react";
import "./GestionFormations.css";

const GestionFormations = () => {
  const [formations, setFormations] = useState([]);
  const [newFormation, setNewFormation] = useState({
    nom: "",
    type: "",
    niveau: "",
    dateDebut: "",
    dateCloture: "",
    lieu: "",
    pays: "",
    grade: "",
    niveauEtude: "",
    experience: "",
  });

  // Ajouter une formation
  const handleAddFormation = (e) => {
    e.preventDefault();
    if (
      newFormation.nom &&
      newFormation.type &&
      newFormation.niveau &&
      newFormation.dateDebut &&
      newFormation.dateCloture &&
      newFormation.lieu &&
      newFormation.pays &&
      newFormation.grade &&
      newFormation.niveauEtude &&
      newFormation.experience
    ) {
      setFormations([...formations, newFormation]);
      setNewFormation({
        nom: "",
        type: "",
        niveau: "",
        dateDebut: "",
        dateCloture: "",
        lieu: "",
        pays: "",
        grade: "",
        niveauEtude: "",
        experience: "",
      });
    }
  };

  // Supprimer une formation
  const handleDeleteFormation = (index) => {
    const updatedFormations = formations.filter((_, i) => i !== index);
    setFormations(updatedFormations);
  };

  return (
    <div className="gestion-formations">
      <h2>Gestion des formations militaires</h2>

      {/* Formulaire pour ajouter une nouvelle formation */}
      <form className="form-ajout" onSubmit={handleAddFormation}>
        <h3>Ajouter une nouvelle formation</h3>
        <label>
          Nom de la formation :
          <input
            type="text"
            value={newFormation.nom}
            onChange={(e) => setNewFormation({ ...newFormation, nom: e.target.value })}
            placeholder="Ex : Maniement des armes légères"
          />
        </label>
        <label>
          Type d'arme :
          <select
            value={newFormation.type}
            onChange={(e) => setNewFormation({ ...newFormation, type: e.target.value })}
          >
            <option value="">Sélectionnez un type</option>
            <option value="Armes légères">Armes légères</option>
            <option value="Armes lourdes">Armes lourdes</option>
            <option value="Explosifs">Explosifs</option>
            <option value="Tir de précision">Tir de précision</option>
          </select>
        </label>
        <label>
          Niveau :
          <select
            value={newFormation.niveau}
            onChange={(e) => setNewFormation({ ...newFormation, niveau: e.target.value })}
          >
            <option value="">Sélectionnez un niveau</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </label>
        <label>
          Date de début :
          <input
            type="date"
            value={newFormation.dateDebut}
            onChange={(e) => setNewFormation({ ...newFormation, dateDebut: e.target.value })}
          />
        </label>
        <label>
          Date de clôture :
          <input
            type="date"
            value={newFormation.dateCloture}
            onChange={(e) => setNewFormation({ ...newFormation, dateCloture: e.target.value })}
          />
        </label>
        <label>
          Lieu :
          <input
            type="text"
            value={newFormation.lieu}
            onChange={(e) => setNewFormation({ ...newFormation, lieu: e.target.value })}
            placeholder="Ex : Camp militaire A"
          />
        </label>
        <label>
          Pays :
          <input
            type="text"
            value={newFormation.pays}
            onChange={(e) => setNewFormation({ ...newFormation, pays: e.target.value })}
            placeholder="Ex : France"
          />
        </label>
        <label>
          Grade requis :
          <input
            type="text"
            value={newFormation.grade}
            onChange={(e) => setNewFormation({ ...newFormation, grade: e.target.value })}
            placeholder="Ex : Caporal"
          />
        </label>
        <label>
          Niveau d'étude requis :
          <input
            type="text"
            value={newFormation.niveauEtude}
            onChange={(e) => setNewFormation({ ...newFormation, niveauEtude: e.target.value })}
            placeholder="Ex : Bac+2"
          />
        </label>
        <label>
          Expérience requise :
          <input
            type="text"
            value={newFormation.experience}
            onChange={(e) => setNewFormation({ ...newFormation, experience: e.target.value })}
            placeholder="Ex : 2 ans"
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>

      {/* Liste des formations */}
      <div className="liste-formations">
        <h3>Liste des formations</h3>
        {formations.length === 0 ? (
          <p>Aucune formation ajoutée pour le moment.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Niveau</th>
                <th>Date début</th>
                <th>Date clôture</th>
                <th>Lieu</th>
                <th>Pays</th>
                <th>Grade</th>
                <th>Niveau d'étude</th>
                <th>Expérience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {formations.map((formation, index) => (
                <tr key={index}>
                  <td>{formation.nom}</td>
                  <td>{formation.type}</td>
                  <td>{formation.niveau}</td>
                  <td>{formation.dateDebut}</td>
                  <td>{formation.dateCloture}</td>
                  <td>{formation.lieu}</td>
                  <td>{formation.pays}</td>
                  <td>{formation.grade}</td>
                  <td>{formation.niveauEtude}</td>
                  <td>{formation.experience}</td>
                  <td>
                    <button
                      className="btn-supprimer"
                      onClick={() => handleDeleteFormation(index)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GestionFormations;