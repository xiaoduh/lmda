import React from "react";

const JobDescription = ({ jobdesc }) => {
  return (
    <div className="job-description">
      <div className="header">
        <h3>Contexte de la mission</h3>
        <p>{jobdesc.context}</p>
      </div>
      <div className="content">
        <h3>Missions</h3>
        <ul>
          {jobdesc.missions.map((task) => {
            return <li>{task}</li>;
          })}
        </ul>
      </div>
      <div className="cta">
        <button className="btn-postuler">Postuler</button>
      </div>
    </div>
  );
};

export default JobDescription;
