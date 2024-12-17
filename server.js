const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fadsig_djibouti",  // Nom de votre base de données
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion :", err);
  } else {
    console.log("Connecté à la base de données.");
  }
});

// Ajouter un employé
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
    INSERT INTO employes 
    (nom, sexe, date_naissance, lieu_naissance, departement, telephone, email, status, dernier_diplome, annee_terminee, tuteur_nom1, tuteur_telephone1, tuteur_nom2, tuteur_telephone2, sante)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
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
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erreur lors de l'ajout." });
      }
      res.status(201).json({ success: true, message: "Employé ajouté avec succès." });
    }
  );
});

// Lancer le serveur
app.listen(5000, () => console.log("Serveur sur le port 5000"));
