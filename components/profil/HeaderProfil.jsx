import React from "react";
import Link from "next/link";

const HeaderProfil = () => {
  const profilName = "test";
  return (
    <div className="header-profil">
      <div className="pp">
        <img src="/pp.png" className="pp" alt="profil-pricture" />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="title">
            <h2>Clément Lidar</h2>
            <p>Développeur NextJS</p>
            <p>12 missions réalisées</p>
          </div>
          <Link href={`/contact/${profilName}`}>
            <button className="btn-contact">Contacter</button>
          </Link>
        </div>
        <div className="other-info">
          <div className="info">
            <p className="title">Statut</p>
            <div className="container-statut">
              <div className="pastille"></div>
              <p>disponible</p>
            </div>
          </div>
          <div className="info">
            <p className="title">Expérience</p>
            <div className="container-statut">
              <p>7-9 ans</p>
            </div>
          </div>
          <div className="info">
            <p className="title">Tarif</p>
            <div className="container-statut">
              <p>450 €/jour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfil;
