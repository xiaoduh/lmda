"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Répartition par technologie",
    },
  },
};

const ChartRepartitionTechno = () => {
  const labels = [
    "C",
    "C++",
    "C Embedded",
    "Architecture",
    "Qt",
    "QML",
    "MFC",
    "OpenCV",
    "OpenGL",
    "OpenCL",
    "CUDA",
    "UE5",
  ];

  const dataArr = [578, 1216, 164, 73, 311, 40, 9, 71, 19, 1, 11, 20];

  //last update 8/12/23
  const data = {
    labels: labels,
    datasets: [
      {
        label: "part en %",
        data: dataArr.map((value, index) => ((value / 1633) * 100).toFixed(2)),
        backgroundColor: [
          "#FFFFFF",
          "#adceff",
          "#85b6ff",
          "#5C9DFF",
          "#3385ff",
          "#0a6cff",
          "#005ae0",
          "#0049B8",
          "#00398F",
          "#002966",
          "#00183d",
          "#0041A3",
        ],
        borderColor: [
          "#FFFFFF",
          "#adceff",
          "#85b6ff",
          "#5C9DFF",
          "#3385ff",
          "#0a6cff",
          "#005ae0",
          "#0049B8",
          "#00398F",
          "#002966",
          "#00183d",
          "#0041A3",
        ],
      },
    ],
  };

  return (
    <div className="chart">
      <PolarArea options={options} data={data} />
    </div>
  );
};

export default ChartRepartitionTechno;
