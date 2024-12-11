import React, { useContext, useState } from "react";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import "./GestionEmploy.css";
import InfoDepartement from "./submenu/InfoDepartement";
import AjoutArme from "./submenu/AjoutArme";
import ImportListe from "./submenu/ImportListe";
import DataTable from "react-data-table-component";
import { Button, Input, InputGroup } from "reactstrap";
import { EmployeeContext } from "./EmployeeContext";

const GestionEmploy = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [activeTab, setActiveTab] = useState("Gestion des employés");

  const handleDelete = (nom) => {
    const updatedData = employees.filter((employee) => employee.nom !== nom);
    setEmployees(updatedData);
    alert("Employé supprimé !");
  };

  const handleEdit = (employee) => {
    alert(`Modifier : ${employee.nom}`);
  };

  const columns = [
    {
      name: "Photo",
      selector: (row) => <img src={row.photo || "https://via.placeholder.com/50"} alt="Photo" width={50} />,
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
            onClick={() => alert(`Voir : ${row.nom}`)}
            className="action-btn"
          >
            <FaEye /> Voir
          </Button>

          
          <Button
            size="sm"
            color="warning"
            onClick={() => handleEdit(row)}
            className="action-btn"
          >
            <FaEdit /> Modifier
          </Button>


          <Button
            size="sm"
            color="danger"
            onClick={() => handleDelete(row.nom)}
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
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex w-100">
                <InputGroup className="mb-3 flex-grow-1 me-2">
                  <Input placeholder="Rechercher ici" />
                </InputGroup>
                <Button className="btn-success me-2">Excel</Button>
                <Button color="primary">Imprimer</Button>
              </div>
            </div>

            <DataTable
              className="table"
              columns={columns}
              data={employees}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        )}
        {activeTab === "Ajouter Arme" && <AjoutArme />}
        {activeTab === "Import Liste" && <ImportListe />}
        {activeTab === "Inactif Arme" && <div>Content for Inactif Arme</div>}
        {activeTab === "Info Département" && (
          <InfoDepartement employeeData={employees} />
        )}
      </div>
    </div>
  );
};

export default GestionEmploy;
