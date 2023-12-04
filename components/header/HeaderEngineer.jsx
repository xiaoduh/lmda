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
        Nous vous <span className="important">connectons</span>,<br></br>aux
        opportunités de <span className="important">l&apos;écosystème C++</span>
        .
      </h1>
      <p>
        La <span className="important">transparence</span>, change la donne.
        L&apos; <span className="important">horizontalilté</span>, réduit les
        coûts. La <span className="important">spécialisation</span>, rend unique
        et visible.
        <br></br>
        Nous avons une vision horizontale , transparente et équitable de
        l&apos;ESN pour redonner du sens à celle-ci.
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
