import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import Footer from "@/components/navigation/Footer";
import NavigationLanding from "@/components/navigation/NavigationLanding";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import axios from "axios";
import HeaderEngineer from "@/components/header/HeaderEngineer";
import FilterProfil from "@/components/Filter/FilterProfil";
import getCandidats from "./libs/getCandidats";

export default async function Home() {
  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Nous n’avons rien à cacher à nos membres, ni clients.",
    },
    {
      title: "Spécialiste",
      content:
        "Choisir d’être expert sur les applications du C++, c’est nécessairement reconnaitre qu’on ne peut pas être expert en tout. Il y a tant à faire avec le C++.",
    },
    {
      title: "Efficacité",
      content:
        "L'efficacité n’est pas un moyen. C’est un résultat. Nous pronons une transparence totale, un management horizontale et responsabilisant pour que chacun puisse s'exprimer au travers de notre colelctif.",
    },
  ];
  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, DLL, Library, Simulation numérique...",
    },
    {
      title: "3D & Traitement d'images",
      content: "OpenGL, UnReal Engine, Vulkan, Open3D, OpenCV, VTK, VIGRA..",
    },
    {
      title: "Embarqué",
      content: "Linux, µC ARM, Windows SE, FreeRTOS, VxWorks",
    },
    {
      title: "Calcul Scientifique",
      content: "Algo scientifique, Modélisation, Recherche Opérationnelle",
    },
    {
      title: "Low Latency",
      content: "STL, Boost, Asio...",
    },
    {
      title: "IHM",
      content: "Qt, QML, MFC, IlogViews...",
    },
  ];
  const resJobs = await axios.get("http://localhost:1337/api/jobs/?populate=*");
  const resProfils = await axios.get(
    "http://localhost:1337/api/profils?populate=*"
  );
  const resArticles = await axios.get(
    "http://localhost:1337/api/articles?populate=*"
  );
  const resTechnicalSkills = await axios.get(
    "http://localhost:1337/api/technical-skills"
  );
  const candidats = await getCandidats();

  return (
    <main>
      <NavigationLanding />
      <HeaderEngineer candidats={candidats} />
      <SectionWrapper id={"why"}>
        <ContentSection
          title={`La confiance forgée par la transparence`}
          content="Nous sommes l'alternative au management pyramidal fondé sur l'opacité. Nous croyons à un management nouveau fondé sur la transparence et un management horizontal pour d'avantage de responsabilité. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsFirstSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length}) `}
          link={"/jobs"}
        />

        <SecondaryBtn
          content={`Recruter votre prochain développeur C++ (${candidats.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <ContentSection
          title="Nous développons des logiciels robustes, performants et efficaces"
          content="Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace. Le C++ est aussi populaire que complexe. Il est sans doute l’un des langages des plus complexes à maîtriser pour développer des programmes « propres » et efficaces."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsSecondSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
        <SecondaryBtn
          content={`Recruter votre prochain développeur C++ (${candidats.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        <ContentSection
          title="Nous sommes un collectif spécialisé sur l'écosystème C++"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${resProfils.data.length} passionnés et spécialistes du C++ prêts à vous accompagner.`}
        />
        <CardsContainer style={"cards-container member"}>
          <FilterProfil
            filters={resTechnicalSkills.data.data}
            profils={resProfils.data.data}
          />
        </CardsContainer>
        <PrimaryBtn
          content={` Recruter votre prochain développeur C++ (${candidats.length})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
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
      <SectionWrapper id={"blog"}>
        <ContentSection title={"Blog"} content={"Nos articles"} />
        <CardsContainer style={"articles-container"}>
          {resArticles.data.data.slice(0, 6).map((article) => {
            return <ArticleCardContainer data={article.attributes} />;
          })}
        </CardsContainer>
        <PrimaryBtn content={"Parcourir le blog"} link={"/blog"} />
      </SectionWrapper>

      <SectionWrapper id={"form"}>
        <ContentSection
          title={`Abonnez vous à notre Newsletter pour recevoir les dernières missions`}
          content="Que vous soyez en veille ou en recherche active d'une mission sur l'écosystème C++, recevez par email les dernières missions en C++ sur le marché."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
