import SectionWrapper from "@/components/section/SectionWrapper";
import "../styles/index.scss";
import Header from "@/components/header/Header";
import Label from "@/components/label/Label";
import ContentSection from "@/components/content/ContentSection";
import CardsContainer from "@/components/layout/CardsContainer";
import Card from "@/components/card/Card";

export default function Home() {
  const txtLabel = "Un écosystème spécialisé au management nouveau";
  const firstSection = {
    title: "La confiance forgée par la transparence",
    content:
      "Nous croyons au nouveau management, aux antipodes du management actuel. La transparence est pour nous le facteur clé pour grandir en toute confiance.",
  };

  const contentCards = [
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

  return (
    <main>
      <Header />
      <SectionWrapper id={"why"}>
        <Label content={txtLabel} />
        <ContentSection
          title={firstSection.title}
          content={firstSection.content}
        />
        <CardsContainer>
          {contentCards.map((card) => {
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
