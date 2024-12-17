import React, { useState } from 'react';

const GestionPromotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [newPromotion, setNewPromotion] = useState({ name: '', date: '' });

  const handleAddPromotion = () => {
    if (newPromotion.name && newPromotion.date) {
      setPromotions([...promotions, { ...newPromotion, id: Date.now() }]);
      setNewPromotion({ name: '', date: '' });
    }
  };

  const handleDeletePromotion = (id) => {
    setPromotions(promotions.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Gestion des Promotions</h2>
      <input
        type="text"
        placeholder="Nom de la promotion"
        value={newPromotion.name}
        onChange={(e) => setNewPromotion({ ...newPromotion, name: e.target.value })}
      />
      <input
        type="date"
        value={newPromotion.date}
        onChange={(e) => setNewPromotion({ ...newPromotion, date: e.target.value })}
      />
      <button onClick={handleAddPromotion}>Ajouter Promotion</button>
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>
            {promotion.name} - {promotion.date}
            <button onClick={() => handleDeletePromotion(promotion.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionPromotions;
