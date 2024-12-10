import React from "react";
import "./GeneratePayroll.css";

const payrollData = [
  {
    id: 1,
    empId: "FRS00012",
    employeeName: "Jamal Omar Mohamed",
    baseSalary: 20000.0,
    retirementContribution: 0.0,
    amuContribution: 0.0,
    deduction: 0.0,
    cnss: 0.0,
    taxableWages: 0.0,
    its: 0.0,
    netSalary: 20000.0,
  },
  {
    id: 2,
    empId: "FRS00010",
    employeeName: "Mumino Omar Said",
    baseSalary: 30000.0,
    retirementContribution: 0.0,
    amuContribution: 0.0,
    deduction: 0.0,
    cnss: 0.0,
    taxableWages: 0.0,
    its: 0.0,
    netSalary: 30000.0,
  },
  {
    id: 3,
    empId: "FRS00011",
    employeeName: "Umeyma Mohamed Ibrahim",
    baseSalary: 35000.0,
    retirementContribution: 0.0,
    amuContribution: 0.0,
    deduction: 0.0,
    cnss: 0.0,
    taxableWages: 0.0,
    its: 0.0,
    netSalary: 35000.0,
  },
  {
    id: 4,
    empId: "FRS00007",
    employeeName: "Raho Abdoulkader Ismael",
    baseSalary: 63191.0,
    retirementContribution: 2527.64,
    amuContribution: 1263.82,
    deduction: 9920.99,
    cnss: 13712.45,
    taxableWages: 59399.54,
    its: 4400.0,
    netSalary: 54999.54,
  },
];

const GeneratePayroll = () => {
  return (
    <div className="payroll-container">
      <div className="header">
        <h1>Generate Pay Roll</h1>
        <div className="filters">
          <select>
            <option>2024 -- Nov</option>
            {/* Add more options */}
          </select>
          <select>
            <option>Faras</option>
            {/* Add more companies */}
          </select>
          <button className="btn show-btn">Show</button>
          <button className="btn generate-btn">Generate</button>
        </div>
      </div>

      <div className="search-export">
        <input
          type="text"
          placeholder="Search Employee"
          className="search-input"
        />
        <button className="btn export-btn">Export Report</button>
      </div>

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
