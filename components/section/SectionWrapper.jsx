import React from "react";

const SectionWrapper = ({ children, id }) => {
  return (
    <section className="section-container" id={id}>
      {children}
    </section>
  );
};

export default SectionWrapper;
