import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";
import axios from "axios";
import SwiperCard from "../swiperCard/SwiperCard";

export default async function HeaderEngineer({ candidats }) {
  const resJobs = await axios.get("http://localhost:1337/api/jobs/?populate=*");
  const contentBtnPrimary = `Voir les offres de missions ouvertes (${resJobs.data.data.length})`;
  const contentBtnSecondary = `Recruter votre prochain développeur C++ (1515)`;

  return (
    <header className="main-header" id="header">
      <h1>
        Nous connectons,<br></br>
        <span className="important">Experts du C++</span> avec les
        <span className="important">Entreprises de l&apos;écosystème C++</span>,
        <br></br> en toute <span className="important">transparence</span>.
      </h1>
      <p>
        Nous croyons au management horizontal et en la transparence.<br></br>
        Nous crééons Lambda pour connecter Talents et entreprises en toute
        confiance grâce à la transparence.
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
