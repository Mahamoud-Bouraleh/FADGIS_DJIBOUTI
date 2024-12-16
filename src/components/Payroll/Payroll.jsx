import React, { useState, useContext } from "react";
import "./Payrol.css";
import { DataContext } from "../../context/DataContext";
import GeneratePayroll from "./submenu/GeneratePayroll";
import TaxReduction from "./submenu/TaxReduction";
import DataTable from "react-data-table-component";
import { Button, Input, InputGroup } from "reactstrap";

const Payrol = () => {
  const { employeeData, setEmployeeData } = useContext(DataContext); // Chargement des données du contexte
  const [activeTab, setActiveTab] = useState("TaxReduction"); // Onglet actif

  // Suppression d'un employé par ID
  const handleDelete = (id) => {
    const updatedData = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(updatedData);
    alert("Employé supprimé !");
  };

  // Gestion du changement d'onglet
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Colonnes pour le tableau des employés
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Nom", selector: (row) => row.nom, sortable: true },
    { name: "Salaire", selector: (row) => row.salary, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <Button color="danger" size="sm" onClick={() => handleDelete(row.id)}>
          Supprimer
        </Button>
      ),
    },
  ];

  return (
    <div className="payrol-page">
      <header className="page-header">
        <h1>Gestion Financière</h1>
      </header>

      {/* Sous-menu horizontal */}
      <nav className="submenu">
        <ul>
          <li
            className={activeTab === "TaxReduction" ? "active" : ""}
            onClick={() => handleTabClick("TaxReduction")}
          >
            Réduction d'Impôts
          </li>
          <li
            className={activeTab === "GeneratePayroll" ? "active" : ""}
            onClick={() => handleTabClick("GeneratePayroll")}
          >
            Générer le Payroll
          </li>
          <li
            className={activeTab === "EmployeeList" ? "active" : ""}
            onClick={() => handleTabClick("EmployeeList")}
          >
            Liste des Employés
          </li>
        </ul>
      </nav>

      {/* Contenu dynamique en fonction de l'onglet actif */}
      <div className="content">
        {activeTab === "TaxReduction" && <TaxReduction />}
        {activeTab === "GeneratePayroll" && <GeneratePayroll />}
        {activeTab === "EmployeeList" && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Liste des Employés</h2>
              <div>
                <Button className="btn-success me-2">Exporter Excel</Button>
                <Button color="primary">Imprimer</Button>
              </div>
            </div>

            <InputGroup className="mb-3">
              <Input placeholder="Rechercher ici" />
            </InputGroup>

            <DataTable
              className="table"
              columns={columns}
              data={employeeData}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payrol;
