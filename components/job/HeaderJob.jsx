import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const HeaderJob = ({
  title,
  localisation,
  work_organisation,
  id,
  date,
  job_type,
}) => {
  return (
    <div className="header-job">
      <div className="info">
        <h2>{title}</h2>
        <div className="localisation">
          <img
            src="/localisation.png"
            className="picto"
            alt="picto-localisation"
            title="localisation"
          />{" "}
          <p>{localisation}</p>
        </div>
      </div>
      <div className="tags">
        <p className="label">{work_organisation}</p>
        <p className="label">4 ans d'exp minimum</p>
        <p className="label">publié le {date}</p>
        <p
          className={`job-type`}
          style={{
            backgroundColor:
              job_type === `Freelance`
                ? `#334D6E`
                : job_type === `CDI`
                ? `#2ed4794d`
                : `#7e3825e3`,
            color:
              job_type === `Freelance`
                ? `#17b6ff`
                : job_type === `CDI`
                ? `#2ED47A`
                : `#FD6B3D`,
          }}
        >
          {job_type === `Freelance`
            ? `Mission Freelance`
            : job_type === `CDI`
            ? `CDI Client Final`
            : `CDI Lambda Labs`}
        </p>
      </div>
      <PrimaryBtn content={"Postuler"} link={`/jobs/postuler/${id}/${title}`} />
    </div>
  );
};

export default HeaderJob;
