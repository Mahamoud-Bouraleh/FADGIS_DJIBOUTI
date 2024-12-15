const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Permettre l'utilisation de JSON dans les requêtes

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: "localhost",   // Adresse du serveur MySQL
  user: "root",        // Votre nom d'utilisateur MySQL
  password: "",        // Votre mot de passe MySQL
  database: "fadsig_djibouti", // Nom de la base de données
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
  } else {
    console.log("Connecté à la base de données MySQL.");
  }
});

// Récupérer tous les départements
app.get("/departements", (req, res) => {
  const query = "SELECT * FROM departement";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ajouter un département
app.post('/departements', (req, res) => {
  const { nom } = req.body;

  // Vérifier si le nom est fourni
  if (!nom || nom.trim() === "") {
    return res.status(400).json({ message: "Le nom du département est requis." });
  }

  // Log du nom reçu
  console.log("Nom du département reçu:", nom);

  // Insertion dans la base de données
  db.query('INSERT INTO departement (nom) VALUES (?)', [nom], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout du département:", err); // Log de l'erreur
      return res.status(500).json({ message: 'Erreur lors de l\'ajout du département' });
    }

    console.log("Département ajouté avec succès:", result); // Log de la réponse de l'ajout
    res.status(201).json({ id: result.insertId, nom }); // Retourner l'ID généré et le nom
  });
});

// Supprimer un département
app.delete("/departements/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM departement WHERE id = ?";
  
  // Supprimer le département avec l'ID donné
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Département supprimé avec succès." });
  });
});
// Récupérer tous les employés
app.get("/employes", (req, res) => {
  const query = "SELECT id, nom, email, telephone, departement FROM employes";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Supprimer un employé
app.delete("/employes/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM employes WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Employé supprimé avec succès." });
  });
});



// Lancer le serveur
app.listen(5000, () => {
  console.log("Serveur en cours d'exécution sur le port 5000.");
});
