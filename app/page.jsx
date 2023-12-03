import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Footer from "@/components/navigation/Footer";
import NavigationLanding from "@/components/navigation/NavigationLanding";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import axios from "axios";
import HeaderEngineer from "@/components/header/HeaderEngineer";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import FilterProfil from "@/components/Filter/FilterProfil";
import getCandidats from "./libs/getCandidats";

export const metadata = {
  title: "ESN et Recrutement spécialiste de l'écosystème C++",
  description:
    "Pure player de l'écosystème C/C++ et Qt, nous facilitons la rencontre entre Talents et Entreprises grâce à notre réseau de +2000 spécialistes du C++.",
  keywords: [
    "ESN",
    "Plateforme de recrutement",
    "ESN alternative",
    "Management horizontal",
    "Développeur C++",
    "Recrutement C++ et Qt",
    "Emplois en programmation C++",
    "Offres d'emploi C++ et QT",
    "Développement logiciel avec C++",
    "Ingénieur en développement C++ et Qt",
    "Carrières en programmation C++",
    "Spécialiste en langage C++ et Qt",
    "Recrutement de programmeurs expérimentés C++",
    "Opportunités pour experts en développement C++",
    "Recrutement de développeurs Qt",
    "Emplois dans le développement d'applications C++",
    "C++ et Qt - Offres d'emploi spécialisées",
    "Opportunités de carrière pour développeurs C++ avancés",
    "Expertise en développement logiciel C++ et Qt",
  ],
  authors: [{ name: "Lambda Labs" }],
  creator: "Lambda Labs",
  alternates: {
    canonical: `https://lambda-labs.fr/`,
  },
  publisher: "Lambda Labs",
  openGraph: {
    title:
      "Plateforme des services numériques spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    siteName: "Lambda",
    type: "website",
  },
  twitter: {
    title:
      "Plateforme des services numériques spécialisée sur l'écosystème C++",
    description:
      "Nous connectons, Experts du C++ et Entreprises de l'écosystème C++, en toute transparence.",
    site: "Lambda",
    cardType: "summary_large_image",
  },
};

