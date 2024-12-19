// GestionPromotionGrade.jsx
import React, { useState } from 'react';
import GestionPromotions from './submenu/GestionPromotions';
import GestionGrades from './submenu/GestionGrades';
import HistoriquePromotions from './submenu/HistoriquePromotions';
import HistoriqueGrades from './submenu/HistoriqueGrades';
import './GestionPromotionGrade.css';


const GestionPromotionGrade = () => {
  const [activeTab, setActiveTab] = useState('gestionPromotions');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="gestion-promotion-grades">
      <h1>Gestion des Promotions et Grades</h1>

      {/* Submenu */}
      <div className="submenus">
        <button
          className={`submenus-items ${activeTab === 'gestionPromotions' ? 'active' : ''}`}
          onClick={() => handleTabClick('gestionPromotions')}
        >
          Gestion des Promotions
        </button>
        <button
          className={`submenus-items ${activeTab === 'gestionGrades' ? 'active' : ''}`}
          onClick={() => handleTabClick('gestionGrades')}
        >
          Gestion des Grades
        </button>
        <button
          className={`submenus-items ${activeTab === 'historiquePromotions' ? 'active' : ''}`}
          onClick={() => handleTabClick('historiquePromotions')}
        >
          Historique des Promotions
        </button>
        <button
          className={`submenus-items ${activeTab === 'historiqueGrades' ? 'active' : ''}`}
          onClick={() => handleTabClick('historiqueGrades')}
        >
          Historique des Grades
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-contents">
        {activeTab === 'gestionPromotions' && <GestionPromotions />}
        {activeTab === 'gestionGrades' && <GestionGrades />}
        {activeTab === 'historiquePromotions' && <HistoriquePromotions />}
        {activeTab === 'historiqueGrades' && <HistoriqueGrades />}
      </div>
    </div>
  );
};

export default GestionPromotionGrade;
