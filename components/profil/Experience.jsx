import React from "react";

const Experience = ({ title }) => {
  return (
    <div className="detail-experience">
      <div className="details">
        <h3>Euronext</h3>
        <p>{title}</p>
        <div className="dates">
          <div className="date">
            <img src="/calendrier.png" className="picto" alt="picto-calendar" />
            <small>mai 2023</small>
          </div>
          <div className="date">
            <img src="/calendrier.png" className="picto" alt="picto-calendar" />
            <small>mai 2024</small>
          </div>
        </div>
        <p>
          Un outil de tracking en C++ de la performance quotidienne des market
          makers/Liquidity Providers sur les marchés Cash et Dérivés
          (Obligations de volumes ou pourcentage de spread, ordre/cotes au
          meilleur prix, etc.) et de fournir des indicateurs MIFID II à ces
          teneurs de marché ainsi que pour les autres membres.
        </p>
        <div className="techno">
          <p className="label">C++</p>
          <p className="label">Multithreading</p>
          <p className="label">CMAKE</p>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Experience;
