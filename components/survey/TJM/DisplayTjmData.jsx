"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LoadingData from "@/components/loader/LoadingData";

const DisplayTjmData = () => {
  const [averageTJM, setAverageTJM] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lmdaapi.onrender.com/survey/freelance/data/tjm"
        );
        const tjmValues = response.data.tjmValues;

        if (tjmValues && tjmValues.length > 0) {
          const parsedValues = tjmValues.map((value) => parseInt(value, 10));
          const total = parsedValues.reduce((acc, value) => acc + value, 0);
          const average = total / parsedValues.length;

          setAverageTJM(average);
        } else {
          console.log("Aucune valeur TJM trouvée.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des valeurs TJM :",
          error
        );
      }
    };

    fetchData();
  }, []);
  return (
    <div className="display-data-tjm">
      {averageTJM !== null ? (
        <>
          {" "}
          <div className="data">
            <Image src="/tjm.png" width={48} height={48} alt="TJM moyenne" />
            {averageTJM && (
              <div className="text">
                <p className="green">{averageTJM.toFixed(0)}</p>
                <span>euros</span>
              </div>
            )}
          </div>
          <p>Moyenne des Taux Journaliers Moyens enregistrés.</p>
        </>
      ) : (
        <LoadingData text={"Chargement des données"} />
      )}
    </div>
  );
};

export default DisplayTjmData;
