import React, { useState, useContext } from "react";
import "./GestionEmploy.css";
import { DataContext } from "../context/DataContext";

import GeneratePayroll from "./submenu/GeneratePayroll";
import DataTable from "react-data-table-component";
import { Button, Input, InputGroup } from "reactstrap";

const GestionEmploy = () => {
  // const { employeeData, setEmployeeData } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState("Gestion des employés");

  // Sample employee data
 



  // Delete employee by ID
  const handleDelete = (id) => {
    const updatedData = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData(updatedData);
    alert("Employé supprimé !");
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeData([...employeeData, formData]);
    alert("Employee data saved!");
    setFormData({

    });
  };

  return (
    <div className="gestion-employ-page">
      <header className="page-header">
        <h1>Gestion des employés</h1>
      </header>

      <nav className="submenu">
        <ul>
          <li
            className={activeTab === "Gestion des employés" ? "active" : ""}
            onClick={() => handleTabClick("Gestion des employés")}
          >
            Gestion des employés
          </li>
          <li
            className={activeTab === "Ajouter Arme" ? "active" : ""}
            onClick={() => handleTabClick("Ajouter Arme")}
          >
            GeneratePayroll
          </li>
          <li
            className={activeTab === "GeneratePayroll" ? "active" : ""}
            onClick={() => handleTabClick("GeneratePayroll")}
          >
            Import Liste
          </li>
          <li
            className={activeTab === "Inactif Arme" ? "active" : ""}
            onClick={() => handleTabClick("Inactif Arme")}
          >
            Inactif Arme
          </li>
          <li
            className={activeTab === "Info Département" ? "active" : ""}
            onClick={() => handleTabClick("Info Département")}
          >
            Info Département
          </li>
        </ul>
      </nav>


      <div className="content">
        {activeTab === "Gestion des employés" && (
          <div className="d-flex justify-content-between mb-3">
            <h2>Liste des employés</h2>
            <div>
              <Button className="btn-success me-2">Excel</Button>
              <Button color="primary">Imprimer</Button>
            </div>

            <InputGroup className="mb-3">
              <Input placeholder="Rechercher ici" />
            </InputGroup>

            <DataTable
              className="table table-responsive table-bordered"
              columns={columns}
              data={employeeData}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        )}
        {activeTab === "Ajouter Arme" && <GeneratePayroll />}
        {activeTab === "Import Liste" && <ImportListe/>}
        {activeTab === "Inactif Arme" && <div>Content for Inactif Arme</div>}
        {activeTab === "Info Département" && (
          <div>Content for Info Département</div>
        )}
      </div>
    </div>
  );
};



export default Payroll;
