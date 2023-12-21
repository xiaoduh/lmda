"use client";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import SecondaryBtn from "../button/SecondaryBtn";
import Link from "next/link";

const CardMember = ({ cv }) => {
  console.log(cv);
  return (
    <Link href={`/partenaire`}>
      <div className="card-member">
        {/* {available ? (
          <div className="available">
            <div className="pastille"></div>
            <p>disponible</p>
          </div>
        ) : (
          <div className="available">
            <div className="pastille red"></div>
            <p>indisponible</p>
          </div>
        )} */}

        {/* <img
          src={img}
          className="pp"
          alt={first_name + last_name}
          title="user"
        /> */}
        <h4>{cv.properties.firstname}</h4>
        {/* <h4>{title}</h4> */}
        {/* <p>{bio.slice(0, 200)}</p> */}
        {/* <PrimaryBtn content="Contacter" link={`/contact/${id}`} />
        <SecondaryBtn
          content="Voir son parcours"
          link={`/collectif/profil/${id}/${title}`}
        /> */}
      </div>
    </Link>
  );
};

export default CardMember;
