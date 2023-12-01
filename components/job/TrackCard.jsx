import React from "react";
import Link from "next/link";
import ThirdBtn from "../button/ThirdBtn";
import PrimaryBtn from "../button/PrimaryBtn";

const TrackCard = ({
  title,
  desc,
  skills,
  place,
  salary,
  daily_rate,
  jobId,
  jobTitle,
  workplace,
  job_type,
}) => {
  return (
    <Link href={`/jobs/description/${jobId}`}>
      <div className="card-job-trackslider">
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
            {job_type === `Freelance`
              ? `${daily_rate}€/j`
              : `à partir de ${salary}K`}
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

export default TrackCard;
