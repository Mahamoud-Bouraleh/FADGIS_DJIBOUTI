import React, { useState } from 'react';
import './Planification.css';
import SuiviAbsences from './Planification/SuiviAbsences';
import CongesPermissions from './Planification/CongesPermissions';
import GestionHoraires from './Planification/GestionHoraires';
import Personnel from './Planification/Personnel';
import PlanningAutomatique from './Planification/PlanningAutomatique';






const Planification = () => {
    const [activeTab, setActiveTab] = useState('suiviAbsences');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="planification-page">
            <h2>Planification</h2>
            <nav className="submenu">
                <ul>
                    <li
                        className={activeTab === 'suiviAbsences' ? 'active' : ''}
                        onClick={() => handleTabClick('suiviAbsences')}
                    >
                        Suivi des Absences
                    </li>
                    <li
                        className={activeTab === 'congesPermissions' ? 'active' : ''}
                        onClick={() => handleTabClick('congesPermissions')}
                    >
                        Congés et Permissions
                    </li>
                    <li
                        className={activeTab === 'gestionHoraires' ? 'active' : ''}
                        onClick={() => handleTabClick('gestionHoraires')}
                    >
                        Gestion des Horaires de Travail
                    </li>
                    <li
                        className={activeTab === 'personnel' ? 'active' : ''}
                        onClick={() => handleTabClick('personnel')}
                    >
                        Affiche Emploi
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
                {activeTab === 'suiviAbsences' && <SuiviAbsences />}
                {activeTab === 'congesPermissions' && <CongesPermissions />}
                {activeTab === 'gestionHoraires' && <GestionHoraires />}
                {activeTab === 'personnel' && <Personnel />}
                {activeTab === 'planningAutomatique' && <PlanningAutomatique />}
            </div>
        </div>
    );
};

export default Planification;
