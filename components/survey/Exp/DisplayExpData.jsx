"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LoadingData from "@/components/loader/LoadingData";

const DisplayExpData = () => {
  const [averageExperience, setAverageExperience] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lmdaapi.onrender.com/survey/freelance/data/exp"
        );
        const experienceValues = response.data.experienceValues;

        if (experienceValues && experienceValues.length > 0) {
          const parsedValues = experienceValues.map((value) =>
            parseInt(value, 10)
          );
          const total = parsedValues.reduce((acc, value) => acc + value, 0);
          const average = total / parsedValues.length;

          setAverageExperience(average);
        } else {
          console.log("Aucune valeur d'expérience trouvée.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des valeurs d'expérience :",
          error
        );
      }
    };

    fetchData();
  }, []);
  return (
    <div className="display-data-exp">
      {averageExperience !== null ? (
        <>
          {" "}
          <div className="data">
            <Image
              src="/exp.png"
              width={48}
              height={48}
              alt="Expérience moyenne"
            />
            {averageExperience && (
              <div className="text">
                <p className="green">{averageExperience}</p>
                <span>ans</span>
              </div>
            )}
          </div>
          <p>Séniorité moyenne sur toutes les réponses enregistrées.</p>
        </>
      ) : (
        <LoadingData text={"Chargement des données"} />
      )}
    </div>
  );
};

export default DisplayExpData;
