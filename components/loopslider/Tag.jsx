import Image from "next/image";
import React from "react";

const Tag = ({ text, picto }) => {
  return (
    <div className="tag">
      <img src={picto} alt={text} title={text} />
      <p>{text}</p>
    </div>
  );
};

export default Tag;
