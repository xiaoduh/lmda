import Image from "next/image";
import React from "react";

const LabelWithPicto = ({ picto, content }) => {
  return (
    <div className="label picto">
      <Image src={picto} width={25} height={25} alt={content} />
      <p>{content}</p>
    </div>
  );
};

export default LabelWithPicto;
