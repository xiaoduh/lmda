import React from "react";

const Requirement = ({ title, requirements }) => {
  return (
    <div className="requirement">
      <h3>{title}</h3>
      <ul>
        {" "}
        {requirements.map((requirement) => {
          return <li key={1 + Math.random()}>{requirement}</li>;
        })}
      </ul>
    </div>
  );
};

export default Requirement;
