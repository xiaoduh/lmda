import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import ThirdBtn from "../button/ThirdBtn";
import Link from "next/link";
import Image from "next/image";

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
  job_type,
}) => {
  return (
    <Link href={`/jobs/description/${jobId}`} title="job description">
      <div className="card-job">
        <p
          className={`job-type`}
          style={{
            backgroundColor:
              job_type === `Freelance`
                ? `#2f190f`
                : job_type === `CDI`
                ? `#1c3329`
                : `#24364e`,
            color:
              job_type === `Freelance`
                ? `#fa824c`
                : job_type === `CDI`
                ? `#8dffcd`
                : `#24364e`,
          }}
        >
          {job_type === `Freelance`
            ? `Mission Freelance`
            : job_type === `CDI`
            ? `CDI Client Final`
            : `CDI Lambda Labs`}
        </p>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="infos">
          <div className="info">
            <Image
              src="/marqueur.png"
              width={16}
              height={16}
              alt="localisation"
            />
            <p>{place}</p>
          </div>
          <div className="info">
            <Image
              src="/argent.png"
              width={16}
              height={16}
              alt="salaire ou TJM"
            />
            <p>
              {job_type === `Freelance` ? `${daily_rate}€/j` : `> ${salary}K`}
            </p>
          </div>
          <div className="info">
            <Image
              src="/maison.png"
              width={16}
              height={16}
              alt="localisation"
            />
            <p>{workplace}</p>
          </div>
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
