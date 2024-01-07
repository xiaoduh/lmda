import React from "react";
import LoadingData from "@/components/loader/LoadingData";
import Image from "next/image";

const DisplayTJMByExp = ({ data }) => {
  // fonction pour calculer le nombre de réponses / experience
  const calcNumberExp = (data) => {
    if (!data || data.length === 0) {
      return {}; // Retourne un objet vide si les données sont vides
    }

    // Utilisation d'un objet pour stocker le nombre d'objets par valeur d'expérience
    const countByExperience = {};

    // Parcours de l'array de données
    data.forEach((item) => {
      const experience = item.experience;

      // Incrémentation du compteur pour la valeur d'expérience actuelle
      countByExperience[experience] = (countByExperience[experience] || 0) + 1;
    });

    return countByExperience;
  };

  const countByExperience = calcNumberExp(data);

  // Accéder aux valeurs dans countByExperience
  Object.keys(countByExperience).forEach((experience) => {
    const count = countByExperience[experience];
  });

  // Fonction pour calculer la moyenne des TJM par Exp
  const calculateAverageTJM = () => {
    if (!data || data.length === 0) {
      return 0; // Retourne 0 si les données sont vides
    }

    // Regroupe les objets par valeur du champ experience
    const groupedByExperience = data.reduce((acc, item) => {
      const experience = item.experience;
      acc[experience] = acc[experience] || [];
      acc[experience].push(item);
      return acc;
    }, {});

    // Calcul du nombre d'objets par valeur d'expérience
    Object.keys(groupedByExperience).forEach((experience) => {
      countByExperience[experience] = groupedByExperience[experience].length;
    });

    // Trie chaque groupe par le champ experience
    Object.keys(groupedByExperience).forEach((experience) => {
      groupedByExperience[experience] = groupedByExperience[experience].sort(
        (a, b) => parseInt(a.experience, 10) - parseInt(b.experience, 10)
      );
    });

    // Calcul de la moyenne pour chaque groupe
    Object.keys(groupedByExperience).forEach((experience) => {
      const totalTJM = groupedByExperience[experience].reduce(
        (acc, item) => acc + parseInt(item.tjm, 10),
        0
      );
      const averageTJM = totalTJM / groupedByExperience[experience].length;
      groupedByExperience[experience] = averageTJM;
    });

    return groupedByExperience;
  };

  const groupedData = calculateAverageTJM();

  return (
    <div className="display-data-tjm-by-exp">
      {data && data.length > 0 ? (
        <>
          {/* Afficher les données groupées */}
          {Object.keys(groupedData).map((experience) => (
            <div className="chart-domain-container" key={experience}>
              <p className="label-domain">{`${experience} ans d'expérience :`}</p>
              <div className="chart-track">
                <div
                  className="score"
                  style={{
                    width: `${
                      (countByExperience[experience] / data.length) * 100
                    }%`,
                  }}
                >{`Moyenne TJM : ${groupedData[experience].toFixed(2)} €`}</div>
              </div>
            </div>
          ))}
          <div className="legend-container">
            <div className="legend">
              <Image
                src="/exp.png"
                width={24}
                height={24}
                alt="TJM moyen par niveau d'experience"
              />
              <p>Moyenne des TJM réparties par séniorité des répondants.</p>
            </div>
          </div>
          <div className="legend">
            <div className="track-legend"></div>
            <p>% de répondants</p>
          </div>
        </>
      ) : (
        <LoadingData text={"Chargement des données"} />
      )}
    </div>
  );
};

export default DisplayTJMByExp;