export default async function Home() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  const resProfils = await axios.get(
    "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  );
  const resArticles = await axios.get(
    "https://strapi-vvjo.onrender.com/api/articles?populate=*"
  );
  const resSubscribers = await axios.get(
    "https://lmdaapi.onrender.com/subscribers"
  );
  const resTechnicalSkills = await axios.get(
    "https://strapi-vvjo.onrender.com/api/technical-skills"
  );
  const candidats = await getCandidats();

  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Lambda est fondée sur une transparence stratégique, économique et financière avec toutes ses parties prenantes, notamment ses collaborateurs.",
    },
    {
      title: "Spécialiste",
      content:
        "Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Notre objectif est de faire de Lambda la référence dans le conseils et l'assistance techniques sur l'écosystème C++.",
    },
    {
      title: "Efficacité",
      content:
        "L'efficacité n’est pas un moyen, c’est un résultat. Nous pronons une transparence totale, un management horizontale et responsabilisant pour que chacun puisse s'exprimer au travers de notre collectif.",
    },
  ];

  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, Frameworks Qt, Simulation numérique, DLL",
    },
    {
      title: "3D & Traitement d'images",
      content: "OpenGL, UnReal Engine, Vulkan, Open3D, OpenCV, VTK, VIGRA..",
    },
    {
      title: "Embarqué",
      content:
        "Linux, µC ARM, Windows SE, RTOS, Embededd Software, Middleware, Firmware, Drivers",
    },
    {
      title: "Calcul Scientifique",
      content: "Algo scientifique, Modélisation, Recherche Opérationnelle",
    },
    {
      title: "Low Latency",
      content: "Quantlib, Concurrency, Décodage/encodage, STL, Boost, Asio...",
    },
    {
      title: "Graphique",
      content: "Qt, QML, MFC, WxWidgets, ImGui, Nana, NanoGui, IlogViews...",
    },
  ];
  const contentCardsThirdSection = [
    {
      title: "CDI Client final",
      content:
        "Vous êtes salarié et recherchez un CDI chez une client final ? Nous vous proposons les meilleurs postes au sein de entreprises de l'écosystème C/C++.",
      className: "final",
    },
    {
      title: "CDI Lambda Labs",
      content:
        "Vous êtes salarié et recherchez un CDI au sein d'une ESN alternative ? Rejoignez Lambda Labs en tant que salarié, participez au développement de votre société. Chaque collaborateur Lambda Labs est un associé en devenir.",
      className: "lambda",
    },
    {
      title: "Mission Freelance",
      content:
        "Vous êtes Freelance et en recherche de mission ? Nous vous portons commercialement chez notre client en toute transparence contre une commission journalière fixe et transparente elle aussi. Une relation commerciale limpide pour tout le monde.",
      className: "freelance",
    },
  ];

  return (
    <main>
      <NavigationLanding />
      <HeaderEngineer candidats={candidats} />
      <SectionWrapper id={"why"}>
        {/* <Label content="Un écosystème spécialisé au management horizontal" /> */}
        <ContentSection
          title="Management horizontal et transparence totale"
          content="Nous sommes l'alternative au management pyramidal dernier rempart de l'opacité. Nous croyons en un management nouveau, fondé sur la transparence pour d'avantage de responsabilité et surtout une meilleure maîtrise des coûts de fonctionnement. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance, nos collaborateurs ont une vision transparente de nos orientations stratégiques, CA, marges, coûts..."
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
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Recruter un prestataire (${candidats.length})`}
          link={"/collectif"}
          title={"prestataire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        {/* <Label content="Spécialiste du C++ et ses mises en pratique" /> */}
        <ContentSection
          title="Spécialiste de l'écosystème C/C++"
          content="Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Tout comme notre mentor, Bjarne Stroustrup, nous aimons les logiciels robustes, performants et efficaces. L'écosystème C/C++ est aussi diversifié qu'éllitiste et nous sommes les spécialistes pour vous proposer les meilleurs projets de l'écosystème."
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
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Mettre en ligne son CV)`}
          link={"/rejoindre"}
          title={"rejoindre"}
        />
      </SectionWrapper>
      <SectionWrapper id={"how"}>
        <ContentSection
          title={`Des opportunités pour tous`}
          content="Que vous soyez salarié en recherche d'un CDI pour un client final ou Freelance à la recherche d'une nouvelle mission, en tant que spécialiste du recrutement sur l'écosystème C/C++ nous sommes le partenaire naturel des entreprises qui recrutent."
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsThirdSection.map((card) => {
            return (
              <Card
                key={card.index}
                title={card.title}
                content={card.content}
                style={card.className}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Mettre en ligne son CV)`}
          link={"/rejoindre"}
          title={"rejoindre"}
        />
      </SectionWrapper>
      <SectionWrapper id={"jobs"}>
        {/* <Label content="Ne ratez plus aucunes opportunités en C++" /> */}
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
                job_type={card.attributes.job_type}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Mettre en ligne son CV`}
          link={"/rejoindre"}
          title={"rejoindre"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        {/* <Label content="Une communauté dédiée au C++ et son ecosytème" /> */}
        <ContentSection
          title="Soyez visible auprès des entreprises"
          content={`Tout comme ${candidats.length} passionnés et spécialistes du C/C++, mettez en ligne votre CV anonyme pour gagner en visibilité auprès des entreprises ayant recours à vos compéntences. Freelance ou salarié, mettre en ligne son CV offre plus de visibilité à vos compétences et génère passivement plus d'opportunités pertinentes grâce à notre spécialisation.`}
        />
        <CardsContainer style={"cards-container member"}>
          <FilterProfil
            filters={resTechnicalSkills.data.data}
            profils={resProfils.data.data}
          />
        </CardsContainer>
        <PrimaryBtn
          content={`Mettre en ligne son CV`}
          link={"/rejoindre"}
          title={"rejoindre"}
        />
        <SecondaryBtn
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"blog"}>
        <ContentSection
          title={"Laboratoire de nouvelles tendances"}
          content={
            "Chez Lambda, nous croyons au pouvoir de la collaboration, de l'apprentissage et du partage des connaissances. C'est pourquoi nous avons créé nptre blog afin de partager nos expériences."
          }
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
        <PrimaryBtn content={"Parcourir le blog"} link={"/blog"} />
      </SectionWrapper>

      <SectionWrapper id={"form"}>
        {/* <Label content="Restez connecté à l'écosystème C++" /> */}
        <ContentSection
          title={`Aujourd'hui, il y a  ${candidats.length}+ abonnés à notre Newsletter « Mission à pourvoir ».`}
          content="Que vous soyez salarié en veille d'un nouveau poste ou Freelance en recherche active d'une nouvelle mission, inscrivez-vous pour recevoir par email les dernières missions ou emplois sur l'écosystème C/C++."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
