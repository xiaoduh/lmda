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
import getCandidats from "../components/utils/getCandidats";

export default async function Home() {
  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Nous n’avons rien à cacher à nos membres, ni clients.",
      img: {
        src: "/oeil.png",
        alt: "100% Transparent pour une confiance sans faille",
      },
    },
    {
      title: "Spécialisation",
      content:
        "Choisir d’être expert sur les applications du C++, c’est nécessairement reconnaitre qu’on ne peut pas être expert en tout. Il y a tant à faire avec le C++.",
      img: {
        src: "/specpp.png",
        alt: "Expert sur l'écosystème C++",
      },
    },
    {
      title: "Horizontailité",
      content:
        "Instaurer la transparence permet d'incarner une nouvelle organisation fondée sur la responsabilité et l'émancipation. Notre structure horizontale permet à chacun de reprendre le contrôle sur sa carrière.",
      img: {
        src: "/horizontale.png",
        alt: "Organisation horizontale pour plus de liberté et de responsabilité",
      },
    },
  ];
  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, DLL, Library, Simulation numérique...",
      img: {
        src: "/soft.png",
        alt: "Developpement logiciel en C++",
      },
    },
    {
      title: "3D & Traitement d'images",
      content: "OpenGL, UnReal Engine, Vulkan, Open3D, OpenCV, VTK, VIGRA..",
      img: {
        src: "/image.png",
        alt: "Computer Vision et traitement d'images par ordinateur",
      },
    },
    {
      title: "Embarqué",
      content: "Linux, µC ARM, Windows SE, FreeRTOS, VxWorks",
      img: {
        src: "/binairy.png",
        alt: "Developpement de logiciels embarqués en C/C++",
      },
    },
    {
      title: "Calcul Scientifique",
      content: "Algo scientifique, Modélisation, Recherche Opérationnelle",
      img: {
        src: "/microscope.png",
        alt: "Developpement en C++ pour le calcul scientifique",
      },
    },
    {
      title: "Haute performance",
      content: "STL, Boost, Asio...",
      img: {
        src: "/perf.png",
        alt: "Developpement logiciel en C++ à faible latency",
      },
    },
    {
      title: "IHM",
      content: "Qt, QML, MFC, IlogViews...",
      img: {
        src: "/applications.png",
        alt: "Developpement graphique d'interface homme machine",
      },
    },
  ];
  const contentCardsThirdSection = [
    {
      title: "CDI Client final",
      content:
        "Vous êtes salarié et recherchez un CDI chez une client final ? Nous vous proposons les meilleurs postes au sein de entreprises de l'écosystème C/C++.",
      className: "final",
      img: {
        src: "/1.png",
        alt: "CDI chez un client final",
      },
    },
    {
      title: "CDI Lambda Labs",
      content:
        "Vous êtes salarié et recherchez un CDI au sein d'une ESN alternative ? Rejoignez Lambda Labs en tant que salarié, participez au développement de votre société. Chaque collaborateur Lambda Labs est un associé en devenir.",
      className: "lambda",
      img: {
        src: "/2.png",
        alt: "CDI chez Lambda Labs",
      },
    },
    {
      title: "Mission Freelance",
      content:
        "Vous êtes Freelance et en recherche de mission ? Nous vous portons commercialement chez notre client en toute transparence contre une commission journalière fixe et transparente elle aussi. Une relation commerciale limpide pour tout le monde.",
      className: "freelance",
      img: {
        src: "/3.png",
        alt: "Mission en freelance",
      },
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
                img={card.img}
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
                img={card.img}
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
                img={card.img}
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
                job_type={card.attributes.job_type}
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
          title="Soyez visible sur l'écosystème C/C++"
          content={`Créez par des spécialiste du C/C++ pour des spécialistes, nous sommes le partenaire naturel et légitime pour accompagner les entreprises dans leurs recrutements. Mettez votre profil en ligne sur Lambda Labs et devenez visible auprès de tout l'écosystème.`}
        />
        <CardsContainer style={"cards-container member"}>
          {/* <FilterProfil
            filters={resTechnicalSkills.data.data}
            profils={resProfils.data.data}
          /> */}
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
