import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./GenerationCertificat.css";
import logo from "../../logo.png";

const GenerationCertificat = () => {
  const [formData, setFormData] = useState({
    armeId: "",
    nomArme: "",
    niveauFormation: "",
    dateFormation: "",
  });

  const certificateRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Certificat_${formData.nomArme}.pdf`);
    });
  };

  return (
    <div className="generation-certificat-container">
      {/* Formulaire de création */}
      <form onSubmit={handleGenerate} className="certificat-form">
        <h2>Génération de Certificat</h2>
        <div className="form-row">
          <div className="form-group">
            <label>ID de l'Arme</label>
            <input
              type="text"
              name="armeId"
              value={formData.armeId}
              onChange={handleChange}
              placeholder="Entrez l'ID de l'Arme"
              required
            />
          </div>
          <div className="form-group">
            <label>Nom de l'Arme</label>
            <input
              type="text"
              name="nomArme"
              value={formData.nomArme}
              onChange={handleChange}
              placeholder="Entrez le Nom de l'Arme"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Niveau de Formation</label>
            <select
              name="niveauFormation"
              value={formData.niveauFormation}
              onChange={handleChange}
              required
            >
              <option value="">-- Sélectionnez --</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date de Formation</label>
            <input
              type="date"
              name="dateFormation"
              value={formData.dateFormation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-generate">
          Générer le Certificat
        </button>
      </form>

      {/* Certificat à générer */}
      <div className="certificate-preview" ref={certificateRef}>
        <div className="certificate-border">
          <img src={logo} alt="Logo" className="certificate-logo" />
          <h1 className="certificate-title">Certificat de Formation</h1>
          <p className="certificate-subtitle">FORCES ARMEES DJIBOUTIENNES</p>
          <hr />
          <p className="certificate-recipient">Décerné à</p>
          <h2 className="certificate-name">{formData.nomArme || "Nom de l'Arme"}</h2>
          <p className="certificate-details">
            ID Arme : {formData.armeId || "XXXXXX"} <br />
            Niveau de Formation : {formData.niveauFormation || "Niveau"} <br />
            Date de Formation : {formData.dateFormation || "JJ/MM/AAAA"}
          </p>
          <div className="certificate-letter">
            <p>
              Félicitations pour votre réussite exceptionnelle au programme de{" "}
              <strong>{formData.niveauFormation || "formation"}</strong>.
              Votre engagement et vos efforts ont été remarquables, et vous avez
              su démontrer une maîtrise exemplaire dans les domaines abordés
              lors de cette formation.
            </p>
            <p>
              Ce certificat est une reconnaissance officielle de votre
              accomplissement. Il témoigne de vos compétences et de votre
              capacité à relever les défis dans le cadre de vos fonctions au
              sein des <strong>Forces Armées Djiboutiennes</strong>.
            </p>
            <p>
              Nous vous souhaitons un avenir brillant et plein de succès dans
              vos missions. Continuez à exceller et à inspirer par votre
              dévouement.
            </p>
          </div>
          <p className="certificate-footer">Pour ses efforts et sa réussite exemplaires.</p>
          <div className="certificate-signature">
            <p>________________________</p>
            <p>Responsable de la Formation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationCertificat;
