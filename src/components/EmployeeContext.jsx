import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      nom: "Jean Dupont",
      email: "jean.dupont@example.com",
      telephone: "0612345678",
      departement: "Finance",
      poste: "Analyste",
      photo: "https://via.placeholder.com/50",
    },
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: prevEmployees.length + 1, ...newEmployee },
    ]);
  };

  const removeEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
