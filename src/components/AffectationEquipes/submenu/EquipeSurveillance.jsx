import React, { useState } from "react";
import "./EquipeSurveillance.css";

const EquipeSurveillance = () => {
  const [surveillanceZones, setSurveillanceZones] = useState([]);

  const handleAddZone = () => {
    const zone = prompt("Entrez une nouvelle zone de surveillance :");
    if (zone) {
      setSurveillanceZones([...surveillanceZones, { id: surveillanceZones.length + 1, zone }]);
    }
  };

  const handleRemoveZone = (id) => {
    setSurveillanceZones(surveillanceZones.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Gestion de l'Équipe Surveillance</h2>
      <button onClick={handleAddZone}>Ajouter une zone</button>
      <ul>
        {surveillanceZones.map((item) => (
          <li key={item.id}>
            {item.zone}{" "}
            <button onClick={() => handleRemoveZone(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipeSurveillance;
