"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { weeklyGrowthCVtheque } from "../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Evolution hebdomadaire de notre base de compétences C++",
    },
  },
};

function calculerTableauCumulatif(tableau) {
  let tableauCumulatif = [];
  let sommeCumulative = 0;

  for (let i = 0; i < tableau.length; i++) {
    sommeCumulative += tableau[i];
    tableauCumulatif.push(sommeCumulative);
  }

  return tableauCumulatif;
}

const tableauCumulatif = calculerTableauCumulatif(weeklyGrowthCVtheque);

const ChartEvolutionHebdo = () => {
  const labels = ["S43", "S44", "S45", "S46", "S47", "S48", "S49"];

  const data = {
    labels,
    datasets: [
      {
        label: "Nb total compétence",
        data: tableauCumulatif,
        borderColor: "#99C3FF",
        // backgroundColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "#99C3FF",
      },
    ],
  };

  return (
    <div className={`chart`}>
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartEvolutionHebdo;
