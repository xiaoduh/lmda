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
import getCandidats from "../components/utils/getCandidats";
import { numberCV } from "@/components/data/data";
import ChartRepartitionSectorielle from "@/components/charts/ChartRepartitionSectorielle";
import ChartRepartitionTechno from "@/components/charts/ChartRepartitionTechno";
import ChartSeniorite from "@/components/charts/ChartSeniorite";
import ChartRepartitionGeographique from "@/components/charts/ChartRepartitionGeographique";
import ChartEvolutionHebdo from "@/components/charts/ChartEvolutionHebdo";
import SectionChart from "@/components/section/SectionChart";

export const metadata = {
  title: "Emplois et Missions sur l'écosystème C/C++",
  description:
    "Pure player de l'écosystème C/C++ et Qt, nous facilitons la rencontre entre Talents et Entreprises grâce à notre communauté de +2000 spécialistes du C/C++.",
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
  const resArticles = await axios.get(
    "https://strapi-vvjo.onrender.com/api/articles?populate=*"
  );

  const cvArr = await getCandidats();

  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Lambda est fondée sur une transparence stratégique, économique et financière avec toutes ses parties prenantes, notamment ses collaborateurs.",
      img: {
        src: "/oeil.png",
        alt: "100% Transparent pour une confiance sans faille",
      },
    },
    {
      title: "Spécialiste",
      content:
        "Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Notre objectif est de faire de Lambda la référence dans le conseils, l'assistance techniques et le recrutement sur l'écosystème C++.",
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
      title: "Logiciels Applicatifs",
      content:
        "Qt, Boost C++ Libraries, STL, STLPlus, CMake, fmtlib, Google Test...",
      img: {
        src: "/soft.png",
        alt: "Developpement logiciel en C++",
      },
    },
    {
      title: "3D & Traitement d'images",
      content:
        "OpenGL, OpenSceneGraph, UnReal Engine, Vulkan, Open3D, OpenCV, Dlib, Halide, CUDA, ITK, PCL, VTK, SimpleITK, ImageJ, VIGRA..",
      img: {
        src: "/image.png",
        alt: "Computer Vision et traitement d'images par ordinateur",
      },
    },
    {
      title: "Systèmes Embarqués",
      content:
        "Linux, RTOS, µC, WinCE, ARM, STM, PlatformIO, Keil µVision, GCC, ARM Keil Compiler, CMSIS, I2C, UART, CAN",
      img: {
        src: "/binairy.png",
        alt: "Developpement de logiciels embarqués en C/C++",
      },
    },
    {
      title: "Modélisation & Calculs Scientifiques",
      content:
        "Eigen, Armadillo, Blaze, NT2, Dlib, Boost.Numeric.Odeint, Trilinos, GSL, PETSc, SciPy",
      img: {
        src: "/microscope.png",
        alt: "Developpement en C++ pour le calcul scientifique",
      },
    },
    {
      title: "Haute Performance & Finance",
      content:
        "QuantLib, Boost C++, Boost.Math, Boost.Asio, Boost.Multiprecision, MKL, TA-Lib, QuickFIX, RapidJSON, CppNumericalSolvers, C++ AMP, FastFlow, STXXL, ZeroMQ, HPC Toolkit, DPDK,TBB",
      img: {
        src: "/perf.png",
        alt: "Developpement logiciel en C++ à faible latency",
      },
    },
    {
      title: "Graphique et IHM",
      content:
        "Qt, Qt 3D, QML, MFC, ImGui, JUCE, Nana C++ Library, OpenFrameworks, Cinder, GTK, wxWidgets, SFML, IlogViews...",
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
        "Vous êtes salarié et en recherche d'un CDI pour un client final ? Pure player de l'écosystème C/C++, nous vous proposons un grand nombre de postes de l'écosystème.",
      className: "final",
      img: {
        src: "/1.png",
        alt: "CDI chez un client final",
      },
    },
    {
      title: "CDI Lambda Labs",
      content:
        "Vous êtes salarié et en recherche d'un CDI au sein d'une ESN alternative ? Rejoignez Lambda Labs en tant que salarié, participez au développement d'une ESN horizontale où chaque collaborateur Lambda Labs est un associé en devenir. Travaillez pour votre boîte !",
      className: "lambda",
      img: {
        src: "/2.png",
        alt: "CDI chez Lambda Labs",
      },
    },
    {
      title: "Mission Freelance",
      content:
        "Vous êtes Freelance et en recherche d'une mission ? Nous vous portons commercialement en toute transparence contre une commission journalière fixe et transparente. Une relation commerciale limpide pour vous et notre client.",
      className: "freelance",
      img: {
        src: "/3.png",
        alt: "Mission en freelance",
      },
    },
  ];

  return (
    <main>
      <NavigationLanding cvArr={cvArr} jobs={resJobs.data.data.length} />
      <HeaderEngineer />

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
                img={card.img}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Je cherche une mission (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Je cherche un CDI (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
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
          content={`Je cherche une mission (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Je cherche un CDI (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
      </SectionWrapper>
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
                img={card.img}
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Je cherche une mission (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Je cherche un CDI (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
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
          content={`Je cherche une mission (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Je cherche un CDI (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        <ContentSection
          title="Soyez visible auprès des entreprises"
          content={`Tout comme ${cvArr.length} passionnés et spécialistes du C/C++, référencez votre CV sur Lambda Labs pour gagner en visibilité auprès des entreprises ayant recours à vos compéntences.`}
        />
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/app0QAe7GwEdhIEbZ/shrz9c3azi6rsHW4b?backgroundColor=orangeDusty&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="80%"
          height="533"
          // style={{"background: transparent, border: 1px solid #ccc"}}
        ></iframe>
        <PrimaryBtn
          content={`Je cherche une mission (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Je cherche un CDI (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionChart>
          <ContentSection
            title="Evolution hebdomadaire de notre base CVthèque"
            content="Cartographier les compétences C++ est une facette de notre métier pour vous faire gagner du temps. En moyenne, nous référençons 197 nouveaux CV à notre CVthèque par semaine."
          />
          <ChartEvolutionHebdo />
          <PrimaryBtn
            content={`Je cherche une mission (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
          <SecondaryBtn
            content={`Je cherche un CDI (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition géographique des compétences"
            content="3 pôles concentrent l'essentiel des compétences. Sans surprise, l'Île-de-France arrive en tête, suivie des régions Occitanie et PACA."
          />
          <ChartRepartitionGeographique />
          <PrimaryBtn
            content={`Je cherche une mission (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
          <SecondaryBtn
            content={`Je cherche un CDI (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition des compétences par séniorité"
            content="55 % des CV référencés ont plus de 3 ans d'expérience. 20 % sont entre 1 an et deux ans d'expériences professionnelles."
          />

          <ChartSeniorite doughnut={"doughnut"} />
          <PrimaryBtn
            content={`Je cherche une mission (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
          <SecondaryBtn
            content={`Je cherche un CDI (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition par technologie"
            content="75 % des profils référencés sont des développeurs C++. 20% sont des développeurs C++ avec des compétences sur le Framework Qt. A noter que ces données sont amenées à évoluer au fur et à mesure de la qualification des profils."
          />
          <ChartRepartitionTechno />
          <PrimaryBtn
            content={`Je cherche une mission (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
          <SecondaryBtn
            content={`Je cherche un CDI (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
        </SectionChart>
        <SectionChart>
          <ContentSection
            title="Répartition sectorielle"
            content="La présence notable du C++ dans ces secteurs stratégiques témoigne de sa polyvalence et de sa capacité à répondre aux exigences de développement logiciel dans des domaines sensibles et technologiquement avancés"
          />
          <ChartRepartitionSectorielle />
          <PrimaryBtn
            content={`Je cherche une mission (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
          <SecondaryBtn
            content={`Je cherche un CDI (${resJobs.data.data.length})`}
            link={"/jobs"}
            title={"jobs"}
          />
        </SectionChart>
      </SectionWrapper>
      <SectionWrapper id={"blog"}>
        <ContentSection
          title={"Laboratoire de nouvelles tendances"}
          content={
            "Chez Lambda, nous croyons au pouvoir de la collaboration, de l'apprentissage et du partage des connaissances. C'est pourquoi nous avons créé notre blog afin de partager nos expériences."
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
          title={`Aujourd'hui, il y a  ${cvArr.length} abonnés à notre Newsletter « Mission à pourvoir ».`}
          content="Que vous soyez salarié en veille d'un nouveau poste ou Freelance en recherche active d'une nouvelle mission, inscrivez-vous pour recevoir par email les dernières missions ou emplois sur l'écosystème C/C++."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
