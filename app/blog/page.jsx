import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import ContentSection from "@/components/content/ContentSectionApp";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export default async function Blog() {
  const resArticles = await axios.get(
    "https://strapi-vvjo.onrender.com/api/articles?populate=*"
  );
  return (
    <main>
      <SectionWrapperHeader id={"blog"}>
        <ContentSection
          title="Notre blog"
          content="Découvrez nos articles sur le management."
        />
        <CardsContainer style={"articles-container"}>
          {resArticles.data.data.slice(0, 6).map((article) => {
            return (
              <ArticleCardContainer
                key={article.attributes.slug}
                data={article.attributes}
              />
            );
          })}
        </CardsContainer>
      </SectionWrapperHeader>
      <FooterApp />
    </main>
  );
}
