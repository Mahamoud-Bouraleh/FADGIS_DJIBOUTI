// Planification.jsx
import React, { useState, useContext } from 'react';
import {
  Calendar,
  Users,
  Clock,
  FileText,
  PlusCircle,
  Save,
} from 'lucide-react';
import { EmployeeContext } from '../EmployeeContext'; // Chemin corrigé
import './PlanningAutomatique.css';

const PlanningAutomatique = () => {
  const { employees } = useContext(EmployeeContext); // Utiliser les employés du contexte
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    employeeId: '',
    date: '',
    startTime: '',
    endTime: '',
    type: 'Horaires Normaux',
  });

  const addEmployeeToShift = () => {
    if (!newShift.employeeId) {
      alert("Veuillez sélectionner un employé avant d'ajouter au planning.");
      return;
    }
    const employee = employees.find(emp => emp.id === parseInt(newShift.employeeId, 10));
    if (!employee) {
      alert("L'employé sélectionné est introuvable.");
      return;
    }
    setShifts([...shifts, { ...newShift, id: shifts.length + 1 }]);
    setNewShift({ employeeId: '', date: '', startTime: '', endTime: '', type: 'Horaires Normaux' });
  };

  return (
    <div className="planning-container">
      <header className="header bg-blue-600 text-white">
        <h1 className="header-title flex items-center">
          <Calendar className="icon" />
          Planification des Horaires
        </h1>
      </header>

      {/* Liste des Employés */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title flex items-center">
            <Users className="icon text-blue-600" />
            Liste des Employés
          </h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Département</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.nom}</td>
                <td>{emp.departement}</td>
                <td>{emp.poste}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Création de Plannings */}
      <section className="section">
        <h2 className="section-title flex items-center">
          <Clock className="icon text-blue-600" />
          Création de Plannings
        </h2>
        <div className="form-grid">
          <select
            value={newShift.employeeId}
            onChange={(e) => setNewShift({ ...newShift, employeeId: e.target.value })}
            className="input"
          >
            <option value="">Sélectionner Employé</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.nom}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newShift.date}
            onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
            className="input"
          />
          <input
            type="time"
            value={newShift.startTime}
            onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
            className="input"
          />
          <input
            type="time"
            value={newShift.endTime}
            onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
            className="input"
          />
          <button onClick={addEmployeeToShift} className="btn btn-save">
            <Save className="icon" /> Enregistrer le Planning
          </button>
        </div>
      </section>

      {/* Plannings Existants */}
      <section className="section">
        <h2 className="section-title flex items-center">
          <FileText className="icon text-blue-600" />
          Plannings Existants
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Employé</th>
              <th>Date</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => {
              const employee = employees.find((emp) => emp.id === parseInt(shift.employeeId, 10));
              return (
                <tr key={shift.id}>
                  <td>{employee ? employee.nom : 'N/A'}</td>
                  <td>{shift.date}</td>
                  <td>{shift.startTime}</td>
                  <td>{shift.endTime}</td>
                  <td>{shift.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PlanningAutomatique;
