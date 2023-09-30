import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const HeaderJob = ({ title, localisation }) => {
  return (
    <div className="header-job">
      <div className="info">
        <h2>{title}</h2>
        <div className="localisation">
          <img
            src="/localisation.png"
            className="picto"
            alt="picto-localisation"
          />{" "}
          <p>{localisation}</p>
        </div>
      </div>
      <div className="tags">
        <p className="label">C++</p>
        <p className="label">Qt</p>
        <p className="label">QML</p>
        <p className="label">Télétravail 2J</p>
        <p className="label">Mission de 24 mois</p>
        <p className="label">Exp 4 ans</p>
      </div>
      <PrimaryBtn content={"postuler"} link={"/"} />
    </div>
  );
};

export default HeaderJob;
