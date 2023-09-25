import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const HeaderProfil = () => {
  return (
    <div className="header-profil">
      <div className="pp">
        <img src="/pp.png" className="pp" alt="profil-pricture" />
      </div>
      <div className="content">
        <div className="title">
          <h2>Clément Lidar</h2>
          <p>Développeur NextJS</p>
          <p>12 missions</p>
        </div>
        <div className="btn">
          <PrimaryBtn content="Contacter" link="/" />
        </div>
        <div className="label">
          <div className="available">
            <div className="pastille"></div>
            <p>disponible</p>
          </div>
          <div className="exp">
            <p>4 ans</p>
          </div>
          <div className="exp">
            <p>450 €/jour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfil;
