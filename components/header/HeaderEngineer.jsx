import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import axios from "axios";
import SwiperCard from "../swiperCard/SwiperCard";

export default async function HeaderEngineer() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );

  return (
    <header className="main-header" id="header">
      {/* <Label content={txtLabel} /> */}
      <h1>
        Nous connectons,<br></br>
        <span className="important">Talents</span> et{" "}
        <span className="important">Entreprises</span> de l&apos;écosystème C++,
        <br></br> en toute <span className="important">transparence</span>.
      </h1>
      <p>
        La <span className="important">transparence</span>, change la donne. Le{" "}
        <span className="important">management horizontal</span>, réduit les
        coûts. La <span className="important">spécialisation</span>, rend
        visibile.<br></br>
        Notre vision de l&apos;ESN, c&apos;est faire mieux tout en réduisant les
        coûts liés au fonctionnement de la structure pour offrir une meilleure
        rémunération, plus de bonus dans le package et d&apos;avantage de
        services à nos collaborateurs.
      </p>
      <PrimaryBtn
        content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
        link={"/jobs"}
        title={"jobs"}
      />
      <SecondaryBtn
        content={"Mettre en ligne son CV"}
        link={"/rejoindre"}
        title={"rejoindre"}
      />

      <SwiperCard data={resJobs.data.data} />
    </header>
  );
}
