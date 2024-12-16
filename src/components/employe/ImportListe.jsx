import React, { useContext } from 'react';
import * as XLSX from 'xlsx';
import { EmployeeContext } from '../EmployeeContext';

import './ImportListe.css';

const ImportListe = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);

  // Fonction pour télécharger un modèle Excel
  const handleDownloadTemplate = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      { nom: 'Exemple Nom', email: 'exemple@email.com', telephone: '12345678', departement: 'IT', poste: 'Développeur' }
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Modèle');
    XLSX.writeFile(workbook, 'modele_employes.xlsx');
  };

  // Fonction pour importer un fichier Excel
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const importedData = XLSX.utils.sheet_to_json(worksheet);

      // Mise à jour des employés avec les données importées
      setEmployees((prevEmployees) => [...prevEmployees, ...importedData]);
    };
    reader.readAsArrayBuffer(file);
  };

  // Fonction pour sauvegarder les données importées dans localStorage
  const handleSave = () => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees));
      alert('Données sauvegardées localement avec succès !');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde :', error);
      alert("Erreur lors de la sauvegarde des données.");
    }
  };

  // Fonction pour envoyer les données à une API
  const handleSaveToAPI = async () => {
    try {
      const response = await fetch('https://example.com/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employees),
      });

      if (response.ok) {
        alert('Données envoyées au serveur avec succès !');
      } else {
        alert("Erreur lors de l'envoi des données au serveur.");
      }
    } catch (error) {
      console.error('Erreur lors de la requête API :', error);
      alert("Erreur lors de l'envoi des données au serveur.");
    }
  };

  return (
    <div className="import-liste">
      <h2>Importation de la Liste</h2>
      <p>Téléchargez un modèle Excel ou importez vos propres données.</p>
      <div className="actions">
        <button className="btn btn-primary" onClick={handleDownloadTemplate}>
          Télécharger le modèle Excel
        </button>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="btn btn-secondary"
        />
        <button className="btn btn-success" onClick={handleSave}>
          Sauvegarder localement
        </button>
        <button className="btn btn-warning" onClick={handleSaveToAPI}>
          Sauvegarder sur le serveur
        </button>
      </div>
    </div>
  );
};

export default  ImportListe;