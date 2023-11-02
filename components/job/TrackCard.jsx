import React from "react";
import Link from "next/link";
import ThirdBtn from "../button/ThirdBtn";
import PrimaryBtn from "../button/PrimaryBtn";

const JobCard = ({
  title,
  desc,
  skills,
  place,
  salary,
  daily_rate,
  jobId,
  jobTitle,
  workplace,
}) => {
  console.log(skills);
  return (
    <Link href={`/jobs/description/${jobId}`}>
      <div className="card-job-trackslider">
        <h3>{title}</h3>
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
          <p className="info">{workplace}</p>
        </div>
        <p>{desc}</p>
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
