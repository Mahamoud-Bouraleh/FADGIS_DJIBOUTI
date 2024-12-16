import React from "react";
import * as XLSX from "xlsx"; // Pour l'exportation des fichiers Excel
import "./GeneratePayroll.css";

const donneesPaie = [
  {
    id: 1,
    empId: "FRS00012",
    employeeName: "Jamal Omar Mohamed",
    baseSalary: 20000.0,
  },
  {
    id: 2,
    empId: "FRS00010",
    employeeName: "Mumino Omar Said",
    baseSalary: 30000.0,
  },
  {
    id: 3,
    empId: "FRS00011",
    employeeName: "Umeyma Mohamed Ibrahim",
    baseSalary: 35000.0,
  },
  {
    id: 4,
    empId: "FRS00007",
    employeeName: "Raho Abdoulkader Ismael",
    baseSalary: 63191.0,
  },
];

// Calcul des salaires
const calculerPaie = (employe) => {
  const cotisationRetraite = employe.baseSalary * 0.04;
  const cotisationAMU = employe.baseSalary * 0.02;
  const deduction = employe.baseSalary * 0.157;
  const cnss = employe.baseSalary * 0.217;
  const salaireImposable =
    employe.baseSalary - (cotisationRetraite + cotisationAMU + deduction + cnss);
  const its = salaireImposable > 0 ? 0.1 * salaireImposable : 0; // Taxe 10%
  const salaireNet = salaireImposable - its;

  return {
    ...employe,
    cotisationRetraite,
    cotisationAMU,
    deduction,
    cnss,
    salaireImposable,
    its,
    salaireNet,
  };
};

const GenererPaie = () => {
  // Calculer la paie pour tous les employés
  const paieCalculee = donneesPaie.map(calculerPaie);

  // Exporter les données en format Excel
  const exporterExcel = () => {
    const entetes = [
      "ID EMPLOYÉ",
      "Nom de l'Employé",
      "Salaire de Base",
      "Retraite 4%",
      "AMU 2%",
      "Déduction 15.7%",
      "CNSS 21.7%",
      "Salaire Imposable",
      "ITS",
      "Salaire Net",
    ];

    const donnees = paieCalculee.map((item) => [
      item.empId,
      item.employeeName,
      item.baseSalary.toFixed(2),
      item.cotisationRetraite.toFixed(2),
      item.cotisationAMU.toFixed(2),
      item.deduction.toFixed(2),
      item.cnss.toFixed(2),
      item.salaireImposable.toFixed(2),
      item.its.toFixed(2),
      item.salaireNet.toFixed(2),
    ]);

    const feuilleDonnees = [["Rapport de Paie"], entetes, ...donnees];

    const feuille = XLSX.utils.aoa_to_sheet(feuilleDonnees);
    feuille["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: entetes.length - 1 } },
    ];

    const classeur = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(classeur, feuille, "Rapport de Paie");
    XLSX.writeFile(classeur, "Rapport_Paie.xlsx");
  };

  return (
    <div className="payroll-container">
      <div className="header">
        <h1>Générer la Paie</h1>
        <div className="filters">
          <select>
            <option>2024 -- Nov</option>
          </select>
          <select>
            <option>Faras</option>
          </select>
          <button className="btn show-btn">Afficher</button>
          <button className="btn generate-btn">Générer</button>
        </div>
      </div>

      <div className="search-export">
        <input
          type="text"
          placeholder="Rechercher un employé"
          className="search-input"
        />
        <button className="btn export-btn" onClick={exporterExcel}>
          Exporter Rapport
        </button>
      </div>

      <table className="payroll-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID EMPLOYÉ</th>
            <th>Nom de l'Employé</th>
            <th>Salaire de Base</th>
            <th>Retraite 4%</th>
            <th>AMU 2%</th>
            <th>Déduction 15.7%</th>
            <th>CNSS 21.7%</th>
            <th>Salaire Imposable</th>
            <th>ITS</th>
            <th>Salaire Net</th>
          </tr>
        </thead>
        <tbody>
          {paieCalculee.map((employe, index) => (
            <tr key={employe.id}>
              <td>{index + 1}</td>
              <td>{employe.empId}</td>
              <td>{employe.employeeName}</td>
              <td>{employe.baseSalary.toFixed(2)}</td>
              <td>{employe.cotisationRetraite.toFixed(2)}</td>
              <td>{employe.cotisationAMU.toFixed(2)}</td>
              <td>{employe.deduction.toFixed(2)}</td>
              <td>{employe.cnss.toFixed(2)}</td>
              <td>{employe.salaireImposable.toFixed(2)}</td>
              <td>{employe.its.toFixed(2)}</td>
              <td>{employe.salaireNet.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenererPaie;
