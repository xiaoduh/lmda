import SectionWrapper from "@/components/section/SectionWrapper";
import "../../styles/index.scss";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Footer from "@/components/navigation/Footer";
import NavigationApp from "@/components/navigation/NavigationApp";
import axios from "axios";
import HeaderEnterprise from "@/components/header/HeaderEnterprise";
import Form from "@/components/form/Form";
import { numberCV } from "@/components/data/data";

export default async function Home() {
  // const resJobs = await axios.get(
  //   "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  // );
  // const resProfils = await axios.get(
  //   "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  // );

  const contentCardsFirstSection = [
    {
      title: "Partenaire de vos recrutement CDI",
      content: `Vous manquez de candidats ou de candidatures qualifiées pour vos recrutement en CDI ? Grâce à notre CVthèque de + ${numberCV} profils et notre expertise technique sur l'écosystème C/C++ nous vous aidons à débloquer vos recrutements.`,
      className: "final",
    },
    {
      title: "Des consultants spécialisés",
      content:
        "Pure player de l'écosystème C/C++, vous trouverez chez Lambda Labs les compétences qu'il vous manque pour délivrer vos projets.",
      className: "lambda",
    },
    {
      title: "Un vivier de Freelance spécialisés",
      content: `Notre CVthèque de + ${numberCV} profils vous permet d'accéder et d'être mis en relation avec un grand nombre de Freelance sans surcoûts grâce à notre commission fixe et transparente.`,
      className: "freelance",
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
      content: "Linux, µC, Windows SE",
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

  return (
    <main>
      <NavigationApp />
      <HeaderEnterprise />
      <SectionWrapper id={"why"}>
        {/* <Label content="Le plus grand réseau de compétences C/C++ pour vos projets" /> */}
        <ContentSection
          title={`Le plus grand réseau de compétences C/C++ pour vos projets`}
          content={`Notre plateforme des services numériques spécialisée en C/C++ vous permet d'accéder à des milliers de Freelance ou salariés rapidement. Lambda c'est aujourd'hui, + ${numberCV} ingénieurs référencés, +987 abonnés à notre newsletter « New Job » et +5k de visiteurs uniques mensuels.`}
        />
        <CardsContainer style={"cards-container"}>
          {contentCardsFirstSection.map((card) => {
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
          content={`Publier une mission sur Lambda`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Je recrute (${numberCV} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        {/* <Label content="Spécialiste du C++ et ses mises en pratique" /> */}
        <ContentSection
          title="Spécialiste et expert de l'écosystème C/C++"
          content="Sur un marché dynamique, ne pas se démarquer équivaut à être invisible. Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace et performant. Vous recherchez des compétences autour des langages C/C++, nous vous accompagnons sur les usages des langages C et C++."
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
          content={`Publier une mission sur Lambda`}
          link={"/partenaire"}
        />
        <SecondaryBtn
          content={`Je recrute (${numberCV} CV)`}
          link={"/partenaire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        {/* <Label content="La plus grande communauté dédiée au C++ et son ecosytème" /> */}
        <ContentSection
          title="Accedez aux meilleurs Freelances et Salariés du secteur"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${numberCV} passionnés et spécialistes du C++ prêts à vous accompagner.`}
        />
        {/* <CardsContainer style={"cards-container"}>
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
        </CardsContainer> */}
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
          content={`Je recrute (${numberCV} CV)`}
          link={"/partenaire"}
        />
        {/* <SecondaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/partenaire"}
        /> */}
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        {/* <Label content="Connectez-vous à notre réseau de développeurs C++" /> */}
        <ContentSection
          title={`Bénéficiez d'une visibilité auprès de ${numberCV} développeurs`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
        <Form />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
