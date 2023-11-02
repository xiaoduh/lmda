import Link from "next/link";
import React from "react";

const ArticleCardContainer = ({ img, title, content, category, author }) => {
  return (
    <Link href={`/blog/${title}`}>
      <div className="article-preview">
        <img
          src={img}
          className="preview-article-img"
          alt={title}
          title="article-image"
        />
        <h3>{title}</h3>
        <p className="preview">{content}</p>
        <p className="category">{category}</p>
        <span className="author">Publié par {author}</span>
      </div>
    </Link>
  );
};

export default ArticleCardContainer;
