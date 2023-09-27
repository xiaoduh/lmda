import React from "react";

const Reference = ({ name, company, content }) => {
  return (
    <div className="reference">
      <div className="title">
        <h3>{name}</h3> -<h3>{company}</h3>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Reference;
