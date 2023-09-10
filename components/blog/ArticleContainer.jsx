import React from "react";

const ArticleContainer = ({ img, title, content, category, author }) => {
  return (
    <div className="article-preview">
      <img src={img} className="preview-article-img" alt={title} />
      <h3>{title}</h3>
      <p className="preview">{content}</p>
      <p className="category">{category}</p>
      <span className="author">Publié par {author}</span>
    </div>
  );
};

export default ArticleContainer;
