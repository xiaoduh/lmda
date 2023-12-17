import React from "react";

const Card = ({ title, content, style, img }) => {
  return (
    <div className={`card`}>
      {img ? (
        <Image src={img.src} width={24} height={24} alt={img.alt} />
      ) : null}
      <h3 id={`${style}`}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
