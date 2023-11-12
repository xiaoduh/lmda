import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HeaderArticle({ data }) {
  // console.log(data[0].attributes.categories.data[0].attributes.name);
  return (
    <div className="header-article">
      <div className="img-wrapper">
        <Image
          src={`/${data[0].attributes.cover_img.data.attributes.name}`}
          width={500}
          height={500}
          alt={data[0].attributes.cover_img.data.attributes.alternativeText}
          className="cover-image"
        />
      </div>
      <p className="written-by">
        Publié le {data[0].attributes.publish_date} par{" "}
        {data[0].attributes.author.data.attributes.name} ·{" "}
        <Link href={"/"}>
          {data[0].attributes.categories.data[0].attributes.name}
        </Link>
      </p>

      <div className="info">
        <div className="author">
          <Image
            src="/logo-post.jpg"
            width={500}
            height={500}
            alt="Auteur sur le blog lambda"
            className="avatar"
          />
          <div className="bio">
            <h4>Publié par {data[0].attributes.author.data.attributes.name}</h4>
            <p>{data[0].attributes.author.data.attributes.bio}</p>
          </div>
        </div>
        <h1>{data[0].attributes.title}</h1>
      </div>
    </div>
  );
}
