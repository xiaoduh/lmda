"use client";
import Link from "next/link";
import React from "react";

export default async function ArticleCardContainer({ data }) {
  return (
    <Link href={`/blog/${data.slug}`}>
      <div className="article-preview">
        <img
          src={`/${data.cover_img.data.attributes.name}`}
          className="preview-article-img"
          alt={data.title}
          title={data.cover_img.data.attributes.alternativeText}
        />
        <h3>{data.title}</h3>
        <p className="preview">{data.sumary}</p>
        <p className="category">{data.categories.data[0].attributes.name}</p>
        <span className="author">
          Publié par {data.author.data.attributes.name}
        </span>
      </div>
    </Link>
  );
}
