import React from "react";

const Skill = ({ title, data }) => {
  return (
    <div className="domain-skill">
      <h3>{title}</h3>
      <div className="skills-labels">
        {data.map((skill) => {
          return (
            <p key={skill.attributes.createdAt} className="label">
              {skill.attributes.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
