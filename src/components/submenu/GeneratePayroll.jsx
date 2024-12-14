import React from "react";
import * as XLSX from "xlsx"; // Import the library for exporting Excel files
import "./GeneratePayroll.css";

const payrollData = [
  {
    id: 1,
    empId: "FRS00012",
    employeeName: "Jamal Omar Mohamed",
    baseSalary: 20000.0,
  },
  {
    id: 2,
    empId: "FRS00010",
    employeeName: "Mumino Omar Said",
    baseSalary: 30000.0,
  },
  {
    id: 3,
    empId: "FRS00011",
    employeeName: "Umeyma Mohamed Ibrahim",
    baseSalary: 35000.0,
  },
  {
    id: 4,
    empId: "FRS00007",
    employeeName: "Raho Abdoulkader Ismael",
    baseSalary: 63191.0,
  },
];

const calculatePayroll = (employee) => {
  const retirementContribution = employee.baseSalary * 0.04;
  const amuContribution = employee.baseSalary * 0.02;
  const deduction = employee.baseSalary * 0.157;
  const cnss = employee.baseSalary * 0.217;
  const taxableWages = employee.baseSalary - (retirementContribution + amuContribution + deduction + cnss);
  const its = taxableWages > 0 ? 0.1 * taxableWages : 0; // Example tax (10% on taxable wages)
  const netSalary = taxableWages - its;

  return {
    ...employee,
    retirementContribution,
    amuContribution,
    deduction,
    cnss,
    taxableWages,
    its,
    netSalary,
  };
};

const GeneratePayroll = () => {
  // Calculate payroll for all employees
  const calculatedPayroll = payrollData.map(calculatePayroll);

  // Function to export data to Excel
  const exportToExcel = () => {
    const headers = [
      "EMPID",
      "Employee Name",
      "Base Salary",
      "Retirement Contr 4%",
      "AMU Contr 2%",
      "Deduction 15.7%",
      "CNSS 21.7%",
      "Taxable Wages",
      "ITS",
      "Net Salary",
    ];

    const data = calculatedPayroll.map((item) => [
      item.empId,
      item.employeeName,
      item.baseSalary,
      item.retirementContribution.toFixed(2),
      item.amuContribution.toFixed(2),
      item.deduction.toFixed(2),
      item.cnss.toFixed(2),
      item.taxableWages.toFixed(2),
      item.its.toFixed(2),
      item.netSalary.toFixed(2),
    ]);

    // Combine headers and data
    const worksheetData = [["Generate Liste Payroll"], headers, ...data];

    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Merge cells for the title
    worksheet["!merges"] = [
      {
        s: { r: 0, c: 0 }, // Start cell (row 0, column 0)
        e: { r: 0, c: headers.length - 1 }, // End cell (row 0, last column)
      },
    ];

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Payroll Report");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, "Payroll_Report.xlsx");
  };

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
        <button className="btn export-btn" onClick={exportToExcel}>
          Export Report
        </button>
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
          {calculatedPayroll.map((employee, index) => (
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
