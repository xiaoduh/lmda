import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { dateParser } from "../utils/DateParser";

const AnnonceCard = ({ data }) => {
  const [isActive, setIsActive] = useState(data.active);

  const deleteAnnonce = () => {
    alert("Voulez-vous supprimer cette annonce ? ");
  };

  console.log(data);
  // Link href={`/plateforme/dashboard/modifier-annonce/${data.slug}`
  return (
    <div className="card-annonce">
      <h3>{data.title}</h3>
      <div className="infos">
        <div className="info">
          <Image
            src="/statut.png"
            width={16}
            height={16}
            alt="statut de l'annonce"
          />
          <p>{isActive ? "En ligne" : "Hors ligne"}</p>
        </div>
        <div className="info">
          <Image
            src="/candidat.png"
            width={16}
            height={16}
            alt="Nombre de candidatures"
          />
          <p>Nb candidature : 5</p>
        </div>
        <div className="info">
          <Image
            src="/datecreation.png"
            width={16}
            height={16}
            alt="date création de l'annonce"
          />
          <p>Créée le {dateParser(data.createdAt)}</p>
        </div>
      </div>
      <div className="cta">
        {isActive ? (
          <div
            className="btn-active-annonce"
            onClick={() => setIsActive(false)}
          >
            Désactiver
          </div>
        ) : (
          <div
            className="btn-inactive-annonce"
            onClick={() => setIsActive(true)}
          >
            Activer
          </div>
        )}
        <div className="icon-cta">
          <Link href={`/plateforme/dashboard/annonce/${data._id}`}>
            <div className="info">
              <Image src="/editer.png" width={16} height={16} alt="modifier" />
            </div>
          </Link>

          <div className="info" onClick={() => deleteAnnonce()}>
            <Image src="/poubelle.png" width={16} height={16} alt="supprimer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceCard;
