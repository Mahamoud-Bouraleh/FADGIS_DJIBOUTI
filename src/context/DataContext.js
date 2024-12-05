// src/context/DataContext.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [armeData, setArmeData] = useState({});
  const [employeeData, setEmployeeData] = useState([]);

  return (
    <DataContext.Provider value={{ armeData, setArmeData, employeeData, setEmployeeData }}>
      {children}
    </DataContext.Provider>
  );
};
