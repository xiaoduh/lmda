import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";
import axios from "axios";
import SwiperCard from "../swiperCard/SwiperCard";
import Image from "next/image";
import Link from "next/link";

export default async function HeaderEngineer({ candidats }) {
  const resJobs = await axios.get("http://localhost:1337/api/jobs/?populate=*");
  const contentBtnPrimary = `Voir les offres de missions ouvertes (${resJobs.data.data.length})`;

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
      <PrimaryBtn content={contentBtnPrimary} link={"/jobs"} />
      <SecondaryBtn
        content={`Recruter votre prochain développeur C++ (${candidats.length})`}
        link={"/collectif"}
      />

      <SwiperCard data={resJobs.data.data} />

      {/* <InfiniteScroll Tags={labels} /> */}
    </header>
  );
}
