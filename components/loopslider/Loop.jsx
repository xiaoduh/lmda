import React from "react";
import InfiniteLoopSlider from "./InfiniteLoopSlider";
import Tag from "./Tag";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";

const InfiniteScroll = () => {

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

  const TAGS = [
    "SCOP",
    "Démocratie",
    "Justice",
    "Epanouissement",
    "Bonheur",
    "Horizontal",
    "Equité",
    "Intéressement",
    "Coopératif",
    "Participatif",
    "Zéro Manager",
    "Actionnariat",
    "Dividende",
    "Participation",
    "Equitable",
    "Responsabilité",
    "Liberté",
    "Autonomie",
    "Vote",
    "Gouvernance",
    "Décision",
    "Intrapreunariat",
    "Transparence",
    "Confiance",
    "Sénérité",
    "Confort",
    "Collectif",
    "Partage",
    "Humain",
    "Voix",
    "Capital",
    "Autonomie",
    "Objectif Commun",
  ];

  const DURATION = 180000;
  const ROWS = 1;
  const TAGS_PER_ROW = 100;
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
  return (
    <div className="infinite-scroll">
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 2000, DURATION + 2000)}
            reverse={i % 2}
          >
            {shuffle(labels)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag.content} picto={tag.picto} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );
};

export default InfiniteScroll;