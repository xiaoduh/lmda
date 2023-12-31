import FooterApp from "@/components/navigation/FooterApp";
import React from "react";
import "../../../styles/index.scss";
import HeaderArticle from "@/components/blog/HeaderArticle";
import axios from "axios";
import ContentArticle from "@/components/blog/ContentArticle";
import SectionWrapper from "@/components/section/SectionWrapper";
import ContentSection from "@/components/content/ContentSectionApp";
import CardsContainer from "@/components/container/CardsContainer";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import JobCard from "@/components/job/JobCard";
import CardMember from "@/components/member/CardMember";
import SecondaryBtn from "@/components/button/SecondaryBtn";

export async function generateMetadata({ params }) {
  const data = await axios.get(
    `http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );

  // console.log(
  //   data.data.data[0].attributes.related_articles.data[0].attributes.slug
  // );

  const siteUrl = "http://localhost:3000";

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
    `http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const resArticles = await axios.get(
    "http://localhost:1337/api/articles?populate=*"
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
                return <ArticleCardContainer data={article.attributes} />;
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
      <SectionWrapper id={"member"}>
        <ContentSection
          title="Nous sommes un collectif spécialisé sur l'écosystème C++"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${resProfils.data.length} passionnés et spécialistes du C++ prêts à vous accompagner.`}
        />
        <CardsContainer style={"cards-container"}>
          {resProfils.data.data.slice(0, 6).map((member) => {
            return (
              <CardMember
                key={member.attributes.profil_id}
                id={member.attributes.profil_id}
                img={"/utilisateur.png"}
                available={member.attributes.available}
                first_name={member.attributes.first_name}
                last_name={member.attributes.last_name}
                title={member.attributes.title}
                bio={member.attributes.bio}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={` Recruter votre prochain développeur C++ (${resProfils.data.data.length})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
