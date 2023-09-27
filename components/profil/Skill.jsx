import React from "react";

const Skill = ({ title }) => {
  return (
    <div className="domain-skill">
      <h3>{title}</h3>
      <div className="skills-labels">
        <p className="label">C++</p>
        <p className="label">CMake</p>
        <p className="label">MakeFile</p>
        <p className="label">Qt</p>
        <p className="label">Buildroot</p>
        <p className="label">Buildroot</p>
        <p className="label">Buildroot</p>
      </div>
    </div>
  );
};

export default Skill;
