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
import TrackCard from "../job/TrackCard";
import SwiperCard from "../swiperCard/SwiperCard";

export default async function HeaderEngineer() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  console.log(resJobs.data);
  const resProfils = await axios.get("http://localhost:10000/users");
  const contentBtnPrimary = `Voir les offres de missions ouvertes (${resJobs.data.data.length})`;
  const contentBtnSecondary = `Recruter votre prochain développeur C++ (${resProfils.data.length})`;
  const txtLabel = "La confiance est indissociable de la transparence";

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
      <SecondaryBtn content={contentBtnSecondary} link={"/collectif"} />
      {/* {resJobs.data.data.map((card) => {
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
        })} */}
      <SwiperCard data={resJobs.data.data} />

      {/* <InfiniteScroll Tags={labels} /> */}
    </header>
  );
}
