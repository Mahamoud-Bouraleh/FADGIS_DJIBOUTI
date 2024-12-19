import React, { useState } from "react";
import "./EquipeMaintenace.css";

const EquipeMaintenance = () => {
  const [maintenanceTasks, setMaintenanceTasks] = useState([]);

  const handleAddMaintenance = () => {
    const maintenance = prompt("Entrez une nouvelle tâche de maintenance :");
    if (maintenance) {
      setMaintenanceTasks([
        ...maintenanceTasks,
        { id: maintenanceTasks.length + 1, maintenance },
      ]);
    }
  };

  const handleRemoveMaintenance = (id) => {
    setMaintenanceTasks(maintenanceTasks.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Gestion de l'Équipe Maintenance</h2>
      <button onClick={handleAddMaintenance}>Ajouter une tâche</button>
      <ul>
        {maintenanceTasks.map((item) => (
          <li key={item.id}>
            {item.maintenance}{" "}
            <button onClick={() => handleRemoveMaintenance(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipeMaintenance;
