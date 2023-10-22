import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import ThirdBtn from "../button/ThirdBtn";
import Link from "next/link";

const JobCard = ({
  title,
  desc,
  skills,
  place,
  salary,
  daily_rate,
  jobId,
  jobTitle,
}) => {
  return (
    <Link href={`/jobs/description/${jobId}`}>
      <div className="card-job">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="infos">
          <p className="info">{place}</p>
          {skills.data.map((skill) => {
            return (
              <p className="info" key={skill.attributes.name}>
                {skill.attributes.name}
              </p>
            );
          })}
          <p className="info">
            {salary}K ou {daily_rate}€/j
          </p>
        </div>
        <div className="cta">
          <PrimaryBtn
            content={"Postuler"}
            link={`/jobs/postuler/${jobId}/${jobTitle}`}
          />
          <ThirdBtn
            content={"Description"}
            link={`/jobs/description/${jobId}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
