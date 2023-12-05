import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import axios from "axios";
import SwiperCard from "../swiperCard/SwiperCard";
import Link from "next/link";
import Image from "next/image";

export default async function HeaderEngineer() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );

  return (
    <header className="main-header" id="header">
      <Link className="counter" href={"/jobs"}>
        <p>7 missions à pourvoir</p>
        <Image
          src="/mallette.png"
          width={20}
          height={20}
          alt="Nombre de missions disponibles"
        />
      </Link>
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
        Nous incarnons une vision horizontale, transparente et équitable de
        l&apos;ESN, pour permettre à ceux qui en font la richesse d&apos;en
        récolter les fruits. Devenez propriétaire de votre entreprise.
      </p>
      <PrimaryBtn
        content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
        link={"/jobs"}
        title={"jobs"}
      />
      <SecondaryBtn
        content={"Référencer son CV sur Lambda"}
        link={"/rejoindre"}
        title={"rejoindre"}
      />

      <SwiperCard data={resJobs.data.data} />
    </header>
  );
}
