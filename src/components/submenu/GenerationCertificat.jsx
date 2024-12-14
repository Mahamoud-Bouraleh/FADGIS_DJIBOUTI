// GenerationCertificat.jsx
import React, { useState } from 'react';
import './GenerationCertificat.css';

const GenerationCertificat = () => {
    const [formData, setFormData] = useState({
        armeId: '',
        nomArme: '',
        niveauFormation: '',
        dateFormation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour générer le certificat
        console.log('Certificat généré pour :', formData);
        alert('Certificat généré avec succès !');
    };

    return (
        <div className="generation-certificat">
            <h2>Génération de Certificat</h2>
            <form onSubmit={handleSubmit} className="certificat-form">
                <div className="form-group">
                    <label htmlFor="armeId">ID de l'Arme</label>
                    <input
                        type="text"
                        id="armeId"
                        name="armeId"
                        value={formData.armeId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nomArme">Nom de l'Arme</label>
                    <input
                        type="text"
                        id="nomArme"
                        name="nomArme"
                        value={formData.nomArme}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="niveauFormation">Niveau de Formation</label>
                    <select
                        id="niveauFormation"
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
                    <label htmlFor="dateFormation">Date de Formation</label>
                    <input
                        type="date"
                        id="dateFormation"
                        name="dateFormation"
                        value={formData.dateFormation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">Générer le Certificat</button>
            </form>
        </div>
    );
};

export default GenerationCertificat;
