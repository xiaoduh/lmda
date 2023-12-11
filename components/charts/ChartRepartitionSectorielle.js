"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Répartition sectorielle",
    },
  },
};

const labels = [
  "Avionique",
  "Automobile",
  "Defense",
  "Ferroviaire",
  "Télécommunication",
  "Transport",
  "Solution de paiement",
  "Medical",
  "Jeux Video",
  "Finance de marché",
  "Composants électroniques",
  "Energie",
  "Industrie",
  "CyberSécu",
  "AgroAlimentaire",
  "Identité & Sécurité",
  "IoT",
  "Logistique",
  "Géoscience",
  "Robotique",
];

function calculerSomme(dataArr) {
  return dataArr.reduce((acc, value) => acc + value, 0);
}

const dataArr = [
  21, 72, 21, 24, 27, 25, 21, 21, 29, 101, 6, 10, 19, 2, 1, 3, 2, 1, 2, 7,
];

const somme = calculerSomme(dataArr);

//last update 11/12/23
const data = {
  labels: labels,
  datasets: [
    {
      label: "%",
      data: dataArr.map((value, index) => ((value / somme) * 100).toFixed(2)),
      backgroundColor: "#99C3FF",
    },
  ],
};

const ChartRepartitionSectorielle = () => {
  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartRepartitionSectorielle;
