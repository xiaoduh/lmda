"use client";
import LoadingData from "@/components/loader/LoadingData";
import Image from "next/image";

const DisplayDomainData = ({ data }) => {
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

  // Initialisation d'un objet pour suivre le nombre d'occurrences de chaque cppDomains
  const domainOccurrences = {};

  // Calcul du nombre d'occurrences de chaque cppDomains
  if (data) {
    data.forEach((item) => {
      const domain = item.cppDomains;
      domainOccurrences[domain] = (domainOccurrences[domain] || 0) + 1;
    });
  }

  const totalCount = data ? data.length : 0;

  return (
    <div className="display-data-domain">
      {data ? (
        <>
          {/* Affichage des pourcentages pour chaque cppDomains */}
          {Object.entries(domainOccurrences).map(([domain, count]) => (
            <div className="chart-domain-container" key={domain}>
              <p className="label-domain">{`${getDomainLabel(domain)} :`}</p>
              <div className="chart-track">
                <div
                  className="score"
                  style={{ width: `${(count / totalCount) * 100}%` }}
                >{`${((count / totalCount) * 100).toFixed(0)}%`}</div>
              </div>
            </div>
          ))}
          <div className="legend-container">
            <div className="legend">
              <Image src="/code.png" width={24} height={24} alt="TJM moyenne" />
              <p>Domaine d&apos;applications du C++ des répondants.</p>
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

export default DisplayDomainData;
