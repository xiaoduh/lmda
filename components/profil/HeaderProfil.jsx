import React from "react";
import Link from "next/link";

const HeaderProfil = ({ data }) => {
  const calcTime = (graduationData) => {
    let dateNow = new Date();
    let dateFrom = new Date(graduationData);
    let time = dateNow - dateFrom;

    return time;
  };
  return (
    <div className="header-profil">
      <div className="pp">
        <img
          src="/utilisateur.png"
          className="pp"
          alt="profil-pricture"
          title="picto-user"
        />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="title">
            <h1>
              {data.first_name} {data.last_name}
            </h1>
            <p>{data.title}</p>
            <p>{data.bio}</p>
          </div>
          <Link href={`/contact/${data.profil_id}`}>
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
              <p>
                {Math.floor(calcTime(data.date_graduation) / 31536000000)} ans
              </p>
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
