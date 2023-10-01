import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import HeaderArticle from "@/components/blog/HeaderArticle";

const article = () => {
  const article = {
    img: "/cpp.jpg",
    title: "Comment éviter les bugs avec le C++ modern ?",
    desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
    category: ["C++"],
    author: "John Doe",
  };
  return (
    <main>
      <HeaderArticle
        img={article.img}
        title={article.title}
        author={article.author}
      />
      <FooterApp />
    </main>
  );
};

export default article;
