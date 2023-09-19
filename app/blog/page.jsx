import ArticleContainer from "@/components/blog/ArticleContainer";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";

const page = () => {
  const articles = [
    {
      img: "/cpp.jpg",
      title: "Comment éviter les bugs avec le C++ modern ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["C++"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Pourquoi les entreprises échouent à définir leur culture ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Recrutement"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "C’est quoi la matrice RACI et comment la mettre en place ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Management"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Comment éviter les bugs avec le C++ modern ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["C++"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "Pourquoi les entreprises échouent à définir leur culture ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Recrutement"],
      author: "John Doe",
    },
    {
      img: "/cpp.jpg",
      title: "C’est quoi la matrice RACI et comment la mettre en place ?",
      desc: "Homines quot eligendi non parandis diligentiores de quod amicitia dicere haberet difficile querebatur ad enim penuria eligendis diligentiores signa neglegentis est Sunt erat cuius stabiles amicis qui quisque sermo Scipionem quaedam non qui homines constantes amicitia capras et Scipionem eligendi.",
      category: ["Management"],
      author: "John Doe",
    },
  ];

  const fourthSection = {
    txtLabel:
      "Nos contenus sur l'écosystème C++, le recrutement et le management",
    title:
      "Parcourez nos articles sur l'écosystème C++, le recrutement et le management.",
    content:
      "Chaque mois retrouvez des articles pour nourrir votre veille sur le recrutement, le managemment et toutes les actualités de l'écosystème C++.",
  };
  return (
    <main>
      <SectionWrapper id={"blog"}>
        <Label content={fourthSection.txtLabel} />
        <ContentSection
          title={fourthSection.title}
          content={fourthSection.content}
        />
        <CardsContainer style={"articles-container"}>
          {articles.slice(0, 6).map((article) => {
            return (
              <ArticleContainer
                key={article.index}
                img={article.img}
                title={article.title}
                content={article.desc}
                category={article.category}
                author={article.author}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
