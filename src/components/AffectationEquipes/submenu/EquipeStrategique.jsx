import React, { useState } from "react";
import "./EquipeStrategique.css";

const EquipeStrategique = () => {
  const [strategicTeam, setStrategicTeam] = useState([]);

  const handleAddMember = () => {
    const name = prompt("Entrez le nom du membre de l'équipe stratégique :");
    if (name) {
      setStrategicTeam([...strategicTeam, { id: strategicTeam.length + 1, name }]);
    }
  };

  const handleRemoveMember = (id) => {
    setStrategicTeam(strategicTeam.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h2>Gestion de l'Équipe Stratégique</h2>
      <button onClick={handleAddMember}>Ajouter un membre</button>
      <ul>
        {strategicTeam.map((member) => (
          <li key={member.id}>
            {member.name}{" "}
            <button onClick={() => handleRemoveMember(member.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipeStrategique;
