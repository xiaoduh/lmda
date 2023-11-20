"use client";

import Image from "next/image";
import Link from "next/link";

export default async function ContentArticle({ data }) {
  return (
    <article className="body-content">
      {data[0].attributes.content.map((content) => {
        if (content.type === "paragraph") {
          for (let i = 0; i < content.children.length; i++) {
            console.log(content.children[i]);
            if (content.children[i].type === "text") {
              if (
                content.children[0].text.includes("https://www.yout") ||
                content.children[0].text.includes("https://yout")
              ) {
                return (
                  <iframe
                    key={content.children[0].text}
                    src={content.children[0].text}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-wrtite; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={content.children[0].text}
                    className="video-embed"
                  ></iframe>
                );
              } else if (content.children[i].text != "") {
                return (
                  <p key={content.children[0].text} className="p-article">
                    {content.children[0].text}
                  </p>
                );
              }
            } else if (content.children[i].type === "link") {
              return (
                <Link
                  href={content.children[i].url}
                  target="_blank"
                  key={content.children[i].url}
                  className="href-article"
                >
                  {content.children[i].children[0].text}
                </Link>
              );
            }
          }
        } else if (content.type === "heading") {
          return (
            <h2 key={content.children[0].text} className="article-h2">
              {content.children[0].text}
            </h2>
          );
        } else if (content.type === "list") {
          return (
            <ul key={Math.random()} className="ul-article">
              {content.children.map((item) => {
                return (
                  <li key={item.children[0].text} className="bullet-point">
                    {item.children[0].text}
                  </li>
                );
              })}
            </ul>
          );
        } else if (content.type === "image") {
          return (
            <Image
              src={`/${content.image.name}`}
              width={content.image.width}
              height={content.image.height}
              alt={content.image.alternativeText}
              className="illustration-article"
              key={content.image.alternativeText}
            />
          );
        }
      })}
    </article>
  );
}
