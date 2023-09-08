import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import Label from "../label/label";
import cpp from "../../assets/images/cpp.png";
import ue5 from "../../assets/images/ue5.png";
import qt from "../../assets/images/qt.png";
import linux from "../../assets/images/linux.png";
import InfiniteScroll from "../loopslider/Loop";

const Header = ({ id }) => {
  const contentBtnPrimary = "Voir les missions ouvertes";
  const contentBtnSecondary = "Découvrir l'équipe Lambda";
  const txtLabel = "La confiance fondée sur la transparence";

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
      <Label content={txtLabel} />
      <h1>
        Embarquez dans une (<span className="important">C</span>)arrière
        <span className="important">++</span> en grâce au collectif Lambda.
      </h1>
      <p>
        Nous croyons au neo-management,<br></br> bienveillant, responsabilisant
        et transparent pour que chaque programme soit « propres » et efficaces.
        Bjarne Stroustrup a créé le langage C++ pour produire des logiciels «
        propre » et efficace. Nous avons créé Lambda pour former un collectif
        specialisé, épanouissant et transparent.
      </p>
      <PrimaryBtn content={contentBtnPrimary} />
      <SecondaryBtn content={contentBtnSecondary} />
      <InfiniteScroll Tags={labels} />
      <div className="labels-container">
        {/* {labels.map((label) => {
          return <LabelWithPicto picto={label.picto} content={label.content} />;
        })} */}
      </div>
    </header>
  );
};

export default Header;
