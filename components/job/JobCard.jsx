import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import ThirdBtn from "../button/ThirdBtn";

const JobCard = ({ title, desc, skills, place, salary, jobId, jobTitle }) => {
  return (
    <div className="card-job">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="infos">
        <p className="info">{place}</p>
        <p className="info">{skills}</p>
        <p className="info">{salary}</p>
      </div>
      <div className="cta">
        <PrimaryBtn
          content={"Postuler"}
          link={`/jobs/postuler/${jobId}/${jobTitle}`}
        />
        <ThirdBtn content={"Description"} link={`/jobs/description/${jobId}`} />
      </div>
    </div>
  );
};

export default JobCard;
