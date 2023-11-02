import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSectionLanding";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Footer from "@/components/navigation/Footer";
import NavigationLanding from "@/components/navigation/NavigationLanding";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import axios from "axios";
import HeaderEngineer from "@/components/header/HeaderEngineer";

export default async function Home() {
  const resJobs = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs/?populate=*"
  );
  const resProfils = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/profils?populate=*"
  );
  const resSubscribers = await axios.get(
    "https://lmdaapi.onrender.com/subscribers"
  );

  const contentCardsFirstSection = [
    {
      title: "Transparence",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable. Lambda est fondée sur un transparence stratégique, économique et financière avec toutes ses parties prenantes, notamment ses collaborateurs.",
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
      content: "Applicatifs, Frameworks, Simulation numérique, DLL",
    },
    {
      title: "3D & Traitement d'images",
      content: "OpenGL, UnReal Engine, Vulkan, Open3D, OpenCV, VTK, VIGRA..",
    },
    {
      title: "Embarqué",
      content:
        "Linux, µC, Windows SE, Embededd Software, Middleware, Firmware, Drivers",
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

  return (
    <main>
      <NavigationLanding />
      <HeaderEngineer />
      <SectionWrapper id={"why"}>
        {/* <Label content="Un écosystème spécialisé au management horizontal" /> */}
        <ContentSection
          title="Management horizontal et transparence totale"
          content="Nous sommes l'alternative au management pyramidal dernier rempart de l'opacité. Nous croyons à un management nouveau fondé sur la transparence et un management horizontal pour d'avantage de responsabilité. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance, nos collaborateurs ont une vision transparente de nos orientations stratégiques, CA, marges, coûts..."
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
          content={`Recruter un prestataire (${
            500 + resProfils.data.data.length
          })`}
          link={"/collectif"}
          title={"prestataire"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        {/* <Label content="Spécialiste du C++ et ses mises en pratique" /> */}
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
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
        <SecondaryBtn
          content={`Recruter un prestataire (${
            500 + resProfils.data.data.length
          })`}
          link={"/collectif"}
          title={"collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        {/* <Label content="Une communauté dédiée au C++ et son ecosytème" /> */}
        <ContentSection
          title="Trouvez les compétences qu'il vous manque au sein de notre écosystème"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${
            500 + resProfils.data.data.length
          } passionnés et spécialistes du C++ prêts à vous accompagner.`}
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
          content={` Recruter un prestataire (${
            500 + resProfils.data.data.length
          })`}
          link={"/collectif"}
          title={"collectif"}
        />
        <SecondaryBtn
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
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
                skills={card.attributes.software_skills}
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
          content={`Voir les missions ouvertes (${resJobs.data.data.length})`}
          link={"/jobs"}
          title={"jobs"}
        />
      </SectionWrapper>

      <SectionWrapper id={"form"}>
        {/* <Label content="Restez connecté à l'écosystème C++" /> */}
        <ContentSection
          title={`Aujourd'hui, il y a  ${
            resSubscribers.data.length + 900
          } développeurs abonnés à nos alertes missions.`}
          content="Que vous soyez en veille ou en recherche active d'un poste de développeur ou une mission, recevez par email les dernières missions en C++ sur le marché."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
