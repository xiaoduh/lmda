"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageFailed from "../message/MessageFailed";
import MessageInformation from "../message/MessageInformation";

const FreelanceTJMForm = () => {
  const [experience, setExperience] = useState("");
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [cppDomains, setCppDomains] = useState("");
  const [showQuestion3, setShowQuestion3] = useState(false);
  const [tjm, setTjm] = useState("");
  const [showQuestion4, setShowQuestion4] = useState(false);
  const [clientDepartment, setClientDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { value: "01", label: "Ain" },
    { value: "02", label: "Aisne" },
    { value: "03", label: "Allier" },
    { value: "04", label: "Alpes-de-Haute-Provence" },
    { value: "05", label: "Hautes-Alpes" },
    { value: "06", label: "Alpes-Maritimes" },
    { value: "07", label: "Ardèche" },
    { value: "08", label: "Ardennes" },
    { value: "09", label: "Ariège" },
    { value: "10", label: "Aube" },
    { value: "11", label: "Aude" },
    { value: "12", label: "Aveyron" },
    { value: "13", label: "Bouches-du-Rhône" },
    { value: "14", label: "Calvados" },
    { value: "15", label: "Cantal" },
    { value: "16", label: "Charente" },
    { value: "17", label: "Charente-Maritime" },
    { value: "18", label: "Cher" },
    { value: "19", label: "Corrèze" },
    { value: "21", label: "Côte-d'Or" },
    { value: "22", label: "Côtes-d'Armor" },
    { value: "23", label: "Creuse" },
    { value: "24", label: "Dordogne" },
    { value: "25", label: "Doubs" },
    { value: "26", label: "Drôme" },
    { value: "27", label: "Eure" },
    { value: "28", label: "Eure-et-Loir" },
    { value: "29", label: "Finistère" },
    { value: "30", label: "Gard" },
    { value: "31", label: "Haute-Garonne" },
    { value: "32", label: "Gers" },
    { value: "33", label: "Gironde" },
    { value: "34", label: "Hérault" },
    { value: "35", label: "Ille-et-Vilaine" },
    { value: "36", label: "Indre" },
    { value: "37", label: "Indre-et-Loire" },
    { value: "38", label: "Isère" },
    { value: "39", label: "Jura" },
    { value: "40", label: "Landes" },
    { value: "41", label: "Loir-et-Cher" },
    { value: "42", label: "Loire" },
    { value: "43", label: "Haute-Loire" },
    { value: "44", label: "Loire-Atlantique" },
    { value: "45", label: "Loiret" },
    { value: "46", label: "Lot" },
    { value: "47", label: "Lot-et-Garonne" },
    { value: "48", label: "Lozère" },
    { value: "49", label: "Maine-et-Loire" },
    { value: "50", label: "Manche" },
    { value: "51", label: "Marne" },
    { value: "52", label: "Haute-Marne" },
    { value: "53", label: "Mayenne" },
    { value: "54", label: "Meurthe-et-Moselle" },
    { value: "55", label: "Meuse" },
    { value: "56", label: "Morbihan" },
    { value: "57", label: "Moselle" },
    { value: "58", label: "Nièvre" },
    { value: "59", label: "Nord" },
    { value: "60", label: "Oise" },
    { value: "61", label: "Orne" },
    { value: "62", label: "Pas-de-Calais" },
    { value: "63", label: "Puy-de-Dôme" },
    { value: "64", label: "Pyrénées-Atlantiques" },
    { value: "65", label: "Hautes-Pyrénées" },
    { value: "66", label: "Pyrénées-Orientales" },
    { value: "67", label: "Bas-Rhin" },
    { value: "68", label: "Haut-Rhin" },
    { value: "69", label: "Rhône" },
    { value: "70", label: "Haute-Saône" },
    { value: "71", label: "Saône-et-Loire" },
    { value: "72", label: "Sarthe" },
    { value: "73", label: "Savoie" },
    { value: "74", label: "Haute-Savoie" },
    { value: "75", label: "Paris" },
    { value: "76", label: "Seine-Maritime" },
    { value: "77", label: "Seine-et-Marne" },
    { value: "78", label: "Yvelines" },
    { value: "79", label: "Deux-Sèvres" },
    { value: "80", label: "Somme" },
    { value: "81", label: "Tarn" },
    { value: "82", label: "Tarn-et-Garonne" },
    { value: "83", label: "Var" },
    { value: "84", label: "Vaucluse" },
    { value: "85", label: "Vendée" },
    { value: "86", label: "Vienne" },
    { value: "87", label: "Haute-Vienne" },
    { value: "88", label: "Vosges" },
    { value: "89", label: "Yonne" },
    { value: "90", label: "Territoire de Belfort" },
    { value: "91", label: "Essonne" },
    { value: "92", label: "Hauts-de-Seine" },
    { value: "93", label: "Seine-Saint-Denis" },
    { value: "94", label: "Val-de-Marne" },
    { value: "95", label: "Val-d'Oise" },
  ];

  const cppDomainsArr = [
    { value: "softwareDevelopment", label: "Développement software" },
    {
      value: "3DSimulationAndVideoGames",
      label: "Simulation 3D et Jeux vidéo",
    },
    {
      value: "embeddedSystemsAndRobotics",
      label: "Systèmes embarqués et Robotique",
    },
    {
      value: "scientificComputingAndResearch",
      label: "Calculs scientifiques et Recherches",
    },
    {
      value: "highPerformanceAndFinance",
      label: "Haute Performance et Finance",
    },
    { value: "dataScienceAndAI", label: "Data Science et IA" },
    {
      value: "networksAndTelecommunications",
      label: "Réseaux et Télécommunications",
    },
    { value: "other", label: "Autre" },
    // Ajoutez d'autres domaines au besoin
  ];

  useEffect(() => {
    const hasSubmittedSurvey = document.cookie.includes(
      "survey_freelance_submitted=true"
    );
    setSubmitted(hasSubmittedSurvey);
  }, []);

  const handleFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formMess = document.querySelector(".output-mess");

    try {
      const response = await axios.post(
        "https://lmdaapi.onrender.com/survey/freelance",
        {
          experience,
          cppDomains,
          tjm,
          clientDepartment,
        }
      );

      formMess.innerHTML =
        "<p class='success'>Votre réponse a bien été envoyée ! 🚀</p>";

      setTimeout(() => {
        formMess.innerHTML = "";
      }, 6500);

      console.log("Réponse de la requête POST :", response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        formMess.innerHTML =
          "<p class='failed'>Les champs experience et tjm doivent contenir uniquement des chiffres. Veuillez réessayer ❌</p>";
      } else {
        formMess.innerHTML =
          "<p class='failed'>Une erreur s'est produite, veuillez réessayer ❌</p>";
      }
      setTimeout(() => {
        formMess.innerHTML = "";
      }, 6500);

      console.error("Erreur lors de la requête POST :", error);
    } finally {
      setExperience("");
      setCppDomains("");
      setTjm("");
      setClientDepartment("");
      setLoading(false);

      // Créer un cookie pour suivre l'état de la réponse
      document.cookie =
        "survey_freelance_submitted=true; max-age=" +
        30 * 24 * 60 * 60 +
        "; path=/data/freelance";
      // Exemple : cookie valide pendant 30 jours
    }
  };

  return (
    <>
      {submitted ? (
        <MessageInformation
          message={"Vous avez déjà repondu au sondage récemment."}
          button={"Voir les résultats"}
          linkRedirection={"/data/freelance/#data"}
        />
      ) : (
        <form onSubmit={handleFormSubmit} className="survey-freelance">
          <h2>Contribuer de manière anonyme.</h2>
          {/* Question 1: Expérience */}
          <label htmlFor="experience">Séniorité</label>
          <input
            type="text"
            id="experience"
            value={experience}
            autoComplete="false"
            onChange={(e) => {
              setExperience(e.target.value);
              setShowQuestion2(e.target.value !== ""); // Afficher Q2 si la réponse à Q1 n'est pas vide
            }}
            style={{
              border: experience ? "1px solid #2ED47A" : "1px solid initial",
              color: experience > 0 ? "#2ED47A" : "initial",
              background: experience ? "#2ed4794d" : "initial",
            }}
            required
          />

          {/* Question 2: Domaines d'application du C++ */}
          {true && (
            <>
              <label htmlFor="cppDomains">Domaine d&apos;application du C++</label>
              <select
                id="cppDomains"
                value={cppDomains}
                autoComplete="false"
                onChange={(e) => {
                  setCppDomains(e.target.value);
                  setShowQuestion3(e.target.value.length > 0); // Afficher Q3 si la réponse à Q2 n'est pas vide
                }}
                style={{
                  border:
                    cppDomains.length > 0
                      ? "1px solid #2ED47A"
                      : "1px solid initial",
                  color: cppDomains.length > 0 ? "#2ED47A" : "initial",
                  background: cppDomains.length > 0 ? "#2ed4794d" : "initial",
                }}
              >
                {cppDomainsArr.map((domain) => (
                  <option key={domain.value} value={domain.value}>
                    {domain.label}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Question 3: Dernier TJM facturé */}
          {true && (
            <>
              <label htmlFor="tjm">Dernier TJM facturé</label>
              <input
                type="number"
                id="tjm"
                value={tjm}
                autoComplete="false"
                onChange={(e) => {
                  setTjm(e.target.value);
                  setShowQuestion4(e.target.value !== ""); // Afficher Q4 si la réponse à Q3 n'est pas vide
                }}
                style={{
                  border: tjm ? "1px solid #2ED47A" : "1px solid initial",
                  color: tjm ? "#2ED47A" : "initial",
                  background: tjm ? "#2ed4794d" : "initial",
                }}
                required
              />
            </>
          )}

          {/* Question 4: Département du client */}
          {true && (
            <>
              <label htmlFor="clientDepartment">
                Département de votre client
              </label>
              <select
                id="clientDepartment"
                value={clientDepartment}
                autoComplete="false"
                onChange={(e) => setClientDepartment(e.target.value)}
                style={{
                  border: clientDepartment
                    ? "1px solid #2ED47A"
                    : "1px solid initial",
                  color: clientDepartment ? "#2ED47A" : "initial",
                  background: clientDepartment ? "#2ed4794d" : "initial",
                }}
                required
              >
                {departments.map((department) => (
                  <option key={department.value} value={department.value}>
                    {department.value}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Bouton de soumission */}
          {showQuestion2 &&
            showQuestion3 &&
            showQuestion4 &&
            clientDepartment !== "" && (
              <button type="submit" className="primaryBtn" disabled={loading}>
                {loading ? "Chargement...." : "Envoyer"}
              </button>
            )}

          <div className="output-mess"></div>
        </form>
      )}
    </>
  );
};

export default FreelanceTJMForm;
