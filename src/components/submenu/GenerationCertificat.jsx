import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './GenerationCertificat.css';
import logo from '../../logo.png'; // Correction de l'importation

const GenerationCertificat = () => {
    const [formData, setFormData] = useState({
        armeId: '',
        nomArme: '',
        niveauFormation: '',
        dateFormation: '',
    });

    const [certificats, setCertificats] = useState([]); // Liste des certificats sauvegardés
    const certificateRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveCertificate();
        generatePDF(formData);
    };

    const saveCertificate = () => {
        setCertificats([...certificats, { ...formData }]);
    };

    const generatePDF = (data) => {
        const input = certificateRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save(`Certificat_${data.nomArme}.pdf`);
        });
    };

    const printCertificate = () => {
        window.print();
    };

    return (
        <div className="generation-certificat">
            <h2>Génération de Certificat</h2>
            <form onSubmit={handleSubmit} className="certificat-form">
                <div className="form-group">
                    <label>ID de l'Arme</label>
                    <input
                        type="text"
                        name="armeId"
                        value={formData.armeId}
                        onChange={handleChange}
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
                        required
                    />
                </div>
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
                <button type="submit" className="btn-submit">Générer et Sauvegarder</button>
            </form>

            {/* Certificat en aperçu */}
            <div className="certificate-preview" ref={certificateRef}>
                <img src={logo} alt="Logo" className="logo" />
                <h1>REPUBLIQUE DE DJIBOUTI</h1>
                <h2>FORCES ARMEES DJIBOUTIENNES (FAD)</h2>
                <hr />
                <h3>Félicitations à :</h3>
                <h2>{formData.nomArme}</h2>
                <p>ID Arme : {formData.armeId}</p>
                <p>Niveau de Formation : {formData.niveauFormation}</p>
                <p>Date de Formation : {formData.dateFormation}</p>
                <p>Pour sa réussite et ses efforts distingués.</p>
                <br />
                <p className="signature">Signature du Responsable</p>
            </div>

            {/* Liste des certificats sauvegardés */}
            <h3>Certificats Sauvegardés</h3>
            <ul>
                {certificats.map((cert, index) => (
                    <li key={index}>
                        {cert.nomArme} - {cert.niveauFormation} - {cert.dateFormation}
                        <button onClick={() => generatePDF(cert)}>Imprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenerationCertificat;
