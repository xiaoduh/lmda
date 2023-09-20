import React from "react";

const SectionWrapperHeader = ({ children, id }) => {
  return (
    <div className="section-container-header" id={id}>
      {children}
    </div>
  );
};

export default SectionWrapperHeader;
