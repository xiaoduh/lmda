"use client";
import axios from "axios";
import React, { useState } from "react";
import MessageSuccess from "../message/MessageSuccess";

const FormSignUp = () => {
  const pattern =
    /^[^@]+@(?!gmail\.com|free\.fr|sfr\.fr|yahoo\.com|outlook\.com|aol\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com|yandex\.com|tutanota\.com)[^@]+\.[^@]+$/;

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [fonction, setFonction] = useState("");
  const [siret, setSiret] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [afficherMessage, setAfficherMessage] = useState(false);
  const [chargement, setChargement] = useState(false);
  const [error, setError] = useState();

  const isEmailValid = (email) => {
    const pattern =
      /^[^@]+@(?!gmail\.com|free\.fr|sfr\.fr|yahoo\.com|outlook\.com|aol\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com|yandex\.com|tutanota\.com)[^@]+\.[^@]+$/;
    return pattern.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si tous les champs obligatoires sont remplis
    if (!nom || !prenom || !fonction || !siret || !email || !pw) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    // Vérifier si l'e-mail est valide
    if (!isEmailValid(email)) {
      setEmail("");
      setError("Veuillez utiliser un email professionnel.");
      return;
    }

    // Mettre à jour l'état pour afficher le chargement
    setChargement(true);

    try {
      // Envoyer la requête POST avec Axios
      const response = await axios.post("http://localhost:10000/auth", {
        email,
        first_name: prenom,
        last_name: nom,
        business_registration_number: siret,
        professional_role: fonction,
        password: pw,
      });

      // Traiter la réponse si nécessaire
      console.log("Réponse du serveur:", response.data);
      if (response.data._id) {
        setAfficherMessage(true);
        // Réinitialiser les champs du formulaire après la création réussie de l'utilisateur
        setNom("");
        setPrenom("");
        setFonction("");
        setSiret("");
        setEmail("");
        setPw("");
      } else {
        setError(response.data.message);
        // Réinitialiser le champ siret car duplicate
        setNom("");
        setPrenom("");
        setFonction("");
        setSiret("");
        setEmail("");
        setPw("");
      }
    } catch (error) {
      // Gérer les erreurs lors de la requête
      console.error(
        "Erreur lors de la création de l'utilisateur:",
        error.response.data
      );
      alert("Erreur lors de la création de l'utilisateur. Veuillez réessayer.");
    } finally {
      // Mettre à jour l'état pour cacher le chargement
      setChargement(false);
    }
  };

  return (
    <>
      {/* Condition pour afficher le formulaire ou le message de succès */}
      {afficherMessage ? (
        <div className="form-container">
          <MessageSuccess
            message={
              "Votre demande d'inscription a bien été prise en compte. Nous reprendrons contact avec vous afin de valider les informations fournies."
            }
            button={"Se connecter"}
            linkRedirection={"/plateforme/connexion"}
          />
        </div>
      ) : (
        <div className="form-container">
          <form onSubmit={(e) => onSubmit(e)} className="credential">
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              style={{
                border: nom ? "1px solid #2ED47A" : "1px solid initial",
                color: nom ? "#2ED47A" : "initial",
                background: nom ? "#2ed4794d" : "initial",
              }}
            />
            <input
              type="text"
              placeholder="Prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              style={{
                border: prenom ? "1px solid #2ED47A" : "1px solid initial",
                color: prenom ? "#2ED47A" : "initial",
                background: prenom ? "#2ed4794d" : "initial",
              }}
            />
            <input
              type="text"
              placeholder="Fonction"
              value={fonction}
              onChange={(e) => setFonction(e.target.value)}
              style={{
                border: fonction ? "1px solid #2ED47A" : "1px solid initial",
                color: fonction ? "#2ED47A" : "initial",
                background: fonction ? "#2ed4794d" : "initial",
              }}
            />
            <input
              type="text"
              placeholder="SIRET"
              value={siret}
              onChange={(e) => setSiret(e.target.value)}
              style={{
                border: siret ? "1px solid #2ED47A" : "1px solid initial",
                color: siret ? "#2ED47A" : "initial",
                background: siret ? "#2ed4794d" : "initial",
              }}
            />
            <input
              type="email"
              placeholder="Email professionnel uniquement"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: email ? "1px solid #2ED47A" : "1px solid initial",
                color: email ? "#2ED47A" : "initial",
                background: email ? "#2ed4794d" : "initial",
              }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              style={{
                border: pw ? "1px solid #2ED47A" : "1px solid initial",
                color: pw ? "#2ED47A" : "initial",
                background: pw ? "#2ed4794d" : "initial",
              }}
            />
            <button type="submit" className="btn-blue" disabled={chargement}>
              {/* Condition pour afficher le loader ou le texte du bouton */}
              {chargement ? "Chargement..." : "Créer un compte"}
            </button>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      )}
    </>
  );
};

export default FormSignUp;
