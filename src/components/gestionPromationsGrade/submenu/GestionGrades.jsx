import React, { useState } from 'react';

const GestionGrades = () => {
  const [grades, setGrades] = useState([]);
  const [newGrade, setNewGrade] = useState('');

  const handleAddGrade = () => {
    if (newGrade) {
      setGrades([...grades, { id: Date.now(), name: newGrade }]);
      setNewGrade('');
    }
  };

  const handleDeleteGrade = (id) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  return (
    <div>
      <h2>Gestion des Grades</h2>
      <input
        type="text"
        placeholder="Nom du grade"
        value={newGrade}
        onChange={(e) => setNewGrade(e.target.value)}
      />
      <button onClick={handleAddGrade}>Ajouter Grade</button>
      <ul>
        {grades.map((grade) => (
          <li key={grade.id}>
            {grade.name}
            <button onClick={() => handleDeleteGrade(grade.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionGrades;
