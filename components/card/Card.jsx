import React from "react";

const Card = ({ title, content, style }) => {
  return (
    <div className={`card`}>
      <h3 id={`${style}`}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
