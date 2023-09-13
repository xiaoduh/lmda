import Image from "next/image";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";

const CardMember = ({ img, title, content, link }) => {
  const contentBtnPrimary = "Contacter";
  const contentBtnSecondary = "Voir son parcours";

  return (
    <div className="card-member">
      <div className="available">
        <div className="pastille"></div>
        <p>disponible</p>
      </div>
      <img src={img} className="pp" alt={title} />
      <h4>{title}</h4>
      <p>{content}</p>
      <PrimaryBtn content={contentBtnPrimary} link={"/collectif"} />
      <SecondaryBtn content={contentBtnSecondary} link={"/collectif"} />
    </div>
  );
};

export default CardMember;
