import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import HeaderArticle from "@/components/blog/HeaderArticle";
import axios from "axios";
import ContentArticle from "@/components/blog/ContentArticle";
import SectionWrapper from "@/components/section/SectionWrapper";
import ContentSection from "@/components/content/ContentSectionApp";
import CardsContainer from "@/components/layout/CardsContainer";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import JobCard from "@/components/job/JobCard";
import CardMember from "@/components/member/CardMember";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import { numberCV } from "@/components/data/data";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );

  // console.log(
  //   data.data.data[0].attributes.related_articles.data[0].attributes.slug
  // );

  const siteUrl = "https://lambda-labs.fr";

  return {
    title: `${data.data.data[0].attributes.title}`,
    description: `${data.data.data[0].attributes.meta_description}`,
    keywords: [data.data.data[0].attributes.keyword.seo],
    alternates: {
      canonical: `${siteUrl}/blog/${params.slug}`,
    },
  };
}

export default async function Article({ params }) {
  const data = await axios.get(
    `https://strapi-vvjo.onrender.com/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const resArticles = await axios.get(
    "https://strapi-vvjo.onrender.com/api/articles?populate=*"
  );

  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );

  const resProfils = await axios.get(
    "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  );

  return (
    <main>
      <HeaderArticle data={data.data.data} />
      <ContentArticle data={data.data.data} />
      <SectionWrapper id={"blog"}>
        <ContentSection
          title={"Continuez votre lecture"}
          content={`Chez Lambda, nous croyons au pouvoir de la collaboration, de l'apprentissage et du partage des connaissances. C'est pourquoi nous avons créé le programme Écrire pour la communauté.`}
        />
        <CardsContainer style={"articles-container"}>
          {resArticles.data.data.slice(0, 6).map((article) => {
            for (
              let i = 0;
              i < data.data.data[0].attributes.related_articles.data.length;
              i++
            ) {
              if (
                data.data.data[0].attributes.related_articles.data[i].attributes
                  .slug == article.attributes.slug
              ) {
                return (
                  <ArticleCardContainer
                    key={article.attributes.slug}
                    data={article.attributes}
                  />
                );
              } else {
                return null;
              }
            }
          })}
        </CardsContainer>
        <PrimaryBtn content={"Parcourir le blog"} link={"/blog"} />
      </SectionWrapper>
      <SectionWrapper id={"jobs"}>
        <ContentSection
          title="Votre prochaine mission se trouve ici"
          content="Parcourez nos dernières offres d'emplois et missions à pourvoir"
        />
        <CardsContainer style={"articles-container"}>
          {resJobs.data.data.map((card) => {
            return (
              <JobCard
                key={card.attributes.job_id}
                title={card.attributes.title}
                desc={card.attributes.short_desc}
                skills={card.attributes.technical_skills}
                place={card.attributes.localisation}
                salary={card.attributes.salary}
                daily_rate={card.attributes.daily_rate}
                jobId={card.attributes.job_id}
                jobTitle={card.attributes.title}
                workplace={card.attributes.work_organisation}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
