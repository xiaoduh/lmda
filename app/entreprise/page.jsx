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
import getCandidats from "../libs/getCandidats";

export default async function Home() {
  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  const resProfils = await axios.get(
    "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  );
  const candidats = await getCandidats();

  const contentCardsFirstSection = [
    {
      title: "Freelance ou CDI",
      content:
        "Au travers de notre réseau, vous avez accès aux deux types de statut sans coûts supplémentaires. À chaque candidature vous êtes au courant du statut du candidat et la tarification est transparente et la même pour les deux status.",
      className: "final",
    },
    {
      title: "Assistance Technique",
      content:
        "Un nouveau projet ou une montagne de J/H pour votre équipe ? Grâce à notre immense réseau et notre visibilité dans l'écosystème (demain notre notoriété), nous vous proposons une shortlist de 3 candidats dans les 72h.",
      className: "lambda",
    },
    {
      title: "Régie en pré-embauche",
      content:
        "Une démission ou des recrutements qui patinent ? Bénéficiez là aussi de notre réseau et de notre visibilité. Nous vous proposons des candidats en mission de pré-embauche.",
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
      <HeaderEnterprise candidats={candidats} />
      <SectionWrapper id={"why"}>
        {/* <Label content="Le plus grand réseau de compétences C/C++ pour vos projets" /> */}
        <ContentSection
          title={`Le plus grand réseau de compétences C/C++ pour vos projets`}
          content={`Notre plateforme des services numériques spécialisée en C/C++ vous permet d'accéder à des milliers de Freelance ou salariés rapidement. Lambda c'est aujourd'hui, + ${candidats.length} ingénieurs référencés, +987 abonnés à notre newsletter « New Job » et +5k de visiteurs uniques mensuels.`}
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
        <SecondaryBtn content={`Recruter un prestataire`} link={"/collectif"} />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        {/* <Label content="Spécialiste du C++ et ses mises en pratique" /> */}
        <ContentSection
          title="Une stratégie de spécialisation"
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
        <SecondaryBtn content={`Recruter un prestataire`} link={"/collectif"} />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        {/* <Label content="La plus grande communauté dédiée au C++ et son ecosytème" /> */}
        <ContentSection
          title="Accedez aux meilleurs Freelances et Salariés du secteur"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${candidats.length} passionnés et spécialistes du C++ prêts à vous accompagner.`}
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
          content={` Recruter votre prochain développeur (${candidats.length})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les offres de missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        {/* <Label content="Connectez-vous à notre réseau de développeurs C++" /> */}
        <ContentSection
          title={`Bénéficiez d'une visibilité auprès de ${candidats.length} développeurs`}
          content="Diminuez votre temps de recherche et augmentez la pertinence de vos candidatures grâce à notre spécialisation. Utilisez notre plateforme pour diffuser votre mission au plus large réseau de développeurs C++. Lambda rassemble autour du monde C++ et de ses applications technologiques des milliers de développeurs C++. Discutons de votre recherche et diffusons-la à des milliers de développeurs en veille professionnelle."
        />
        <Form />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
