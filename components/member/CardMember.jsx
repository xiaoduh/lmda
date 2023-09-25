import Image from "next/image";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import Link from "next/link";

const CardMember = ({ img, title, content, profilName, profilTitle }) => {
  const contentBtnPrimary = "Contacter";
  const contentBtnSecondary = "Voir son parcours";

  return (
    <Link href={`/collectif/profil/${profilName}/${profilTitle}`}>
      <div className="card-member">
        <div className="available">
          <div className="pastille"></div>
          <p>disponible</p>
        </div>
        <img src={img} className="pp" alt={title} />
        <h4>{title}</h4>
        <h4>{profilTitle}</h4>
        <p>{content}</p>
        <PrimaryBtn
          content={contentBtnPrimary}
          link={`/contact/${profilName}`}
        />
        <SecondaryBtn
          content={contentBtnSecondary}
          link={`/collectif/profil/${profilName}/${profilTitle}`}
        />
      </div>
    </Link>
  );
};

export default CardMember;
