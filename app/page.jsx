import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import Header from "@/components/header/Header";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSection";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";
import CardMember from "@/components/member/CardMember";
import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import ArticleCardContainer from "@/components/blog/ArticleCardContainer";
import Footer from "@/components/navigation/Footer";
import NavigationLanding from "@/components/navigation/NavigationLanding";
import Subscriber from "@/components/form/Subscriber";
import JobCard from "@/components/job/JobCard";
import axios from "axios";

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
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est l'unique moyen d’établir une confiance sans faille et durable.",
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
      content: "Applicatifs, Simulation numérique",
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
      <NavigationLanding />
      <Header />
      <SectionWrapper id={"why"}>
        <Label content="Un écosystème spécialisé au management nouveau" />
        <ContentSection
          title="La confiance forgée par la transparence"
          content="Nous sommes l'alternative au management pyramidal guru de l'opacité. Nous croyons à un management nouveau fondé sur la transparence, responsabilité et bienveillance. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance."
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
          content={`Voir les ${resJobs.data.data.length} missions ouvertes`}
          link={"/jobs"}
        />
        <SecondaryBtn
          content={`Rechercher votre profil (${resProfils.data.data.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content="Spécialiste du C++ et ses mises en pratique" />
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
          content={`Voir les ${resJobs.data.data.length} missions ouvertes`}
          link={"/jobs"}
        />
        <SecondaryBtn
          content={`Rechercher votre profil (${resProfils.data.data.length})`}
          link={"/collectif"}
        />
      </SectionWrapper>
      <SectionWrapper id={"member"}>
        <Label content="Une communauté dédiée au C++ et son ecosytème" />
        <ContentSection
          title="Trouvez les compétences qu'il vous manque au sein de notre écosystème"
          content={`Parcourez les différents membres de notre collectif pour découvrir leurs parcours ainsi que leurs disponibilités.
          Notre réseau rassemble plus de ${resProfils.data.data.length} passionnés et spécialistes du C++ prêts à vous accompagner.`}
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
          content={` Rechercher votre profil (${resProfils.data.data.length})`}
          link={"/collectif"}
        />
        <SecondaryBtn
          content={`Voir les ${resJobs.data.data.length} missions ouvertes`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"jobs"}>
        <Label content="Ne ratez plus aucunes opportunités en C++" />
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
              />
            );
          })}
        </CardsContainer>
        <PrimaryBtn
          content={`Voir les ${resJobs.data.data.length} missions ouvertes`}
          link={"/jobs"}
        />
      </SectionWrapper>

      <SectionWrapper id={"form"}>
        <Label content="Restez connecté à l'écosystème C++" />
        <ContentSection
          title={`Aujourd'hui, il y a  ${
            resSubscribers.data.length + 100
          } développeurs abonnés à nos alertes missions.`}
          content="Que vous soyez en veille ou en recherche active d'une mission sur l'écosystème C++, recevez par email les dernières missions en C++ sur le marché."
        />
        <Subscriber />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
