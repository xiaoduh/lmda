"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingData from "../loader/LoadingData";

const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (!email || !pw) {
        setError("Veuillez compléter tout le formulaire");
        return;
      }

      // Envoi de la requête POST à l'endpoint http://localhost:10000/auth/signin
      const res = await axios.post(
        "http://localhost:10000/auth/signin",
        {
          email: email,
          password: pw,
        },
        {
          withCredentials: true, // Inclure les cookies dans la requête
          credentials: "include", // Inclure les cookies dans la requête
        }
      );

      if (res.data.errors) {
        setError(res.data.errors.email + res.data.errors.password);
      } else {
        if (res.data.is_verified) {
          console.log(res.data.message);
          setError("");

          // Stocker res.data dans sessionStorage
          sessionStorage.setItem("userData", JSON.stringify(res.data));

          // Redirection vers la page /plateforme/dashboard
          router.push("/plateforme/dashboard");
        } else {
          setError(res.data.message);
        }
      }
    } catch (error) {
      // Gestion des erreurs
      console.error(
        "Erreur lors de la soumission du formulaire de connexion:",
        error
      );

      // Ajoutez ici la logique pour gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur.
    }
  };

  return (
    <div className="form-container">
      {loading ? (
        <LoadingData
          text={"Vérification de vos données. Veuillez patienter."}
        />
      ) : (
        <form onSubmit={onSubmit} className="credential">
          <input
            type="email"
            placeholder="Email"
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
          <button type="submit" className="btn-blue">
            Se connecter
          </button>
        </form>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FormSignIn;
