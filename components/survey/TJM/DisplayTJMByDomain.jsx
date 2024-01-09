import React from "react";
import LoadingData from "@/components/loader/LoadingData";
import Image from "next/image";

const DisplayTJMByDomain = ({ data }) => {
  const getDomainLabel = (cppDomain) => {
    switch (cppDomain) {
      case "softwareDevelopment":
        return "Software";
      case "3DSimulationAndVideoGames":
        return "Simulation 3D";
      case "embeddedSystemsAndRobotics":
        return "Embedded";
      case "scientificComputingAndResearch":
        return "Recherche";
      case "highPerformanceAndFinance":
        return "HPC";
      case "dataScienceAndAI":
        return "IA";
      case "networksAndTelecommunications":
        return "Réseaux";
      case "other":
        return "Autre";
      default:
        return "Inconnu";
    }
  };
  // Fonction pour calculer le nombre d'objets par domaine
  const calcNumberByDomains = (data) => {
    if (!data || data.length === 0) {
      return {}; // Retourne un objet vide si les données sont vides
    }

    // Utilisation d'un objet pour stocker le nombre d'objets par domaine
    const countByDomains = {};

    // Parcours de l'array de données
    data.forEach((item) => {
      const domain = item.cppDomains;

      // Incrémentation du compteur pour le domaine actuel
      countByDomains[domain] = (countByDomains[domain] || 0) + 1;
    });

    return countByDomains;
  };

  // Initialisation de countByDomains
  const countByDomains = calcNumberByDomains(data);

  // Fonction pour calculer la moyenne des TJM par domaine
  const calculateAverageTJM = () => {
    if (!data || data.length === 0) {
      return {}; // Retourne un objet vide si les données sont vides
    }

    // Utilisation d'un objet pour stocker la somme et le nombre d'objets par domaine
    const totalTJMByDomains = {};
    const countByDomains = {};

    // Parcours de l'array de données
    data.forEach((item) => {
      const domain = item.cppDomains;
      const tjm = parseInt(item.tjm, 10);

      // Initialisation des compteurs pour le domaine actuel
      totalTJMByDomains[domain] = totalTJMByDomains[domain] || 0;
      countByDomains[domain] = countByDomains[domain] || 0;

      // Ajout du TJM à la somme et incrémentation du nombre d'objets
      totalTJMByDomains[domain] += tjm;
      countByDomains[domain]++;
    });

    // Calcul de la moyenne pour chaque domaine
    const averageTJMByDomains = {};
    Object.keys(totalTJMByDomains).forEach((domain) => {
      averageTJMByDomains[domain] =
        totalTJMByDomains[domain] / countByDomains[domain];
    });

    return averageTJMByDomains;
  };

  const averageTJMByDomains = calculateAverageTJM();

  return (
    <div className="display-data-tjm-by-domain">
      {data && data.length > 0 ? (
        <>
          {/* Afficher les données groupées */}
          {Object.keys(averageTJMByDomains).map((domain) => (
            <div className="chart-domain-container" key={domain}>
              <p className="label-domain">{`${getDomainLabel(domain)} :`}</p>
              <div className="chart-track">
                <div
                  className="score"
                  style={{
                    width: `${(countByDomains[domain] / data.length) * 100}%`,
                  }}
                >{`Moyenne : ${averageTJMByDomains[domain].toFixed(
                  2
                )} €`}</div>
              </div>
            </div>
          ))}
          <div className="legend-container">
            <div className="legend">
              <Image src="/code.png" width={24} height={24} alt="TJM moyenne" />
              <p>Moyenne des TJ selon les types de missions des répondants.</p>
            </div>
            <div className="legend">
              <div className="track-legend"></div>
              <p>% de répondants</p>
            </div>
          </div>
        </>
      ) : (
        <LoadingData text={"Chargement des données"} />
      )}
    </div>
  );
};

export default DisplayTJMByDomain;
