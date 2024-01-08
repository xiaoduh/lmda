import React from "react";
import LoadingData from "@/components/loader/LoadingData";
import Image from "next/image";

const DisplayTJMByDpt = ({ data }) => {
  // Utilisation d'un objet pour stocker la somme et le nombre d'objets par département
  const totalTJMByDpt = {};
  const countByDpt = {};

  // Fonction pour calculer la moyenne des TJM par département
  const calculateAverageTJMByDpt = () => {
    if (!data || data.length === 0) {
      return {}; // Retourne un objet vide si les données sont vides
    }

    // Parcours de l'array de données
    data.forEach((item) => {
      const dpt = item.clientDepartment;
      const tjm = parseInt(item.tjm, 10);

      // Initialisation des compteurs pour le département actuel
      totalTJMByDpt[dpt] = totalTJMByDpt[dpt] || 0;
      countByDpt[dpt] = countByDpt[dpt] || 0;

      // Ajout du TJM à la somme et incrémentation du nombre d'objets
      totalTJMByDpt[dpt] += tjm;
      countByDpt[dpt]++;
    });

    // Calcul de la moyenne pour chaque département
    const averageTJMByDpt = {};
    Object.keys(totalTJMByDpt).forEach((dpt) => {
      averageTJMByDpt[dpt] = totalTJMByDpt[dpt] / countByDpt[dpt];
    });

    return averageTJMByDpt;
  };

  const averageTJMByDpt = calculateAverageTJMByDpt();

  return (
    <div className="display-data-tjm-by-dpt">
      {data && data.length > 0 ? (
        <>
          {/* Afficher les données groupées */}
          {Object.keys(averageTJMByDpt).map((dpt) => (
            <div className="chart-domain-container" key={dpt}>
              <p className="label-domain">{`Département ${dpt} :`}</p>
              <div className="chart-track">
                <div
                  className="score"
                  style={{
                    width: `${(countByDpt[dpt] / data.length) * 100}%`,
                  }}
                >{`Moyenne TJM : ${averageTJMByDpt[dpt].toFixed(2)} €`}</div>
              </div>
            </div>
          ))}
          <div className="legend-container">
            <div className="legend">
              <Image
                src="/world.png"
                width={24}
                height={24}
                alt="TJM moyen par départements français"
              />
              <p>
                Moyenne des TJM selon le département des donneurs d&apos;ordre.
              </p>
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

export default DisplayTJMByDpt;
