import PrimaryBtn from "@/components/button/PrimaryBtn";
import SecondaryBtn from "@/components/button/SecondaryBtn";
import Card from "@/components/card/Card";
import ContentSection from "@/components/content/ContentSection";
import Label from "@/components/label/Label";
import CardsContainer from "@/components/layout/CardsContainer";
import FooterApp from "@/components/navigation/FooterApp";
import SectionWrapper from "@/components/section/SectionWrapper";
import React from "react";

const page = () => {
  const secondSection = {
    txtLabel: "Choisir c'est renoncer. Nous sommes spécialiste du C++",
    title:
      "Nous sommes amoureux des logiciels robustes, performants et efficaces",
    content:
      "Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace. Le C++ est aussi populaire que complexe. Il est sans doute l’un des langages des plus complexes à maîtriser pour développer des programmes « propres » et efficaces.",
  };

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
        "L'efficacité n’est pas un moyen. C’est un résultat. Lambda a pour vocation d’explorer tous les leviers pour cultiver l'efficacité.",
    },
  ];

  const contentCardsSecondSection = [
    {
      title: "Logiciel",
      content: "Applicatifs, Simulation numérique",
    },
    {
      title: "3D",
      content: "OpenGL, UnReal Engine, Open3D",
    },
    {
      title: "Embarqué",
      content: "Linux, µC, Windows SE",
    },
    {
      title: "Calcul Scientifique",
      content: "Quaternions, Asymptotique",
    },
    {
      title: "Low Latency",
      content: "STL, Boost, Asio",
    },
    {
      title: "IHM",
      content: "Qt, QML, MFC, IlogViews",
    },
  ];
  return (
    <main>
      <SectionWrapper id={"collectif"}>
        <Label content="Un écosystème spécialisé au management nouveau" />
        <ContentSection
          title="L'honnêteté passe par la transparence"
          content="Ce n'est pas de nous mais de Jean pierre Szymaniak. Nous ne croyons plus au management pyramidal fondé sur l'opacité, nous croyons à l'innovation managériale. Nous croyons à un management nouveau fondé sur la transparence, responsabilité et bienveillance. La transparence est notre pierre angulaire pour grandir ensemble en toute confiance."
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
        <PrimaryBtn content={"Rejoindre le collectif"} link={"/rejoindre"} />
        <SecondaryBtn content={"Recevoir nos missions"} link={"/#form"} />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content={secondSection.txtLabel} />
        <ContentSection
          title={secondSection.title}
          content={secondSection.content}
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
        <PrimaryBtn content={"Recevoir nos missions"} link={"/collectif"} />
        <SecondaryBtn content={"Proposer une mission"} link={"/partenaire"} />
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content="Devenez actionnaire de Lambda" />
        <ContentSection
          title="La réussite de Lambda est surtout votre réussite"
          content="Lambda a pour vocation de grandir grâce aux réussites de chacun. L'actionnariat vise à associer les collaborateurs Lambda au développement et à la performance de Lambda."
        />
        <PrimaryBtn content={"Rejoindre Lambda"} link={"/rejoindre"} />
        <SecondaryBtn content={"Voir les missions"} link={"/jobs"} />
      </SectionWrapper>
      <SectionWrapper id={"form"}>
        <Label content="Ne ratez plus aucunes opportunités en C++" />
        <ContentSection
          title="Recevez chaque semaine toutes les missions en C++"
          content="Que vous soyez en veille ou en recherche active d'une mission sur l'écosystème C++, recevez chaque semaine par email les dernières missions en C++ sur le marché."
        />
      </SectionWrapper>
      <FooterApp />
    </main>
  );
};

export default page;
