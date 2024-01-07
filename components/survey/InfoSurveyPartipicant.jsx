"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { dateParser } from "../utils/DateParser";
import axios from "axios";

const InfoSurveyPartipicant = ({ text }) => {
  const [data, setData] = useState(null);
  const currentDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lmdaapi.onrender.com/survey/freelance/count"
        );
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="info-survey-freelance">
      <div className="data">
        <Image
          src="/sondage.png"
          width={48}
          height={48}
          alt="nombre de participant"
        />
        {data && (
          <div className="text">
            <p className="green">{data.count}</p>
            <span>répondants</span>
          </div>
        )}
      </div>

      <p>
        Aujourd'hui, {dateParser(currentDate)},{" "}
        <span className="green">{data?.count}</span> {text} ont participés au
        sondage.
      </p>
    </div>
  );
};

export default InfoSurveyPartipicant;
