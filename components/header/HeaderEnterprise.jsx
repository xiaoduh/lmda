import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import Label from "@/components/label/Label";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";
import InfiniteScroll from "../loopslider/Loop";
import axios from "axios";

export default async function HeaderEnterprise() {
  const resJobs = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs"
  );

  const labels = [
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
    {
      picto: cpp,
      content: "Software",
    },
    {
      picto: ue5,
      content: "Simulation 3D",
    },
    {
      picto: cpp,
      content: "Calcul Scientifique",
    },
    {
      picto: cpp,
      content: "Low Latency",
    },
    {
      picto: linux,
      content: "Embedded",
    },
    {
      picto: qt,
      content: "IHM",
    },
  ];

  return (
    <header className="main-header" id="header">
      <h1>
        Des spécialistes du <span className="important">C/C++</span> disponibles
        dès maintenant.
      </h1>
      <p>
        Expert des technologies C/C++ et de ses mises en oeuvres, Lambda
        rassemble <span className="important">+ 1000</span> de spécialistes prêt
        à relever vos défis.<br></br> 2 projets sur 3 sont en retard à cause du
        <span className="important"> manque de talents</span>. Ne passez plus
        vos journées à chercher les bonnes compétences.
        <br></br>Augmentez votre <span className="important">visibilité</span>,
        gagne en <span className="important">pertinence</span> et diminuez le
        <span className="important"> temps</span> de staffing de vos projets.
      </p>
      <PrimaryBtn
        content="Publier une mission sur Lambda"
        link={"/partenaire"}
      />
      <SecondaryBtn content="Recruter un prestataire" link={"/collectif"} />
      <InfiniteScroll Tags={labels} />
    </header>
  );
}
