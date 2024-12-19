const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forum_discussion",
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err);
    return;
  }
  console.log("Connexion à la base de données réussie");
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

  // Vérification des champs obligatoires
  if (
    !nom ||
    !sexe ||
    !dateNaissance ||
    !lieuNaissance ||
    !departement ||
    !telephone ||
    !email ||
    !status ||
    !dernierDiplome ||
    !anneeTerminee ||
    !tuteurNom1 ||
    !tuteurTelephone1 ||
    !tuteurNom2 ||
    !tuteurTelephone2 ||
    !sante
  ) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires.",
    });
  }

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

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
