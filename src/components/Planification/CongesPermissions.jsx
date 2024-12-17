// CongesPermissions.jsx
import React from 'react';
import './CongesPermissions.css';

const CongesPermissions = () => {
    return (
        <div>
            <h3>Congés et Permissions</h3>
            <p>Cette section permet de gérer les demandes de congés et permissions des militaires.</p>
            {/* Exemple de tableau pour afficher les demandes */}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Type de congé</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soldat Dupont</td>
                        <td>01/02/2024</td>
                        <td>10/02/2024</td>
                        <td>Congé annuel</td>
                    </tr>
                    <tr>
                        <td>Caporal Martin</td>
                        <td>15/03/2024</td>
                        <td>20/03/2024</td>
                        <td>Permission exceptionnelle</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CongesPermissions;
