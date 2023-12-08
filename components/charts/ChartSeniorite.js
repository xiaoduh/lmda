"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dataSeniorite } from "../data/data";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Répartition des compétences par séniorité",
    },
  },
};

const ChartSeniorite = ({ doughnut }) => {
  function calculerSomme(dataArr) {
    return dataArr.reduce((acc, obj) => acc + obj, 0);
  }

  const somme = calculerSomme(dataSeniorite);

  const data = {
    labels: [
      "Débutant (0-1)",
      "Junior (1-2)",
      "Confirmé (3-5)",
      "Sénior (6-8)",
      "Expert (8+)",
      "Guru (Super star)",
    ],
    datasets: [
      {
        label: "part en %",
        data: dataSeniorite.map((nb, index) => ((nb / somme) * 100).toFixed(2)),
        backgroundColor: [
          "#D6E7FF",
          "#adceff",
          "#70A9FF",
          "#3385ff",
          "#0062F5",
          "#0041A3",
        ],
        borderColor: [
          "#B1BED1",
          "#8EA9D0",
          "#4B71A9",
          "#2256A4",
          "#004DC1",
          "#00245A",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={`chart ${doughnut}`}>
      <Doughnut options={options} data={data} />;
    </div>
  );
};

export default ChartSeniorite;
