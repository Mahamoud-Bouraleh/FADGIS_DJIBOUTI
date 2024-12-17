// Personnel.jsx
import React from 'react';
import './Personnel.css';

const Personnel = () => {
    return (
        <div>
            <h3>Affiche Emploi</h3>
            <p>Liste du personnel militaire actif.</p>
            {/* Exemple de tableau pour afficher les membres du personnel */}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Grade</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soldat Dupont</td>
                        <td>Soldat</td>
                        <td>Infanterie</td>
                    </tr>
                    <tr>
                        <td>Caporal Martin</td>
                        <td>Caporal</td>
                        <td>Logistique</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Personnel;
