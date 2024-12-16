// InscriptionsFormations.jsx
import React, { useState, useContext } from "react";
import { Button, Input, FormGroup, Label } from "reactstrap";
import { EmployeeContext } from "../EmployeeContext"; // Utilisation correcte du contexte

const InscriptionsFormations = () => {
  const { employees, setEmployees } = useContext(EmployeeContext); // Récupérer les employés
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [formation, setFormation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validation pour éviter les doublons
    const isAlreadyRegistered = employees.some(
      (emp) => emp.id === parseInt(selectedEmployee, 10) && emp.formation === formation
    );

    if (isAlreadyRegistered) {
      setError("Cet employé est déjà inscrit à cette formation.");
      return;
    }

    // Ajout de l'employé à la formation
    const updatedEmployees = employees.map((emp) =>
      emp.id === parseInt(selectedEmployee, 10) ? { ...emp, formation } : emp
    );

    setEmployees(updatedEmployees);
    setError("");
    alert("Inscription réussie !");
  };

  return (
    <div className="inscription-formations">
      <h2>Inscriptions aux Formations</h2>
      <FormGroup>
        <Label for="employee">Choisir un employé</Label>
        <Input
          type="select"
          name="employee"
          id="employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">Sélectionner un employé</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.nom} - {emp.email}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="formation">Nom de la formation</Label>
        <Input
          type="text"
          name="formation"
          id="formation"
          placeholder="Nom de la formation"
          value={formation}
          onChange={(e) => setFormation(e.target.value)}
        />
      </FormGroup>
      {error && <div className="error-message text-danger">{error}</div>}
      <Button color="primary" onClick={handleSubmit}>
        Inscrire
      </Button>
    </div>
  );
};

export default InscriptionsFormations;