import React from "react";

const SectionWrapperProfil = ({ children, id }) => {
  return (
    <div className="section-container-profil" id={id}>
      {children}
    </div>
  );
};

export default SectionWrapperProfil;
