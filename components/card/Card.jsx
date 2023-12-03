import React from "react";

const Card = ({ title, content, style }) => {
  return (
    <div className={`card ${style}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
