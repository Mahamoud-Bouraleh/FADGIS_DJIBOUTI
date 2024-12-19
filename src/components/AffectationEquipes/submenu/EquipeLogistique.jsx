import React, { useState } from "react";
import "./EquipeLogistique.css";

const EquipeLogistique = () => {
  const [logistics, setLogistics] = useState([]);

  const handleAddTask = () => {
    const task = prompt("Entrez une nouvelle tâche logistique :");
    if (task) {
      setLogistics([...logistics, { id: logistics.length + 1, task }]);
    }
  };

  const handleRemoveTask = (id) => {
    setLogistics(logistics.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Gestion de l'Équipe Logistique</h2>
      <button onClick={handleAddTask}>Ajouter une tâche</button>
      <ul>
        {logistics.map((item) => (
          <li key={item.id}>
            {item.task}{" "}
            <button onClick={() => handleRemoveTask(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipeLogistique;
