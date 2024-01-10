import Link from "next/link";
import React from "react";

const Banner = ({ content }) => {
  return (
    <Link className="banner-container" href={content.link}>
      <div className="banner-info">
        <div className="content-text">
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className="content-image"></div>
      </div>
    </Link>
  );
};

export default Banner;
