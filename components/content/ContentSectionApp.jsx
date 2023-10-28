import React from "react";

const ContentSection = ({ title, content }) => {
  return (
    <div className="content-wrapper">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ContentSection;
