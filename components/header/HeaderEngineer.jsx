import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import axios from "axios";
import TrackCard from "../job/TrackCard";

export default async function HeaderEngineer() {
  const resJobs = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs/?populate=*"
  );
  const contentBtnPrimary = `Voir les missions ouvertes (${resJobs.data.data.length})`;

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
        Lambda connecte Talents et Entreprises de l&apos;écosystème C++ en toute
        confiance grâce à la transparence.<br></br>
        Notre vision de l&apos;ESN repose sur un modèle managérial horizontal
        pour une meilleure maîtrise des coûts, une meilleure répartition de la
        valeur créée, plus de responsabilité et surtout une totale transparence
        pour une confiance sans faille.
      </p>
      <PrimaryBtn content={contentBtnPrimary} link={"/jobs"} title={"jobs"} />
      <SecondaryBtn
        content={"Mettre en ligne son CV"}
        link={"/rejoindre"}
        title={"rejoindre"}
      />
      <div className="track-slider">
        {resJobs.data.data.map((card) => {
          console.log(card.attributes);
          return (
            <TrackCard
              key={card.attributes.job_id}
              title={card.attributes.title}
              desc={card.attributes.short_desc}
              skills={card.attributes.software_skills}
              place={card.attributes.localisation}
              salary={card.attributes.salary}
              daily_rate={card.attributes.daily_rate}
              jobId={card.attributes.job_id}
              jobTitle={card.attributes.title}
              workplace={card.attributes.work_organisation}
            />
          );
        })}
      </div>
      {/* <InfiniteScroll Tags={labels} /> */}
    </header>
  );
}
