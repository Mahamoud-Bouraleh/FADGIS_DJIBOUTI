const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; // Port du serveur

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fadsig_djibouti",
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données: ", err);
    return;
  }
  console.log("Connexion à la base de données réussie !");
});

// Middleware pour parser les données JSON
app.use(bodyParser.json());

// Route pour ajouter un employé
app.post("/ajouter-employe", (req, res) => {
  const {
      nom,
      sexe,
      dateNaissance,
      lieuNaissance,
      departement,
      telephone,
      email,
      status,
      dernierDiplome,
      anneeTerminee,
      tuteurNom1,
      tuteurTelephone1,
      tuteurNom2,
      tuteurTelephone2,
      sante,
  } = req.body;

  const query = `
      INSERT INTO employes (
          nom, sexe, date_naissance, lieu_naissance, departement, telephone, email,
          status, dernier_diplome, annee_terminee, tuteur_nom1, tuteur_telephone1,
          tuteur_nom2, tuteur_telephone2, sante
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
      nom,
      sexe,
      dateNaissance,
      lieuNaissance,
      departement,
      telephone,
      email,
      status,
      dernierDiplome,
      anneeTerminee,
      tuteurNom1,
      tuteurTelephone1,
      tuteurNom2,
      tuteurTelephone2,
      sante,
  ];

  db.query(query, values, (err, result) => {
      if (err) {
          console.error("Erreur lors de l'ajout de l'employé: ", err);
          return res.status(500).json({
              success: false,
              message: "Erreur lors de l'ajout de l'employé.",
          });
      }
      res.status(200).json({
          success: true,
          message: "Employé ajouté avec succès !",
      });
  });
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
