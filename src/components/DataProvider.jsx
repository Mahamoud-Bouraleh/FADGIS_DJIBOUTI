import React, { createContext } from "react";

export const EmployeeContext = createContext();

export const DataProvider = ({ children }) => {
  const value = {}; // Placez ici vos données ou fonctions à partager via le contexte

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};
