import React, { useState } from "react";
import "./TaxReduction.css"; // Importation des styles

const TaxReduction = () => {
  const [income, setIncome] = useState(0);
  const [dependents, setDependents] = useState(0);
  const [taxReduction, setTaxReduction] = useState(null);

  // Fonction pour calculer la réduction d'impôts
  const calculateTaxReduction = () => {
    const baseReduction = income * 0.1; // 10% du revenu pour l'exemple
    const dependentReduction = dependents * 1000; // 1000 pour chaque dépendant
    const totalReduction = baseReduction + dependentReduction;

    setTaxReduction(totalReduction.toFixed(2));
  };

  return (
    <div className="tax-reduction-container">
      <h1>Réduction d'Impôts</h1>
      <p>Calculez les réductions fiscales basées sur le revenu et les dépendants.</p>
      
      <div className="input-section">
        <div className="input-group">
          <label>Revenu Annuel (en €)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
            placeholder="Entrez votre revenu annuel"
          />
        </div>

        <div className="input-group">
          <label>Nombre de Dépendants</label>
          <input
            type="number"
            value={dependents}
            onChange={(e) => setDependents(parseInt(e.target.value) || 0)}
            placeholder="Entrez le nombre de dépendants"
          />
        </div>
      </div>

      <button onClick={calculateTaxReduction} className="calculate-btn">
        Calculer Réduction
      </button>

      {taxReduction !== null && (
        <div className="result-section">
          <h2>Réduction Totale</h2>
          <p>
            Votre réduction d'impôts est : <strong>{taxReduction} €</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default TaxReduction;
