import React, { useContext, useState } from "react";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import { Button, Input, InputGroup } from "reactstrap";
import * as XLSX from "xlsx"; // Pour l'export Excel
import jsPDF from "jspdf"; // Pour l'impression PDF
import { useNavigate } from "react-router-dom"; // Pour la navigation
import InfoDepartement from "./InfoDepartement";
import AjoutArme from "./AjoutArme";
import ImportListe from "./ImportListe";
import DataTable from "react-data-table-component";
import { EmployeeContext } from "../EmployeeContext"; 
import "./GestionEmploy.css";

const GestionEmploy = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const navigate = useNavigate(); // Initialisation de la navigation
  const [activeTab, setActiveTab] = useState("Gestion des employés");
  const [searchTerm, setSearchTerm] = useState(""); // Pour la recherche

  // Filtrer les employés en fonction de la recherche
  const filteredEmployees = employees.filter((employee) =>
    employee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.telephone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.departement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleView = (employee) => {
    navigate("/employe-detail", { state: { employee } });
  };

  const handleDelete = (nom) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${nom} ?`)) {
      const updatedData = employees.filter((employee) => employee.nom !== nom);
      setEmployees(updatedData);
      alert("Employé supprimé définitivement !");
    }
  };

  const handleEdit = (employee) => {
    navigate("/modifier-employe", { state: { employee } }); // Navigue vers la page de modification
  };

  // Télécharger les données en format Excel
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredEmployees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employés");
    XLSX.writeFile(workbook, "Employes.xlsx");
  };

  // Télécharger les données en format PDF
  const handlePrintWord = () => {
    const doc = new jsPDF();
    let content = `Liste des Employés\n\n`;

    filteredEmployees.forEach((employee, index) => {
      content += `${index + 1}. Nom: ${employee.nom}, Email: ${employee.email}, Téléphone: ${employee.telephone}, Département: ${employee.departement}\n`;
    });

    doc.text(content, 10, 10);
    doc.save("Employes.pdf");
  };

  const columns = [
    {
      name: "Photo",
      selector: (row) => (
        <img
          src={row.photo || "https://via.placeholder.com/50"}
          alt="Photo"
          width={50}
        />
      ),
    },
    { name: "Nom", selector: (row) => row.nom, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Téléphone", selector: (row) => row.telephone, sortable: true },
    { name: "Département", selector: (row) => row.departement, sortable: true },
    { name: "Poste", selector: (row) => row.poste, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="actions-column">
          <Button
            size="sm"
            color="info"
            onClick={() => handleView(row)} // Voir
            className="action-btn"
          >
            <FaEye /> Voir
          </Button>
          <Button
            size="sm"
            color="warning"
            onClick={() => handleEdit(row)} // Modifier
            className="action-btn"
          >
            <FaEdit /> Modifier
          </Button>
          <Button
            size="sm"
            color="danger"
            onClick={() => handleDelete(row.nom)} // Supprimer
            className="action-btn"
          >
            <FaTrash /> Supprimer
          </Button>
        </div>
      ),
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="gestion-employ-page">
      <header className="page-header">
        <h1>Gestion des employés</h1>
      </header>

      {/* Navigation des sous-menus */}
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
            Ajouter Arme
          </li>
          <li
            className={activeTab === "Import Liste" ? "active" : ""}
            onClick={() => handleTabClick("Import Liste")}
          >
            Import Liste
          </li>
          <li
            className={activeTab === "InfoDepartement" ? "active" : ""}
            onClick={() => handleTabClick("InfoDepartement")}
          >
            InfoDepartement
          </li>
        </ul>
      </nav>

      {/* Contenu dynamique */}
      <div className="content">
        {activeTab === "Gestion des employés" && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex w-100">
                <InputGroup className="mb-3 flex-grow-1 me-2">
                  <Input
                    placeholder="Rechercher ici"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
                <Button
                  className="btn-success me-2"
                  onClick={handleDownloadExcel}
                >
                  Excel
                </Button>
                <Button color="primary" onClick={handlePrintWord}>
                  Imprimer
                </Button>
              </div>
            </div>

            <DataTable
              className="table"
              columns={columns}
              data={filteredEmployees}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        )}
        {activeTab === "Ajouter Arme" && <AjoutArme />}
        {activeTab === "Import Liste" && <ImportListe />}
        {activeTab === "InfoDepartement" && <InfoDepartement />}
      </div>
    </div>
  );
};

export default GestionEmploy;
