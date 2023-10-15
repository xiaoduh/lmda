import React from "react";
import Link from "next/link";

const HeaderProfil = ({ data }) => {
  const calculateDate = (graduationData) => {
    let dateNow = new Date();
    let time_diff = dateNow.getTime() - graduationData.getTime();
    let days_diff = time_diff / (1000 * 3600 * 24);

    return days_diff;
  };
  return (
    <div className="header-profil">
      <div className="pp">
        <img src="/utilisateur.png" className="pp" alt="profil-pricture" />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="title">
            <h2>
              {data.first_name} {data.last_name}
            </h2>
            <p>{data.title}</p>
            <p>{data.bio}</p>
          </div>
          <Link href={`/contact/${data.first_name}`}>
            <button className="btn-contact">Contacter</button>
          </Link>
        </div>
        <div className="other-info">
          <div className="info">
            <p className="title">Statut</p>
            <div className="container-statut">
              {data.available ? (
                <div className="available">
                  <div className="pastille"></div>
                  <p>disponible</p>
                </div>
              ) : (
                <div className="available">
                  <div className="pastille red"></div>
                  <p>indisponible</p>
                </div>
              )}
            </div>
          </div>
          <div className="info">
            <p className="title">Expérience</p>
            <div className="container-statut">
              <p> ans</p>
            </div>
          </div>
          <div className="info">
            <p className="title">Tarif</p>
            <div className="container-statut">
              <p>{data.price} €/jour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfil;
