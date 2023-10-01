import React from "react";

const HeaderArticle = ({ img, title, author }) => {
  return (
    <div className="header-article">
      <div className="img-wrapper">
        <img src={img} className="inner-img" alt={img} />
      </div>

      <div className="info">
        <h2>{title}</h2>
        <div className="author">
          <img src="/pp.png" className="avatar" alt={img} />
          <div className="bio">
            <h4>{author}</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto minima accusamus, dolores eveniet fuga corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderArticle;
