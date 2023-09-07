import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import Header from "@/components/header/Header";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSection";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";

export default function Home() {
  const firstSection = {
    txtLabel: "Un écosystème spécialisé au management nouveau",
    title: "La confiance forgée par la transparence",
    content:
      "Nous croyons au nouveau management, aux antipodes du management actuel. La transparence est pour nous le facteur clé pour grandir en toute confiance.",
  };

  const secondSection = {
    txtLabel: "Spécialiste du C++ et ses mises en pratique",
    title: "Nous croyons aux logiciels robustes, performants et efficaces",
    content:
      "Tout comme Bjarne Stroustrup, nous aimons le développement logiciel efficace. Le C++ est aussi poppulaire que complexe, et, est sans doute l’un des langages des plus complexes à manipuler pour développer des programmes « proprement » et efficacement.",
  };

  const contentCardsFirstSection = [
    {
      title: "Transparent",
      content:
        "Nous sommes intimement convaincu que la transparence à tous les niveaux est le l’unique moyen d’établir une confiance sans faille et durable. Nous n’avons rien à cacher à nos membres, ni clients.",
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
      <Header />
      <SectionWrapper id={"why"}>
        <Label content={firstSection.txtLabel} />
        <ContentSection
          title={firstSection.title}
          content={firstSection.content}
        />
        <CardsContainer>
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
      </SectionWrapper>
      <SectionWrapper id={"mission"}>
        <Label content={secondSection.txtLabel} />
        <ContentSection
          title={secondSection.title}
          content={secondSection.content}
        />
        <CardsContainer>
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
      </SectionWrapper>
    </main>
  );
}
