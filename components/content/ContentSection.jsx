import React from "react";

const ContentSection = ({ title, content }) => {
  return (
    <div className="content-wrapper">
      <h2>{title}</h2>
      <p>Id: {content}</p>
    </div>
  );
};

export default ContentSection;
