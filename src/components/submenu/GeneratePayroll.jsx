import React from 'react';
import './GeneratePayroll.css';

const payrollData = [
  {
    id: 1,
    empId: 'EBS00007',
    employeeName: 'Raho Abdoulkador Ismael',
    baseSalary: 63191.00,
    retirementContribution: 2527.64,
    amuContribution: 1263.82,
    deduction: 9920.99,
    cnss: 13712.45,
    taxableWages: 59399.54,
    its: 4400.00,
    netSalary: 54999.54,
  },
  // Ajoutez d'autres employés ici si nécessaire
];

const GeneratePayroll = () => {
  return (
    <div className="payroll-container">
      <h1>Generate Payroll</h1>
      <table className="payroll-table">
        <thead>
          <tr>
            <th>#</th>
            <th>EMPID</th>
            <th>Employee Name</th>
            <th>Base Salary</th>
            <th>Retirement Contr 4%</th>
            <th>AMU Contr 2%</th>
            <th>Deduction 15.7%</th>
            <th>CNSS 21.7%</th>
            <th>Taxable Wages</th>
            <th>ITS</th>
            <th>Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.empId}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.baseSalary.toFixed(2)}</td>
              <td>{employee.retirementContribution.toFixed(2)}</td>
              <td>{employee.amuContribution.toFixed(2)}</td>
              <td>{employee.deduction.toFixed(2)}</td>
              <td>{employee.cnss.toFixed(2)}</td>
              <td>{employee.taxableWages.toFixed(2)}</td>
              <td>{employee.its.toFixed(2)}</td>
              <td>{employee.netSalary.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneratePayroll;
