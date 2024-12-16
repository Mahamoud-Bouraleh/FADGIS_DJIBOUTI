// Personnel.jsx
import React, { useContext } from 'react';
import { EmployeeContext } from '../EmployeeContext';
import './Personnel.css';

const Personnel = () => {
  const { employees, shifts } = useContext(EmployeeContext);

  return (
    <div className="personnel-container">
      <header className="header bg-green-600 text-white">
        <h1 className="header-title">Planning Personnel</h1>
      </header>

      <section className="section">
        <h2>Horaires des Employés</h2>
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
                  <td>{employee ? employee.nom : 'Non attribué'}</td>
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

export default Personnel;
