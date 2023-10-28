import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Card from "@/components/card/Card";
import ContentSection from "@/components/content/ContentSectionApp";
import Subscriber from "@/components/form/Subscriber";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";
import "../../styles/index.scss";
import SectionWrapperHeader from "@/components/section/SectionWrapperHeader";
import axios from "axios";

export default async function Career() {
  const resJobs = await axios.get(
    "https://unwavering-friendship-fd7ae40c66.strapiapp.com/api/jobs/"
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
      <SectionWrapperHeader id={"collectif"}>
        <Label content="Un écosystème spécialisé au management nouveau" />
        <ContentSection
          title="« L'honnêteté passe par la transparence »"
          content="Nous sommes l'alternative au management pyramidal gardien de l'opacité. Nous croyons en un management nouveau fondé sur la transparence, responsabilité et bienveillance. Nos parties prenantes connaissances nos orientations stratégiques, nos marges, nos coûts... La transparence est notre pierre angulaire pour grandir ensemble en toute confiance."
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
          content={`Rejoindre Lambda m'intéresse`}
          link={"/rejoindre"}
        />
        <SecondaryBtn
          content={`Trouver sa prochaine mission (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapperHeader>
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
          content={`Rejoindre Lambda m'intéresse`}
          link={"/rejoindre"}
        />
        <SecondaryBtn
          content={`Trouver sa prochaine mission (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content="Devenez actionnaire de Lambda" />
        <ContentSection
          title="« Réussir, c’est s’aimer, aimer ce que l’on fait et la manière dont on le fait. »"
          content="La réussite de Lambda est surtout votre réussite. Lambda a pour vocation de grandir grâce aux réussites de chacun. L'actionnariat salarié vise à associer les collaborateurs Lambda au développement et à la performance de Lambda. 20% du capital de Lambda est ouvert à l'actionnariat salarié sur un horizon à 3 ans."
        />
        <PrimaryBtn
          content={`Rejoindre Lambda m'intéresse`}
          link={"/rejoindre"}
        />
        <SecondaryBtn
          content={`Trouver sa prochaine mission (${resJobs.data.data.length})`}
          link={"/jobs"}
        />
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        <Label content="Ne ratez plus aucunes opportunités en C++" />
        <ContentSection
          title="Votre prochaine mission se trouve ici"
          content="Que vous soyez en veille ou en recherche active d'une mission sur l'écosystème C++, recevez par email les dernières missions en C++ sur le marché."
        />
        <Subscriber />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
}
