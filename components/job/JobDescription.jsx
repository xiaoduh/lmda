"use client";
import React from "react";
import PrimaryBtn from "../button/PrimaryBtn";

const JobDescription = ({ jobData }) => {
  console.log(jobData);
  return (
    <div className="job-description">
      <div className="header">
        <h3>Contexte de la mission</h3>
        <p>{jobData.context}</p>
      </div>
      <div className="content">
        <h3>Missions</h3>
        <ul>
          {jobData.missions.missions.map((task) => {
            return <li key={1 + Math.random()}>👉 {task}</li>;
          })}
        </ul>
      </div>
      <div className="cta">
        <PrimaryBtn
          content={"postuler"}
          link={`/jobs/postuler/${jobData.job_id}/${jobData.title}`}
        />
      </div>
    </div>
  );
};

export default JobDescription;
