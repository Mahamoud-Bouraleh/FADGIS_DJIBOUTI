// GestionPromotionGrade.jsx
import React, { useState } from 'react';
import './GestionPromotionGrade.css';
import GestionPromotions from './submenu/GestionPromotions';
import GestionGrades from './submenu/GestionGrades';
import HistoriquePromotions from './submenu/HistoriquePromotions';
import HistoriqueGrades from './submenu/HistoriqueGrades';

const GestionPromotionGrade = () => {
  const [activeTab, setActiveTab] = useState('gestionPromotions');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="gestion-promotion-grade">
      <h1>Gestion des Promotions et Grades</h1>

      {/* Submenu */}
      <div className="submenu">
        <button
          className={`submenu-item ${activeTab === 'gestionPromotions' ? 'active' : ''}`}
          onClick={() => handleTabClick('gestionPromotions')}
        >
          Gestion des Promotions
        </button>
        <button
          className={`submenu-item ${activeTab === 'gestionGrades' ? 'active' : ''}`}
          onClick={() => handleTabClick('gestionGrades')}
        >
          Gestion des Grades
        </button>
        <button
          className={`submenu-item ${activeTab === 'historiquePromotions' ? 'active' : ''}`}
          onClick={() => handleTabClick('historiquePromotions')}
        >
          Historique des Promotions
        </button>
        <button
          className={`submenu-item ${activeTab === 'historiqueGrades' ? 'active' : ''}`}
          onClick={() => handleTabClick('historiqueGrades')}
        >
          Historique des Grades
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'gestionPromotions' && <GestionPromotions />}
        {activeTab === 'gestionGrades' && <GestionGrades />}
        {activeTab === 'historiquePromotions' && <HistoriquePromotions />}
        {activeTab === 'historiqueGrades' && <HistoriqueGrades />}
      </div>
    </div>
  );
};

export default GestionPromotionGrade;
