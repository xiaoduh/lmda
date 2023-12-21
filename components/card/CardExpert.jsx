import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const CardExpert = ({ img, name, title, about, skills, color, link }) => {
  return (
    <div className={`card-expert ${color}`}>
      <Image
        src={`/pp.png`}
        width={100}
        height={100}
        alt={name}
        className="image-expert"
      />
      <div className="title-expert">
        <h3>{name}</h3>
        <p>{title}</p>
        <Link href={link} target="_blank">
          <Image
            src={"/in.png"}
            width={26}
            height={26}
            alt="linkedin"
            className="expert-social"
          />
        </Link>
      </div>
      <div className="bio-expert">
        <p>{about}</p>
      </div>
      <div className="asses">
        {skills.map((skill, index) => {
          return (
            <p key={index} className={`skill-tag ${color}`}>
              {skill}
            </p>
          );
        })}
      </div>
      <PrimaryBtn content={`Discutons de votre besoin`} link={"/partenaire"} />
    </div>
  );
};

export default CardExpert;
