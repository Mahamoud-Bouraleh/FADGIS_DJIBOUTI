// SuiviAbsences.jsx
import React from 'react';

const SuiviAbsences = () => {
    return (
        <div>
            <h3>Suivi des Absences</h3>
            <p>Cette section permet de suivre les absences des militaires.</p>
            {/* Exemple de tableau pour afficher les absences */}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Date d'absence</th>
                        <th>Motif</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soldat Dupont</td>
                        <td>01/01/2024</td>
                        <td>Maladie</td>
                    </tr>
                    <tr>
                        <td>Caporal Martin</td>
                        <td>15/02/2024</td>
                        <td>Congé</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SuiviAbsences;
