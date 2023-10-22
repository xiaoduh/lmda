import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const HeaderJob = ({ title, localisation, work_organisation, id, date }) => {
  return (
    <div className="header-job">
      <div className="info">
        <h2>{title}</h2>
        <div className="localisation">
          <img
            src="/localisation.png"
            className="picto"
            alt="picto-localisation"
          />{" "}
          <p>{localisation}</p>
        </div>
      </div>
      <div className="tags">
        <p className="label">{work_organisation}</p>
        <p className="label">4 ans d'exp minimum</p>
        <p className="label">publié le {date}</p>
      </div>
      <PrimaryBtn content={"postuler"} link={`/jobs/postuler/${id}/${title}`} />
    </div>
  );
};

export default HeaderJob;
