// Planification.jsx
import React, { useState } from 'react';
import './Planification.css';
import PlanningAutomatique from './submenu/PlanningAutomatique';

const Planification = () => {
    const [activeTab, setActiveTab] = useState('arme');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="planification-page">
            <h2>Planification</h2>
            <nav className="submenu">
                <ul>
                    <li
                        className={activeTab === 'arme' ? 'active' : ''}
                        onClick={() => handleTabClick('arme')}
                    >
                        Arme
                    </li>
                    <li
                        className={activeTab === 'vehicules' ? 'active' : ''}
                        onClick={() => handleTabClick('vehicules')}
                    >
                        Véhicules
                    </li>
                    <li
                        className={activeTab === 'formation' ? 'active' : ''}
                        onClick={() => handleTabClick('formation')}
                    >
                        Formation
                    </li>
                    <li
                        className={activeTab === 'personnel' ? 'active' : ''}
                        onClick={() => handleTabClick('personnel')}
                    >
                        Personnel
                    </li>
                    <li
                        className={activeTab === 'planningAutomatique' ? 'active' : ''}
                        onClick={() => handleTabClick('planningAutomatique')}
                    >
                        Planning Automatique
                    </li>
                </ul>
            </nav>

            <div className="tab-content">
                {activeTab === 'planningAutomatique' && <PlanningAutomatique />}
                {activeTab === 'vehicules' && <div>Contenu de la gestion des véhicules.</div>}
                {activeTab === 'formation' && <div>Contenu de la gestion des formations.</div>}
                {activeTab === 'personnel' && <div>Contenu de la gestion du personnel.</div>}
                {activeTab === ' nouveau ' && <div>Contenu du planning automatique.</div>}
            </div>
        </div>
    );
};

export default Planification;
