import Image from "next/image";
import React from "react";

const Tag = ({ text, picto }) => {
  return (
    <div className="tag">
      <Image src={picto} width={25} height={25} alt={text} /> <p>{text}</p>
    </div>
  );
};

export default Tag;