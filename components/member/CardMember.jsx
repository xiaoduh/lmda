import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import Link from "next/link";

const CardMember = ({
  id,
  img,
  available,
  first_name,
  last_name,
  title,
  bio,
}) => {
  return (
    <Link href={`/collectif/profil/${id}/${title}`}>
      <div className="card-member">
        {available ? (
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

        <img src={img} className="pp" alt={first_name + last_name} />
        <h4>
          {first_name.slice(0, 3).toUpperCase() +
            last_name.slice(0, 3).toUpperCase()}
        </h4>
        <h4>{title}</h4>
        <p>{bio}</p>
        <PrimaryBtn content="Contacter" link={`/contact/${id}`} />
        <SecondaryBtn
          content="Voir son parcours"
          link={`/collectif/profil/${id}/${title}`}
        />
      </div>
    </Link>
  );
};

export default CardMember;
