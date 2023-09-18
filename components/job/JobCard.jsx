import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const JobCard = ({ title, desc, skills, place, salary }) => {
  return (
    <div className="card-job">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="infos">
        <p className="info">{place}</p>
        <p className="info">{skills}</p>
        <p className="info">{salary}</p>
      </div>
      <PrimaryBtn content={"Postuler"} link={"/collectif"} />
    </div>
  );
};

export default JobCard;
