import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.png"; // Importez votre image (placez-la dans le même dossier ou indiquez le chemin correct)

const Login = ({ onLogin, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      {/* Ajout de l'image ici */}
      <div className="image-container">
        <img src={logo} alt="Logo" className="login-logo" />
      </div>
      

      <form onSubmit={handleSubmit} className="login-form">
        <h2>Se connecter</h2>
        <div className="input-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
