import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";
import InfiniteScroll from "../loopslider/Loop";
import Link from "next/link";
import Image from "next/image";

export default async function HeaderEnterprise({ cvArr }) {
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
      <Link className="counter" href={"/entreprise"}>
        <p>{cvArr.length} CV référencés</p>
        <Image
          src="/croissance.png"
          width={20}
          height={20}
          alt="Nombre CV disponible"
        />
      </Link>
      <h1>
        <span className="important">{cvArr.length}</span> spécialistes du{" "}
        <span className="important">C++</span> prêts à relever vos défis.
      </h1>
      <p>
        Pure Player des technologies C/C++ et de ses mises en oeuvres, Lambda
        Labs rassemble <span className="important">{cvArr.length}</span>{" "}
        spécialistes prêt à relever vos défis.<br></br> 2 projets sur 3 sont en
        retard à cause du
        <span className="important"> manque de talents</span>. Ne passez plus
        vos journées à chercher les bonnes compétences.
        <br></br> Grâce à Lambda Labs, augmentez votre{" "}
        <span className="important">visibilité</span>, gagnez en{" "}
        <span className="important">pertinence</span> et réduisez le
        <span className="important"> temps</span> de staffing de vos projets.
      </p>
      <PrimaryBtn
        content={`Boostez votre recrutement ($${cvArr.length} CV)`}
        link={"/partenaire"}
      />
      <SecondaryBtn
        content={`Optimisez votre process recrutement ($${cvArr.length} CV)`}
        link={"/partenaire"}
      />
      {/* <InfiniteScroll Tags={labels} /> */}
    </header>
  );
}
