import Image from "next/image";
import React from "react";

const Card = ({ title, content, style, color, img }) => {
  console.log(img);
  return (
    <div className={`card ${color}`}>
      {img ? (
        <Image src={img.src} width={28} height={28} alt={img.alt} />
      ) : null}
      <h3 id={`${style}`}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
