// GestionHoraires.jsx
import React from 'react';
import './GestionHoraires.css';

const GestionHoraires = () => {
    return (
        <div>
            <h3>Gestion des Horaires de Travail</h3>
            <p>Cette section permet de gérer les horaires de travail des militaires.</p>
            {/* Exemple de tableau pour afficher les horaires */}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Jour</th>
                        <th>Heure de début</th>
                        <th>Heure de fin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soldat Dupont</td>
                        <td>Lundi</td>
                        <td>08:00</td>
                        <td>16:00</td>
                    </tr>
                    <tr>
                        <td>Caporal Martin</td>
                        <td>Mardi</td>
                        <td>08:00</td>
                        <td>16:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GestionHoraires;
