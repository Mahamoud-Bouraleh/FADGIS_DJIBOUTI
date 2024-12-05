import React, { useState, useContext } from "react";
import "./GestionEmploy.css";
import { DataContext } from "../context/DataContext";

import AjoutArme from "./submenu/AjoutArme";
import DataTable from "react-data-table-component";
import { Button, Input, InputGroup } from "reactstrap";

const GestionEmploy = () => {
  // const { employeeData, setEmployeeData } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState("Gestion des employés");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    departement: "",
    poste: "",
    photo: null,
  });

  // Sample employee data
  const [employeeData, setEmployeeData] = useState([
    {
      id: 1,
      nom: "Jean Dupont",
      email: "jean.dupont@example.com",
      telephone: "0612345678",
      departement: "Finance",
      poste: "Analyste",
      photo: "https://via.placeholder.com/50", // Placeholder photo
    },
    {
      id: 2,
      nom: "Marie Curie",
      email: "marie.curie@example.com",
      telephone: "0623456789",
      departement: "Recherche",
      poste: "Scientifique",
      photo: "https://via.placeholder.com/50",
    },
  ]);

  // Columns for DataTable
  const columns = [
    {
      name: "Photo",
      selector: (row) => <img src={row.photo} alt="Photo" width={50} />,
      sortable: false,
    },
    {
      name: "Nom",
      selector: (row) => row.nom,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Téléphone",
      selector: (row) => row.telephone,
      sortable: true,
    },
    {
      name: "Département",
      selector: (row) => row.departement,
      sortable: true,
    },
    {
      name: "Poste",
      selector: (row) => row.poste,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Button
            size="sm"
            color="info"
            onClick={() => alert(`Viewing ${row.nom}`)}
          >
            Voir
          </Button>
          <Button size="sm" color="danger" onClick={() => handleDelete(row.id)}>
            Supprimer
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];

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
      nom: "",
      email: "",
      telephone: "",
      departement: "",
      poste: "",
      photo: null,
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

      {/* <div className="content">
        {activeTab === "Gestion des employés" && (
          <div>
            <h2>Ajouter un nouvel employé</h2>
            <form className="employee-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Nom de l'employé"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email de l'employé"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="Numéro de téléphone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Département *</label>
                  <input
                    type="text"
                    name="departement"
                    value={formData.departement}
                    onChange={handleInputChange}
                    placeholder="Département"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Poste *</label>
                  <input
                    type="text"
                    name="poste"
                    value={formData.poste}
                    onChange={handleInputChange}
                    placeholder="Poste"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                  {formData.photo && (
                    <img
                      src={formData.photo}
                      alt="Aperçu de la photo"
                      className="photo-preview"
                    />
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-button">
                  Sauvegarder
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() =>
                    setFormData({
                      nom: "",
                      email: "",
                      telephone: "",
                      departement: "",
                      poste: "",
                      photo: null,
                    })
                  }
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )} */}
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
        {activeTab === "Ajouter Arme" && <AjoutArme />}
        {activeTab === "Import Liste" && <div>Content for Import Liste</div>}
        {activeTab === "Inactif Arme" && <div>Content for Inactif Arme</div>}
        {activeTab === "Info Département" && (
          <div>Content for Info Département</div>
        )}
      </div>
    </div>
  );
};

export default GestionEmploy;
