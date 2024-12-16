import React, { useState } from "react";
import "./FormationCertifications.css";

const FormationCertifications = () => {
  const [catalogue, setCatalogue] = useState([
    { title: "Formation en Gestion de Projet", specialization: "Management", level: "Intermédiaire" },
    { title: "Développement Web Full-Stack", specialization: "Informatique", level: "Avancé" },
    { title: "Communication et Leadership", specialization: "Soft Skills", level: "Débutant" },
  ]);

  const [participants, setParticipants] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [feedback, setFeedback] = useState("");

  const handleRegister = (formation) => {
    setParticipants([...participants, { formation, status: "En cours" }]);
  };

  const handleCertification = (formation) => {
    const certificationDate = new Date();
    certificationDate.setFullYear(certificationDate.getFullYear() + 1); // Validité 1 an
    setCertifications([
      ...certifications,
      { formation, validUntil: certificationDate.toLocaleDateString() },
    ]);
  };

  const handleFeedbackSubmit = () => {
    alert(Feedback soumis : ${feedback});
    setFeedback("");
  };

  return (
    <div className="formation-certifications-container">
      <h1>Formation et Certifications</h1>

      {/* Catalogue des Formations */}
      <section className="catalogue">
        <h2>Catalogue des Formations Disponibles</h2>
        <ul>
          {catalogue.map((formation, index) => (
            <li key={index}>
              <span>
                {formation.title} - {formation.specialization} ({formation.level})
              </span>
              <button onClick={() => handleRegister(formation.title)}>
                S'inscrire
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Suivi des Participants */}
      <section className="participants">
        <h2>Inscription et Suivi des Participants</h2>
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant.formation} - {participant.status}
              <button onClick={() => handleCertification(participant.formation)}>
                Certifier
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Suivi des Certifications */}
      <section className="certifications">
        <h2>Suivi des Certifications</h2>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index}>
              {certification.formation} - Valide jusqu'au{" "}
              {certification.validUntil}
            </li>
          ))}
        </ul>
      </section>

      {/* Évaluation de la Formation */}
      <section className="feedback">
        <h2>Évaluation de la Formation</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Donnez votre avis sur la formation..."
        ></textarea>
        <button onClick={handleFeedbackSubmit}>Soumettre</button>
      </section>
    </div>
  );
};

export default FormationCertifications;