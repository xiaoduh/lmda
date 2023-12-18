import React from "react";
import Link from "next/link";
import ThirdBtn from "../button/ThirdBtn";
import PrimaryBtn from "../button/PrimaryBtn";
import Image from "next/image";

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
                ? `#59336e`
                : job_type === `CDI`
                ? `#2ed4794d`
                : `#334D6E`,
            color:
              job_type === `Freelance`
                ? `#bd17ff`
                : job_type === `CDI`
                ? `#2ED47A`
                : `#17b6ff`,
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
